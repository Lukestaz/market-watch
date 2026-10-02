# market-watch: assistant index

Source commit: `08b1efc` · generated 2026-10-02T23:38:39Z

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
  "commit": "08b1efcbe6741e46ea2befcdbc594144dda6aaaf",
  "runUrl": "https://github.com/Lukestaz/market-watch/actions/runs/37078464399",
  "finishedAt": "2026-10-02T23:38:39.764Z"
}
```

## Source files

| File | Lines | Pinned | Latest |
|---|---|---|---|
| `.env.example` | 5 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/.env.example) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.env.example) |
| `.github/workflows/daily-watch.yml` | 171 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/.github/workflows/daily-watch.yml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.github/workflows/daily-watch.yml) |
| `.gitignore` | 11 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/.gitignore) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/.gitignore) |
| `README.md` | 149 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/README.md) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/README.md) |
| `config/searches.json` | 1484 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/config/searches.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/searches.json) |
| `config/sites.yaml` | 15 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/config/sites.yaml) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/config/sites.yaml) |
| `package.json` | 23 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/package.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/package.json) |
| `scripts/agent-index.sh` | 41 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/scripts/agent-index.sh) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/scripts/agent-index.sh) |
| `src/ai.ts` | 158 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/src/ai.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ai.ts) |
| `src/alerts.ts` | 155 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/src/alerts.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/alerts.ts) |
| `src/config.ts` | 25 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/src/config.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/config.ts) |
| `src/index.ts` | 155 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/src/index.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/index.ts) |
| `src/matching.ts` | 180 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/src/matching.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/matching.ts) |
| `src/models.ts` | 87 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/src/models.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/models.ts) |
| `src/normalise.ts` | 56 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/src/normalise.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/normalise.ts) |
| `src/sites/base.ts` | 10 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/src/sites/base.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/base.ts) |
| `src/sites/cashconverters.ts` | 185 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/src/sites/cashconverters.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/cashconverters.ts) |
| `src/sites/dollardealers.ts` | 140 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/src/sites/dollardealers.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/sites/dollardealers.ts) |
| `src/state.ts` | 106 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/src/state.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/state.ts) |
| `src/ui.ts` | 575 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/src/ui.ts) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/src/ui.ts) |
| `tsconfig.json` | 14 | [@08b1efc](https://raw.githubusercontent.com/Lukestaz/market-watch/08b1efcbe6741e46ea2befcdbc594144dda6aaaf/tsconfig.json) | [main](https://raw.githubusercontent.com/Lukestaz/market-watch/main/tsconfig.json) |
