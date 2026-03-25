# Wallet Lite â€" Canonical Master Roadmap (v2)

## Core Principle

Wallet Lite is a closed-core execution governance infrastructure where no action executes without deterministic policy, meaning-aware interpretation, and replayable evidence.

---

## Structure Overview

The system is organized across four coordinated tracks:

- Track A â€" Core Product (Wallet Lite Backend)
- Track B â€" Intelligence / Commercial (Guard Pro)
- Track C â€" Proof & Publication (Credibility Layer)
- Track X â€" Execution Locks (Reality Gates)

Tracks A, B, and C define the product.
Track X ensures the product becomes operationally real.

---

# Track X â€" Execution Locks (Reality Gates)

## Purpose

Execution Locks are milestone gates that must turn from design intent into reproducible working behavior.

These are not optional.
They are the layer that prevents the system from remaining only theoretical.

---

## X1 â€" Runtime Authority Lock

### Goal
The Wallet Lite runtime must boot reliably and expose a stable health surface.

### Required behavior
- runtime starts successfully
- health endpoint responds on the canonical port
- packaged runtime entrypoint is stable
- boot path is deterministic

### Current status
Locked.

### Evidence
- runtime bootstrap stabilization patch
- runtime health observed at `http://127.0.0.1:8787/health`
- [WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.md](evidence/validation/WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.md)

---

## X2 â€" Preview Execution Lock

### Goal
The runtime must return a real governed preview result against live policy state.

### Required behavior
- `/decision/preview` responds successfully
- decision is structured
- reason surfaces are present
- receipt surface is present where applicable

### Current status
Locked for the Sepolia governed preview path.

### Evidence
- live Sepolia policy verify returned `HTTP_200`
- governed output returned `QUEUED`
- reason surfaces and receipt were present
- [WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.md](evidence/validation/WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.md)
- [WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.json](evidence/validation/WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.json)

---

## X3 â€" Harness Integration Lock

### Goal
A real browser wallet flow must reach the Wallet Lite runtime through the harness.

### Required behavior
- harness boots on the expected port
- wallet connects
- Sepolia selection is observed
- preview request reaches runtime
- UI shows structured result

### Current status
Locked.

### Evidence
- harness runtime and harness URLs active
- browser wallet connected successfully
- preview result shown in UI
- [WALLET_LITE_REAL_TX_FLOW_PROOF.md](evidence/validation/WALLET_LITE_REAL_TX_FLOW_PROOF.md)

---

## X4 â€" First Real Demo Lock

### Goal
Produce one undeniable real-world demonstration of governed pre-execution behavior.

### Scenario
Real browser wallet + Sepolia + unknown destination transfer preview.

### Required behavior
- wallet connects
- preview returns `QUEUED`
- reason surfaces appear
- wallet-native risk behavior may also appear
- system meaningfully demonstrates pre-sign governance

### Current status
Substantially achieved for the pre-sign governed flow.

### Evidence
- [WALLET_LITE_REAL_TX_FLOW_PROOF.md](evidence/validation/WALLET_LITE_REAL_TX_FLOW_PROOF.md)

### Note
This lock currently proves the pre-sign governance layer.
It does not yet claim final Wallet Lite-enforced execution blocking at the wallet layer.

---

## X5 â€" Reproducibility Lock

### Goal
The same governed result must be reproducible through a one-shot run and verify path.

### Required behavior
- demo runner starts runtime and harness
- verify script checks deterministic result
- verification returns a clear pass condition
- result is reproducible without exposing core internals

### Current status
Locked.

### Evidence
- `scripts/RUN_WALLET_LITE_X5_DEMO.ps1`
- `scripts/VERIFY_WALLET_LITE_X5.ps1`
- verification result `X5_VERIFY_OK`
- [WALLET_LITE_REAL_TX_FLOW_PROOF.md](evidence/validation/WALLET_LITE_REAL_TX_FLOW_PROOF.md)

---

## X6 â€" External Evaluator Reproducibility Lock

### Goal
Support evaluator-safe verification through packaged runtime and public-safe docs without source disclosure.

### Current status
Planned.

### Future requirements
- evaluator-safe runbook
- packaged runtime artifact discipline
- verification without private implementation disclosure

---

# Track A â€" Core Product (Wallet Lite Backend)

## Mission

Deliver a private, deployable backend runtime + API that:

- intercepts execution
- evaluates intent
- enforces policy
- produces receipts
- exposes a stable integration contract

---

## A0 â€" Product Boundary Lock
Locked.

### Evidence
- `docs/api/WALLET_LITE_API_PRODUCT_BOUNDARY.md`

---

## A1 â€" Canonical API Contract
Locked.

### Evidence
- `docs/api/WALLET_LITE_API_SPEC_V1.md`

---

## A2 â€" Request Schema Normalization
Planned.

### Purpose
Normalize all upstream request types and preserve enough context for governance layers such as:
- approval hardening
- poisoning guard
- signature governance
- domain/session guard
- route guard
- known-pattern guard

---

## A3 â€" Response Schema + Reason Codes
Planned.

### Purpose
Formalize:
- decision structure
- per-guard outputs
- recommended action
- reason-code catalog
- receipt linkage

---

## A4 â€" Receipt System (Moat Layer)
Planned.

### Purpose
Define:
- receipt schema
- integrity hash
- reproducibility metadata
- public-safe vs integrator-safe vs internal-only receipt fields

---

## A5 â€" Adapter Contract
Planned, with EVM as first-class path.

### Future adapters
- EVM adapter
- Bitcoin preview adapter
- Solana preview adapter
- Cosmos preview adapter

---

## A6 â€" Deployment Models
Planned.

### Supported targets
- local runtime
- packaged runtime
- self-hosted backend
- OEM / embedded deployment

---

## A7 â€" Runtime Packaging
In progress and partially evidenced through Track X locks.

### Note
This phase now depends directly on:
- X1 runtime authority
- X5 reproducibility

---

## A8 â€" Integrator Guide
Planned.

---

## A9 â€" Example Integrations
In progress.

### Current strongest example
- real browser wallet harness flow
- reproducible X5 demo scripts

---

## A10 â€" Future Extensions
Planned.

### Examples
- authenticated API mode
- policy packs
- org rules
- webhook/event streaming
- partner SDKs
- hosted gateway
- Pro UI hooks

---

# Track B â€" Intelligence / Commercial (Guard Pro)

## Mission

Turn the primitive into a higher-value intelligence and operations platform.

---

## B1 â€" Meaning Layer
Partially evidenced in live results.

### Includes
- decision semantics
- destination intelligence
- transaction narrative verification
- decision receipts

---

## B2 â€" Deep Simulation Layer
Planned.

### Includes
- balance diff
- approval diff
- NFT diff
- hidden external call detection
- persistent permission detection

---

## B3 â€" Reputation Intelligence
Planned.

---

## B4 â€" Risk Scoring Engine
Partially visible in current runtime outputs, but not yet formally locked as a public-safe contract.

---

## B5 â€" Adversarial Defense Layer
Planned.

---

## B6 â€" Signer Isolation
Planned.

---

## B7 â€" Org / Treasury Governance
Planned.

---

## B8 â€" Operational Layer
Planned.

---

# Track C â€" Proof & Publication

## Mission

Make the system credible, verifiable, defensible, and integrator-trustworthy.

---

## C1 â€" Proof Coverage Matrix
Planned.

---

## C2 â€" Validator Proof Family
Planned.

---

## C3 â€" Platform Packaging Proof
Planned.

### Current strongest posture
- Windows-first runtime path

### Explicit non-claims
- not yet macOS parity
- not yet Linux parity

---

## C4 â€" Chain-Backed Proof
Now partially locked for the EVM / Sepolia governed preview path.

### Current evidence
- [WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.md](evidence/validation/WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.md)
- [WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.json](evidence/validation/WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.json)

---

## C5 â€" Adapter Proofs
Now partially locked for the real browser wallet harness path.

### Current evidence
- [WALLET_LITE_REAL_TX_FLOW_PROOF.md](evidence/validation/WALLET_LITE_REAL_TX_FLOW_PROOF.md)

---

## C6 â€" Clean Reproducibility
Now materially advanced via X5.

### Current evidence
- `scripts/RUN_WALLET_LITE_X5_DEMO.ps1`
- `scripts/VERIFY_WALLET_LITE_X5.ps1`

---

## C7 â€" Claim â†' Proof Traceability
In progress.

### Important current principle
Claims must remain bounded by what the proof artifacts actually support.

---

## C8 â€" Public-Safe Documentation
In progress and actively expanding.

### Current examples
- API boundary
- API contract
- evidence index
- what has been proven
- commercial preview
- reproducible demo proof

---

# Final Product Shape

## Product 1 â€" Wallet Lite
- closed-core backend
- API-driven governance
- runtime product
- evidence engine
- integrator platform

## Product 2 â€" Guard Pro
- intelligence layer
- enterprise features
- premium security
- operational tooling
- monetization surface

## Product 3 â€" Ecosystem Layer
Built by others:
- wallet UIs
- dashboards
- review consoles
- mobile apps
- browser extensions

---

# Final Strategic Position

Wallet Lite is the decision layer between intent and execution.

It is not:
- a wallet
- a dashboard
- a plugin

It is a governed execution runtime and API that external systems can call before irreversible action.

---

# Current Truth

Track A makes it real.
Track B makes it powerful.
Track C makes it believable.
Track X ensures those claims are operationally true.

The system has now crossed from design-only posture into live Sepolia-backed, browser-wallet-connected, reproducible governed preview proof.