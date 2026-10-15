import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../src/worker.js';

const origin = 'https://dashboard.example';
const env = overrides => ({ DASHBOARD_ORIGIN: origin, PIPELINE_TOKEN: 'test-only-token', ...overrides });
const request = (method = 'GET', headers = {}, path = '/api/decisions') => new Request('https://worker.example' + path, { method, headers });

test('rejects unauthenticated reads without touching D1', async () => {
  const response = await worker.fetch(request(), env());
  assert.equal(response.status, 401);
  assert.equal(response.headers.get('Cache-Control'), 'no-store');
});
test('rejects incorrect pipeline token', async () => {
  assert.equal((await worker.fetch(request('GET', { Authorization: 'Bearer wrong' }), env())).status, 401);
});
test('pipeline token can read decisions', async () => {
  const rows = [{ identity: 'https://dollardealers.co.nz/item', decision: 'hide', version: 1 }];
  let sql;
  const DB = { prepare: value => { sql = value; return { all: async () => ({ results: rows }) }; } };
  const response = await worker.fetch(request('GET', { Authorization: 'Bearer test-only-token' }), env({ DB }));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { decisions: rows });
  assert.match(sql, /SELECT identity,decision,version,updated_at/);
});
test('pipeline token cannot write decisions', async () => {
  const response = await worker.fetch(request('PUT', { Authorization: 'Bearer test-only-token', Origin: origin }), env());
  assert.equal(response.status, 401);
});
test('rejects disallowed browser origin', async () => {
  const response = await worker.fetch(request('GET', { Origin: 'https://evil.example', Authorization: 'Bearer test-only-token' }), env());
  assert.equal(response.status, 403);
  assert.equal(response.headers.get('Access-Control-Allow-Origin'), null);
});
test('allowed preflight returns credentialed CORS', async () => {
  const response = await worker.fetch(request('OPTIONS', { Origin: origin }), env());
  assert.equal(response.status, 204);
  assert.equal(response.headers.get('Access-Control-Allow-Origin'), origin);
  assert.equal(response.headers.get('Access-Control-Allow-Credentials'), 'true');
  assert.equal(response.headers.get('Access-Control-Allow-Methods'), 'GET, PUT, OPTIONS');
});
test('disallowed preflight is rejected', async () => {
  assert.equal((await worker.fetch(request('OPTIONS', { Origin: 'https://evil.example' }), env())).status, 403);
});
test('authenticated unknown path returns 404', async () => {
  assert.equal((await worker.fetch(request('GET', { Authorization: 'Bearer test-only-token' }, '/missing'), env())).status, 404);
});
test('malformed Access assertion is rejected', async () => {
  const response = await worker.fetch(request('GET', { 'Cf-Access-Jwt-Assertion': 'not-a-jwt' }), env({ ACCESS_ISSUER: 'https://test.cloudflareaccess.com', ACCESS_AUD: 'test-audience' }));
  assert.equal(response.status, 401);
});
test('D1 errors propagate rather than returning false success', async () => {
  const DB = { prepare: () => ({ all: async () => { throw new Error('D1 unavailable'); } }) };
  await assert.rejects(worker.fetch(request('GET', { Authorization: 'Bearer test-only-token' }), env({ DB })), /D1 unavailable/);
});
