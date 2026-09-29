# market-watch: assistant index

Source commit: `3fb84ca` · generated 2026-09-29T11:37:30Z

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
  "commit": "3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/36562778188",
  "finishedAt": "2026-09-29T11:37:29.988Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.gitignore` | 11 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/config.ts` | 25 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 155 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 185 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `tsconfig.json` | 14 | [@3fb84ca](https://raw.githubusercontent.com/Lukestaz/market-watch/3fb84caf6a8e86842ab9a5fba9f74464aaf8bb4d/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
