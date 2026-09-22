import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";
import { loadConfig } from "./config.js";
import type { ListingEvent, SiteConfig } from "./models.js";
import { toListing } from "./normalise.js";
import { applyListings, loadState, saveState } from "./state.js";
import type { SiteAdapter } from "./sites/base.js";
import { CashConvertersAdapter } from "./sites/cashconverters.js";

const adapters: Record<string, SiteAdapter> = {
  cashconverters: new CashConvertersAdapter()
};

function argumentValue(flag: string): string | undefined {
  const index = process.argv.indexOf(flag);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function formatEvent(event: ListingEvent): string {
  const { listing } = event;
  const price = listing.price !== undefined ? `NZ$${listing.price.toFixed(2)}` : "price unavailable";
  const prior = event.previousPrice !== undefined ? ` (was NZ$${event.previousPrice.toFixed(2)})` : "";
  return `[${event.type}] [${listing.priority}] ${listing.title} | ${price}${prior} | ${listing.canonicalUrl}`;
}

async function sleep(milliseconds: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function main(): Promise<void> {
  const config = await loadConfig();
  const onlySite = argumentValue("--site");
  const onlySearch = argumentValue("--search");
  const searches = config.searches.filter((search) => {
    if (!search.enabled) return false;
    if (onlySite && search.site !== onlySite) return false;
    if (onlySearch && search.id !== onlySearch) return false;
    return config.sites[search.site]?.enabled;
  });

  if (!searches.length) {
    throw new Error("No enabled searches matched the supplied filters.");
  }

  await mkdir("debug", { recursive: true });
  const state = await loadState();
  const browser = await chromium.launch({ headless: true });
  const events: ListingEvent[] = [];
  let lastSite = "";

  try {
    for (const search of searches) {
      const site: SiteConfig | undefined = config.sites[search.site];
      const adapter = adapters[site?.adapter ?? ""];

      if (!site || !adapter) {
        console.error(`Skipping ${search.id}: no adapter configured for site ${search.site}`);
        continue;
      }

      if (lastSite === search.site) {
        await sleep(site.minimumDelayMs ?? config.defaults.minimumDelayBetweenSearchesMs);
      }

      console.log(`Running ${search.id}: ${search.label}`);
      const result = await adapter.scrape(search, { browser, debugDirectory: "debug" });
      console.log(`  ${result.diagnostics.resultCount} listings; blocked=${result.diagnostics.blocked}`);

      if (result.diagnostics.error) {
        console.error(`  ${result.diagnostics.error}`);
      }

      const timestamp = result.fetchedAt;
      const listings = result.listings.map((raw) => toListing(result.siteId, search, raw, timestamp));
      const minimumDrop = search.alert.minimumPriceDropNzd ?? 1;
      events.push(...applyListings(state, listings, timestamp, minimumDrop));
      lastSite = search.site;
    }
  } finally {
    await browser.close();
  }

  await saveState(state);

  const meaningful = events.filter((event) => event.type !== "seen");
  console.log(`Completed ${searches.length} searches. ${meaningful.length} meaningful events.`);
  meaningful.forEach((event) => console.log(formatEvent(event)));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
