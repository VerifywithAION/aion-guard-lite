# Wallet Lite

Wallet Lite is a **source-closed governed execution backend/runtime** with a public API and adapter-ready integration surface.

It is designed to let wallets, apps, and integrators call a governed decision engine **before irreversible execution**, receive a stable decision result, and preserve receipt and evidence output around that result.

## Core idea

Traditional wallet posture often collapses into:

key -> sign -> execute

Wallet Lite is built around a different posture:

request -> preview -> classify -> govern -> decide -> preserve receipt

The core principle is simple:

**Key Is Not Enough**

Valid signing authority alone should not automatically mean immediate execution.

---

## What Wallet Lite is

Wallet Lite is:

- a governed execution backend
- a local or deployable runtime
- an API called before irreversible execution
- an evidence and receipt engine
- an adapter-ready integration surface

Wallet Lite is not:

- a full retail wallet UI
- a mass-market desktop wallet app
- an open-source declassification of the core
- a generic analytics dashboard

This repository is intended to expose the **public-safe integration and evidence layer** around Wallet Lite, not the crown-jewel private implementation internals.

---

## Public repo posture

This repository is public-safe and source-closed.

That means it is intended to expose:

- product boundary and API contract docs
- request, response, reason-code, and receipt schemas
- adapter and deployment docs
- integrator guidance
- public-safe proof posture and evidence summaries

It is not intended to expose:

- private engine internals
- proprietary runtime composition logic
- premium heuristics
- classified harnesses
- confidential orchestration details

Public visibility here should not be interpreted as open-source declassification.

---

## Current strongest posture

The strongest current public-safe posture is:

- Windows-first runtime path
- packaged runtime artifact or controlled local runtime
- EVM-first adapter direction

This is the strongest proven path today and should be treated as the main reference posture for evaluation and integration.

---

## Strongest current evidence-backed claims

The strongest current public-safe claims are:

- Wallet Lite has a locked product boundary
- Wallet Lite has a locked API contract
- Wallet Lite has locked request, response, reason-code, and receipt contract artifacts
- Wallet Lite has a defined adapter contract with EVM as the strongest current adapter path
- Wallet Lite has a defined deployment and runtime artifact posture
- Wallet Lite has strong Windows-first proof posture
- Wallet Lite has first-pass EVM adapter proof support
- Wallet Lite has first-pass UX proof support for queue and receipt visibility semantics

---

## Current limits that remain explicit

The following limits remain intentionally explicit:

- Windows is strongest, but this is not proof of all-platform parity
- EVM is strongest, but this is not proof of full multi-chain parity
- UX proof exists, but not every final UX state has equal evidence coverage
- Wallet Lite is a governed backend and integration surface, not a finished retail wallet shell

These limits are part of the intended truth-first posture.

---

## Integration model

The intended integration flow is:

1. your wallet, app, or adapter captures an upstream request
2. you normalize that request into the Wallet Lite request contract
3. you call the Wallet Lite runtime before execution
4. you receive a governed response
5. you map that response into your own UX or workflow
6. you preserve receipt continuity

Wallet Lite provides the authoritative governed core.
Integrators and partners build their own surrounding UX, wallet shell, review flow, or product surface.

---

## Start here

For the cleanest public-safe understanding of Wallet Lite, start here:

- `docs/api/WALLET_LITE_API_PRODUCT_BOUNDARY.md`
- `docs/api/WALLET_LITE_API_SPEC_V1.md`
- `docs/api/WALLET_LITE_REQUEST_SCHEMA_GUIDE.md`
- `docs/api/WALLET_LITE_REASON_CODE_CATALOG.md`
- `docs/api/WALLET_LITE_RECEIPT_POLICY.md`
- `docs/api/WALLET_LITE_ADAPTER_SPEC_V1.md`
- `docs/api/ADAPTER_EVM_MAPPING_V1.md`
- `docs/api/WALLET_LITE_DEPLOYMENT_MODELS.md`
- `docs/api/WALLET_LITE_RUNTIME_ARTIFACT_SPEC.md`
- `docs/api/WALLET_LITE_INTEGRATOR_GUIDE.md`
- `docs/api/WALLET_LITE_API_PROOF_PLAN.md`
- `docs/api/WALLET_LITE_PUBLIC_EVIDENCE_INDEX.md`

---

## Runtime and deployment note

Wallet Lite should be understood as a **runtime product surface**, not only as a documentation set.

At the current stage, the strongest practical runtime posture is the Windows-first path with packaged runtime artifact or controlled local runtime use.

Public repo documentation should therefore be read as:

- public-safe contract and integration layer
- public-safe runtime and deployment guidance
- public-safe evidence posture

and not as a blanket release of all implementation internals.

---

## What integrators should preserve

If you are building on top of Wallet Lite, preserve:

- decision semantics
- reason-code semantics
- receipt continuity
- queue/review meaning
- block meaning
- public-safe versus private receipt boundaries

Wallet Lite should not be flattened into a simple boolean allow or deny abstraction.

---

## Canonical summary

Wallet Lite is a **source-closed governed execution backend/runtime** with a public API and adapter-ready integration surface.

It is currently strongest in a **Windows-first, EVM-first** posture and is intended to let wallets, apps, and integrators call a governed decision engine before irreversible execution while preserving stable receipt and evidence output.

This repository exists to expose the **public-safe contract, deployment, integrator, and evidence layer** for that product without declassifying the private implementation core.

## Proof Narrative

For a structured explanation of what Wallet Lite is, what has been proven, and how to reproduce it:

- `docs/WALLET_LITE_PROOF_NARRATIVE.md`
