import * as cheerio from 'cheerio';
import { readFile, writeFile } from 'node:fs/promises';
import type { RawListing, Listing, WatchState, ListingEvent } from './models.js';
import { generateUiFiles as generateBaseUi } from './ui.js';

export interface AuctionFields { minimumBid?: number; bidCount?: number; bidIncrease?: number; auctionFetchedAt?: string; }
export type AuctionRaw = RawListing & AuctionFields;

export function parseAuctionHtml(html: string): Partial<AuctionRaw> {
  const $ = cheerio.load(html);
  const number = (selector: string): number | undefined => {
    for (const el of $(selector).toArray()) {
      const text = $(el).text().trim().replace(/[$,\s]/g, '');
      if (!/^\d+(?:\.\d{1,2})?$/.test(text)) continue;
      const n = Number(text);
      if (Number.isFinite(n)) return n;
    }
    return undefined;
  };
  const price = number('.awe-rt-CurrentPrice .NumberPart');
  const minimumBid = number('.awe-rt-MinimumBid.InlineQuickBid .NumberPart');
  const countText = $('.awe-rt-AcceptedListingActionCount').first().text().trim().replace(/,/g, '');
  const count = /^\d+$/.test(countText) ? Number(countText) : undefined;
  const bidCount = count !== undefined && Number.isSafeInteger(count) ? count : undefined;
  return { price, priceText: price === undefined ? undefined : '$' + price.toFixed(2), minimumBid, bidCount };
}

export async function recoverAuction(raw: RawListing): Promise<AuctionRaw> {
  const url = new URL(raw.url);
  if (url.protocol !== 'https:' || url.hostname !== 'shop.cashconverters.co.nz' || !url.pathname.startsWith('/Listing/Details/')) return raw;
  try {
    const res = await fetch(url, { redirect: 'error', signal: AbortSignal.timeout(15000), headers: { 'User-Agent': 'Mozilla/5.0', Accept: 'text/html' } });
    if (!res.ok) { console.warn('[Auction] Detail HTTP ' + res.status); return raw; }
    const fields = parseAuctionHtml(await res.text());
    return { ...raw, ...fields, price: fields.price ?? raw.price, priceText: fields.priceText ?? raw.priceText, auctionFetchedAt: new Date().toISOString() };
  } catch (err) { console.warn('[Auction] Detail recovery failed', err instanceof Error ? err.message : 'Unknown error'); return raw; }
}

export function withBidIncrease(raw: AuctionRaw, previous?: Listing): AuctionRaw {
  const prior = previous as (Listing & AuctionFields) | undefined;
  const bidIncrease = raw.bidCount !== undefined && prior?.bidCount !== undefined && raw.bidCount >= prior.bidCount ? raw.bidCount - prior.bidCount : undefined;
  return { ...raw, bidIncrease };
}

export async function generateAuctionUi(state: WatchState, events: ListingEvent[]): Promise<void> {
  await generateBaseUi(state, events);
  const $ = cheerio.load(await readFile('dist/index.html', 'utf8'));
  const byUrl = new Map(Object.values(state.listings).map(l => [l.canonicalUrl, l as Listing & AuctionFields]));
  $('.card').each((_, el) => {
    const card = $(el);
    const listing = byUrl.get(card.find('.card-title a').attr('href') || '');
    if (!listing || listing.siteId !== 'cashconverters') return;
    const row = $('<p class="meta-row auction-activity"></p>');
    const parts: string[] = [];
    if (listing.bidCount !== undefined) parts.push(listing.bidCount + ' recorded auction actions');
    if (listing.bidIncrease !== undefined && listing.bidIncrease > 0) parts.push('🔥 +' + listing.bidIncrease + ' since last observation');
    if (listing.minimumBid !== undefined) parts.push('Quick Bid: NZ$' + listing.minimumBid.toFixed(2));
    if (!parts.length) return;
    row.text(parts.join(' · '));
    row.attr('title', 'Sampled from product detail HTML; activity count is not a live feed or a count of distinct bidders.');
    card.find('.meta').prepend(row);
  });
  await writeFile('dist/index.html', $.html(), 'utf8');
}
