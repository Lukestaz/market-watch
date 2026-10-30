# market-watch: assistant index

Source commit: `e19e1de` · generated 2026-10-30T14:52:54Z

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
  "commit": "e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/41073233039",
  "finishedAt": "2026-10-30T14:52:54.061Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.github/workflows/sync-backend-tests.yml` | 49 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/.github/workflows/sync-backend-tests.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/sync-backend-tests.yml) |
| `.gitignore` | 11 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/auction.ts` | 64 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/src/auction.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/auction.ts) |
| `src/config.ts` | 25 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 93 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 186 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `sync-backend/DEPLOYMENT.md` | 29 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/sync-backend/DEPLOYMENT.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/DEPLOYMENT.md) |
| `sync-backend/README.md` | 16 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/sync-backend/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/README.md) |
| `sync-backend/migrations/0001.sql` | 6 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/sync-backend/migrations/0001.sql) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/migrations/0001.sql) |
| `sync-backend/package-lock.json` | 1 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/sync-backend/package-lock.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package-lock.json) |
| `sync-backend/package.json` | 11 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/sync-backend/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package.json) |
| `sync-backend/public/index.html` | 132 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/sync-backend/public/index.html) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/public/index.html) |
| `sync-backend/scripts/validate-config.mjs` | 38 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/sync-backend/scripts/validate-config.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/scripts/validate-config.mjs) |
| `sync-backend/src/worker.js` | 78 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/sync-backend/src/worker.js) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/src/worker.js) |
| `sync-backend/test/config.test.mjs` | 41 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/sync-backend/test/config.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/config.test.mjs) |
| `sync-backend/test/worker-writes.test.mjs` | 212 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/sync-backend/test/worker-writes.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker-writes.test.mjs) |
| `sync-backend/test/worker.test.mjs` | 55 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/sync-backend/test/worker.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker.test.mjs) |
| `sync-backend/wrangler.jsonc` | 1 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/sync-backend/wrangler.jsonc) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/wrangler.jsonc) |
| `tsconfig.json` | 14 | [@e19e1de](https://raw.githubusercontent.com/Lukestaz/market-watch/e19e1de9a6a2ea2cc0c39fbf9bd1cdb88c4b0ffe/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
