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
  score: number; // 1 - 10
  verdict: string; // e.g. "Solid Deal", "Below Market", "Irrelevant"
  reason: string;
  estimatedMarketPriceNzd?: number;
}

export interface EnrichedListing extends RawListing {
  canonicalUrl: string;
  priority: Priority;
  matchedRules: string[];
  firstSeen: string;
  lastSeen: string;
  siteId: string;
  status: "active" | "sold" | "removed";
  ai?: AiEvaluation;
}

export interface ListingEvent {
  type: "new" | "price_drop";
  listing: EnrichedListing;
  previousPrice?: number;
}
