# Deployment readiness checklist

This is a draft backend, not a complete Watch/Hide feature. No deployment is performed by this document or validator. Preserve the existing scraper workflow and GitHub Pages publishing.

## Configuration gate

Run from the repository root:

```sh
node sync-backend/scripts/validate-config.mjs
```

The checked-in placeholder configuration is expected to fail. Populate the real D1 database UUID, Access issuer, Access audience, and exact dashboard origin before deployment. The validator reads the current strict-JSON wrangler.jsonc; it deliberately fails if JSON comments are introduced. It does not contact Cloudflare or verify account ownership, permissions, secrets, or Access policies.

## Required before deployment

- Generate and commit a backend package-lock.json using npm, then use npm ci in CI. Do not fabricate a lockfile.
- Add automated Worker tests for Access JWT rejection/validation, read-only pipeline authorization, allowed origins, listing URL normalization, D1 failures, and version conflicts.
- Create the D1 database and apply migrations/0001.sql to the intended remote database.
- Store CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID in GitHub Actions secrets. Restrict token permissions to the required account/resources. Never put credentials in source or chat.
- Configure PIPELINE_TOKEN as a Worker secret, separately from the pipeline's secret.
- Decide authenticated dashboard hosting. Prefer same-origin; existing GitHub Pages cross-origin cookies, Access login, and OPTIONS requests remain unverified.
- Configure an explicit service-access route for pipeline GET requests. Access may intercept requests before Worker bearer validation. Never grant the pipeline decision-write access.
- Add a separate manually triggered deployment workflow with validation and tests before remote migrations and Worker deployment. Do not deploy on failed validation or use if: always() for deployment.
- Verify the deployed API rejects unauthorized access, supports authorized reads/writes, and returns 409 for stale versions.

## Required before merging the full feature

Implement dashboard controls/gestures, Watch and Hidden filters, Undo, sync error UX, and shared-decision reads before alerts. Define outage behavior so hidden-listing alerts are not silently sent when sync fails. Watching must not change matching priority or availability. Validate cross-device persistence and preserve existing diagnostics.
