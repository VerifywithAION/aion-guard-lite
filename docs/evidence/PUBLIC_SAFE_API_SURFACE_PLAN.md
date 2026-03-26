# Public-Safe API Surface Plan

## Purpose

This document defines the future public-safe API posture for Wallet Guard Lite.

It is not the full internal API specification.

It is the thin commercial surface that may be published later without weakening the moat.

---

## Design principle

If a public API surface is exposed later, it must support adoption without exposing implementation internals.

That means the published API surface should include only what a customer or partner needs to consume the product safely.

---

## What may be public later

A future public-safe API surface may include:

- endpoint name
- request top-level fields
- response top-level fields
- example request payloads
- example response payloads
- decision families
- public reason-code families
- receipt field overview
- integration overview

---

## What must remain private

A public-safe API surface must not expose:

- implementation scripts
- runtime operational procedures
- private adapter logic
- internal architecture notes
- internal orchestration behavior
- monetizable heuristics
- private proof harnesses
- internal simulation logic
- internal deployment structure

---

## Example public-safe endpoint posture

Potential public-safe endpoint example:

- `POST /decision/preview`

Potential public-safe request categories:

- `chainFamily`
- `network`
- transaction summary fields
- optional wallet context fields

Potential public-safe response categories:

- `ok`
- `chainFamily`
- `decision`
- `recommendedAction`
- `reasonCodes`
- `risk`
- `receipt`

This is enough for product adoption.

It is not enough to expose internal implementation depth.

---

## Commercial purpose

This future thin API surface would allow:

- customer integration
- partner integration
- hosted product usage
- commercial onboarding

without turning the public repo into a clone guide.

---

## Final statement

The public-safe API surface should be thin, adoption-friendly, and moat-safe.

It should describe how to consume the product, not how to rebuild it.