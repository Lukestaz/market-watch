import * as fs from "node:fs/promises";
import * as path from "node:path";
import type { AppState } from "./state.js";
import type { EnrichedListing, ListingEvent } from "./models.js";

const DIST_DIR = "./dist";
const REPO_URL = "https://github.com/Lukestaz/market-watch";

function escapeHtml(str: string | undefined): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getStoreLabel(siteId: string): string {
  if (siteId === "dollardealers") return "Store B";
  if (siteId === "cashconverters") return "Store A";
  return "Marketplace";
}

function generateCard(listing: EnrichedListing): string {
  const price = listing.price !== undefined ? `$${listing.price.toFixed(2)}` : "Price on request";
  const priorityClass = `priority-${listing.priority}`;
  const storeLabel = getStoreLabel(listing.siteId);

  const downvoteIssueUrl = `${REPO_URL}/issues/new?title=${encodeURIComponent(
    `[False Positive] ${listing.title}`
  )}&body=${encodeURIComponent(
    `### False Positive Report\n- **Item:** ${listing.title}\n- **URL:** ${listing.canonicalUrl}\n- **Matched Rules:** ${listing.matchedRules.join(
      ", "
    )}\n\nPlease tune keywords to exclude this item.`
  )}&labels=feedback`;

  const aiBadge = listing.ai
    ? `
      <div class="ai-box">
        <div class="ai-header">
          <span class="ai-title">🤖 AI Deal Score: <strong>${listing.ai.score}/10</strong> &bull; ${escapeHtml(
        listing.ai.verdict
      )}</span>
        </div>
        <p class="ai-reason">${escapeHtml(listing.ai.reason)}</p>
      </div>
    `
    : "";

  return `
    <div class="card ${priorityClass}" data-priority="${listing.priority}" data-store="${listing.siteId}">
      <div class="card-header">
        <div class="badges">
          <span class="badge badge-${listing.priority}">${listing.priority.toUpperCase()}</span>
          <span class="badge badge-store">${storeLabel}</span>
        </div>
        <span class="price">${price}</span>
      </div>
      <h3 class="card-title">
        <a href="${escapeHtml(listing.canonicalUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(
    listing.title
  )}</a>
      </h3>
      <div class="meta">
        ${listing.modelNumber ? `<p class="meta-row"><strong>Model:</strong> ${escapeHtml(listing.modelNumber)}</p>` : ""}
        ${listing.condition ? `<p class="meta-row"><strong>Condition:</strong> ${escapeHtml(listing.condition)}</p>` : ""}
        ${listing.seller ? `<p class="meta-row"><strong>Branch:</strong> ${escapeHtml(listing.seller.replace(/DollarDealers|CashConverters/gi, "Store"))}</p>` : ""}
        ${listing.matchedRules.length ? `<p class="meta-row rules"><strong>Rules:</strong> ${listing.matchedRules.join(", ")}</p>` : ""}
      </div>
      ${aiBadge}
      <div class="card-footer">
        <a href="${escapeHtml(listing.canonicalUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">View Listing &rarr;</a>
        <a href="${downvoteIssueUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-downvote">👎 False Positive</a>
      </div>
    </div>
  `;
}

export async function generateUiFiles(state: AppState, events: ListingEvent[]): Promise<void> {
  await fs.mkdir(DIST_DIR, { recursive: true });

  const activeListings = Object.values(state.listings).filter((l) => l.status === "active");

  const cardsHtml =
    activeListings.length > 0
      ? activeListings.map(generateCard).join("\n")
      : `<div class="empty-state">No active matched items right now. Check back next run.</div>`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Market Watcher Dashboard</title>
  <style>
    :root {
      --bg: #0f172a;
      --card-bg: #1e293b;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --accent: #3b82f6;
      --accent-hover: #2563eb;
      --border: #334155;
      --critical: #ef4444;
      --high: #f97316;
      --normal: #64748b;
      --green: #22c55e;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.5;
      padding: 20px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 20px;
      margin-bottom: 24px;
      border-bottom: 1px solid var(--border);
      flex-wrap: wrap;
      gap: 16px;
    }

    .title-group h1 {
      font-size: 24px;
      font-weight: 700;
    }

    .title-group p {
      color: var(--text-muted);
      font-size: 14px;
    }

    .stats {
      display: flex;
      gap: 12px;
    }

    .stat-box {
      background: var(--card-bg);
      border: 1px solid var(--border);
      padding: 8px 16px;
      border-radius: 8px;
      text-align: center;
    }

    .stat-val {
      font-size: 20px;
      font-weight: 700;
      color: var(--accent);
    }

    .stat-label {
      font-size: 11px;
      text-transform: uppercase;
      color: var(--text-muted);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 20px;
    }

    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      transition: transform 0.15s ease, border-color 0.15s ease;
    }

    .card:hover {
      transform: translateY(-2px);
      border-color: #475569;
    }

    .card.priority-critical { border-left: 4px solid var(--critical); }
    .card.priority-high { border-left: 4px solid var(--high); }
    .card.priority-normal { border-left: 4px solid var(--normal); }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .badges {
      display: flex;
      gap: 6px;
    }

    .badge {
      font-size: 10px;
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 4px;
      text-transform: uppercase;
    }

    .badge-critical { background: var(--critical); color: white; }
    .badge-high { background: var(--high); color: white; }
    .badge-normal { background: var(--normal); color: white; }
    .badge-store { background: #334155; color: #cbd5e1; }

    .price {
      font-size: 18px;
      font-weight: 700;
      color: var(--green);
    }

    .card-title {
      font-size: 16px;
      line-height: 1.3;
      margin-bottom: 10px;
      font-weight: 600;
    }

    .card-title a {
      color: var(--text);
      text-decoration: none;
    }

    .card-title a:hover {
      color: var(--accent);
    }

    .meta {
      font-size: 13px;
      color: var(--text-muted);
      margin-bottom: 12px;
      flex-grow: 1;
    }

    .meta-row {
      margin-bottom: 4px;
    }

    .meta-row strong {
      color: #cbd5e1;
    }

    .rules {
      font-size: 11px;
      color: #64748b;
    }

    .ai-box {
      background: rgba(34, 197, 94, 0.1);
      border: 1px solid rgba(34, 197, 94, 0.25);
      border-radius: 6px;
      padding: 8px 10px;
      margin-bottom: 12px;
      font-size: 12px;
    }

    .ai-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2px;
    }

    .ai-title {
      color: #4ade80;
    }

    .ai-reason {
      color: #86efac;
      font-size: 11px;
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid var(--border);
      padding-top: 12px;
      margin-top: auto;
    }

    .btn {
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      text-decoration: none;
      transition: background 0.15s ease;
    }

    .btn-primary {
      background: var(--accent);
      color: white;
    }

    .btn-primary:hover {
      background: var(--accent-hover);
    }

    .btn-downvote {
      color: #f87171;
      font-size: 11px;
    }

    .btn-downvote:hover {
      text-decoration: underline;
    }

    .empty-state {
      grid-column: 1 / -1;
      text-align: center;
      padding: 40px;
      background: var(--card-bg);
      border-radius: 8px;
      border: 1px solid var(--border);
      color: var(--text-muted);
    }

    footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid var(--border);
      text-align: center;
      font-size: 12px;
      color: var(--text-muted);
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="title-group">
        <h1>Market Watcher Dashboard</h1>
        <p>Last checked: ${new Date().toLocaleString("en-NZ", { timeZone: "Pacific/Auckland" })} NZST</p>
      </div>
      <div class="stats">
        <div class="stat-box">
          <div class="stat-val">${activeListings.length}</div>
          <div class="stat-label">Active Items</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">${events.length}</div>
          <div class="stat-label">New / Dropped</div>
        </div>
      </div>
    </header>

    <div class="grid">
      ${cardsHtml}
    </div>

    <footer>
      <p>Automated market alerts running via GitHub Actions &bull; <a href="${REPO_URL}" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: none;">View Repository</a></p>
    </footer>
  </div>
</body>
</html>`;

  await fs.writeFile(path.join(DIST_DIR, "index.html"), html, "utf-8");
  await fs.writeFile(
    path.join(DIST_DIR, "feed.json"),
    JSON.stringify({ updatedAt: new Date().toISOString(), listings: activeListings }, null, 2),
    "utf-8"
  );
  console.log(`[UI] Generated index.html and feed.json in ${DIST_DIR}`);
}
