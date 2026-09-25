import { loadConfig } from "./config.js";
import { scrapeCashConverters } from "./sites/cashconverters.js";
import { scrapeDollarDealers } from "./sites/dollardealers.js";
import { normaliseListing } from "./normalise.js";
import { matchRules } from "./matching.js";
import { evaluateListingWithGemini } from "./ai.js";
import { loadState, saveState, reconcileListings } from "./state.js";
import { sendEmailAlerts } from "./alerts.js";
import { generateUiFiles } from "./ui.js";
import type { RawListing, EnrichedListing, ListingEvent } from "./models.js";

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
  const state = loadState();

  const allRawListings: Map<string, RawListing> = new Map();

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
          allRawListings.set(raw.id, raw);
        }
      }
    } catch (err) {
      console.error(`Failed to scrape ${search.id}:`, err);
    }
  }

  console.log(`Total raw listings collected: ${allRawListings.size}`);

  const activeCandidates: EnrichedListing[] = [];
  const allRules = config.searches.flatMap((s) => s.rules);

  for (const raw of allRawListings.values()) {
    const normalised = normaliseListing(raw);
    const match = matchRules(normalised, allRules);

    if (match.priority === "ignore") {
      continue;
    }

    // Determine siteId based on ID prefix
    const siteId = raw.id.startsWith("cc-") ? "cashconverters" : "dollardealers";

    const enriched: EnrichedListing = {
      ...normalised,
      canonicalUrl: normalised.url,
      priority: match.priority,
      matchedRules: match.matchedRules,
      firstSeen: new Date().toISOString(),
      lastSeen: new Date().toISOString(),
      siteId,
      status: "active"
    };

    activeCandidates.push(enriched);
  }

  console.log(`Candidate listings passing keyword rules: ${activeCandidates.length}`);

  // AI Evaluation Step (Google Gemini 2.0 Flash)
  const evaluatedListings: EnrichedListing[] = [];
  for (const listing of activeCandidates) {
    // Find the target label
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

  const { updatedState, events } = reconcileListings(state, evaluatedListings);
  saveState(updatedState);

  console.log(`Listing events detected: ${events.length}`);

  // Send email alerts for new or price-dropped items
  await sendEmailAlerts(events);

  // Generate GitHub Pages HTML and JSON feed
  await generateUiFiles(updatedState, events);

  console.log("Market Watch run complete.");
}

main().catch((err) => {
  console.error("Fatal error in Market Watch:", err);
  process.exit(1);
});
