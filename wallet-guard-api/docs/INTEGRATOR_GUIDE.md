# Wallet Guard Lite Integrator Guide

## Core principle

Wallet Guard Lite is headless.

It is meant to be embedded into whatever UI or product layer best fits the builder.

## Builder freedom

You can build on top of Wallet Guard Lite with:

- dashboards
- visual indicators
- alert sidebars
- transaction review modals
- mobile wallet screens
- extension popups
- institutional controls
- backend approval workflows

Wallet Guard Lite does not force a single frontend.

## Recommended flow

1. Capture transaction intent in your app or wallet.
2. Send it to POST /v1/preview.
3. Interpret decision.
4. Render your own UI:
   - green / allow
   - yellow / warn
   - red / block
5. If ALLOW, continue to execution flow.
6. If WARN, require explicit human review.
7. If BLOCK, stop the transaction.
8. Optionally fetch /v1/history for dashboards or case review.
9. Optionally fetch /v1/export for evidence packaging.

## Suggested UI patterns

Consumer wallet:
- shield icon
- color-coded decision chip
- expandable "why" drawer

Treasury console:
- queue table
- policy version ribbon
- receipt id column
- fingerprint column

Analyst dashboard:
- blocked transactions graph
- top reason codes
- recent tx fingerprints
- forensic export button

## Important rule

The public API is the stable integration surface.

The engine remains private.