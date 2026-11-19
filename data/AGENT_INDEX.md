# market-watch: assistant index

Source commit: `ae882fd` · generated 2026-11-19T01:50:26Z

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
  "commit": "ae882fdd1171b61ca84133814792eef8255cd864",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/44439479919",
  "finishedAt": "2026-11-19T01:50:26.965Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.github/workflows/sync-backend-tests.yml` | 49 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/.github/workflows/sync-backend-tests.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/sync-backend-tests.yml) |
| `.gitignore` | 11 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.drones.json` | 44 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/config/searches.drones.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.drones.json) |
| `config/searches.json` | 1484 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/auction.ts` | 64 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/src/auction.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/auction.ts) |
| `src/config.ts` | 33 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 93 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 186 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `sync-backend/DEPLOYMENT.md` | 29 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/sync-backend/DEPLOYMENT.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/DEPLOYMENT.md) |
| `sync-backend/README.md` | 16 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/sync-backend/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/README.md) |
| `sync-backend/migrations/0001.sql` | 6 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/sync-backend/migrations/0001.sql) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/migrations/0001.sql) |
| `sync-backend/package-lock.json` | 1 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/sync-backend/package-lock.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package-lock.json) |
| `sync-backend/package.json` | 11 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/sync-backend/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package.json) |
| `sync-backend/public/index.html` | 132 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/sync-backend/public/index.html) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/public/index.html) |
| `sync-backend/scripts/validate-config.mjs` | 38 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/sync-backend/scripts/validate-config.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/scripts/validate-config.mjs) |
| `sync-backend/src/worker.js` | 78 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/sync-backend/src/worker.js) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/src/worker.js) |
| `sync-backend/test/config.test.mjs` | 41 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/sync-backend/test/config.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/config.test.mjs) |
| `sync-backend/test/worker-writes.test.mjs` | 212 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/sync-backend/test/worker-writes.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker-writes.test.mjs) |
| `sync-backend/test/worker.test.mjs` | 55 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/sync-backend/test/worker.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker.test.mjs) |
| `sync-backend/wrangler.jsonc` | 1 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/sync-backend/wrangler.jsonc) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/wrangler.jsonc) |
| `tsconfig.json` | 14 | [@ae882fd](https://raw.githubusercontent.com/Lukestaz/market-watch/ae882fdd1171b61ca84133814792eef8255cd864/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
