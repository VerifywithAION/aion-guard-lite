# Wallet Lite Public Evidence Index

This file is the canonical public-safe API evidence index for Wallet Guard Lite.

## Current public-safe API posture

Wallet Guard Lite currently has public-safe proof for:

- structured preview decisions
- reason code surfaces
- receipt emission
- simulated impact surfaces
- allow / warn / block behavior
- explicit override boundary for warn-class flows
- hard block posture for non-overridable classes
- builder-facing integration posture

## Current strongest public-safe examples

The strongest public-safe examples currently include:

- self-transfer -> ALLOW
- malicious approval -> WARN or BLOCK depending on policy class
- unlimited approval -> BLOCK
- address poisoning suspicion -> WARN
- malformed or invalid request handling
- receipt/fingerprint evidence surfaces
- forensic decision history/export posture

## Public-safe builder posture

Builders can use this API surface to create:

- dashboards
- visual indicators
- wallet UX layers
- risk banners
- treasury review panels
- policy-aware execution consoles

Wallet Guard Lite does not require a single canonical frontend. The API is intentionally headless/public-safe so others can design their own interfaces on top.

## Canonical files

- [Wallet Lite API Product Boundary](WALLET_LITE_API_PRODUCT_BOUNDARY.md)
- [Wallet Lite API Spec V1](WALLET_LITE_API_SPEC_V1.md)
- [Wallet Lite Integrator Guide](WALLET_LITE_INTEGRATOR_GUIDE.md)
- [Wallet Lite Reason Codes V1](WALLET_LITE_REASON_CODES_V1.md)
- [Wallet Lite Receipt Schema V1](WALLET_LITE_RECEIPT_SCHEMA_V1.json)

## Public-safe constraint

No private runtime internals, proprietary enforcement logic, or classified source-closed engine composition details are exposed here.