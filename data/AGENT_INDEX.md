# market-watch: assistant index

Source commit: `f876426` · generated 2026-10-09T14:44:53Z

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
  "commit": "f8764268d34f26ffe502efec983e591123357684",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/37946313923",
  "finishedAt": "2026-10-09T14:44:53.725Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.gitignore` | 11 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/config.ts` | 25 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 155 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 185 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `tsconfig.json` | 14 | [@f876426](https://raw.githubusercontent.com/Lukestaz/market-watch/f8764268d34f26ffe502efec983e591123357684/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
