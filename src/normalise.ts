import type { Listing, RawListing, SearchConfig } from "./models.js";
import { matchRules } from "./matching.js";

export function parsePrice(raw: string | undefined): number | undefined {
  if (!raw) return undefined;
  const match = raw.match(/([0-9]{1,3}(?:,[0-9]{3})*(?:\.[0-9]{2})?|[0-9]+(?:\.[0-9]{2})?)/);
  if (!match) return undefined;
  const cleaned = match[1].replace(/,/g, "");
  const value = Number.parseFloat(cleaned);
  return Number.isFinite(value) ? value : undefined;
}

export function cleanText(value: string | undefined): string {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

export function canonicaliseUrl(rawUrl: string, baseUrl?: string): string {
  try {
    const url = baseUrl ? new URL(rawUrl, baseUrl) : new URL(rawUrl);
    url.hash = "";
    return url.toString();
  } catch {
    return rawUrl.trim();
  }
}

export function toListing(
  siteId: string,
  search: SearchConfig,
  raw: RawListing,
  timestamp: string
): Listing {
  const canonicalUrl = canonicaliseUrl(raw.url);
  const evaluation = matchRules(raw, search.rules);

  return {
    key: `${siteId}:${raw.id}`,
    siteId,
    sourceListingId: raw.id,
    title: cleanText(raw.title),
    canonicalUrl,
    price: raw.price,
    seller: raw.seller ? cleanText(raw.seller) : undefined,
    imageUrl: raw.imageUrl ? canonicaliseUrl(raw.imageUrl) : undefined,
    modelNumber: raw.modelNumber ? cleanText(raw.modelNumber) : undefined,
    condition: raw.condition ? cleanText(raw.condition) : undefined,
    accessories: raw.accessories ? cleanText(raw.accessories) : undefined,
    priority: evaluation.priority,
    matchedRules: evaluation.matchedRules,
    searchIds: [search.id],
    firstSeenAt: timestamp,
    lastSeenAt: timestamp
  };
}
