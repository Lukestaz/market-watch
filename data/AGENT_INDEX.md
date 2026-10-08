# market-watch: assistant index

Source commit: `0dc6def` · generated 2026-10-08T15:00:15Z

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
  "commit": "0dc6def2c1877ea6b1ba44218daf90472c5864f4",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/37796919230",
  "finishedAt": "2026-10-08T15:00:15.582Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.gitignore` | 11 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/config.ts` | 25 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 155 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 185 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `tsconfig.json` | 14 | [@0dc6def](https://raw.githubusercontent.com/Lukestaz/market-watch/0dc6def2c1877ea6b1ba44218daf90472c5864f4/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
