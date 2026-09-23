import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";
import { loadConfig } from "./config.js";
import type { Listing, ListingEvent, SearchConfig, SiteConfig } from "./models.js";
import { highestPriority, mergeUnique } from "./matching.js";
import { toListing } from "./normalise.js";
import { applyListings, loadState, saveState } from "./state.js";
import type { SiteAdapter } from "./sites/base.js";
import { CashConvertersAdapter } from "./sites/cashconverters.js";
import { DollarDealersAdapter } from "./sites/dollardealers.js";
import { sendEmailAlerts } from "./alerts.js";
import { generateHtmlDashboard } from "./ui.js";

const adapters: Record<string, SiteAdapter> = {
  cashconverters: new CashConvertersAdapter(),
  dollardealers: new DollarDealersAdapter()
};

function argumentValue(flag: string): string | undefined {
  const index = process.argv.indexOf(flag);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function formatEvent(event: ListingEvent): string {
  const { listing } = event;
  const price = listing.price !== undefined ? `NZ$${listing.price.toFixed(2)}` : "price unavailable";
  const prior = event.previousPrice !== undefined ? ` (was NZ$${event.previousPrice.toFixed(2)})` : "";
  const model = listing.modelNumber ? ` [Model: ${listing.modelNumber}]` : "";
  const cond = listing.condition ? ` [Cond: ${listing.condition}]` : "";
  return `[${event.type}] [${listing.priority}] ${listing.title}${model}${cond} | ${price}${prior} | ${listing.canonicalUrl}`;
}

function mergeListings(existing: Listing, incoming: Listing): Listing {
  return {
    ...existing,
    ...incoming,
    firstSeenAt: existing.firstSeenAt,
    searchIds: mergeUnique(existing.searchIds, incoming.searchIds),
    matchedRules: mergeUnique(existing.matchedRules, incoming.matchedRules),
    priority: highestPriority(existing.priority, incoming.priority)
  };
}

async function sleep(milliseconds: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function main(): Promise<void> {
  const config = await loadConfig();
  const onlySite = argumentValue("--site");
  const onlySearch = argumentValue("--search");
  const searches = config.searches.filter((search: SearchConfig) => {
    if (!search.enabled) return false;
    if (onlySite && search.site !== onlySite) return false;
    if (onlySearch && search.id !== onlySearch) return false;
    const siteConfig = config.sites?.[search.site];
    return siteConfig ? siteConfig.enabled : false;
  });

  if (!searches.length) {
    throw new Error("No enabled searches matched the supplied filters.");
  }

  await mkdir("debug", { recursive: true });
  const state = await loadState();
  const browser = await chromium.launch({ headless: true });
  const collected = new Map<string, Listing>();
  const failedSearches: string[] = [];
  let lastSite = "";

  try {
    for (const search of searches) {
      const site: SiteConfig | undefined = config.sites?.[search.site];
      const adapter = adapters[site?.adapter ?? ""];

      if (!site || !adapter) {
        failedSearches.push(`${search.id}: no adapter configured for site ${search.site}`);
        continue;
      }

      if (lastSite === search.site) {
        await sleep(site.minimumDelayMs ?? config.defaults.minimumDelayBetweenSearchesMs);
      }

      console.log(`Running ${search.id}: ${search.label}`);
      const result = await adapter.scrape(search, { browser, debugDirectory: "debug" });
      console.log(`  ${result.diagnostics.resultCount} listings; blocked=${result.diagnostics.blocked}`);

      if (result.diagnostics.blocked || result.diagnostics.error) {
        failedSearches.push(`${search.id}: ${result.diagnostics.error ?? "site returned no usable listings"}`);
        lastSite = search.site;
        continue;
      }

      const timestamp = result.fetchedAt;
      for (const raw of result.listings) {
        const listing = toListing(result.siteId, search, raw, timestamp);
        const existing = collected.get(listing.key);
        collected.set(listing.key, existing ? mergeListings(existing, listing) : listing);
      }
      lastSite = search.site;
    }
  } finally {
    await browser.close();
  }

  if (failedSearches.length) {
    console.error(`Failed searches (${failedSearches.length}):`);
    failedSearches.forEach((failure) => console.error(`  ${failure}`));
    process.exitCode = 1;
    return;
  }

  const events = applyListings(state, [...collected.values()], new Date().toISOString());
  await saveState(state);

  // Generate responsive HTML web dashboard for GitHub Pages
  try {
    await generateHtmlDashboard("data/state.json", "public");
  } catch (err) {
    console.error("Failed to generate HTML dashboard:", err);
  }

  const meaningful = events.filter((event) => event.type !== "seen");
  console.log(`Completed ${searches.length} searches. ${collected.size} unique listings. ${meaningful.length} meaningful events.`);
  meaningful.forEach((event) => console.log(formatEvent(event)));

  if (meaningful.length) {
    try {
      await sendEmailAlerts(meaningful);
    } catch (error) {
      console.error("Failed to send email alert:", error);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
