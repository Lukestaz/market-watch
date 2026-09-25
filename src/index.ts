import { loadConfig } from "./config.js";
import { scrapeCashConverters } from "./sites/cashconverters.js";
import { scrapeDollarDealers } from "./sites/dollardealers.js";
import { toListing } from "./normalise.js";
import { evaluateListingWithGemini } from "./ai.js";
import { applyListings, loadState, saveState } from "./state.js";
import { sendEmailAlerts } from "./alerts.js";
import { generateUiFiles } from "./ui.js";
import type { EnrichedListing, RawListing, SearchConfig } from "./models.js";

async function scrapeSearch(
  site: "dollardealers" | "cashconverters",
  path: string
): Promise<RawListing[]> {
  if (site === "cashconverters") {
    return scrapeCashConverters(path);
  } else if (site === "dollardealers") {
    return scrapeDollarDealers(path);
  }
  return [];
}

async function main(): Promise<void> {
  console.log("Starting Market Watch run...");
  const config = loadConfig();
  const state = await loadState();

  const allRawListings = new Map<string, { raw: RawListing; search: SearchConfig }>();

  for (const search of config.searches) {
    if (!search.enabled) {
      console.log(`Skipping disabled search: ${search.id}`);
      continue;
    }

    console.log(`Executing search: ${search.label} (${search.site})`);
    try {
      const rawListings = await scrapeSearch(search.site, search.path);
      for (const raw of rawListings) {
        if (!allRawListings.has(raw.id)) {
          allRawListings.set(raw.id, { raw, search });
        }
      }
    } catch (err) {
      console.error(`Failed to scrape ${search.id}:`, err);
    }
  }

  console.log(`Total raw listings collected: ${allRawListings.size}`);

  const activeCandidates: EnrichedListing[] = [];
  const now = new Date().toISOString();

  for (const { raw, search } of allRawListings.values()) {
    const normalised = toListing(search.site, search, raw, now);

    if (normalised.priority === "ignore") {
      continue;
    }

    const enriched: EnrichedListing = {
      ...normalised,
      status: "active"
    };

    activeCandidates.push(enriched);
  }

  console.log(`Candidate listings passing keyword rules: ${activeCandidates.length}`);

  const evaluatedListings: EnrichedListing[] = [];
  for (const listing of activeCandidates) {
    const matchedRuleLabels = config.searches
      .flatMap((s) => s.rules)
      .filter((r) => listing.matchedRules.includes(r.id))
      .map((r) => r.label)
      .join(", ") || "Target Item";

    const aiResult = await evaluateListingWithGemini(listing, matchedRuleLabels);
    if (aiResult) {
      console.log(`[AI] "${listing.title}" -> ${aiResult.verdict} (score: ${aiResult.score}/10, valid: ${aiResult.isTruePositive})`);
      if (!aiResult.isTruePositive) {
        console.log(`[AI] Dropping false positive: ${listing.title} (${aiResult.reason})`);
        continue;
      }
      listing.ai = aiResult;
    }
    evaluatedListings.push(listing);
  }

  console.log(`Listings verified after AI assessment: ${evaluatedListings.length}`);

  const events = applyListings(state, evaluatedListings, now);
  await saveState(state);

  console.log(`Listing events detected: ${events.length}`);

  await sendEmailAlerts(events);
  await generateUiFiles(state, events);

  console.log("Market Watch run complete.");
}

main().catch((err) => {
  console.error("Fatal error in Market Watch:", err);
  process.exit(1);
});
