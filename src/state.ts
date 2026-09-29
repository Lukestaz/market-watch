import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import type { Listing, ListingEvent, WatchState } from "./models.js";
import { highestPriority, mergeUnique } from "./matching.js";

const EMPTY_STATE: WatchState = { listings: {}, updatedAt: "" };

export async function loadState(path = "data/state.json"): Promise<WatchState> {
  try {
    const state = JSON.parse(await readFile(path, "utf8")) as WatchState;
    return dedupeByUrl(state);
  } catch {
    return structuredClone(EMPTY_STATE);
  }
}

export async function saveState(state: WatchState, path = "data/state.json"): Promise<void> {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, `${JSON.stringify(state, null, 2)}\n`, "utf8");
}

/** Collapse legacy duplicate keys that point at the same product URL (keep the most recently seen). */
function dedupeByUrl(state: WatchState): WatchState {
  const byUrl = new Map<string, string>();
  for (const [key, l] of Object.entries(state.listings)) {
    const url = l.canonicalUrl;
    if (!url) continue;
    const prevKey = byUrl.get(url);
    if (!prevKey) { byUrl.set(url, key); continue; }
    const prev = state.listings[prevKey];
    const keepNew = (l.lastSeenAt ?? "") >= (prev.lastSeenAt ?? "");
    const drop = keepNew ? prevKey : key;
    const keep = keepNew ? key : prevKey;
    state.listings[keep].firstSeenAt = [prev.firstSeenAt, l.firstSeenAt].sort()[0];
    delete state.listings[drop];
    byUrl.set(url, keep);
  }
  return state;
}

export function applyListings(
  state: WatchState,
  incoming: Listing[],
  timestamp: string,
  minimumPriceDropNzd = 1,
  scannedSites: Set<string> = new Set()
): ListingEvent[] {
  const events: ListingEvent[] = [];

  const keyByUrl = new Map(Object.entries(state.listings).map(([k, l]) => [l.canonicalUrl, k]));
  const seenKeys = new Set<string>();

  for (const listing of incoming) {
    const existingKey = state.listings[listing.key] ? listing.key : keyByUrl.get(listing.canonicalUrl);
    const existing = existingKey ? state.listings[existingKey] : undefined;
    if (existingKey && existingKey !== listing.key) {
      delete state.listings[existingKey];
      keyByUrl.set(listing.canonicalUrl, listing.key);
    }
    if (seenKeys.has(listing.key)) continue;
    seenKeys.add(listing.key);

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
      // Use this run's evaluation so tightened rules / AI verdicts take effect immediately
      matchedRules: listing.matchedRules,
      priority: listing.priority,
      ai: listing.ai ?? existing.ai,
      status: "active"
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

  // Anything not re-confirmed this run (by a site that returned results) is no longer shown
  for (const [key, l] of Object.entries(state.listings)) {
    if (!seenKeys.has(key) && l.status === "active" && scannedSites.has(l.siteId)) {
      l.status = "removed";
    }
  }

  state.updatedAt = timestamp;
  return events;
}
