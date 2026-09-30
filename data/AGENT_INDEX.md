# market-watch: assistant index

Source commit: `33906cc` · generated 2026-09-30T14:18:25Z

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
  "commit": "33906cc7f3eff325750a96655ff22ddfd87958b1",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/36727929869",
  "finishedAt": "2026-09-30T14:18:25.926Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.gitignore` | 11 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/config.ts` | 25 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 155 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 185 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `tsconfig.json` | 14 | [@33906cc](https://raw.githubusercontent.com/Lukestaz/market-watch/33906cc7f3eff325750a96655ff22ddfd87958b1/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
