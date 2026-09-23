import nodemailer from "nodemailer";
import type { ListingEvent } from "./models.js";

export async function sendEmailAlerts(events: ListingEvent[]): Promise<void> {
  const user = process.env.GMAIL_USER?.trim();
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "").trim();
  const to = process.env.ALERT_TO_EMAIL?.trim() || user;

  if (!user || !pass || !to) {
    console.log("Email alerts skipped: GMAIL_USER, GMAIL_APP_PASSWORD, or ALERT_TO_EMAIL not set in environment.");
    return;
  }

  const alertable = events.filter((e) => e.type === "new" || e.type === "price_drop");
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
      <h2 style="color: ${hasCritical ? '#d93025' : '#1a73e8'}; border-bottom: 2px solid #eee; padding-bottom: 8px; margin-top: 10px;">
        Market Watch Alerts (${alertable.length} update${alertable.length > 1 ? "s" : ""})
      </h2>
      <ul style="list-style: none; padding: 0; margin: 0;">
        ${alertable
          .map((event) => {
            const { listing } = event;
            const price = listing.price !== undefined ? `NZ$${listing.price.toFixed(2)}` : "Price unavailable";
            const oldPrice = event.previousPrice !== undefined ? `<span style="text-decoration: line-through; color: #888; font-size: 0.9em; margin-left: 4px;">(was NZ$${event.previousPrice.toFixed(2)})</span>` : "";
            const badgeBg = listing.priority === "critical" ? "#d93025" : listing.priority === "high" ? "#f2994a" : "#6c757d";
            const eventLabel = event.type === "new" ? "NEW LISTING" : "PRICE DROP";
            const sourceName = listing.siteId === "dollardealers" ? "Dollar Dealers" : "Cash Converters";

            return `
              <li style="border: 1px solid #e0e0e0; border-radius: 8px; margin-bottom: 16px; padding: 14px; background: #fafafa;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                  <div>
                    <span style="background: ${badgeBg}; color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px; text-transform: uppercase; font-weight: bold;">
                      ${listing.priority}
                    </span>
                    <span style="background: #e8f0fe; color: #1a73e8; padding: 2px 8px; border-radius: 4px; font-size: 11px; margin-left: 6px; font-weight: bold;">
                      ${eventLabel}
                    </span>
                    <span style="background: #e2e3e5; color: #383d41; padding: 2px 8px; border-radius: 4px; font-size: 11px; margin-left: 6px; font-weight: bold;">
                      ${sourceName}
                    </span>
                  </div>
                  <strong style="font-size: 18px; color: #1e7e34;">${price}${oldPrice}</strong>
                </div>
                <h3 style="margin: 6px 0; font-size: 16px;">
                  <a href="${listing.canonicalUrl}" style="color: #1a73e8; text-decoration: none;">${listing.title}</a>
                </h3>
                ${listing.modelNumber ? `<p style="margin: 0 0 4px 0; font-size: 13px; color: #222;">Model: <strong>${listing.modelNumber}</strong></p>` : ""}
                ${listing.condition ? `<p style="margin: 0 0 4px 0; font-size: 13px; color: #444;">Condition: <strong>${listing.condition}</strong></p>` : ""}
                ${listing.accessories ? `<p style="margin: 0 0 4px 0; font-size: 13px; color: #555;">Accessories: <em>${listing.accessories}</em></p>` : ""}
                ${listing.seller ? `<p style="margin: 0 0 6px 0; font-size: 13px; color: #666;">Store: <strong>${listing.seller}</strong></p>` : ""}
                ${listing.matchedRules.length ? `<p style="margin: 0 0 10px 0; font-size: 12px; color: #777;">Matched: <em>${listing.matchedRules.join(", ")}</em></p>` : ""}
                <div>
                  <a href="${listing.canonicalUrl}" style="display: inline-block; background: #007bff; color: white; padding: 6px 14px; text-decoration: none; border-radius: 4px; font-size: 13px; font-weight: bold;">
                    View on ${sourceName} &rarr;
                  </a>
                </div>
              </li>
            `;
          })
          .join("")}
      </ul>
      <p style="font-size: 11px; color: #888; border-top: 1px solid #eee; padding-top: 10px; margin-top: 20px;">
        Automated alert delivered from your private GitHub Actions Market Watcher.
      </p>
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
