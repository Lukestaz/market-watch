import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { Listing, WatchState } from "./models.js";

function escapeHtml(str: string | undefined): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function generateHtmlDashboard(statePath = "data/state.json", outputDir = "public"): Promise<void> {
  await mkdir(outputDir, { recursive: true });

  let listings: Listing[] = [];
  let updatedAt = new Date().toISOString();

  try {
    const raw = await readFile(statePath, "utf8");
    const state = JSON.parse(raw) as WatchState;
    listings = Object.values(state.listings || {});
    updatedAt = state.updatedAt || updatedAt;
  } catch {
    console.log("No existing state found, generating empty dashboard.");
  }

  // Sort: critical first, then high, then normal; then by most recently seen
  const priorityWeight: Record<string, number> = { critical: 3, high: 2, normal: 1, ignore: 0 };
  listings.sort((a, b) => {
    const diff = (priorityWeight[b.priority] || 0) - (priorityWeight[a.priority] || 0);
    if (diff !== 0) return diff;
    return new Date(b.lastSeenAt).getTime() - new Date(a.lastSeenAt).getTime();
  });

  const criticalCount = listings.filter((l) => l.priority === "critical").length;
  const highCount = listings.filter((l) => l.priority === "high").length;
  const normalCount = listings.filter((l) => l.priority === "normal").length;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NZ Market Watch Dashboard</title>
  <style>
    :root {
      --bg: #0f172a;
      --card-bg: #1e293b;
      --border: #334155;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --critical: #ef4444;
      --high: #f59e0b;
      --normal: #3b82f6;
      --accent: #10b981;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.5;
      padding: 24px;
    }
    header {
      max-width: 1300px;
      margin: 0 auto 24px auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--border);
    }
    .title-group h1 { font-size: 26px; font-weight: 800; letter-spacing: -0.5px; }
    .title-group p { font-size: 13px; color: var(--text-muted); margin-top: 4px; }
    .stats-bar {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
    .stat-badge {
      padding: 6px 14px;
      border-radius: 9999px;
      font-size: 13px;
      font-weight: 600;
      background: var(--card-bg);
      border: 1px solid var(--border);
    }
    .stat-badge.crit { border-color: var(--critical); color: #fca5a5; }
    .stat-badge.high { border-color: var(--high); color: #fde68a; }
    .stat-badge.total { border-color: var(--normal); color: #93c5fd; }
    
    .controls {
      max-width: 1300px;
      margin: 0 auto 24px auto;
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
    }
    .search-input {
      flex: 1;
      min-width: 250px;
      background: var(--card-bg);
      border: 1px solid var(--border);
      color: var(--text);
      padding: 10px 16px;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
    }
    .search-input:focus { border-color: var(--normal); }
    .filter-btn {
      background: var(--card-bg);
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 9px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .filter-btn.active, .filter-btn:hover {
      background: var(--normal);
      color: white;
      border-color: var(--normal);
    }

    .grid {
      max-width: 1300px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 20px;
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: transform 0.2s, border-color 0.2s;
    }
    .card:hover {
      transform: translateY(-2px);
      border-color: #64748b;
    }
    .card-img {
      width: 100%;
      height: 180px;
      background: #0f172a;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }
    .card-img img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .placeholder-icon {
      font-size: 40px;
      color: #334155;
    }
    .badge {
      position: absolute;
      top: 10px;
      left: 10px;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: white;
    }
    .badge.critical { background: var(--critical); box-shadow: 0 0 10px rgba(239, 68, 68, 0.4); }
    .badge.high { background: var(--high); }
    .badge.normal { background: #64748b; }
    
    .source-badge {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 3px 8px;
      border-radius: 6px;
      font-size: 10px;
      font-weight: 700;
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #cbd5e1;
    }

    .card-body {
      padding: 16px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .price-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 8px;
    }
    .price {
      font-size: 20px;
      font-weight: 800;
      color: var(--accent);
    }
    .card-title {
      font-size: 15px;
      font-weight: 600;
      color: var(--text);
      line-height: 1.4;
      margin-bottom: 12px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .specs-list {
      list-style: none;
      font-size: 12px;
      color: var(--text-muted);
      margin-bottom: 16px;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .specs-list strong { color: #cbd5e1; }
    
    .btn-view {
      display: block;
      width: 100%;
      text-align: center;
      background: #2563eb;
      color: white;
      text-decoration: none;
      padding: 10px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      transition: background 0.2s;
    }
    .btn-view:hover { background: #1d4ed8; }
    
    footer {
      max-width: 1300px;
      margin: 40px auto 0 auto;
      text-align: center;
      font-size: 12px;
      color: var(--text-muted);
      border-top: 1px solid var(--border);
      padding-top: 20px;
    }
  </style>
</head>
<body>
  <header>
    <div class="title-group">
      <h1>Market Watch Dashboard</h1>
      <p>Tracking LG 3D OLEDs & EGO 56V Tools across NZ Marketplaces &bull; Last updated: ${new Date(updatedAt).toLocaleString("en-NZ", { timeZone: "Pacific/Auckland" })} NZST</p>
    </div>
    <div class="stats-bar">
      <div class="stat-badge crit">${criticalCount} Critical (3D OLED)</div>
      <div class="stat-badge high">${highCount} Priority</div>
      <div class="stat-badge total">${listings.length} Total Tracked</div>
    </div>
  </header>

  <div class="controls">
    <input type="text" id="searchInput" class="search-input" placeholder="Search by title, model (e.g. OLED65, 56V), or store..." oninput="filterCards()">
    <button class="filter-btn active" onclick="setFilter('all', this)">All (${listings.length})</button>
    <button class="filter-btn" onclick="setFilter('critical', this)">🚨 Critical (${criticalCount})</button>
    <button class="filter-btn" onclick="setFilter('high', this)">⭐ Priority (${highCount})</button>
    <button class="filter-btn" onclick="setFilter('dollardealers', this)">Dollar Dealers</button>
    <button class="filter-btn" onclick="setFilter('cashconverters', this)">Cash Converters</button>
  </div>

  <div class="grid" id="productGrid">
    ${listings
      .map((item) => {
        const price = item.price !== undefined ? "NZ$" + item.price.toFixed(2) : "Price on request";
        const sourceName = item.siteId === "dollardealers" ? "Dollar Dealers" : "Cash Converters";
        return `
          <div class="card" 
               data-priority="${item.priority}" 
               data-site="${item.siteId}" 
               data-search="${escapeHtml(item.title + " " + (item.modelNumber || "") + " " + (item.seller || "") + " " + item.siteId).toLowerCase()}">
            <div class="card-img">
              <span class="badge ${item.priority}">${item.priority}</span>
              <span class="source-badge">${sourceName}</span>
              ${item.imageUrl ? `<img src="${escapeHtml(item.imageUrl)}" alt="${escapeHtml(item.title)}" loading="lazy" onerror="this.style.display='none'">` : `<div class="placeholder-icon">📺</div>`}
            </div>
            <div class="card-body">
              <div class="price-row">
                <span class="price">${price}</span>
              </div>
              <h2 class="card-title" title="${escapeHtml(item.title)}">${escapeHtml(item.title)}</h2>
              <ul class="specs-list">
                ${item.modelNumber ? `<li><strong>Model:</strong> ${escapeHtml(item.modelNumber)}</li>` : ""}
                ${item.condition ? `<li><strong>Condition:</strong> ${escapeHtml(item.condition)}</li>` : ""}
                ${item.accessories ? `<li><strong>Includes:</strong> ${escapeHtml(item.accessories)}</li>` : ""}
                ${item.seller ? `<li><strong>Store:</strong> ${escapeHtml(item.seller)}</li>` : ""}
                <li><strong>First Seen:</strong> ${new Date(item.firstSeenAt).toLocaleDateString("en-NZ")}</li>
              </ul>
              <a href="${escapeHtml(item.canonicalUrl)}" target="_blank" rel="noopener noreferrer" class="btn-view">
                View on ${sourceName} &rarr;
              </a>
            </div>
          </div>
        `;
      })
      .join("")}
  </div>

  <footer>
    Automatically generated by your private GitHub Actions Market Watcher. Refreshed twice daily.
  </footer>

  <script>
    let currentFilter = 'all';

    function setFilter(filter, btn) {
      currentFilter = filter;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterCards();
    }

    function filterCards() {
      const query = document.getElementById('searchInput').value.toLowerCase().trim();
      const cards = document.querySelectorAll('.card');

      cards.forEach(card => {
        const priority = card.getAttribute('data-priority');
        const site = card.getAttribute('data-site');
        const searchCorpus = card.getAttribute('data-search') || '';

        const matchesQuery = !query || searchCorpus.includes(query);
        let matchesFilter = true;

        if (currentFilter === 'critical') matchesFilter = (priority === 'critical');
        else if (currentFilter === 'high') matchesFilter = (priority === 'high');
        else if (currentFilter === 'dollardealers') matchesFilter = (site === 'dollardealers');
        else if (currentFilter === 'cashconverters') matchesFilter = (site === 'cashconverters');

        card.style.display = (matchesQuery && matchesFilter) ? 'flex' : 'none';
      });
    }
  </script>
</body>
</html>`;

  await writeFile(path.join(outputDir, "index.html"), html, "utf8");
  console.log(`Successfully generated web dashboard at ${outputDir}/index.html with ${listings.length} listings.`);
}
