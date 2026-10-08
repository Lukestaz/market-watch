import { createRemoteJWKSet, jwtVerify } from 'jose';

async function authorized(req, env) {
  if (req.method === 'GET' && env.PIPELINE_TOKEN) {
    const digest = async s => new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s)));
    const a = await digest(req.headers.get('Authorization') || '');
    const b = await digest('Bearer ' + env.PIPELINE_TOKEN);
    let diff = 0;
    for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
    if (diff === 0) return true;
  }
  const token = req.headers.get('Cf-Access-Jwt-Assertion');
  if (!token || !env.ACCESS_ISSUER || !env.ACCESS_AUD) return false;
  try {
    const issuer = env.ACCESS_ISSUER.replace(/\/$/, '');
    await jwtVerify(token, createRemoteJWKSet(new URL(issuer + '/cdn-cgi/access/certs')), { issuer, audience: env.ACCESS_AUD });
    return true;
  } catch { return false; }
}

export default {
  async fetch(req, env) {
    const origin = req.headers.get('Origin');
    const headers = { 'Cache-Control': 'no-store', 'Vary': 'Origin' };
    if (origin === env.DASHBOARD_ORIGIN) Object.assign(headers, {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    const reply = (body, status = 200) => Response.json(body, { status, headers });
    if (origin && origin !== env.DASHBOARD_ORIGIN) return reply({ error: 'Origin denied' }, 403);
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers });
    if (!await authorized(req, env)) return reply({ error: 'Authentication required' }, 401);
    if (new URL(req.url).pathname !== '/api/decisions') return reply({ error: 'Not found' }, 404);
    if (req.method === 'GET') {
      const rows = await env.DB.prepare('SELECT identity,decision,version,updated_at FROM decisions ORDER BY identity').all();
      return reply({ decisions: rows.results });
    }
    if (req.method !== 'PUT') return reply({ error: 'Method not allowed' }, 405);
    if (!origin || origin !== env.DASHBOARD_ORIGIN) return reply({ error: 'Browser origin required' }, 403);
    if (!req.headers.get('Content-Type')?.startsWith('application/json')) return reply({ error: 'JSON required' }, 415);
    const text = await req.text();
    if (text.length > 8192) return reply({ error: 'Payload too large' }, 413);
    let body;
    try { body = JSON.parse(text); } catch { return reply({ error: 'Invalid JSON' }, 400); }
    if (!body || typeof body.identity !== 'string' || body.identity.length > 2048 || !['normal','watch','hide'].includes(body.decision) || !Number.isSafeInteger(body.version) || body.version < 0) return reply({ error: 'Invalid decision' }, 400);
    let url;
    try { url = new URL(body.identity); } catch { return reply({ error: 'Invalid URL' }, 400); }
    if (url.protocol !== 'https:' || url.username || url.password || url.port || !['shop.cashconverters.co.nz','dollardealers.co.nz'].includes(url.hostname)) return reply({ error: 'Invalid listing host' }, 400);
    url.hash = ''; url.search = '';
    const identity = url.toString().replace(/\/$/, '');
    const now = new Date().toISOString();
    const result = body.version === 0
      ? await env.DB.prepare('INSERT OR IGNORE INTO decisions(identity,decision,version,updated_at) VALUES(?,?,1,?)').bind(identity, body.decision, now).run()
      : await env.DB.prepare('UPDATE decisions SET decision=?,version=version+1,updated_at=? WHERE identity=? AND version=?').bind(body.decision, now, identity, body.version).run();
    const current = await env.DB.prepare('SELECT identity,decision,version,updated_at FROM decisions WHERE identity=?').bind(identity).first();
    return result.meta.changes ? reply(current) : reply({ error: 'Conflict', current }, 409);
  }
};
