# market-watch

A config-driven product watcher running on GitHub Actions. It monitors New Zealand secondhand marketplaces for specific target products, records state history in git, deep-scrapes product specifications (exact model number, condition, accessories), and delivers automated email alerts whenever matching items or price drops appear.

---

## Live Dashboard

View the interactive web dashboard with filters, search, and specification breakdown:
👉 **[lukestaz.github.io/market-watch](https://lukestaz.github.io/market-watch)**

---

## Supported Marketplaces

| Site | Adapter | Features |
|---|---|---|
| **Cash Converters NZ** | `cashconverters` | Playwright scraping, dynamic search grid parsing, deep product specification extraction (model, condition, accessories, pickup store). |
| **Dollar Dealers NZ** | `dollardealers` | WooCommerce store scraping, search endpoint parsing, deep specification table scraping. |

---

## Active Watch Profiles

### 1. LG 65" / 77" & 3D OLED TVs
- **Critical targets:** LG 65G6, 77G6, 65E6, 65C6 (passive 4K 3D OLED line).
- **High targets:** LG 65EF950 (early 4K 3D OLED fallback), all other LG OLED panels.
- **Normal baseline:** Broad monitoring for generic 65" LG LCD and UHD panels.

### 2. EGO 56V Cordless Garden Tools
- **High targets:** Multi-tool power heads and attachments, leaf blowers, chainsaws, Arc-Lithium batteries (5.0Ah, 7.5Ah, 10.0Ah), and bare tools.
- **Normal baseline:** Self-propelled and standard EGO 56V lawnmowers.

---

## How It Works

1. **Trigger Modes:**
   - **Automated CI Push:** Triggered on code/configuration pushes to run type checks, validation, and browser sweeps autonomously.
   - **Scheduled Runs:** Runs twice daily via cron (`11:15 AM NZST` and `6:15 PM NZST`), capturing morning additions and end-of-day store inventory.
   - **Manual Dispatch:** Run any individual search query on demand via GitHub Actions UI (`all`, `cc-lg-65`, `cc-ego`, `dd-lg-65`, `dd-ego`).
2. **Streamlined Sweep:** Crawls 4 consolidated high-volume queries covering 100% of candidate items across Cash Converters and Dollar Dealers in ~35 seconds.
3. **Selective Deep Scraping:** For candidate items matching target criteria, the scraper visits individual listing pages to extract:
   - **Model Number:** (e.g. `OLED65G6P`, `LM2135E-SP`)
   - **Condition:** (e.g. `Like New`, `Very Good`, `Good`)
   - **Accessories / Includes:** (e.g. `Remote + 3D glasses`, `5.0Ah battery + rapid charger`)
   - **Store Location:** Specific branch / pickup location.
4. **State Persistence:** Normalises and deduplicates items into `data/state.json`, committed back into the repository to track first-seen dates, price drops, and rule matches.
5. **Automated Alerts:** Dispatches HTML emails via Gmail SMTP for new listings and price drops with priority badges and direct links.
6. **Continuous Run Logging & Self-Healing CI:** Every workflow execution streams output into `data/latest-run.log` and commits it to the repository. If a run fails, GitHub Actions creates a diagnostic issue with the last 80 lines of error logs for automated debugging without manual log retrieval.

---

## Email Alerts Configuration

To receive notifications, configure the following secrets in **Settings → Secrets and variables → Actions**:

| Secret Name | Description | Example |
|---|---|---|
| `GMAIL_USER` | Your Gmail address | `user@gmail.com` |
| `GMAIL_APP_PASSWORD` | 16-character Google App Password | `xxxx xxxx xxxx xxxx` |
| `ALERT_TO_EMAIL` | Destination email address | `recipient@example.com` |

*Note: Generate an App Password via [Google Account Security → 2-Step Verification → App passwords](https://myaccount.google.com/apppasswords).*

---

## Local Development

```bash
# Install dependencies
npm install

# Install Playwright browser binaries
npx playwright install --with-deps chromium

# Typecheck
npm test

# Run all enabled searches
npm run watch

# Run a specific site
npm run watch:cashconverters

# Run with local email testing
GMAIL_USER="you@gmail.com" GMAIL_APP_PASSWORD="app-password" ALERT_TO_EMAIL="you@gmail.com" npm run watch
```

---

## Repository Structure

```
├── .github/workflows/
│   └── daily-watch.yml       # Scheduled runner, secrets injector, log commit & issue reporting
├── config/
│   ├── sites.yaml            # Marketplace configurations and rate limits
│   └── searches.yaml         # Keyword rules, priorities, and paths
├── data/
│   ├── latest-run.log        # Automated execution log committed by CI runner
│   └── state.json            # Tracked listings, price history, and timestamps
├── src/
│   ├── sites/
│   │   ├── base.ts           # SiteAdapter interface
│   │   ├── cashconverters.ts # Cash Converters adapter with deep-scrape
│   │   └── dollardealers.ts  # Dollar Dealers adapter with deep-scrape
│   ├── alerts.ts             # Gmail HTML alert formatting & dispatch
│   ├── config.ts             # Config file loader
│   ├── matching.ts           # Rule matching & priority calculation
│   ├── models.ts             # TypeScript definitions
│   ├── normalise.ts          # Price & title normalisation
│   ├── state.ts              # State diffing & JSON persistence
│   ├── ui.ts                 # GitHub Pages static dashboard compiler
│   └── index.ts              # CLI entry point & crawler orchestrator
├── package.json
└── tsconfig.json
```
