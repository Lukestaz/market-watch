import { loadConfig } from './config.js';
import { CashConvertersAdapter } from './sites/cashconverters.js';
import { DollarDealersAdapter } from './sites/dollardealers.js';
import type { SiteAdapter, SiteAdapterContext } from './sites/base.js';
import { toListing } from './normalise.js';
import { evaluateListingWithGemini } from './ai.js';
import { applyListings, loadState, saveState } from './state.js';
import { sendEmailAlerts } from './alerts.js';
import { recoverAuction, withBidIncrease, generateAuctionUi } from './auction.js';
import type { EnrichedListing, RawListing, SearchConfig } from './models.js';

const ADAPTERS: Record<SearchConfig['site'], SiteAdapter> = { cashconverters: new CashConvertersAdapter(), dollardealers: new DollarDealersAdapter() };
function sleep(ms: number): Promise<void> { return new Promise(resolve => setTimeout(resolve, ms)); }

async function main(): Promise<void> {
  console.log('Starting Market Watch run...');
  const searches = loadConfig();
  const state = await loadState();
  const context: SiteAdapterContext = {};
  const scannedSites = new Set<string>();
  const allRawListings = new Map<string, { raw: RawListing; search: SearchConfig }>();
  for (const search of searches) {
    if (!search.enabled) continue;
    const adapter = ADAPTERS[search.site];
    if (!adapter) continue;
    console.log(`Executing search: ${search.label} (${search.site})`);
    try {
      const result = await adapter.scrape(search, context);
      if (result.diagnostics.error) console.warn(`[${search.id}] Scrape error: ${result.diagnostics.error}`);
      if (!result.diagnostics.error) scannedSites.add(search.site);
      for (const raw of result.listings) {
        const key = `${search.site}:${raw.url.split(/[?#]/)[0].replace(/\/$/, '')}`;
        if (!allRawListings.has(key)) allRawListings.set(key, { raw, search });
      }
    } catch (err) { console.error(`Failed to scrape search ${search.id}:`, err); }
  }
  console.log(`Total raw listings collected: ${allRawListings.size}`);
  const activeCandidates: EnrichedListing[] = [];
  const now = new Date().toISOString();
  for (const entry of allRawListings.values()) {
    const search = entry.search;
    let raw = entry.raw;
    let normalised = toListing(search.site, search, raw, now);
    if (normalised.priority === 'ignore') continue;
    if (search.site === 'cashconverters') {
      await sleep(4000);
      const recovered = await recoverAuction(raw);
      const previous = state.listings[normalised.key] ?? Object.values(state.listings).find(l => l.canonicalUrl === normalised.canonicalUrl);
      raw = withBidIncrease(recovered, previous);
      normalised = toListing(search.site, search, raw, now);
    }
    if (normalised.priority === 'critical' || normalised.priority === 'high') {
      const adapter = ADAPTERS[search.site] as SiteAdapter & { fetchListingDetails?: (url: string) => Promise<Partial<RawListing>> };
      if (adapter.fetchListingDetails) {
        try {
          console.log(`[Details] Enriching ${normalised.priority} item: ${raw.title}`);
          const details = await adapter.fetchListingDetails(raw.url);
          raw = { ...raw, price: details.price ?? raw.price, priceText: details.priceText || raw.priceText, modelNumber: details.modelNumber || raw.modelNumber, condition: details.condition || raw.condition, accessories: details.accessories || raw.accessories, seller: details.seller || raw.seller, rawText: `${raw.rawText || ''} ${details.rawText || ''}`.trim() };
          normalised = toListing(search.site, search, raw, now);
          await sleep(500);
        } catch (err) { console.warn(`[Details] Could not fetch details for ${raw.url}:`, err); }
      }
    }
    if (normalised.priority === 'ignore') continue;
    activeCandidates.push({ ...normalised, status: 'active', firstSeen: normalised.firstSeenAt || now, lastSeen: normalised.lastSeenAt || now });
  }
  console.log(`Candidate listings passing keyword rules: ${activeCandidates.length}`);
  const evaluatedListings: EnrichedListing[] = [];
  for (const listing of activeCandidates) {
    const labels = searches.flatMap(s => s.rules).filter(r => listing.matchedRules.includes(r.id)).map(r => r.label).join(', ') || 'Target Item';
    const searchLabel = searches.find(s => listing.searchIds.includes(s.id))?.label.replace(/^Source [AB] - /, '') ?? '';
    const targetContext = searchLabel ? `${searchLabel} (${labels})` : labels;
    const prior = state.listings[listing.key];
    const cached = prior?.ai && prior.price === listing.price && prior.aiContext === targetContext ? prior.ai : null;
    const aiResult = cached ?? await evaluateListingWithGemini(listing, targetContext);
    if (!cached && aiResult) await sleep(4500);
    listing.aiContext = targetContext;
    if (aiResult) {
      console.log(`[AI] "${listing.title}" -> ${aiResult.verdict} (score: ${aiResult.score}/10, valid: ${aiResult.isTruePositive})`);
      if (!aiResult.isTruePositive) { console.log(`[AI] Dropping false positive: ${listing.title} (${aiResult.reason})`); continue; }
      listing.ai = aiResult;
    }
    evaluatedListings.push(listing);
  }
  console.log(`Listings verified after AI assessment: ${evaluatedListings.length}`);
  const events = applyListings(state, evaluatedListings, now, 1, scannedSites);
  await saveState(state);
  console.log(`Listing events detected: ${events.length}`);
  await sendEmailAlerts(events);
  await generateAuctionUi(state, events);
  console.log('Market Watch run complete.');
}
main().catch(err => { console.error('Fatal error in Market Watch:', err); process.exit(1); });
