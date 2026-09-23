import nodemailer from "nodemailer";
import type { ListingEvent } from "./models.js";

const DASHBOARD_URL = "https://lukestaz.github.io/market-watch";
const REPO_URL = "https://github.com/Lukestaz/market-watch";

function escapeHtml(str: string | undefined): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getStoreLabel(siteId: string): string {
  if (siteId === "dollardealers") return "Store B";
  if (siteId === "cashconverters") return "Store A";
  return "Marketplace";
}

export async function sendEmailAlerts(events: ListingEvent[]): Promise<void> {
  const user = process.env.GMAIL_USER?.trim();
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "").trim();
  const to = process.env.ALERT_TO_EMAIL?.trim() || user;

  if (!user || !pass || !to) {
    console.log("Email alerts skipped: GMAIL_USER, GMAIL_APP_PASSWORD, or ALERT_TO_EMAIL not set in environment.");
    return;
  }

  // Only alert on critical/high/normal (ignore items are filtered)
  const alertable = events.filter(
    (e) => (e.type === "new" || e.type === "price_drop") && e.listing.priority !== "ignore"
  );
  if (!alertable.length) return;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass }
  });

  const hasCritical = alertable.some((e) => e.listing.priority === "critical");
  const hasHigh = alertable.some((e) => e.listing.priority === "high");

  const badge = hasCritical ? "🚨 [CRITICAL WATCH]" : hasHigh ? "⭐ [PRIORITY WATCH]" : "📦 [MARKET WATCH]";
  const subject = `${badge} ${alertable.length} Item(s) Found / Updated`;

  const html = `
    <div style="font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 650px; margin: 0 auto; color: #222; line-height: 1.5;">
      
      <!-- Header Banner with Direct Dashboard Link -->
      <div style="background: #0f172a; padding: 16px 20px; border-radius: 8px 8px 0 0; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="color: #f8fafc; margin: 0; font-size: 18px;">Market Watch Alerts</h2>
          <p style="color: #94a3b8; margin: 2px 0 0 0; font-size: 12px;">${alertable.length} new or updated item${alertable.length > 1 ? "s" : ""}</p>
        </div>
        <div>
          <a href="${DASHBOARD_URL}" style="background: #2563eb; color: white; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: bold; display: inline-block;">
            Open Live Dashboard &rarr;
          </a>
        </div>
      </div>

      <div style="border: 1px solid #e0e0e0; border-top: none; padding: 16px; background: #ffffff; border-radius: 0 0 8px 8px;">
        <ul style="list-style: none; padding: 0; margin: 0;">
          ${alertable
            .map((event) => {
              const { listing } = event;
              const price = listing.price !== undefined ? "$" + listing.price.toFixed(2) : "Price on request";
              const oldPrice =
                event.previousPrice !== undefined
                  ? `<span style="text-decoration: line-through; color: #888; font-size: 0.9em; margin-left: 4px;">(was $${event.previousPrice.toFixed(2)})</span>`
                  : "";
              const badgeBg =
                listing.priority === "critical"
                  ? "#d93025"
                  : listing.priority === "high"
                  ? "#f2994a"
                  : "#6c757d";
              const eventLabel = event.type === "new" ? "NEW LISTING" : "PRICE DROP";
              const sourceLabel = getStoreLabel(listing.siteId);

              // Pre-filled GitHub issue URL for one-click downvoting/feedback
              const downvoteIssueUrl = `${REPO_URL}/issues/new?title=${encodeURIComponent(`[False Positive] ${listing.title}`)}&body=${encodeURIComponent(`### False Positive Report\n- **Item:** ${listing.title}\n- **URL:** ${listing.canonicalUrl}\n- **Matched Rules:** ${listing.matchedRules.join(", ")}\n\nPlease tune keywords to exclude this item.`)}&labels=feedback`;

              return `
                <li style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 16px; padding: 14px; background: #fafafa;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <div>
                      <span style="background: ${badgeBg}; color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px; text-transform: uppercase; font-weight: bold;">
                        ${listing.priority}
                      </span>
                      <span style="background: #e8f0fe; color: #1a73e8; padding: 2px 8px; border-radius: 4px; font-size: 11px; margin-left: 6px; font-weight: bold;">
                        ${eventLabel}
                      </span>
                      <span style="background: #e2e3e5; color: #383d41; padding: 2px 8px; border-radius: 4px; font-size: 11px; margin-left: 6px; font-weight: bold;">
                        ${sourceLabel}
                      </span>
                    </div>
                    <strong style="font-size: 18px; color: #1e7e34;">${price}${oldPrice}</strong>
                  </div>
                  <h3 style="margin: 6px 0; font-size: 16px;">
                    <a href="${escapeHtml(listing.canonicalUrl)}" style="color: #1a73e8; text-decoration: none;">${escapeHtml(listing.title)}</a>
                  </h3>
                  ${listing.modelNumber ? `<p style="margin: 0 0 4px 0; font-size: 13px; color: #222;">Model: <strong>${escapeHtml(listing.modelNumber)}</strong></p>` : ""}
                  ${listing.condition ? `<p style="margin: 0 0 4px 0; font-size: 13px; color: #444;">Condition: <strong>${escapeHtml(listing.condition)}</strong></p>` : ""}
                  ${listing.accessories ? `<p style="margin: 0 0 4px 0; font-size: 13px; color: #555;">Includes: <em>${escapeHtml(listing.accessories)}</em></p>` : ""}
                  ${listing.seller ? `<p style="margin: 0 0 6px 0; font-size: 13px; color: #666;">Branch: <strong>${escapeHtml(listing.seller.replace(/DollarDealers|CashConverters/gi, "Store"))}</strong></p>` : ""}
                  ${listing.matchedRules.length ? `<p style="margin: 0 0 10px 0; font-size: 11px; color: #888;">Matched: <em>${listing.matchedRules.join(", ")}</em></p>` : ""}
                  
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; border-top: 1px dashed #e2e8f0; padding-top: 10px;">
                    <a href="${escapeHtml(listing.canonicalUrl)}" style="display: inline-block; background: #2563eb; color: white; padding: 6px 14px; text-decoration: none; border-radius: 4px; font-size: 12px; font-weight: bold;">
                      View Listing &rarr;
                    </a>
                    <a href="${downvoteIssueUrl}" style="color: #ef4444; text-decoration: none; font-size: 11px; font-weight: 600;">
                      👎 Mark as False Positive
                    </a>
                  </div>
                </li>
              `;
            })
            .join("")}
        </ul>
        <div style="font-size: 11px; color: #888; border-top: 1px solid #eee; padding-top: 12px; margin-top: 10px; display: flex; justify-content: space-between;">
          <span>Automated alert delivered from your private GitHub Actions Market Watcher.</span>
          <a href="${DASHBOARD_URL}" style="color: #2563eb; text-decoration: none; font-weight: bold;">View Full Dashboard &bull; ${DASHBOARD_URL}</a>
        </div>
      </div>
    </div>
  `;

  console.log(`Sending email alert for ${alertable.length} event(s) to ${to}...`);
  await transporter.sendMail({
    from: `"Market Watcher" <${user}>`,
    to,
    subject,
    html
  });
  console.log("Email alert sent successfully.");
}
