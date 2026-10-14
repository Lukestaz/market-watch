import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { validateConfig } from '../scripts/validate-config.mjs';

const valid = () => ({
  main: 'src/worker.js',
  d1_databases: [{ binding: 'DB', database_id: '12345678-1234-1234-1234-123456789abc', database_name: 'test', migrations_dir: 'migrations' }],
  vars: { ACCESS_ISSUER: 'https://test.cloudflareaccess.com', ACCESS_AUD: 'test-audience', DASHBOARD_ORIGIN: 'https://dashboard.example' }
});

test('accepts structurally configured values', () => assert.deepEqual(validateConfig(valid()), []));
test('rejects checked-in deployment placeholders', () => {
  const config = JSON.parse(readFileSync(new URL('../wrangler.jsonc', import.meta.url), 'utf8'));
  assert.ok(validateConfig(config).length >= 4);
});
test('rejects invalid database identifier', () => {
  const config = valid(); config.d1_databases[0].database_id = 'REPLACE_BEFORE_DEPLOY';
  assert.ok(validateConfig(config).some(error => error.includes('UUID')));
});
test('rejects unsafe issuer variants', () => {
  for (const issuer of ['http://test.cloudflareaccess.com', 'https://cloudflareaccess.com.evil.example', 'https://test.cloudflareaccess.com/path', 'https://user@test.cloudflareaccess.com']) {
    const config = valid(); config.vars.ACCESS_ISSUER = issuer;
    assert.ok(validateConfig(config).some(error => error.includes('ACCESS_ISSUER')), issuer);
  }
});
test('rejects missing audience', () => {
  const config = valid(); config.vars.ACCESS_AUD = '';
  assert.ok(validateConfig(config).some(error => error.includes('ACCESS_AUD')));
});
test('rejects non-origin dashboard values', () => {
  for (const origin of ['http://dashboard.example', 'https://dashboard.example/', 'https://dashboard.example/path']) {
    const config = valid(); config.vars.DASHBOARD_ORIGIN = origin;
    assert.ok(validateConfig(config).some(error => error.includes('DASHBOARD_ORIGIN')), origin);
  }
});
test('rejects pipeline secret in source variables', () => {
  const config = valid(); config.vars.PIPELINE_TOKEN = 'test-only';
  assert.ok(validateConfig(config).some(error => error.includes('Worker secret')));
});
