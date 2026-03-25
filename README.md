# Wallet Lite

Wallet Lite is a closed-core governed execution runtime and API surface that evaluates requests before irreversible execution.

It is designed to let wallets, apps, and partner systems move from blind signing posture toward structured pre-execution decisioning with receipts and evidence.

---

## Core idea

Traditional wallet posture often collapses into:

key -> sign -> execute

Wallet Lite introduces a different posture:

request -> preview -> decide -> preserve receipt -> then execute or not

The underlying principle is simple:

**Key is not enough.**

Valid signing authority alone should not automatically imply immediate execution.

---

## What Wallet Lite is

Wallet Lite is:

- a governed execution backend
- a local or deployable runtime
- an API called before execution
- a receipt and evidence engine
- an adapter-ready integration surface

Wallet Lite is not:

- a retail wallet UI
- a mass-market desktop wallet shell
- an open-source declassification of the core engine
- a generic analytics dashboard

This repository exposes the public-safe contract, integration, and evidence layer around Wallet Lite without declassifying the private core.

---

## Strongest current public-safe posture

The strongest current proof-backed posture is:

- Windows-first
- EVM-first
- local runtime or packaged runtime artifact
- browser-wallet harness validation
- Sepolia-backed governed preview proof
- reproducible X5 verification flow
- one-command C2 proof-pack runner

This is the reference posture evaluators and integrators should use first.

---

## Fastest way to understand the system

Start here:

- `docs/WALLET_LITE_PROOF_NARRATIVE.md`
- `docs/evidence/validation/WALLET_LITE_C2_PROOF_PACK_LATEST.md`
- `docs/evidence/validation/WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.md`
- `docs/evidence/validation/WALLET_LITE_REAL_TX_FLOW_PROOF.md`

These documents explain:
- what problem Wallet Lite addresses
- what has been built
- what has actually been proven
- how to reason about the current claim boundary

---

## Fastest way to verify the system

The strongest current proof path is the C2 proof pack.

Run:

    .\scripts\RUN_WALLET_LITE_C2_PROOF_PACK.ps1

Current expected result:

- X5 verify OK = True
- Sepolia 200 = True
- Overall = PASS

That proof path exercises:

- runtime boot and health
- harness-backed runtime posture
- governed preview verification
- live Sepolia policy verification
- latest validation artifact generation

---

## Core API and contract documents

The main API product surface is defined here:

- `docs/api/WALLET_LITE_API_SPEC_V1.md`
- `docs/api/WALLET_LITE_REQUEST_SCHEMA_V1.json`
- `docs/api/WALLET_LITE_REQUEST_SCHEMA_GUIDE.md`
- `docs/api/WALLET_LITE_RESPONSE_SCHEMA_V1.json`
- `docs/api/WALLET_LITE_REASON_CODE_CATALOG.md`
- `docs/api/WALLET_LITE_RECEIPT_SCHEMA_V1.json`
- `docs/api/WALLET_LITE_RECEIPT_POLICY.md`
- `docs/api/WALLET_LITE_ADAPTER_SPEC_V1.md`
- `docs/api/ADAPTER_EVM_MAPPING_V1.md`
- `docs/api/WALLET_LITE_DEPLOYMENT_MODELS.md`
- `docs/api/WALLET_LITE_RUNTIME_ARTIFACT_SPEC.md`
- `docs/api/WALLET_LITE_INTEGRATOR_GUIDE.md`
- `docs/api/WALLET_LITE_API_FUTURE_EXTENSIONS.md`

Together, these define the complete public-safe API and integration spine of Wallet Lite.

---

## Evidence layer

Wallet Lite is not presented here as a theory-only system.

The repo already contains public-safe evidence for:

- governed request/response behavior
- reason surfaces
- receipt surfaces
- runtime proof posture
- testnet harness posture
- live Sepolia policy verification
- real browser-wallet flow
- one-command proof-pack execution

Evidence entry points:

- `docs/evidence/EVIDENCE_INDEX.md`
- `docs/evidence/WHAT_HAS_BEEN_PROVEN.md`
- `docs/evidence/validation/WALLET_LITE_C2_PROOF_PACK_LATEST.md`
- `docs/evidence/validation/WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.md`
- `docs/evidence/validation/WALLET_LITE_REAL_TX_FLOW_PROOF.md`

---

## Example integrations

Public-safe example integration surfaces are available under:

- `examples/api-client-basic/README.md`
- `examples/adapter-evm-demo/README.md`
- `examples/review-console-mock/README.md`

These examples do not expose private internals.
They show how external systems can understand and preserve Wallet Lite semantics.

---

## What is explicitly not claimed yet

To preserve credibility, this repository does not currently claim:

- full multi-chain maturity
- equal Windows, macOS, and Linux packaged parity
- final retail wallet UI
- fully mature hosted gateway posture
- full org-governance control plane
- complete policy-pack ecosystem

The strongest current truth remains bounded by the Windows-first, EVM-first, proof-backed posture already evidenced here.

---

## Canonical summary

Wallet Lite is a closed-core governed execution runtime and API surface.

It sits between intent and irreversible execution, returns structured decisions, preserves reason surfaces, emits receipts, and now has a real public-safe proof path demonstrating that this behavior works in the strongest current Windows-first, EVM-first posture.