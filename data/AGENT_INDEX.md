# market-watch: assistant index

Source commit: `be3ed41` · generated 2026-10-09T23:54:31Z

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
  "commit": "be3ed41c5744e55d56f4d001d0ed7bef27c44a7c",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/38006567330",
  "finishedAt": "2026-10-09T23:54:31.468Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.gitignore` | 11 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/config.ts` | 25 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 155 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 185 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `tsconfig.json` | 14 | [@be3ed41](https://raw.githubusercontent.com/Lukestaz/market-watch/be3ed41c5744e55d56f4d001d0ed7bef27c44a7c/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
