# market-watch: assistant index

Source commit: `6d6b8c0` · generated 2026-10-03T22:50:16Z

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
  "commit": "6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/37159512188",
  "finishedAt": "2026-10-03T22:50:16.918Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.gitignore` | 11 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/config.ts` | 25 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 155 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 185 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `tsconfig.json` | 14 | [@6d6b8c0](https://raw.githubusercontent.com/Lukestaz/market-watch/6d6b8c0488c1ad842171f2fabfe3f53dd8b1f638/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
