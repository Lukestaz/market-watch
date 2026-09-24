import * as cheerio from "cheerio";
import type { RawListing } from "../models.js";

const BASE_URL = "https://shop.cashconverters.co.nz";

export async function scrapeCashConverters(
  searchPath: string,
  fetchFn: typeof fetch = fetch
): Promise<RawListing[]> {
  const url = `${BASE_URL}${searchPath}`;
  console.log(`[CashConverters] Fetching: ${url}`);

  const res = await fetchFn(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.5"
    }
  });

  if (!res.ok) {
    console.warn(`[CashConverters] HTTP ${res.status} for ${url}`);
    return [];
  }

  const html = await res.text();
  const $ = cheerio.load(html);
  const listings: RawListing[] = [];

  // Scrape sections with data-listingid (AuctionWorx CMS structure)
  const sections = $("section[data-listingid]");
  if (sections.length > 0) {
    sections.each((_, sec) => {
      const $sec = $(sec);
      const listingId = $sec.attr("data-listingid") || "";
      const titleLink = $sec.find("h2.title a, .title a, a[href*='Listing/Details/']").first();
      const title = titleLink.text().trim();
      if (!title) return;

      const href = titleLink.attr("href") || "";
      const canonicalUrl = href.startsWith("http") ? href : `${BASE_URL}${href}`;
      const id = listingId ? `cc-${listingId}` : `cc-${Buffer.from(href).toString("base64").slice(0, 16)}`;

      const priceText =
        $sec.find(".price .NumberPart, .price, .awe-rt-CurrentPrice, .awe-rt-MinimumBid .NumberPart").first().text().trim();
      const priceNum = parseFloat(priceText.replace(/[^0-9.]/g, ""));
      const price = isNaN(priceNum) ? undefined : priceNum;

      const seller = $sec.find(".seller a, .seller, [class*='seller']").first().text().trim() || undefined;

      listings.push({
        id,
        title,
        url: canonicalUrl,
        price,
        seller,
        rawText: $sec.text().replace(/\s+/g, " ").trim()
      });
    });
  }

  // Fallback if cards or tables differ
  if (listings.length === 0) {
    $("a[href*='/Listing/Details/']").each((_, el) => {
      const $el = $(el);
      const href = $el.attr("href") || "";
      const title = $el.text().trim();
      if (title.length < 5) return;

      const idMatch = href.match(/Listing\/Details\/(\d+)/i);
      const id = idMatch ? `cc-${idMatch[1]}` : `cc-${Buffer.from(href).toString("base64").slice(0, 16)}`;
      const canonicalUrl = href.startsWith("http") ? href : `${BASE_URL}${href}`;

      const $container = $el.closest("div, li, tr, section");
      const priceText = $container.find("[class*='price'], .NumberPart, :contains('$')").first().text().trim();
      const priceNum = parseFloat(priceText.replace(/[^0-9.]/g, ""));

      listings.push({
        id,
        title,
        url: canonicalUrl,
        price: isNaN(priceNum) ? undefined : priceNum,
        rawText: $container.text().replace(/\s+/g, " ").trim()
      });
    });
  }

  // Deduplicate
  const seen = new Set<string>();
  const unique = listings.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });

  console.log(`[CashConverters] Found ${unique.length} listings for ${searchPath}`);
  return unique;
}
