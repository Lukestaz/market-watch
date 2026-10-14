# market-watch: assistant index

Source commit: `8b5e9c1` · generated 2026-10-14T20:26:26Z

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
  "commit": "8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/38631814023",
  "finishedAt": "2026-10-14T20:26:26.883Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.gitignore` | 11 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/auction.ts` | 64 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/src/auction.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/auction.ts) |
| `src/config.ts` | 25 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 93 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 185 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `tsconfig.json` | 14 | [@8b5e9c1](https://raw.githubusercontent.com/Lukestaz/market-watch/8b5e9c1bd455745fdc1801e0ef3b28307b24e8e8/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
