import type { ListingEvent } from './models.js';

const DECISIONS_URL = 'https://market-watch-sync.lukestaz.workers.dev/api/decisions';
const RETAILERS = new Set(['shop.cashconverters.co.nz', 'dollardealers.co.nz']);
export type Decision = 'normal' | 'watch' | 'hide';
export interface DecisionRow {
  identity: string;
  decision: Decision;
  version: number;
  updated_at: string;
}
export interface DecisionCredentials {
  pipelineToken: string;
  accessClientId?: string;
  accessClientSecret?: string;
}

export function canonicalIdentity(value: string): string | null {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.username || url.password || url.port || !RETAILERS.has(url.hostname)) return null;
    url.search = '';
    url.hash = '';
    return url.toString().replace(/\/$/, '');
  } catch { return null; }
}

export function parseDecisionRows(payload: unknown): Map<string, DecisionRow> {
  if (!payload || typeof payload !== 'object' || !('decisions' in payload) || !Array.isArray(payload.decisions)) {
    throw new Error('Shared decisions returned an invalid payload; email must be deferred.');
  }
  const rows = new Map<string, DecisionRow>();
  for (const value of payload.decisions) {
    if (!value || typeof value !== 'object') throw new Error('Invalid shared decision row; email must be deferred.');
    const row = value as Partial<DecisionRow>;
    if (typeof row.identity !== 'string' || canonicalIdentity(row.identity) !== row.identity
      || !['normal', 'watch', 'hide'].includes(row.decision ?? '')
      || !Number.isSafeInteger(row.version) || (row.version ?? 0) <= 0
      || typeof row.updated_at !== 'string' || !Number.isFinite(Date.parse(row.updated_at))
      || rows.has(row.identity)) {
      throw new Error('Invalid or duplicate shared decision row; email must be deferred.');
    }
    rows.set(row.identity, row as DecisionRow);
  }
  return rows;
}

export async function fetchDecisionRows(
  credentials: DecisionCredentials,
  fetcher: typeof fetch = fetch
): Promise<Map<string, DecisionRow>> {
  if (!credentials.pipelineToken.trim()) throw new Error('Pipeline decision token is missing; email must be deferred.');
  const clientId = credentials.accessClientId?.trim();
  const clientSecret = credentials.accessClientSecret?.trim();
  if (Boolean(clientId) !== Boolean(clientSecret)) throw new Error('Incomplete Access service credentials; email must be deferred.');
  const headers: Record<string, string> = {
    Authorization: 'Bearer ' + credentials.pipelineToken.trim(),
    Accept: 'application/json'
  };
  if (clientId && clientSecret) {
    headers['CF-Access-Client-Id'] = clientId;
    headers['CF-Access-Client-Secret'] = clientSecret;
  }
  try {
    const response = await fetcher(DECISIONS_URL, {
      method: 'GET', headers, redirect: 'error', cache: 'no-store',
      signal: AbortSignal.timeout(15000)
    });
    if (!response.ok) throw new Error('HTTP ' + response.status);
    if (!(response.headers.get('Content-Type') || '').toLowerCase().includes('application/json')) throw new Error('Expected JSON');
    const text = await response.text();
    if (text.length > 2_000_000) throw new Error('Response too large');
    return parseDecisionRows(JSON.parse(text));
  } catch {
    throw new Error('Shared decision lookup failed or returned invalid data; email must be deferred.');
  }
}

export function filterHiddenAlerts(
  events: ListingEvent[],
  decisions: ReadonlyMap<string, DecisionRow>
): { alertable: ListingEvent[]; suppressed: number } {
  const alertable: ListingEvent[] = [];
  let suppressed = 0;
  for (const event of events) {
    if ((event.type !== 'new' && event.type !== 'price_drop') || event.listing.priority === 'ignore') continue;
    const identity = canonicalIdentity(event.listing.canonicalUrl);
    if (!identity) throw new Error('Invalid alert listing identity; email must be deferred.');
    if (decisions.get(identity)?.decision === 'hide') { suppressed++; continue; }
    alertable.push(event);
  }
  return { alertable, suppressed };
}
