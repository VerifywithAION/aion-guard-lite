# Wallet Lite Public API Surface V1

## Purpose

This document defines the public-safe API surface for Wallet Lite.

It is intentionally thin.

It is designed to let wallet builders, platforms, and partners integrate Wallet Lite as an execution-governance layer without exposing private implementation internals.

---

## Product role

Wallet Lite is an execution-governance API.

It sits between user intent and blockchain execution.

It evaluates a transaction preview request and returns a governed response with:

- decision
- recommended action
- reason codes
- risk posture
- receipt information

---

## Public endpoint model

### Preview endpoint

`POST /v1/decision/preview`

Purpose:

- accept a transaction preview request
- evaluate the request through Wallet Lite governance
- return a deterministic decision surface

---

## Public-safe request categories

The public-safe request surface may include:

- `chainFamily`
- `network`
- `walletAddress`
- transaction summary fields
- chain-specific preview fields
- optional context fields needed for safe preview

Examples of chain families:

- `evm`
- `bitcoin`
- `solana`

---

## Public-safe response categories

The public-safe response surface may include:

- `ok`
- `version`
- `chainFamily`
- `decision`
- `recommendedAction`
- `reasonCodes`
- `risk`
- `tx`
- `receipt`

Optional chain-specific consequence surfaces may also be returned when supported.

---

## Decision family

Wallet Lite public decision family:

- `EXECUTE_NOW`
- `QUEUED`
- `BLOCKED`
- `PAUSED`

---

## Recommended action family

Wallet Lite public recommended actions may include:

- `EXECUTE`
- `QUEUE_AND_REVIEW`
- `BLOCK`
- `UNPAUSE_OR_ABORT`
- `REVIEW`

---

## Receipt posture

Wallet Lite may return receipt metadata so that decisions can be:

- logged
- audited
- referenced
- proved later

Public receipt surface may include:

- `receiptId`
- `sha256`
- receipt reference field

---

## Public boundary

This public API surface does not expose:

- runtime scripts
- adapter implementation logic
- internal orchestration
- private simulation internals
- private heuristics
- internal deployment structure

---

## Intended use

Wallet builders can consume this API and build their own:

- wallet interfaces
- review consoles
- dashboard surfaces
- customer flows
- decision prompts

Wallet Lite provides governance.

Integrators provide the user experience.