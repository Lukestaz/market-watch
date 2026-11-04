# market-watch: assistant index

Source commit: `a8c429c` · generated 2026-11-04T15:52:51Z

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
  "commit": "a8c429c0564ccea4ac77a36dfd32a588959883cf",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/41861633985",
  "finishedAt": "2026-11-04T15:52:51.396Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.github/workflows/sync-backend-tests.yml` | 49 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/.github/workflows/sync-backend-tests.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/sync-backend-tests.yml) |
| `.gitignore` | 11 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/auction.ts` | 64 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/src/auction.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/auction.ts) |
| `src/config.ts` | 25 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 93 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 186 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `sync-backend/DEPLOYMENT.md` | 29 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/sync-backend/DEPLOYMENT.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/DEPLOYMENT.md) |
| `sync-backend/README.md` | 16 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/sync-backend/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/README.md) |
| `sync-backend/migrations/0001.sql` | 6 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/sync-backend/migrations/0001.sql) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/migrations/0001.sql) |
| `sync-backend/package-lock.json` | 1 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/sync-backend/package-lock.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package-lock.json) |
| `sync-backend/package.json` | 11 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/sync-backend/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package.json) |
| `sync-backend/public/index.html` | 132 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/sync-backend/public/index.html) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/public/index.html) |
| `sync-backend/scripts/validate-config.mjs` | 38 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/sync-backend/scripts/validate-config.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/scripts/validate-config.mjs) |
| `sync-backend/src/worker.js` | 78 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/sync-backend/src/worker.js) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/src/worker.js) |
| `sync-backend/test/config.test.mjs` | 41 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/sync-backend/test/config.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/config.test.mjs) |
| `sync-backend/test/worker-writes.test.mjs` | 212 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/sync-backend/test/worker-writes.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker-writes.test.mjs) |
| `sync-backend/test/worker.test.mjs` | 55 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/sync-backend/test/worker.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker.test.mjs) |
| `sync-backend/wrangler.jsonc` | 1 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/sync-backend/wrangler.jsonc) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/wrangler.jsonc) |
| `tsconfig.json` | 14 | [@a8c429c](https://raw.githubusercontent.com/Lukestaz/market-watch/a8c429c0564ccea4ac77a36dfd32a588959883cf/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
