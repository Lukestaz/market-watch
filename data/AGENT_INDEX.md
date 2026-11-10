# market-watch: assistant index

Source commit: `7b22519` · generated 2026-11-10T15:54:08Z

Fetch any link below to read the file as plain text. Pinned links (@sha) never go stale;
`main` links always point at the newest version (may lag ~5 min due to CDN caching).

## Latest run

- Status JSON: https://raw.githubusercontent.com/Lukestaz/market-watch/main/data/run-status.json
- Full log (redacted): https://raw.githubusercontent.com/Lukestaz/market-watch/main/data/latest-run.log
- Last 100 lines: https://raw.githubusercontent.com/Lukestaz/market-watch/main/data/latest-run-summary.txt
- Watch state (all listings): https://raw.githubusercontent.com/Lukestaz/market-watch/main/data/state.json

```json
{
  "status": "success",
  "failedSteps": [],
  "steps": {
    "setup": "success",
    "install": "success",
    "typecheck": "success",
    "pipeline": "success"
  },
  "commit": "7b225194c891d16c246b2a293417bd4086529759",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/42848607018",
  "finishedAt": "2026-11-10T15:54:08.944Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.github/workflows/sync-backend-tests.yml` | 49 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/.github/workflows/sync-backend-tests.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/sync-backend-tests.yml) |
| `.gitignore` | 11 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/auction.ts` | 64 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/src/auction.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/auction.ts) |
| `src/config.ts` | 25 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 93 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 186 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `sync-backend/DEPLOYMENT.md` | 29 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/sync-backend/DEPLOYMENT.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/DEPLOYMENT.md) |
| `sync-backend/README.md` | 16 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/sync-backend/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/README.md) |
| `sync-backend/migrations/0001.sql` | 6 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/sync-backend/migrations/0001.sql) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/migrations/0001.sql) |
| `sync-backend/package-lock.json` | 1 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/sync-backend/package-lock.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package-lock.json) |
| `sync-backend/package.json` | 11 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/sync-backend/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package.json) |
| `sync-backend/public/index.html` | 132 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/sync-backend/public/index.html) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/public/index.html) |
| `sync-backend/scripts/validate-config.mjs` | 38 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/sync-backend/scripts/validate-config.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/scripts/validate-config.mjs) |
| `sync-backend/src/worker.js` | 78 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/sync-backend/src/worker.js) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/src/worker.js) |
| `sync-backend/test/config.test.mjs` | 41 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/sync-backend/test/config.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/config.test.mjs) |
| `sync-backend/test/worker-writes.test.mjs` | 212 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/sync-backend/test/worker-writes.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker-writes.test.mjs) |
| `sync-backend/test/worker.test.mjs` | 55 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/sync-backend/test/worker.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker.test.mjs) |
| `sync-backend/wrangler.jsonc` | 1 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/sync-backend/wrangler.jsonc) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/wrangler.jsonc) |
| `tsconfig.json` | 14 | [@7b22519](https://raw.githubusercontent.com/Lukestaz/market-watch/7b225194c891d16c246b2a293417bd4086529759/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
