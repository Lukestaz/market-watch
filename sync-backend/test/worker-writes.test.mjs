import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { once } from 'node:events';
import { generateKeyPair, exportJWK, SignJWT } from 'jose';
import worker from '../src/worker.js';

const origin = 'https://dashboard.example';
const audience = 'test-access-audience';
const identity = 'https://dollardealers.co.nz/item';
let server, issuer, privateKey, otherPrivateKey;

before(async () => {
  const keys = await generateKeyPair('RS256');
  privateKey = keys.privateKey;
  otherPrivateKey = (await generateKeyPair('RS256')).privateKey;
  const jwk = { ...await exportJWK(keys.publicKey), kid: 'test-key', alg: 'RS256', use: 'sig' };
  server = createServer((req, res) => {
    if (req.url !== '/cdn-cgi/access/certs') { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ keys: [jwk] }));
  });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  issuer = 'http://127.0.0.1:' + server.address().port;
});

after(async () => {
  if (!server?.listening) return;
  const closed = new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  server.closeAllConnections();
  await closed;
});

async function token(overrides = {}, signingKey = privateKey) {
  return new SignJWT({ email: 'test@example.invalid' })
    .setProtectedHeader({ alg: 'RS256', kid: 'test-key' })
    .setIssuer(overrides.issuer ?? issuer)
    .setAudience(overrides.audience ?? audience)
    .setIssuedAt()
    .setExpirationTime(overrides.expiration ?? '5m')
    .sign(signingKey);
}

// A D1-shaped fixture for Worker logic, not a SQL engine or real D1 integration.
function database() {
  const rows = new Map();
  return {
    rows,
    prepare(sql) {
      let args = [];
      return {
        bind(...values) { args = values; return this; },
        async all() {
          assert.equal(sql, 'SELECT identity,decision,version,updated_at FROM decisions ORDER BY identity');
          return { results: [...rows.values()].sort((a, b) => a.identity.localeCompare(b.identity)).map(row => ({ ...row })) };
        },
        async first() {
          assert.equal(sql, 'SELECT identity,decision,version,updated_at FROM decisions WHERE identity=?');
          return rows.has(args[0]) ? { ...rows.get(args[0]) } : null;
        },
        async run() {
          if (sql === 'INSERT OR IGNORE INTO decisions(identity,decision,version,updated_at) VALUES(?,?,1,?)') {
            const [id, decision, updated_at] = args;
            if (rows.has(id)) return { meta: { changes: 0 } };
            rows.set(id, { identity: id, decision, version: 1, updated_at });
            return { meta: { changes: 1 } };
          }
          assert.equal(sql, 'UPDATE decisions SET decision=?,version=version+1,updated_at=? WHERE identity=? AND version=?');
          const [decision, updated_at, id, version] = args;
          const current = rows.get(id);
          if (!current || current.version !== version) return { meta: { changes: 0 } };
          rows.set(id, { identity: id, decision, version: version + 1, updated_at });
          return { meta: { changes: 1 } };
        }
      };
    }
  };
}

function environment(DB) {
  return { DB, ACCESS_ISSUER: issuer, ACCESS_AUD: audience, DASHBOARD_ORIGIN: origin };
}

async function put(DB, body, options = {}) {
  const assertion = options.assertion ?? await token();
  const headers = { 'Cf-Access-Jwt-Assertion': assertion, 'Content-Type': 'application/json' };
  if (options.origin !== null) headers.Origin = options.origin ?? origin;
  return worker.fetch(new Request('https://worker.example/api/decisions', { method: 'PUT', headers, body: JSON.stringify(body) }), environment(DB));
}

test('valid signed Access JWT can read decisions', async () => {
  const DB = database();
  const response = await worker.fetch(new Request('https://worker.example/api/decisions', { headers: { Origin: origin, 'Cf-Access-Jwt-Assertion': await token() } }), environment(DB));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { decisions: [] });
});

test('rejects expired, wrong-issuer, wrong-audience, and untrusted signatures', async () => {
  const DB = database();
  const assertions = [
    await token({ expiration: Math.floor(Date.now() / 1000) - 60 }),
    await token({ issuer: 'https://wrong.example' }),
    await token({ audience: 'wrong-audience' }),
    await token({}, otherPrivateKey)
  ];
  for (const assertion of assertions) {
    assert.equal((await put(DB, { identity, decision: 'watch', version: 0 }, { assertion })).status, 401);
  }
  assert.equal(DB.rows.size, 0);
});

test('creates watch and advances through hide and normal tombstone', async () => {
  const DB = database();
  for (const [version, decision] of ['watch', 'hide', 'normal'].entries()) {
    const response = await put(DB, { identity, decision, version });
    assert.equal(response.status, 200);
    const row = await response.json();
    assert.equal(row.identity, identity);
    assert.equal(row.decision, decision);
    assert.equal(row.version, version + 1);
    assert.ok(Number.isFinite(Date.parse(row.updated_at)));
  }
  assert.equal(DB.rows.size, 1);
  assert.equal(DB.rows.get(identity).decision, 'normal');
});

test('normalizes allowed retailer URLs', async () => {
  const DB = database();
  for (const host of ['dollardealers.co.nz', 'shop.cashconverters.co.nz']) {
    const response = await put(DB, { identity: 'https://' + host + '/item/?tracking=1#photo', decision: 'watch', version: 0 });
    assert.equal(response.status, 200);
    assert.equal((await response.json()).identity, 'https://' + host + '/item');
  }
});

test('rejects unsupported or unsafe listing URLs without writes', async () => {
  const DB = database();
  for (const id of ['https://evil.example/item', 'http://dollardealers.co.nz/item', 'https://user:pass@dollardealers.co.nz/item', 'https://dollardealers.co.nz:8443/item', 'not a URL']) {
    assert.equal((await put(DB, { identity: id, decision: 'watch', version: 0 })).status, 400);
  }
  assert.equal(DB.rows.size, 0);
});

test('rejects invalid decisions and versions', async () => {
  const DB = database();
  for (const body of [
    { identity, decision: 'delete', version: 0 },
    { identity, decision: 'watch', version: -1 },
    { identity, decision: 'watch', version: 0.5 },
    { identity, decision: 'watch', version: '0' }
  ]) assert.equal((await put(DB, body)).status, 400);
  assert.equal(DB.rows.size, 0);
});

test('duplicate insertion conflicts and preserves original decision', async () => {
  const DB = database();
  assert.equal((await put(DB, { identity, decision: 'watch', version: 0 })).status, 200);
  const response = await put(DB, { identity, decision: 'hide', version: 0 });
  assert.equal(response.status, 409);
  const body = await response.json();
  assert.equal(body.current.decision, 'watch');
  assert.equal(body.current.version, 1);
});

test('stale updates conflict without overwriting newer state', async () => {
  const DB = database();
  await put(DB, { identity, decision: 'watch', version: 0 });
  await put(DB, { identity, decision: 'hide', version: 1 });
  const response = await put(DB, { identity, decision: 'normal', version: 1 });
  assert.equal(response.status, 409);
  assert.equal((await response.json()).current.version, 2);
  assert.equal(DB.rows.get(identity).decision, 'hide');
});

test('two competing updates permit only one write at the same version', async () => {
  const DB = database();
  await put(DB, { identity, decision: 'normal', version: 0 });
  const assertion = await token();
  const responses = await Promise.all(['watch', 'hide'].map(decision => put(DB, { identity, decision, version: 1 }, { assertion })));
  assert.deepEqual(responses.map(response => response.status).sort(), [200, 409]);
  assert.equal(DB.rows.get(identity).version, 2);
});

test('undo requires the current version and preserves the tombstone', async () => {
  const DB = database();
  await put(DB, { identity, decision: 'hide', version: 0 });
  const response = await put(DB, { identity, decision: 'normal', version: 1 });
  assert.equal(response.status, 200);
  assert.equal((await response.json()).version, 2);
  assert.equal(DB.rows.size, 1);
  assert.equal((await put(DB, { identity, decision: 'hide', version: 1 })).status, 409);
  assert.equal(DB.rows.get(identity).decision, 'normal');
});

test('update of a missing record returns a conflict with null current', async () => {
  const response = await put(database(), { identity, decision: 'watch', version: 1 });
  assert.equal(response.status, 409);
  assert.deepEqual(await response.json(), { error: 'Conflict', current: null });
});

test('authenticated write still requires an allowed browser origin', async () => {
  const DB = database();
  assert.equal((await put(DB, { identity, decision: 'watch', version: 0 }, { origin: null })).status, 403);
  assert.equal((await put(DB, { identity, decision: 'watch', version: 0 }, { origin: 'https://evil.example' })).status, 403);
  assert.equal(DB.rows.size, 0);
});

test('D1 write failure propagates rather than reporting success', async () => {
  const DB = { prepare: () => ({ bind() { return this; }, async run() { throw new Error('D1 write unavailable'); } }) };
  await assert.rejects(put(DB, { identity, decision: 'watch', version: 0 }), /D1 write unavailable/);
});
