# market-watch: assistant index

Source commit: `7365bd1` · generated 2026-10-13T23:41:26Z

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
  "commit": "7365bd1245ce38fd4b1539ef14bab2aaf5904f6d",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/38485592597",
  "finishedAt": "2026-10-13T23:41:26.666Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.gitignore` | 11 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/config.ts` | 25 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 155 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 185 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `tsconfig.json` | 14 | [@7365bd1](https://raw.githubusercontent.com/Lukestaz/market-watch/7365bd1245ce38fd4b1539ef14bab2aaf5904f6d/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
