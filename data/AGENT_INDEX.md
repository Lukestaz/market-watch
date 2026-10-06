# market-watch: assistant index

Source commit: `1d86019` · generated 2026-10-06T14:32:33Z

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
  "commit": "1d8601961443fd0813fc0e5cb879041c24a71e8e",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/37479708016",
  "finishedAt": "2026-10-06T14:32:33.547Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.gitignore` | 11 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/config.ts` | 25 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 155 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 185 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `tsconfig.json` | 14 | [@1d86019](https://raw.githubusercontent.com/Lukestaz/market-watch/1d8601961443fd0813fc0e5cb879041c24a71e8e/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
