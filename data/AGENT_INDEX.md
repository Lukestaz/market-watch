# market-watch: assistant index

Source commit: `0c0f624` · generated 2026-11-03T02:11:27Z

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
  "commit": "0c0f62438088494aec44f3d88e2fc5161fba6eec",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/41563798327",
  "finishedAt": "2026-11-03T02:11:27.745Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.github/workflows/sync-backend-tests.yml` | 49 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/.github/workflows/sync-backend-tests.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/sync-backend-tests.yml) |
| `.gitignore` | 11 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/auction.ts` | 64 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/src/auction.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/auction.ts) |
| `src/config.ts` | 25 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 93 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 186 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `sync-backend/DEPLOYMENT.md` | 29 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/sync-backend/DEPLOYMENT.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/DEPLOYMENT.md) |
| `sync-backend/README.md` | 16 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/sync-backend/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/README.md) |
| `sync-backend/migrations/0001.sql` | 6 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/sync-backend/migrations/0001.sql) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/migrations/0001.sql) |
| `sync-backend/package-lock.json` | 1 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/sync-backend/package-lock.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package-lock.json) |
| `sync-backend/package.json` | 11 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/sync-backend/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package.json) |
| `sync-backend/public/index.html` | 132 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/sync-backend/public/index.html) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/public/index.html) |
| `sync-backend/scripts/validate-config.mjs` | 38 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/sync-backend/scripts/validate-config.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/scripts/validate-config.mjs) |
| `sync-backend/src/worker.js` | 78 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/sync-backend/src/worker.js) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/src/worker.js) |
| `sync-backend/test/config.test.mjs` | 41 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/sync-backend/test/config.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/config.test.mjs) |
| `sync-backend/test/worker-writes.test.mjs` | 212 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/sync-backend/test/worker-writes.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker-writes.test.mjs) |
| `sync-backend/test/worker.test.mjs` | 55 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/sync-backend/test/worker.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker.test.mjs) |
| `sync-backend/wrangler.jsonc` | 1 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/sync-backend/wrangler.jsonc) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/wrangler.jsonc) |
| `tsconfig.json` | 14 | [@0c0f624](https://raw.githubusercontent.com/Lukestaz/market-watch/0c0f62438088494aec44f3d88e2fc5161fba6eec/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
