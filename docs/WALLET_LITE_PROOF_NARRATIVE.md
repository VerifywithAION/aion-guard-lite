# WALLET_LITE_PROOF_NARRATIVE

## Purpose

This document presents the Wallet Lite system as a proof-backed governed execution runtime.

It is not a marketing document.

It is a structured explanation of:

- what problem exists
- what was built
- what has been proven
- how that proof can be reproduced
- what is not yet claimed

The goal is simple:

Make it possible for a technical reader to independently verify that Wallet Lite is real.

---

## The problem

Modern wallets operate on a fragile assumption:

If a key can sign, the action should execute.

This leads to a consistent failure pattern:

- approvals are granted without context
- unknown destinations are trusted implicitly
- signatures are accepted without interpretation
- sessions are reused without risk awareness
- routing and slippage are not governed

The result is not theoretical.

It is observable:

- approval drain patterns
- address poisoning
- malicious signature requests
- unsafe session reuse
- silent value leakage

The core issue is not user behavior.

The core issue is missing infrastructure.

There is no deterministic execution boundary between intent and execution.

---

## The thesis

Wallet Lite is built on one principle:

Key is not enough.

Execution should require:

- structured request context
- deterministic policy evaluation
- meaning-aware interpretation
- governed decision output
- receipt and evidence preservation

This leads to a different execution posture:

request -> preview -> decide -> preserve receipt -> then execute or not

---

## What was built

Wallet Lite is a closed-core governed execution runtime with a public API surface.

It consists of:

- a normalized request schema
- a deterministic response schema
- a reason-code system
- a receipt and evidence layer
- an adapter integration contract
- a runtime artifact with a stable health surface
- a reproducible test harness
- a chain-backed preview capability

It is not a wallet UI.

It is not an analytics dashboard.

It is the execution governance layer that sits before irreversible action.

---

## System behavior

At runtime, Wallet Lite behaves as follows:

1. an upstream request is captured
2. the request is normalized into schema form
3. the runtime evaluates the request
4. governance layers are applied
5. a structured decision is returned
6. a receipt is generated

The decision always resolves to one of:

- EXECUTE_NOW
- QUEUED
- BLOCKED
- PAUSED

The output is not only a decision.

It includes:

- reason codes
- guard-level outcomes
- narrative classification
- risk scoring
- recommended action
- receipt reference

---

## What has been proven

The system is not presented as a concept.

It has been exercised through multiple proof layers.

### 1. Runtime authority

The runtime boots deterministically and exposes a stable health endpoint.

Observed:
- local runtime start
- health at http://127.0.0.1:8787/health

---

### 2. Structured preview execution

The endpoint:

POST /decision/preview

returns structured governed decisions with:

- decision
- reason surfaces
- guard outputs
- receipt data

Observed:
- HTTP 200 responses
- stable schema output
- deterministic decision categories

---

### 3. Chain-backed policy interaction

A real GuardPolicy contract was deployed on Sepolia.

Observed:
- eth_getCode confirms contract presence
- runtime calls live policy
- governed decision returned from real chain context

Example result:
- decision: QUEUED
- reason: DESTINATION_FIRST_SEEN_REVIEW

---

### 4. Browser wallet integration

A browser wallet session (MetaMask) was connected through the test harness.

Observed:
- wallet connection established
- Sepolia network selected
- preview requests triggered from real wallet context

---

### 5. Governed decision behavior

For an unknown destination native transfer:

Observed:
- poisoning guard activated
- domain/session guard activated
- decision: QUEUED
- recommended action: QUEUE_AND_REVIEW

This demonstrates:

The system does not rely on simple allow or deny logic.
It applies layered governance.

---

### 6. Receipt generation

Each decision produces a receipt artifact.

Observed:
- receiptId generated
- sha256 hash present
- file path persisted
- receipt contains decision and reason context

This provides:

- traceability
- auditability
- reproducibility

---

### 7. Reproducible X5 demo

A full demonstration path was created:

- runtime boot
- harness boot
- wallet interaction
- preview execution
- verification script

Observed:
- X5_VERIFY_OK

This proves:

The system can be reproduced end-to-end without hidden steps.

---

## How to reproduce

A minimal reproduction path:

1. start the Wallet Lite runtime
2. confirm health endpoint
3. start the testnet harness
4. connect a browser wallet
5. switch to Sepolia
6. run preview scenarios
7. observe structured decision output
8. run verification script

Expected outcome:

- decision returned
- reason codes present
- receipt generated
- verification returns OK

---

## What is not being claimed

To preserve credibility, the following are explicitly not claimed:

- full multi-chain maturity
- macOS or Linux packaged runtime parity
- final production wallet UI
- complete org governance system
- hosted SaaS gateway maturity
- full policy-pack ecosystem

The current strongest posture is:

- Windows-first
- EVM-first
- local or packaged runtime
- reproducible preview governance

---

## Why this matters

Wallet Lite introduces a missing primitive:

A deterministic execution boundary with evidence.

This changes the model from:

"trust the wallet and the user"

to:

"verify the request before execution"

It enables:

- safer wallet behavior
- structured risk handling
- reproducible decisioning
- evidence-backed execution control

---

## Canonical summary

Wallet Lite is a governed execution runtime that sits between intent and execution.

It:

- evaluates requests before execution
- returns structured decisions
- explains those decisions through reason codes
- preserves receipts as evidence
- can be reproduced and verified

It is not theoretical.

It has been exercised against:

- real runtime behavior
- real chain interaction
- real wallet context
- reproducible verification paths

---

End of document.