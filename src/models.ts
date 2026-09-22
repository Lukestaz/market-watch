export type ListingAvailability = "available" | "out_of_stock" | "unknown";
export type Priority = "critical" | "high" | "normal" | "ignore";

export interface PriorityRule {
  label: string;
  priority: Priority;
  regex: string;
}

export interface AlertConfig {
  onNew: boolean;
  onPriceDrop: boolean;
  minimumPriceDropNzd?: number;
}

export interface SearchConfig {
  id: string;
  enabled: boolean;
  site: string;
  type: "listingSearch" | "productPage" | "categoryPage" | "customFeed";
  label: string;
  url: string;
  alert: AlertConfig;
  priorityRules?: PriorityRule[];
}

export interface SiteConfig {
  enabled: boolean;
  adapter: string;
  minimumDelayMs?: number;
}

export interface WatchConfig {
  defaults: {
    timezone: string;
    maxResultsPerSearch: number;
    staleAfterDays: number;
    minimumDelayBetweenSearchesMs: number;
  };
  sites: Record<string, SiteConfig>;
  searches: SearchConfig[];
}

export interface Listing {
  key: string;
  source: string;
  searchIds: string[];
  sourceListingId?: string;
  canonicalUrl: string;
  title: string;
  price?: number;
  priceText?: string;
  currency: "NZD";
  availability: ListingAvailability;
  location?: string;
  imageUrl?: string;
  condition?: string;
  seller?: string;
  rawText?: string;
  priority: Priority;
  matchedRules: string[];
  firstSeenAt: string;
  lastSeenAt: string;
}

export interface RawListing {
  sourceListingId?: string;
  url: string;
  title: string;
  priceText?: string;
  location?: string;
  imageUrl?: string;
  condition?: string;
  seller?: string;
  rawText?: string;
  availability?: ListingAvailability;
}

export interface ScrapeDiagnostics {
  resultCount: number;
  blocked: boolean;
  error?: string;
  screenshotPath?: string;
  htmlPath?: string;
}

export interface ScrapeResult {
  searchId: string;
  siteId: string;
  fetchedAt: string;
  listings: RawListing[];
  diagnostics: ScrapeDiagnostics;
}

export interface ListingEvent {
  type: "new" | "price_drop" | "price_change" | "seen";
  listing: Listing;
  previousPrice?: number;
  timestamp: string;
}

export interface WatchState {
  listings: Record<string, Listing>;
  updatedAt: string;
}
