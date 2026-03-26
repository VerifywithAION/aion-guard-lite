# Wallet Guard Lite

Wallet Guard Lite is a closed-core governed execution runtime and public-safe API posture that evaluates requests before irreversible execution.

It is designed to let wallets, apps, and partner systems move from blind-signing posture toward structured pre-execution decisioning with receipts and evidence.

## Core idea

Traditional wallet posture often collapses into:

`key -> sign -> execute`

Wallet Guard Lite introduces a different posture:

`request -> preview -> decide -> preserve receipt -> then execute or not`

The underlying principle is simple:

**Key is not enough.**  
Valid signing authority alone should not automatically imply immediate execution.

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

This repository exposes the public-safe contract, integration, and evidence layer around Wallet Guard Lite without declassifying the private core.

## Strongest current public-safe posture

The strongest current proof-backed posture is:

- Windows-first
- EVM-first
- local API demo and wallet-style preview flow
- attack-lab scenario validation
- defensive hardening validation
- proof-backed evidence packs

This is the reference posture evaluators and integrators should use first.

## Fastest way to understand the system

Start here:

- [Proof Narrative](docs/WALLET_LITE_PROOF_NARRATIVE.md)
- [Public Repo Posture](docs/evidence/PUBLIC_REPO_POSTURE.md)
- [Public Safe API Surface Plan](docs/evidence/PUBLIC_SAFE_API_SURFACE_PLAN.md)
- [Wallet Guard Lite Launch Overview](wallet-lite-api/docs/WALLET_GUARD_LITE_LAUNCH_OVERVIEW_V1.md)
- [Wallet Guard Lite Builder Quickstart](wallet-lite-api/docs/WALLET_GUARD_LITE_BUILDER_QUICKSTART_V1.md)
- [Wallet Guard Lite Public Proof Index](wallet-lite-api/docs/WALLET_GUARD_LITE_PUBLIC_PROOF_INDEX_V1.md)

These documents explain:

- what problem Wallet Guard Lite addresses
- what has been built
- what has actually been proven
- how to reason about the current public claim boundary

## Fastest way to verify the system

The strongest current public proof path is the combined demo + evidence posture:

- [Attack Lab Validation Pack](wallet-lite-api/evidence/phase4_attack_lab/WALLET_LITE_ATTACK_LAB_VALIDATION_V1.md)
- [Defensive Hardening Validation Pack](wallet-lite-api/evidence/phase5_defensive_hardening/WALLET_LITE_PHASE5_DEFENSIVE_HARDENING_LATEST.md)
- [Evidence Index](docs/evidence/EVIDENCE_INDEX.md)
- [What Has Been Proven](docs/evidence/WHAT_HAS_BEEN_PROVEN.md)

These artifacts show:

- governed request/response behavior
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

## Public-facing product surface

The main public-safe product and integration surface is defined here:

- [Wallet Guard Lite Launch Overview](wallet-lite-api/docs/WALLET_GUARD_LITE_LAUNCH_OVERVIEW_V1.md)
- [Wallet Guard Lite Builder Quickstart](wallet-lite-api/docs/WALLET_GUARD_LITE_BUILDER_QUICKSTART_V1.md)
- [Wallet Guard Lite Founder Launch Note](wallet-lite-api/docs/WALLET_GUARD_LITE_FOUNDER_LAUNCH_NOTE_V1.md)
- [Wallet Guard Lite X Thread Draft](wallet-lite-api/docs/WALLET_GUARD_LITE_X_THREAD_V1.md)
- [Public Safe API Surface](docs/evidence/PUBLIC_SAFE_API_SURFACE_PLAN.md)
- [Customer Grade Readiness](docs/public/WALLET_LITE_PUBLIC_RELEASE_NOTE_V1.md)

Together, these define the current public-safe narrative and builder-facing integration posture.

## Evidence layer

Wallet Guard Lite is not presented here as a theory-only system.

The repository already contains public-safe evidence for:

- governed request/response behavior
- reason surfaces
- receipt surfaces
- attack-lab scenario detection
- wallet-style demo validation
- defensive hardening validation
- multi-chain public proof posture

Evidence entry points:

- [Evidence Index](docs/evidence/EVIDENCE_INDEX.md)
- [What Has Been Proven](docs/evidence/WHAT_HAS_BEEN_PROVEN.md)
- [Chain Status Declaration](docs/evidence/WALLET_LITE_CHAIN_STATUS_DECLARATION.md)
- [Multi-Chain Lock Declaration](docs/evidence/WALLET_LITE_MULTI_CHAIN_LOCK_DECLARATION.md)
- [Phase 4 Attack Lab Validation](wallet-lite-api/evidence/phase4_attack_lab/WALLET_LITE_ATTACK_LAB_VALIDATION_V1.md)
- [Phase 5 Defensive Hardening Validation](wallet-lite-api/evidence/phase5_defensive_hardening/WALLET_LITE_PHASE5_DEFENSIVE_HARDENING_LATEST.md)

## Current chain posture

Current strongest proof-backed public posture exists for:

- EVM
- Bitcoin
- Solana

Cosmos may exist as a roadmap or adapter direction, but it is not yet presented here as parity-complete at the same proof level.

## What is explicitly not claimed yet

To preserve credibility, this repository does not currently claim:

- full multi-chain maturity across all ecosystems
- final retail wallet UI
- fully mature hosted gateway posture
- complete org-governance control plane
- complete policy-pack ecosystem
- full Wallet Guard Pro behavioral governance layer

The strongest current truth remains bounded by the public evidence already linked above.

## Canonical summary

Wallet Guard Lite is a closed-core governed execution runtime and public-safe integration posture.

It sits between intent and irreversible execution, returns structured decisions, preserves reason surfaces, emits receipts, and now has a real public-safe proof path demonstrating that this behavior works through a wallet-style demo, attack-lab scenarios, and defensive hardening validation.