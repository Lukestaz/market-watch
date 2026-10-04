# market-watch: assistant index

Source commit: `e4a586c` · generated 2026-10-04T13:31:39Z

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
  "commit": "e4a586c532f358df3bd857e6c5e72ab27b3bf5cc",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/37205836002",
  "finishedAt": "2026-10-04T13:31:39.687Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.gitignore` | 11 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/config.ts` | 25 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 155 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 185 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `tsconfig.json` | 14 | [@e4a586c](https://raw.githubusercontent.com/Lukestaz/market-watch/e4a586c532f358df3bd857e6c5e72ab27b3bf5cc/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
