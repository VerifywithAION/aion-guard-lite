# Wallet Guard Lite

Wallet Guard Lite is a **closed-core governed execution runtime** with a **public-safe local API** that evaluates requests before irreversible execution.

It helps wallets, apps, dashboards, and partner systems move from:

`key -> sign -> execute`

to:

`request -> preview -> decide -> preserve receipt -> execute or stop`

**Key is not enough.**

A valid signature should not automatically imply immediate execution.

---

## Start Here

**What is this?**  
A pre-execution decision layer that returns structured outcomes such as `ALLOW`, `WARN`, and `BLOCK` before a transaction or signing flow proceeds.

**What can I run right now?**  
A local Windows-first API + wallet-style demo UI with reproducible V2-V6 proof flows.

**Best first proof path**  
Read the demo walkthrough, then run the local API and reproduce the preview / provider-wrapper tests.

**Trust boundary**  
This repository is **public-safe and evidence-first**. It exposes the contract, integration, and proof layer without declassifying the private core.

**Hosted API status**  
This is currently a **local-first, proof-backed runtime posture**, not a public hosted production gateway.

### Read in this order

1. [Builder Quickstart](wallet-lite-api/docs/WALLET_GUARD_LITE_BUILDER_QUICKSTART_V1.md)
2. [Public API Surface](docs/public/WALLET_LITE_PUBLIC_API_SURFACE_V1.md)
3. [Demo Walkthrough](docs/public/WALLET_LITE_DEMO_WALKTHROUGH_V1.md)
4. [Evidence Index](docs/evidence/EVIDENCE_INDEX.md)
5. [Public Claim Boundary](docs/public/WALLET_LITE_PUBLIC_CLAIM_BOUNDARY_V1.md)

---

## What Wallet Guard Lite is

Wallet Guard Lite is:

- a governed execution backend
- a local or deployable runtime posture
- an API called before execution
- a receipt and evidence engine
- an adapter-ready integration surface

Wallet Guard Lite is not:

- a retail wallet UI
- a mass-market desktop wallet shell
- an open-source declassification of the core engine
- a generic analytics dashboard
- a public hosted production gateway

This repository exposes the **public-safe contract, integration, and evidence layer** around Wallet Guard Lite without declassifying the private core.

---

## Strongest current public-safe posture

The strongest current proof-backed posture is:

- Windows-first
- EVM-first
- local API demo and wallet-style preview flow
- attack-lab scenario validation
- defensive hardening validation
- proof-backed evidence packs
- V2-V6 execution-governance evolution

This is the reference posture evaluators and integrators should use first.

---

## Fastest way to run the system

Use the local runtime and builder docs:

- [Builder Quickstart](wallet-lite-api/docs/WALLET_GUARD_LITE_BUILDER_QUICKSTART_V1.md)
- [Launch Overview](wallet-lite-api/docs/WALLET_GUARD_LITE_LAUNCH_OVERVIEW_V1.md)
- [Demo Walkthrough](docs/public/WALLET_LITE_DEMO_WALKTHROUGH_V1.md)

The current intended public usage posture is:

- **Yes**: public users can run the local API and local UI
- **Yes**: public users can reproduce the same preview and provider-wrapper flows shown in evidence
- **No**: this is not yet a public hosted production gateway
- **No**: this does not declassify the private core

---

## Public-facing API and integration surface

Main public-safe API and integration docs:

- [API Product Boundary](docs/api/WALLET_LITE_API_PRODUCT_BOUNDARY.md)
- [API Spec](docs/api/WALLET_LITE_API_SPEC_V1.md)
- [Integrator Guide](docs/api/WALLET_LITE_INTEGRATOR_GUIDE.md)
- [Reason Codes](docs/api/WALLET_LITE_REASON_CODES_V1.md)
- [Receipt Schema](docs/api/WALLET_LITE_RECEIPT_SCHEMA_V1.json)
- [Public API Surface](docs/public/WALLET_LITE_PUBLIC_API_SURFACE_V1.md)

These define the builder-facing contract without exposing private implementation internals.

---

## Fastest way to verify the system

The strongest current public proof path is the combined demo + evidence posture:

- [Demo Walkthrough](docs/public/WALLET_LITE_DEMO_WALKTHROUGH_V1.md)
- [Attack Lab Validation Pack](wallet-lite-api/evidence/phase4_attack_lab/WALLET_LITE_ATTACK_LAB_VALIDATION_V1.md)
- [Defensive Hardening Validation Pack](wallet-lite-api/evidence/phase5_defensive_hardening/WALLET_LITE_PHASE5_DEFENSIVE_HARDENING_LATEST.md)
- [Evidence Index](docs/evidence/EVIDENCE_INDEX.md)
- [What Has Been Proven](docs/evidence/WHAT_HAS_BEEN_PROVEN.md)

These artifacts show:

- governed request / response behavior
- reason surfaces
- receipt surfaces
- wallet-style preview flow
- malicious approval detection
- address poisoning detection
- drain bundle blocking
- missing API key rejection
- malformed payload rejection
- oversized payload handling
- rate-limit enforcement
- provider-wrapper decisioning
- policy-profile behavior
- threat-intel seeded runtime behavior

---

## V-series proof ladder

Wallet Guard Lite now has a visible execution-governance progression:

| Phase | Main addition | Public value |
|---|---|---|
| V2 | rule hardening | transaction semantics and block/warn posture |
| V3 | forensic persistence | server-side history, export, evidence |
| V4 | provider-wrapper MVP | provider-method evaluation before action |
| V5 | policy packs | consumer / treasury / exchange / institutional profiles |
| V6 | intel seed | first-time destination and threat-intel seeded posture |

See the full matrix in [Evidence Index](docs/evidence/EVIDENCE_INDEX.md).

---

## Current chain posture

Current strongest proof-backed public posture exists for:

- EVM
- Bitcoin
- Solana

Cosmos may exist as a roadmap or adapter direction, but it is not yet presented here as parity-complete at the same proof level.

---

## What is explicitly not claimed yet

To preserve credibility, this repository does not currently claim:

- full multi-chain maturity across all ecosystems
- final retail wallet UI
- fully mature hosted gateway posture
- complete org-governance control plane
- complete policy-pack ecosystem
- full Wallet Guard Pro behavioral governance layer
- full enterprise hosted control plane parity

The strongest current truth remains bounded by the public evidence already linked above.

---

## Canonical summary

Wallet Guard Lite is a **closed-core governed execution runtime** and **public-safe local API posture**.

It sits between intent and irreversible execution, returns structured decisions, preserves reason surfaces, emits receipts, and now has a real public-safe proof path demonstrating that this behavior works through a wallet-style demo, attack-lab scenarios, defensive hardening validation, and the V2-V6 execution-governance progression.