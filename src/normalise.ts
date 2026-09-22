import { createHash } from "node:crypto";
import type { Listing, Priority, PriorityRule, RawListing, SearchConfig } from "./models.js";

export function normaliseText(value: string | undefined): string {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

export function normaliseUrl(value: string): string {
  const url = new URL(value);
  url.hash = "";
  ["utm_source", "utm_medium", "utm_campaign", "fbclid", "gclid"].forEach((key) => {
    url.searchParams.delete(key);
  });
  return url.toString();
}

export function parseNzdPrice(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const match = value.replace(/,/g, "").match(/(?:NZ\$|\$)\s*(\d+(?:\.\d{1,2})?)/i);
  return match ? Number(match[1]) : undefined;
}

export function makeListingKey(source: string, sourceListingId: string | undefined, url: string): string {
  if (sourceListingId) return `${source}:${sourceListingId}`;
  return `${source}:${createHash("sha256").update(url).digest("hex")}`;
}

export function classify(text: string, rules: PriorityRule[] = []): { priority: Priority; matchedRules: string[] } {
  const rank: Record<Priority, number> = { ignore: 0, normal: 1, high: 2, critical: 3 };
  let priority: Priority = "normal";
  const matchedRules: string[] = [];

  for (const rule of rules) {
    if (new RegExp(rule.regex).test(text)) {
      matchedRules.push(rule.label);
      if (rank[rule.priority] > rank[priority]) priority = rule.priority;
    }
  }

  return { priority, matchedRules };
}

export function toListing(source: string, search: SearchConfig, raw: RawListing, timestamp: string): Listing {
  const canonicalUrl = normaliseUrl(raw.url);
  const searchable = normaliseText([
    raw.title,
    raw.rawText,
    raw.location,
    raw.condition,
    raw.seller
  ].filter(Boolean).join(" ")).toLowerCase();
  const classification = classify(searchable, search.priorityRules);

  return {
    key: makeListingKey(source, raw.sourceListingId, canonicalUrl),
    source,
    searchIds: [search.id],
    sourceListingId: raw.sourceListingId,
    canonicalUrl,
    title: normaliseText(raw.title),
    price: parseNzdPrice(raw.priceText),
    priceText: normaliseText(raw.priceText),
    currency: "NZD",
    availability: raw.availability ?? "available",
    location: normaliseText(raw.location),
    imageUrl: raw.imageUrl,
    condition: normaliseText(raw.condition),
    seller: normaliseText(raw.seller),
    rawText: normaliseText(raw.rawText),
    priority: classification.priority,
    matchedRules: classification.matchedRules,
    firstSeenAt: timestamp,
    lastSeenAt: timestamp
  };
}
