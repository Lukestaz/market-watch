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
  priceText?: string;
  seller?: string;
  modelNumber?: string;
  condition?: string;
  accessories?: string;
  imageUrl?: string;
  rawText?: string;
}

export interface ScrapeDiagnostics {
  resultCount: number;
  blocked: boolean;
  error?: string;
}

export interface ScrapeResult {
  siteId: string;
  fetchedAt: string;
  diagnostics: ScrapeDiagnostics;
  listings: RawListing[];
}

export interface AiEvaluation {
  isTruePositive: boolean;
  score: number;
  verdict: string;
  reason: string;
  estimatedMarketPriceNzd?: number;
}

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

export interface EnrichedListing extends Listing {
  firstSeen: string;
  lastSeen: string;
}

export interface WatchState {
  listings: Record<string, Listing>;
  updatedAt: string;
}

export interface ListingEvent {
  type: "new" | "price_drop" | "price_change" | "seen";
  listing: Listing;
  previousPrice?: number;
  timestamp: string;
}
