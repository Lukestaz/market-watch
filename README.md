# Market Watch

A config-driven personal watcher for second-hand listings, retailer products, price drops, and stock changes. It starts with Cash Converters and is structured so future sites are isolated adapters rather than copy-pasted scripts.

## Current capabilities

- Multiple configured searches per site
- Playwright-based browser scraping
- Stable listing identity derived from a source product ID or canonical URL
- Persistent local state in `data/state.json`
- New listing and price-change events
- Priority matching for likely LG C6, E6, G6, OLED, and 3D listings
- Debug screenshots and HTML when a selector fails or a page is blocked
- Daily GitHub Actions schedule and manual workflow runs

## Initial searches

The initial config includes two Cash Converters searches:

- Broad `LG 65` search
- `LG OLED` / 3D-oriented search

The watcher keeps broad results because used listings are often badly titled. Priority rules elevate C6, E6, G6, OLED, and 3D matches.

## Local setup

Install Node.js 22 or newer, then run:

```bash
npm install
npx playwright install chromium
npm run check
npm run watch
```

Run only Cash Converters:

```bash
npm run watch:cashconverters
```

Run one configured search:

```bash
npm run watch -- --search cc-lg-65-all
```

## Add a new Cash Converters search

Add another item under `searches` in `config/searches.yaml`:

```yaml
- id: cc-example
  enabled: true
  site: cashconverters
  type: listingSearch
  label: Cash Converters example search
  url: https://shop.cashconverters.co.nz/Browse?FullTextQuery=example
  alert:
    onNew: true
    onPriceDrop: true
    minimumPriceDropNzd: 1
  priorityRules:
    - label: Priority item
      priority: high
      regex: '(?i)example'
```

No scraper code is required for additional searches on an already-supported site.

## Add a new site

1. Create `src/sites/example.ts` implementing `SiteAdapter`.
2. Add its site configuration under `sites` in `config/searches.yaml`.
3. Register it in `src/index.ts`.
4. Add searches that reference the new site.
5. Test locally with `npm run watch -- --site example`.

Start with site-specific selectors and capture `debug` artifacts when pages return zero listings. Use normal browsing rates, respect site terms, and do not add bypass or proxy logic.

## State and events

`data/state.json` stores current known listing state. On a later run, the watcher creates these events:

- `new`: a listing key was not previously known
- `price_drop`: price fell by at least the configured threshold
- `price_change`: price changed without meeting the drop threshold
- `seen`: known item found again with no meaningful change

The scheduled workflow commits only successful state updates. Its concurrency group prevents overlapping scheduled/manual runs from racing to write the same state file.

## Google Sheets integration

The initial scaffold intentionally does not send data to Google Sheets. First validate that Cash Converters selectors return the expected listing cards in GitHub Actions. Then add a Google Cloud service account, share the monitoring Sheet with that account, and store the following only as GitHub Actions secrets:

```text
GOOGLE_SHEET_ID
GOOGLE_SERVICE_ACCOUNT_JSON
```

Never commit those values or paste them into `config/searches.yaml`.

## Scheduled execution

The workflow is scheduled at 20:17 UTC. That corresponds to 08:17 in New Zealand during NZST, but GitHub cron is UTC, so the expression needs changing when New Zealand daylight-saving time changes. You can also run it at any time from the repository's Actions tab using **Run workflow**.

## Next milestones

1. Confirm live Cash Converters card selectors from the first manual run.
2. Add Google Sheets `Listings`, `Events`, and `Runs` output.
3. Add email, Telegram, or Discord notifications for meaningful events.
4. Add product-page monitors for stock status and price changes.
5. Add independent adapters for suitable additional sites.
