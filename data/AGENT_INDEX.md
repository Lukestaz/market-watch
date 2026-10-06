# market-watch: assistant index

Source commit: `3d013b6` · generated 2026-10-06T01:14:09Z

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
  "commit": "3d013b694341f5c48502d1ef51cf4862578e4912",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/37397999885",
  "finishedAt": "2026-10-06T01:14:09.651Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.gitignore` | 11 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/config.ts` | 25 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 155 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 185 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `tsconfig.json` | 14 | [@3d013b6](https://raw.githubusercontent.com/Lukestaz/market-watch/3d013b694341f5c48502d1ef51cf4862578e4912/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
