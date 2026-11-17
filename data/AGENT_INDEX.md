# market-watch: assistant index

Source commit: `61840b2` · generated 2026-11-17T02:56:02Z

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
  "commit": "61840b2276d6df45952ba8feed2a344b39e5196b",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/44005815503",
  "finishedAt": "2026-11-17T02:56:02.771Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.github/workflows/sync-backend-tests.yml` | 49 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/.github/workflows/sync-backend-tests.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/sync-backend-tests.yml) |
| `.gitignore` | 11 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/auction.ts` | 64 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/src/auction.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/auction.ts) |
| `src/config.ts` | 25 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 93 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 186 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `sync-backend/DEPLOYMENT.md` | 29 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/sync-backend/DEPLOYMENT.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/DEPLOYMENT.md) |
| `sync-backend/README.md` | 16 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/sync-backend/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/README.md) |
| `sync-backend/migrations/0001.sql` | 6 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/sync-backend/migrations/0001.sql) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/migrations/0001.sql) |
| `sync-backend/package-lock.json` | 1 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/sync-backend/package-lock.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package-lock.json) |
| `sync-backend/package.json` | 11 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/sync-backend/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package.json) |
| `sync-backend/public/index.html` | 132 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/sync-backend/public/index.html) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/public/index.html) |
| `sync-backend/scripts/validate-config.mjs` | 38 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/sync-backend/scripts/validate-config.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/scripts/validate-config.mjs) |
| `sync-backend/src/worker.js` | 78 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/sync-backend/src/worker.js) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/src/worker.js) |
| `sync-backend/test/config.test.mjs` | 41 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/sync-backend/test/config.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/config.test.mjs) |
| `sync-backend/test/worker-writes.test.mjs` | 212 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/sync-backend/test/worker-writes.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker-writes.test.mjs) |
| `sync-backend/test/worker.test.mjs` | 55 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/sync-backend/test/worker.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker.test.mjs) |
| `sync-backend/wrangler.jsonc` | 1 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/sync-backend/wrangler.jsonc) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/wrangler.jsonc) |
| `tsconfig.json` | 14 | [@61840b2](https://raw.githubusercontent.com/Lukestaz/market-watch/61840b2276d6df45952ba8feed2a344b39e5196b/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
