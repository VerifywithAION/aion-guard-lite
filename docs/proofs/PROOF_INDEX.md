# AION Guard Lite Proof Index

This directory contains the current public proof set for AION Guard Lite.

## Proof tiers

### Tier 1 - Deterministic local runtime proofs
These reports show controlled runtime behavior against known wallet action scenarios.

Included:
- `PUBLIC_CAPABILITY_PROOF_REPORT.md`

### Tier 2 - EVM KINE proof
This report demonstrates the core KINE principle on EVM:
**Key Is Not Enough**.

It shows that lower-risk activity can remain executable while governance state can still prevent immediate execution when policy requires it.

Included:
- `EVM_KINE_PROOF_REPORT.md`
- `KINE_PAUSE_UNPAUSE_PROOF.md`
- `KINE_CAP_THRESHOLD_PROOF.md`
- `KINE_ALLOWLIST_BOUNDARY_PROOF.md`
- `KINE_LIVE_PROOF_PACK.md`

### Tier 3 - Real data replay proofs
These reports replay normalized public-chain transaction archetypes through the Wallet-Lite runtime.

They are not live wallet traffic, but they are real runtime evidence because the running service evaluated the payloads, returned decisions, and emitted receipt metadata.

Included:
- `REAL_DATA_REPLAY_PROOF_REPORT.md`

## Reading guidance

When reviewing proof reports, look for:
- decision outcome
- narrative classification
- risk level
- recommended action
- receipt metadata

## Current interpretation

Across the current proof set, Wallet-Lite demonstrates that valid transaction-style requests can receive different execution posture depending on governance state, destination boundary, and policy thresholds across supported runtime families.