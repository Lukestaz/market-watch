import type { ScrapeResult, SearchConfig } from "../models.js";

export interface SiteAdapterContext {
  signal?: AbortSignal;
}

export interface SiteAdapter {
  readonly siteId: string;
  scrape(search: SearchConfig, context: SiteAdapterContext): Promise<ScrapeResult>;
}
