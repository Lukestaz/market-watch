# market-watch: assistant index

Source commit: `3060169` · generated 2026-10-06T23:42:41Z

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
  "commit": "306016996b5d28ebc2ddaeeb65498fd3507aa7e2",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/37547758634",
  "finishedAt": "2026-10-06T23:42:41.417Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.gitignore` | 11 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/config.ts` | 25 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 155 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 185 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `tsconfig.json` | 14 | [@3060169](https://raw.githubusercontent.com/Lukestaz/market-watch/306016996b5d28ebc2ddaeeb65498fd3507aa7e2/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
