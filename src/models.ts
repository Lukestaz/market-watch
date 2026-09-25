export type Priority = "critical" | "high" | "normal" | "ignore";

export interface SearchRule {
  id: string;
  label: string;
  priority: Priority;
  includeKeywords: string[];
  excludeKeywords?: string[];
  minimumPrice?: number;
  maximumPrice?: number;
}

export interface SearchConfig {
  id: string;
  site: "dollardealers" | "cashconverters";
  label: string;
  path: string;
  enabled: boolean;
  rules: SearchRule[];
}

export interface RawListing {
  id: string;
  title: string;
  url: string;
  price?: number;
  seller?: string;
  modelNumber?: string;
  condition?: string;
  accessories?: string;
  rawText?: string;
}

export interface AiEvaluation {
  isTruePositive: boolean;
  score: number;
  verdict: string;
  reason: string;
  estimatedMarketPriceNzd?: number;
}

/**
 * Normalized listing shape stored by the watcher state engine.
 *
 * `id` remains the source listing identifier inherited from RawListing.
 * `key` is the stable state key used by WatchState.listings.
 */
export interface Listing extends RawListing {
  key: string;
  canonicalUrl: string;
  priority: Priority;
  matchedRules: string[];
  searchIds: string[];
  firstSeenAt: string;
  lastSeenAt: string;
  siteId: string;
  status: "active" | "sold" | "removed";
  ai?: AiEvaluation;
}

/**
 * Compatibility type for code that still uses the earlier timestamp names.
 *
 * New state-oriented code should use Listing and firstSeenAt / lastSeenAt.
 */
export interface EnrichedListing extends Listing {
  firstSeen: string;
  lastSeen: string;
}

/**
 * Persistent watcher state, keyed by each listing's stable `key`.
 */
export interface WatchState {
  listings: Record<string, Listing>;
  updatedAt: string;
}

/**
 * Events emitted when incoming listings are applied to WatchState.
 */
export interface ListingEvent {
  type: "new" | "price_drop" | "price_change" | "seen";
  listing: Listing;
  previousPrice?: number;
  timestamp: string;
}
