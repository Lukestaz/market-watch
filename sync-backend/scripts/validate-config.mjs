import { readFileSync } from 'node:fs';

export function validateConfig(config) {
  const errors = [];
  const db = config.d1_databases?.find(item => item.binding === 'DB');
  if (!db || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(db.database_id || '')) errors.push('DB requires a real D1 database UUID');
  if (!db?.database_name || db?.migrations_dir !== 'migrations') errors.push('DB requires database_name and migrations_dir=migrations');
  const vars = config.vars || {};
  try {
    const issuer = new URL(vars.ACCESS_ISSUER);
    if (issuer.protocol !== 'https:' || !issuer.hostname.endsWith('.cloudflareaccess.com') || issuer.username || issuer.password || issuer.port || issuer.search || issuer.hash || issuer.pathname !== '/') throw new Error();
  } catch { errors.push('ACCESS_ISSUER must be an HTTPS Cloudflare Access team origin'); }
  if (typeof vars.ACCESS_AUD !== 'string' || !vars.ACCESS_AUD.trim() || /REPLACE|PLACEHOLDER/i.test(vars.ACCESS_AUD)) errors.push('ACCESS_AUD must be configured');
  try {
    const origin = new URL(vars.DASHBOARD_ORIGIN);
    if (origin.protocol !== 'https:' || origin.origin !== vars.DASHBOARD_ORIGIN) throw new Error();
  } catch { errors.push('DASHBOARD_ORIGIN must be an exact HTTPS origin without a trailing slash'); }
  if (Object.hasOwn(vars, 'PIPELINE_TOKEN')) errors.push('PIPELINE_TOKEN must be a Worker secret, not a configuration variable');
  if (config.main !== 'src/worker.js') errors.push('Unexpected Worker entry point');
  return errors;
}

if (process.argv[1] && new URL(import.meta.url).pathname === process.argv[1]) {
  try {
    // Current wrangler.jsonc uses strict JSON. Fail rather than guessing if comments are introduced.
    const config = JSON.parse(readFileSync(new URL('../wrangler.jsonc', import.meta.url), 'utf8'));
    const errors = validateConfig(config);
    if (errors.length) {
      console.error(errors.join('\n'));
      process.exitCode = 1;
    } else {
      console.log('Configuration structure validated; credentials, Access policies, and runtime behavior still require verification.');
    }
  } catch (error) {
    console.error('Configuration validation failed:', error.message);
    process.exitCode = 1;
  }
}
