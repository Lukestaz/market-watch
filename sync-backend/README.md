# Synced Watch/Hide backend scaffold

Draft only: not deployed or runtime-tested. Dashboard and alert integration are still pending. All approved Access users share one decision store; this is not a multi-user service.

## API
GET /api/decisions returns decisions. PUT accepts {identity, decision, version}; decision is normal, watch, or hide. Identity is the canonical retailer URL without query/hash/trailing slash. Use version 0 for insertion and the returned version for updates or Undo. On 409 refresh before retrying. Keep normal records as versioned tombstones.

## Deploy prerequisites
Install dependencies in this directory. Create a D1 database, replace database_id in wrangler.jsonc, and apply migrations/0001.sql. Configure ACCESS_ISSUER (https://TEAM.cloudflareaccess.com), ACCESS_AUD and DASHBOARD_ORIGIN. Set PIPELINE_TOKEN using wrangler secret put PIPELINE_TOKEN, never in source or browser code.

Restrict browser access to the owner's identity using Cloudflare Access. Prefer same-origin authenticated dashboard/API hosting. GitHub Pages cross-origin login, Access cookie behavior and preflight need testing before use. Configure a service-auth path so the pipeline's GET can reach the Worker; Access may otherwise intercept it before bearer-token validation. The pipeline bearer token cannot write decisions.

## Remaining work before merge
UI thumbnails, gestures and buttons, Watch/Hidden filters, Undo, sync failures, and authentication UX. Read shared decisions before alerts and suppress hidden listings. Watching must not modify matching priority or availability. Define outage behavior to avoid silently sending hidden-item alerts. Preserve existing workflow and diagnostics.

Validate Worker auth, D1 migration, concurrent updates, CORS, cross-device behavior, and repository typechecks before deployment. Do not merge this scaffold as though the full feature is complete.
