# market-watch: assistant index

Source commit: `c231228` · generated 2026-10-13T01:55:25Z

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
  "commit": "c23122832047a14c2306598e5e89c7d5df7f5e35",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/38334330096",
  "finishedAt": "2026-10-13T01:55:25.386Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.gitignore` | 11 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/config.ts` | 25 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 155 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 185 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `tsconfig.json` | 14 | [@c231228](https://raw.githubusercontent.com/Lukestaz/market-watch/c23122832047a14c2306598e5e89c7d5df7f5e35/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
