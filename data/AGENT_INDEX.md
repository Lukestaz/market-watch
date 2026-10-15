# market-watch: assistant index

Source commit: `5f7b4dc` · generated 2026-10-15T04:59:55Z

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
  "commit": "5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/38684261646",
  "finishedAt": "2026-10-15T04:59:55.551Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.github/workflows/sync-backend-tests.yml` | 49 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/.github/workflows/sync-backend-tests.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/sync-backend-tests.yml) |
| `.gitignore` | 11 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/auction.ts` | 64 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/src/auction.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/auction.ts) |
| `src/config.ts` | 25 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 93 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 186 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `sync-backend/DEPLOYMENT.md` | 29 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/sync-backend/DEPLOYMENT.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/DEPLOYMENT.md) |
| `sync-backend/README.md` | 16 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/sync-backend/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/README.md) |
| `sync-backend/migrations/0001.sql` | 6 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/sync-backend/migrations/0001.sql) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/migrations/0001.sql) |
| `sync-backend/package-lock.json` | 1 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/sync-backend/package-lock.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package-lock.json) |
| `sync-backend/package.json` | 11 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/sync-backend/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package.json) |
| `sync-backend/public/index.html` | 132 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/sync-backend/public/index.html) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/public/index.html) |
| `sync-backend/scripts/validate-config.mjs` | 38 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/sync-backend/scripts/validate-config.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/scripts/validate-config.mjs) |
| `sync-backend/src/worker.js` | 78 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/sync-backend/src/worker.js) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/src/worker.js) |
| `sync-backend/test/config.test.mjs` | 41 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/sync-backend/test/config.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/config.test.mjs) |
| `sync-backend/test/worker-writes.test.mjs` | 212 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/sync-backend/test/worker-writes.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker-writes.test.mjs) |
| `sync-backend/test/worker.test.mjs` | 55 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/sync-backend/test/worker.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker.test.mjs) |
| `sync-backend/wrangler.jsonc` | 1 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/sync-backend/wrangler.jsonc) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/wrangler.jsonc) |
| `tsconfig.json` | 14 | [@5f7b4dc](https://raw.githubusercontent.com/Lukestaz/market-watch/5f7b4dc6e6c33e7a815e8e26dbd8b589b9589b0f/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
