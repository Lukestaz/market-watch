# market-watch: assistant index

Source commit: `08e768c` · generated 2026-11-26T17:57:21Z

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
  "commit": "08e768c02f77fa3851c40aeeecf90bf7493bd056",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/45871706509",
  "finishedAt": "2026-11-26T17:57:21.545Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.github/workflows/sync-backend-tests.yml` | 49 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/.github/workflows/sync-backend-tests.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/sync-backend-tests.yml) |
| `.gitignore` | 11 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.drones.json` | 44 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/config/searches.drones.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.drones.json) |
| `config/searches.json` | 1484 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/auction.ts` | 64 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/src/auction.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/auction.ts) |
| `src/config.ts` | 33 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 93 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 186 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `sync-backend/DEPLOYMENT.md` | 29 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/sync-backend/DEPLOYMENT.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/DEPLOYMENT.md) |
| `sync-backend/README.md` | 16 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/sync-backend/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/README.md) |
| `sync-backend/migrations/0001.sql` | 6 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/sync-backend/migrations/0001.sql) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/migrations/0001.sql) |
| `sync-backend/package-lock.json` | 1 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/sync-backend/package-lock.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package-lock.json) |
| `sync-backend/package.json` | 11 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/sync-backend/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/package.json) |
| `sync-backend/public/index.html` | 132 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/sync-backend/public/index.html) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/public/index.html) |
| `sync-backend/scripts/validate-config.mjs` | 38 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/sync-backend/scripts/validate-config.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/scripts/validate-config.mjs) |
| `sync-backend/src/worker.js` | 78 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/sync-backend/src/worker.js) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/src/worker.js) |
| `sync-backend/test/config.test.mjs` | 41 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/sync-backend/test/config.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/config.test.mjs) |
| `sync-backend/test/worker-writes.test.mjs` | 212 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/sync-backend/test/worker-writes.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker-writes.test.mjs) |
| `sync-backend/test/worker.test.mjs` | 55 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/sync-backend/test/worker.test.mjs) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/test/worker.test.mjs) |
| `sync-backend/wrangler.jsonc` | 1 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/sync-backend/wrangler.jsonc) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/sync-backend/wrangler.jsonc) |
| `tsconfig.json` | 14 | [@08e768c](https://raw.githubusercontent.com/Lukestaz/market-watch/08e768c02f77fa3851c40aeeecf90bf7493bd056/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
