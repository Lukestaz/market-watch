# market-watch: assistant index

Source commit: `10e8492` · generated 2026-10-14T23:05:22Z

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
  "commit": "10e8492fde9c52fa59dfe64c36c1b47a3f547f09",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/38651718782",
  "finishedAt": "2026-10-14T23:05:22.741Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.gitignore` | 11 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/auction.ts` | 64 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/src/auction.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/auction.ts) |
| `src/config.ts` | 25 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 93 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 185 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `tsconfig.json` | 14 | [@10e8492](https://raw.githubusercontent.com/Lukestaz/market-watch/10e8492fde9c52fa59dfe64c36c1b47a3f547f09/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
