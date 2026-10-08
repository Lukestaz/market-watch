# market-watch: assistant index

Source commit: `e38039e` · generated 2026-10-08T00:05:40Z

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
  "commit": "e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/37705754060",
  "finishedAt": "2026-10-08T00:05:40.331Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.gitignore` | 11 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/config.ts` | 25 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 155 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 185 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `tsconfig.json` | 14 | [@e38039e](https://raw.githubusercontent.com/Lukestaz/market-watch/e38039e9c93086c7af12d4c0d3ea3e9f9bf82d9a/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
