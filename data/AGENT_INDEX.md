# market-watch: assistant index

Source commit: `15b7d62` · generated 2026-11-02T17:35:48Z

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
  "commit": "15b7d62a892c1b0106a1c0cd21091f41d5284e61",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/41491613674",
  "finishedAt": "2026-11-02T17:35:48.471Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.github/workflows/sync-backend-tests.yml` | 49 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/.github/workflows/sync-backend-tests.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/sync-backend-tests.yml) |
| `.gitignore` | 11 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/auction.ts` | 64 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/src/auction.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/auction.ts) |
| `src/config.ts` | 25 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 93 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 186 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `sync-backend/DEPLOYMENT.md` | 29 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/sync-backend/DEPLOYMENT.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/DEPLOYMENT.md) |
| `sync-backend/README.md` | 16 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/sync-backend/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/README.md) |
| `sync-backend/migrations/0001.sql` | 6 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/sync-backend/migrations/0001.sql) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/migrations/0001.sql) |
| `sync-backend/package-lock.json` | 1 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/sync-backend/package-lock.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package-lock.json) |
| `sync-backend/package.json` | 11 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/sync-backend/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package.json) |
| `sync-backend/public/index.html` | 132 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/sync-backend/public/index.html) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/public/index.html) |
| `sync-backend/scripts/validate-config.mjs` | 38 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/sync-backend/scripts/validate-config.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/scripts/validate-config.mjs) |
| `sync-backend/src/worker.js` | 78 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/sync-backend/src/worker.js) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/src/worker.js) |
| `sync-backend/test/config.test.mjs` | 41 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/sync-backend/test/config.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/config.test.mjs) |
| `sync-backend/test/worker-writes.test.mjs` | 212 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/sync-backend/test/worker-writes.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker-writes.test.mjs) |
| `sync-backend/test/worker.test.mjs` | 55 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/sync-backend/test/worker.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker.test.mjs) |
| `sync-backend/wrangler.jsonc` | 1 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/sync-backend/wrangler.jsonc) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/wrangler.jsonc) |
| `tsconfig.json` | 14 | [@15b7d62](https://raw.githubusercontent.com/Lukestaz/market-watch/15b7d62a892c1b0106a1c0cd21091f41d5284e61/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
