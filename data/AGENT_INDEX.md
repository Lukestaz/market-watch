# market-watch: assistant index

Source commit: `b4f22ba` · generated 2026-10-05T16:28:20Z

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
  "commit": "b4f22badabe9b47a2dec8c8519672c7ee73941ff",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/37340966170",
  "finishedAt": "2026-10-05T16:28:20.817Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.gitignore` | 11 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/config.ts` | 25 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 155 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 185 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `tsconfig.json` | 14 | [@b4f22ba](https://raw.githubusercontent.com/Lukestaz/market-watch/b4f22badabe9b47a2dec8c8519672c7ee73941ff/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
