import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import type { AppState } from "./state.js";
import type { EnrichedListing, ListingEvent } from "./models.js";

const OUTPUT_DIR = path.resolve("dist");

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function priorityClass(priority: string): string {
  if (priority === "critical") return "critical";
  if (priority === "high") return "high";
  return "normal";
}

function renderListing(listing: EnrichedListing): string {
  const price = listing.price !== undefined ? `NZ$${listing.price.toFixed(2)}` : "Price unavailable";
  const details = [
    listing.modelNumber ? `Model: ${listing.modelNumber}` : "",
    listing.condition ? `Condition: ${listing.condition}` : "",
    listing.accessories ? `Includes: ${listing.accessories}` : "",
    listing.seller ? `Seller: ${listing.seller}` : ""
  ]
    .filter(Boolean)
    .map((line) => `<div>${escapeHtml(line)}</div>`)
    .join("");

  return `
    <article class="card ${priorityClass(listing.priority)}">
      <div class="card-top">
        <span class="priority">${escapeHtml(listing.priority.toUpperCase())}</span>
        <span class="price">${price}</span>
      </div>
      <h2><a href="${escapeHtml(listing.canonicalUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(listing.title)}</a></h2>
      <div class="details">${details}</div>
      <div class="meta">Matched: ${escapeHtml(listing.matchedRules.join(", ") || "none")}</div>
      <a class="button" href="${escapeHtml(listing.canonicalUrl)}" target="_blank" rel="noopener noreferrer">View listing</a>
    </article>`;
}

export async function generateUiFiles(state: AppState, events: ListingEvent[]): Promise<void> {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const activeListings = Object.values(state.listings)
    .filter((listing) => listing.status === "active" && listing.priority !== "ignore")
    .sort((a, b) => {
      const order: Record<string, number> = { critical: 0, high: 1, normal: 2 };
      return (order[a.priority] ?? 9) - (order[b.priority] ?? 9);
    });

  const cards = activeListings.length
    ? activeListings.map(renderListing).join("\n")
    : `<p class="empty">No active matched listings at the moment.</p>`;

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Market Watch</title>
  <style>
    :root { color-scheme: dark; --bg:#0f172a; --panel:#1e293b; --border:#334155; --muted:#94a3b8; --text:#f8fafc; --blue:#3b82f6; --critical:#ef4444; --high:#f59e0b; }
    * { box-sizing:border-box; }
    body { margin:0; padding:24px; font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif; color:var(--text); background:var(--bg); }
    main { max-width:1120px; margin:auto; }
    header { display:flex; gap:16px; justify-content:space-between; align-items:baseline; margin-bottom:24px; border-bottom:1px solid var(--border); padding-bottom:16px; }
    h1 { margin:0; font-size:1.65rem; } .summary { color:var(--muted); font-size:.9rem; }
    .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:16px; }
    .card { background:var(--panel); border:1px solid var(--border); border-left:4px solid #64748b; border-radius:10px; padding:16px; display:flex; flex-direction:column; gap:10px; }
    .card.critical { border-left-color:var(--critical); } .card.high { border-left-color:var(--high); }
    .card-top { display:flex; justify-content:space-between; align-items:center; gap:12px; }
    .priority { font-size:.7rem; border:1px solid var(--border); color:var(--muted); padding:3px 7px; border-radius:999px; font-weight:700; letter-spacing:.04em; }
    .price { color:#4ade80; font-weight:800; } h2 { margin:0; font-size:1.05rem; line-height:1.35; }
    h2 a { color:var(--text); text-decoration:none; } h2 a:hover { color:#93c5fd; }
    .details, .meta { color:var(--muted); font-size:.84rem; line-height:1.5; } .meta { border-top:1px solid var(--border); padding-top:10px; }
    .button { background:var(--blue); color:white; padding:8px 10px; border-radius:6px; text-decoration:none; text-align:center; font-weight:700; font-size:.85rem; margin-top:auto; }
    .empty { color:var(--muted); } footer { color:var(--muted); font-size:.78rem; margin-top:28px; text-align:center; }
    @media (max-width: 600px) { body { padding:16px; } header { align-items:flex-start; flex-direction:column; } }
  </style>
</head>
<body>
  <main>
    <header>
      <div><h1>Market Watch</h1><div class="summary">Active listings from your monitored searches</div></div>
      <div class="summary">${activeListings.length} active · ${events.length} changes this run</div>
    </header>
    <section class="grid">${cards}</section>
    <footer>Updated ${escapeHtml(new Date().toISOString())}</footer>
  </main>
</body>
</html>`;

  await writeFile(path.join(OUTPUT_DIR, "index.html"), html, "utf8");
  await writeFile(path.join(OUTPUT_DIR, "feed.json"), JSON.stringify({ generatedAt: new Date().toISOString(), listings: activeListings }, null, 2), "utf8");
  console.log(`[UI] Generated index.html and feed.json in ${OUTPUT_DIR}`);
}
