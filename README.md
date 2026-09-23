# market-watch

A generic, config-driven price and inventory monitoring engine running on GitHub Actions. It observes e-commerce product listings across configured storefronts, tracks historical price movements in Git, deep-scrapes product specifications, and delivers automated alerts whenever target criteria or price reductions occur.

---

## Live Dashboard

View the interactive web dashboard with filters, search, and specification breakdown:
👉 **[lukestaz.github.io/market-watch](https://lukestaz.github.io/market-watch)**

---

## Supported Source Connectors

| Source Identifier | Engine / Type | Capabilities |
|---|---|---|
| `source-a` | DOM Evaluation | Dynamic search catalog parsing, product specification and condition extraction. |
| `source-b` | Headless Catalog Scraper | Category grid extraction, detail table deep parsing. |

---

## Active Watch Profiles

### 1. Large-Format Displays & 3D OLED Panels
- **Critical targets:** Top-tier passive 4K 3D OLED reference displays (G6, E6, C6 series).
- **High targets:** Early 4K 3D OLED models (EF950 series) and modern OLED displays.
- **Normal baseline:** Broad monitoring for generic 65" UHD and commercial display panels.

### 2. High-Power Cordless Outdoor Equipment
- **High targets:** Multi-tool power heads and modular attachments, commercial blowers, chainsaws, high-capacity lithium batteries (5.0Ah+), and bare tools.
- **Normal baseline:** Self-propelled and standard cordless lawn care equipment.

### 3. Rugged All-Weather Compact Cameras
- **Critical targets:** Olympus Tough TG-6, OM System Tough TG-7.
- **High targets:** OM System and Olympus Tough camera bodies (filters older TG-1 through TG-5 models).
- **Exclusions:** Pure accessories (cases, underwater housings, batteries only).

---

## How It Works

1. **Trigger Modes:**
   - **Automated CI Push:** Triggered on code/configuration pushes to validate type checks and test catalog parsers autonomously.
   - **Scheduled Runs:** Runs twice daily via cron (`11:15 AM` and `6:15 PM`), capturing inventory updates throughout the day.
   - **Manual Dispatch:** Run any individual query on demand via GitHub Actions UI (`all`, `src-a-display-65`, `src-a-power-tools`, `src-a-tough-cameras`, `src-b-display-65`, `src-b-power-tools`, `src-b-tough-cameras`).
2. **Streamlined Sweep:** Executes consolidated queries covering target categories in under 45 seconds.
3. **Selective Deep Scraping:** For candidate items matching target criteria, the engine visits individual listing pages to extract:
   - **Model Number:** (e.g. `OLED65G6P`, `TG-6`, `TG-7`, `LM2135E-SP`)
   - **Condition:** (e.g. `Like New`, `Very Good`, `Good`)
   - **Accessories / Includes:** (e.g. `Remote + 3D glasses`, `Wrist strap + battery + charger`)
   - **Location:** Branch / pickup depot.
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

*Note: Generate an App Password via Google Account Security.*

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

# Run with local email testing
GMAIL_USER="you@gmail.com" GMAIL_APP_PASSWORD="app-password" ALERT_TO_EMAIL="you@gmail.com" npm run watch
```

---

## Repository Structure

```
├── .github/workflows/
│   └── daily-watch.yml       # Scheduled runner, secrets injector, log commit & issue reporting
├── config/
│   ├── sites.yaml            # Storefront endpoints and rate limits
│   └── searches.yaml         # Keyword rules, priorities, and paths
├── data/
│   ├── latest-run.log        # Automated execution log committed by CI runner
│   └── state.json            # Tracked listings, price history, and timestamps
├── src/
│   ├── sites/
│   │   ├── base.ts           # SiteAdapter interface
│   │   ├── cashconverters.ts # Storefront A adapter with deep-scrape
│   │   └── dollardealers.ts  # Storefront B adapter with deep-scrape
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
