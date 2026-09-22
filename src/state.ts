import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import type { Listing, ListingEvent, WatchState } from "./models.js";
import { highestPriority, mergeUnique } from "./matching.js";

const EMPTY_STATE: WatchState = { listings: {}, updatedAt: "" };

export async function loadState(path = "data/state.json"): Promise<WatchState> {
  try {
    return JSON.parse(await readFile(path, "utf8")) as WatchState;
  } catch {
    return structuredClone(EMPTY_STATE);
  }
}

export async function saveState(state: WatchState, path = "data/state.json"): Promise<void> {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, `${JSON.stringify(state, null, 2)}\n`, "utf8");
}

export function applyListings(
  state: WatchState,
  incoming: Listing[],
  timestamp: string,
  minimumPriceDropNzd = 1
): ListingEvent[] {
  const events: ListingEvent[] = [];

  for (const listing of incoming) {
    const existing = state.listings[listing.key];

    if (!existing) {
      state.listings[listing.key] = listing;
      events.push({ type: "new", listing, timestamp });
      continue;
    }

    const previousPrice = existing.price;
    const nextPrice = listing.price;
    const priceDropped = previousPrice !== undefined && nextPrice !== undefined && previousPrice - nextPrice >= minimumPriceDropNzd;

    const merged: Listing = {
      ...existing,
      ...listing,
      firstSeenAt: existing.firstSeenAt,
      lastSeenAt: timestamp,
      searchIds: mergeUnique(existing.searchIds, listing.searchIds),
      matchedRules: mergeUnique(existing.matchedRules, listing.matchedRules),
      priority: highestPriority(existing.priority, listing.priority)
    };

    state.listings[listing.key] = merged;

    if (priceDropped) {
      events.push({ type: "price_drop", listing: merged, previousPrice, timestamp });
    } else if (previousPrice !== nextPrice) {
      events.push({ type: "price_change", listing: merged, previousPrice, timestamp });
    } else {
      events.push({ type: "seen", listing: merged, timestamp });
    }
  }

  state.updatedAt = timestamp;
  return events;
}
