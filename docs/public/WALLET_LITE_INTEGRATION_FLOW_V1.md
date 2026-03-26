# Wallet Lite Integration Flow V1

## Purpose

This document explains how external builders can integrate Wallet Lite into a wallet or transaction flow.

It is intentionally product-facing, not implementation-deep.

---

## Core integration model

A wallet or application prepares a preview request before execution.

That request is sent to Wallet Lite.

Wallet Lite returns a governed decision.

The calling application then decides how to present the result to the user.

---

## High-level flow

### 1. User prepares a transaction

Examples:

- token approval
- token transfer
- Bitcoin send
- Solana instruction bundle

### 2. Integrator builds preview request

The wallet or platform translates the pending action into a Wallet Lite preview payload.

### 3. Integrator calls Wallet Lite

The application sends a request to:

`POST /v1/decision/preview`

### 4. Wallet Lite returns governed response

The response includes:

- decision
- recommended action
- reason codes
- risk posture
- receipt metadata

### 5. Integrator renders result

Examples:

- allow immediate execution
- require user review
- block execution
- show warning and receipt reference

---

## UX responsibility split

### Wallet Lite

Responsible for:

- governance
- decisioning
- risk signaling
- receipt-bearing response

### Integrator

Responsible for:

- wallet UI
- user prompts
- review screens
- dashboard presentation
- final user workflow

---

## Example builder use cases

Builders can place Wallet Lite in front of:

- wallet send flows
- token approval flows
- transaction confirmation modals
- custodial review systems
- portfolio governance dashboards

---

## Public-safe commercial posture

Wallet Lite can be consumed as:

- hosted API
- partner access service
- controlled commercial integration surface

This document does not assume open internal code access.