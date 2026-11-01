# market-watch: assistant index

Source commit: `3ae9d94` · generated 2026-11-01T23:30:19Z

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
  "commit": "3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/41362021961",
  "finishedAt": "2026-11-01T23:30:19.875Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.github/workflows/sync-backend-tests.yml` | 49 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/.github/workflows/sync-backend-tests.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/sync-backend-tests.yml) |
| `.gitignore` | 11 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/auction.ts` | 64 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/src/auction.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/auction.ts) |
| `src/config.ts` | 25 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 93 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 186 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `sync-backend/DEPLOYMENT.md` | 29 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/sync-backend/DEPLOYMENT.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/DEPLOYMENT.md) |
| `sync-backend/README.md` | 16 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/sync-backend/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/README.md) |
| `sync-backend/migrations/0001.sql` | 6 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/sync-backend/migrations/0001.sql) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/migrations/0001.sql) |
| `sync-backend/package-lock.json` | 1 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/sync-backend/package-lock.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package-lock.json) |
| `sync-backend/package.json` | 11 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/sync-backend/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package.json) |
| `sync-backend/public/index.html` | 132 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/sync-backend/public/index.html) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/public/index.html) |
| `sync-backend/scripts/validate-config.mjs` | 38 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/sync-backend/scripts/validate-config.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/scripts/validate-config.mjs) |
| `sync-backend/src/worker.js` | 78 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/sync-backend/src/worker.js) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/src/worker.js) |
| `sync-backend/test/config.test.mjs` | 41 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/sync-backend/test/config.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/config.test.mjs) |
| `sync-backend/test/worker-writes.test.mjs` | 212 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/sync-backend/test/worker-writes.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker-writes.test.mjs) |
| `sync-backend/test/worker.test.mjs` | 55 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/sync-backend/test/worker.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker.test.mjs) |
| `sync-backend/wrangler.jsonc` | 1 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/sync-backend/wrangler.jsonc) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/wrangler.jsonc) |
| `tsconfig.json` | 14 | [@3ae9d94](https://raw.githubusercontent.com/Lukestaz/market-watch/3ae9d940de6d50e2c0b9d1fc1fd8df5eff9dc7c6/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
