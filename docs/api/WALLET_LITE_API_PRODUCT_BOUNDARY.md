# Wallet Lite API Product Boundary

Wallet Guard Lite is a **source-closed governed execution backend/runtime** with a public API and adapter-ready integration surface.

This `docs/api` layer defines the **public-safe contract boundary** for integrators, partners, builders, reviewers, and evaluators without declassifying private engine internals.

## What this API layer is for

This layer exists so third parties can safely build on top of Wallet Guard Lite, including:

- wallet-side review interfaces
- dashboards
- visual indicators
- treasury approval consoles
- browser overlays
- alerting and receipt pipelines
- policy-aware transaction review flows

## What this layer exposes

This layer may expose:

- preview API contract
- response shape
- receipt structure
- reason codes
- simulation surface
- evidence references
- integrator guidance
- public-safe examples

## What this layer does not expose

This layer does **not** expose:

- private engine internals
- classified heuristics
- confidential orchestration
- proprietary runtime composition
- premium rule packs
- restricted validation harnesses
- crown-jewel implementation details

## Canonical public-safe rule

**Key is not enough.**

A valid signature must not be treated as sufficient for unsafe irreversible execution.

## Canonical surface

Read these first:

- [Wallet Lite API Spec V1](WALLET_LITE_API_SPEC_V1.md)
- [Wallet Lite Integrator Guide](WALLET_LITE_INTEGRATOR_GUIDE.md)
- [Wallet Lite Reason Codes](WALLET_LITE_REASON_CODES_V1.md)
- [Wallet Lite Public Evidence Index](WALLET_LITE_PUBLIC_EVIDENCE_INDEX.md)
- [Wallet Lite Receipt Schema V1](WALLET_LITE_RECEIPT_SCHEMA_V1.json)

## Summary

Wallet Guard Lite should be understood publicly as an **execution intelligence / governed execution layer** that third parties can call before execution and render through whatever interface best suits their product.