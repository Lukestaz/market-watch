# market-watch: assistant index

Source commit: `339315b` · generated 2026-11-07T23:46:01Z

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
  "commit": "339315b912f72b03d89c336348ae0c4a1eaa876e",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/42425540089",
  "finishedAt": "2026-11-07T23:46:01.736Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.github/workflows/sync-backend-tests.yml` | 49 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/.github/workflows/sync-backend-tests.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/sync-backend-tests.yml) |
| `.gitignore` | 11 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/auction.ts` | 64 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/src/auction.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/auction.ts) |
| `src/config.ts` | 25 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 93 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 186 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `sync-backend/DEPLOYMENT.md` | 29 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/sync-backend/DEPLOYMENT.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/DEPLOYMENT.md) |
| `sync-backend/README.md` | 16 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/sync-backend/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/README.md) |
| `sync-backend/migrations/0001.sql` | 6 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/sync-backend/migrations/0001.sql) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/migrations/0001.sql) |
| `sync-backend/package-lock.json` | 1 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/sync-backend/package-lock.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package-lock.json) |
| `sync-backend/package.json` | 11 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/sync-backend/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package.json) |
| `sync-backend/public/index.html` | 132 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/sync-backend/public/index.html) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/public/index.html) |
| `sync-backend/scripts/validate-config.mjs` | 38 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/sync-backend/scripts/validate-config.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/scripts/validate-config.mjs) |
| `sync-backend/src/worker.js` | 78 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/sync-backend/src/worker.js) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/src/worker.js) |
| `sync-backend/test/config.test.mjs` | 41 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/sync-backend/test/config.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/config.test.mjs) |
| `sync-backend/test/worker-writes.test.mjs` | 212 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/sync-backend/test/worker-writes.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker-writes.test.mjs) |
| `sync-backend/test/worker.test.mjs` | 55 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/sync-backend/test/worker.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker.test.mjs) |
| `sync-backend/wrangler.jsonc` | 1 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/sync-backend/wrangler.jsonc) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/wrangler.jsonc) |
| `tsconfig.json` | 14 | [@339315b](https://raw.githubusercontent.com/Lukestaz/market-watch/339315b912f72b03d89c336348ae0c4a1eaa876e/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
