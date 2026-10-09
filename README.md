# market-watch

A config-driven second-hand market watcher for ? stores. It runs on GitHub Actions, searches both stores, filters listings with keyword rules, has Gemini verify and score each candidate, tracks price history in Git, publishes a dashboard, and emails alerts for new listings and price drops.

**Dashboard:** [lukestaz.github.io/market-watch](https://lukestaz.github.io/market-watch)

---

## For AI assistants (read this first)

You do not need to clone the repo to see everything. Two equivalent entry points are refreshed on every run:

1. **Index file (plain text over HTTPS):**
   `https://raw.githubusercontent.com/Lukestaz/market-watch/main/data/AGENT_INDEX.md`
   Lists every source file with a raw link pinned to the exact commit, plus links to the latest run status, full log and state.
2. **GitHub Issue `[Snapshot] Assistant index`** (issue #8): same index plus the last 60 log lines, for tools that can read issues but not files.

Any file can also be read directly as `https://raw.githubusercontent.com/Lukestaz/market-watch/main/<path>`, e.g. `.../main/src/ai.ts`.

| What | Where |
|---|---|
| Latest run result (per-step outcome, run URL) | `data/run-status.json` |
| Full redacted log of the latest run | `data/latest-run.log` |
| Last 100 log lines | `data/latest-run-summary.txt` |
| All tracked listings + AI verdicts | `data/state.json` |

Secrets (Gemini key, emails, tokens) are redacted from all logs before they are committed.

---

## How a run works

1. **Load searches** from `config/searches.json` and site settings from `config/sites.yaml`.
2. **Fetch search pages** over plain HTTP (`fetch` + Cheerio, no browser). Cash Converters' server omits its intermediate TLS certificate, so the missing GeoTrust intermediate is bundled in `certs/` and loaded via `NODE_EXTRA_CA_CERTS` (set in the `watch` script).
3. **Keyword rules** (`src/matching.ts`): a rule matches when all its `includeKeywords` appear in the listing's **title or model number** and none of its `excludeKeywords` appear. Listings matching no rule are ignored. Global exclusions drop jewellery, watches, white goods, etc.
4. **Detail enrichment**: high/critical candidates have their product page fetched for model number, condition, accessories and branch.
5. **Gemini check** (`src/ai.ts`): each candidate is judged against the search's target. False positives are dropped; the rest get a 1-10 score, verdict and reason. The model is auto-discovered from the API (no hardcoded model names), busy/rate-limited calls are retried, and verdicts are reused while the price is unchanged to conserve free-tier quota.
6. **State** (`src/state.ts`): listings are deduplicated by URL, price changes are detected, and anything no longer listed is marked removed.
7. **Outputs**: email alerts for new listings and price drops (`src/alerts.ts`), the dashboard with search/filters/last-updated time (`src/ui.ts`), and diagnostics committed back to `data/`.

### Keyword syntax

| Form | Meaning | Example |
|---|---|---|
| `word` | whole-word match | `ego` does not match "lego" |
| `word*` | prefix | `oled65*` matches `OLED65C36LA` |
| `*word` | suffix | `*mah` matches `20100Mah` |
| `65` | special-cased screen size | matches `65"`, `65 inch`, `oled65` |

---

## Watch list

| Search | Store queries | Priority highlights |
|---|---|---|
| Displays 65" / OLED | `LG tv` | OLED model numbers high; generic 65" normal |
| Cordless power equipment (EGO 56V) | `EGO 56V` | multi-tool, blower, chainsaw, battery, trimmer high; mower normal. All rules require "ego" |
| Tough cameras | `Olympus Tough` | TG-7 / TG-6 critical |
| Anker power | `Anker` | Nano, power banks high; chargers normal |
| Baseus power | `Baseus` | Blade critical; power banks high; chargers normal |
| Bluetti | `Bluetti` | AC/EB/Elite/Apex power stations high; any Bluetti normal |
| EcoFlow | `EcoFlow` | River/Delta/Trail/Glacier high; any EcoFlow normal |

Each search exists once per store (`src-a-*` = Cash Converters, `src-b-*` = Dollar Dealers).

### Adding a search

Append an entry to `config/searches.json`:

```json
{
  "id": "src-a-example",
  "site": "cashconverters",
  "label": "Source A - Example Brand",
  "path": "/Browse?FullTextQuery=Example&StatusFilter=active_only",
  "enabled": true,
  "rules": [
    { "id": "rule-a-high-example", "label": "Example flagship", "priority": "high",
      "includeKeywords": ["example", "pro"], "excludeKeywords": ["case only"] }
  ]
}
```

Dollar Dealers paths look like `/?s=example&post_type=product`. Priorities: `critical`, `high`, `normal`. Search broadly (brand only) and let rules + Gemini narrow it down; the stores' search engines are primitive.

---

## GitHub Actions workflow

`.github/workflows/daily-watch.yml` runs at **09:00 and 21:00 NZ time** (08:00/20:00 UTC), on pushes to `main` that touch source/config, and on manual dispatch. Steps:

1. `npm ci` from `package-lock.json` (npm cache enabled)
2. `tsc --noEmit` typecheck gate
3. `npm run watch`
4. Diagnostics (always, even on failure): per-step outcomes to `data/run-status.json`, redacted full log to `data/latest-run.log`
5. Assistant index + Issue #8 refresh
6. Dashboard deploy to the `gh-pages` branch
7. Commit `data/` back to `main` with `[skip ci]` (rebases with retries; generated files resolve in favour of the current run)

`concurrency: cancel-in-progress` ensures only the newest run is ever writing state.

### Secrets

Set in **Settings → Secrets and variables → Actions** (not the "Agents" section, which Actions cannot read):

| Secret | Purpose |
|---|---|
| `GEMINI_API_KEY` | AI verification and scoring (optional; without it keyword rules alone decide) |
| `GMAIL_USER` | Gmail account that sends alerts |
| `GMAIL_APP_PASSWORD` | 16-character Google App Password |
| `ALERT_TO_EMAIL` | Recipient address |

---

## Local development

```bash
npm ci
npm run typecheck
cp .env.example .env   # optional: add keys
npm run watch          # writes dist/ and updates data/state.json
```

Revert `data/state.json` afterwards (`git checkout data/state.json`) if you don't want local runs committed.

---

## Repository layout

```
.github/workflows/daily-watch.yml  Scheduled runner, diagnostics, Pages deploy, state commit
certs/                             Bundled intermediate CA for Cash Converters' TLS chain
config/searches.json               Searches and keyword rules
config/sites.yaml                  Store base URLs and rate limits
data/                              Committed by CI: state, run status, logs, AGENT_INDEX.md
scripts/agent-index.sh             Builds data/AGENT_INDEX.md
src/index.ts                       Orchestrator
src/config.ts                      Config loader
src/sites/base.ts                  SiteAdapter interface
src/sites/cashconverters.ts        Cash Converters adapter (search + detail pages)
src/sites/dollardealers.ts         Dollar Dealers adapter (search + detail pages)
src/matching.ts                    Keyword rule engine
src/normalise.ts                   Listing normalisation
src/ai.ts                          Gemini evaluation with model discovery
src/state.ts                       State diffing, dedupe, removal tracking
src/alerts.ts                      Gmail HTML alerts
src/ui.ts                          Dashboard generator
src/generated/                     Run status baked into the dashboard (CI-generated)
```
