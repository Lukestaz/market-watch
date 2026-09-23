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
  site: string;
  label: string;
  path: string;
  enabled: boolean;
  rules: SearchRule[];
}

export interface SiteConfig {
  adapter: string;
  baseUrl: string;
  enabled: boolean;
  minimumDelayMs?: number;
  deepScrapeCandidateLimit?: number;
}

export interface DefaultsConfig {
  minimumDelayBetweenSearchesMs: number;
}

export interface WatchConfig {
  defaults: DefaultsConfig;
  sites: Record<string, SiteConfig>;
  searches: SearchConfig[];
}

export type AppConfig = WatchConfig;

export interface RawListing {
  id: string;
  title: string;
  url: string;
  priceText?: string;
  price?: number;
  seller?: string;
  imageUrl?: string;
  modelNumber?: string;
  condition?: string;
  accessories?: string;
  rawText?: string;
}

export interface Listing {
  key: string;
  siteId: string;
  sourceListingId: string;
  title: string;
  canonicalUrl: string;
  price?: number;
  seller?: string;
  imageUrl?: string;
  modelNumber?: string;
  condition?: string;
  accessories?: string;
  priority: Priority;
  matchedRules: string[];
  searchIds: string[];
  firstSeenAt: string;
  lastSeenAt: string;
}

export interface WatchState {
  version?: number;
  updatedAt: string;
  listings: Record<string, Listing>;
}

export type ListingEventType = "new" | "price_drop" | "seen" | "price_change";

export interface ListingEvent {
  type: ListingEventType;
  listing: Listing;
  previousPrice?: number;
  timestamp?: string;
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
