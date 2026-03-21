# AION Guard Lite - KINE Live Proof Pack

This document records the strongest public live proof set currently published for the KINE thesis:

**Key Is Not Enough**

## Purpose
The goal of this proof pack is to demonstrate that valid wallet-style transaction authority is not sufficient by itself for immediate execution when governance state changes.

Legacy wallet model:

**key -> sign -> execute**

AION Guard Lite model:

**intent -> preview -> classify -> govern -> execute**

The proofs below show that execution posture changes under policy state, amount thresholds, and governed destination boundaries.

## Proof set included

### 1. Pause / Unpause Same-Payload Proof
A valid EVM native transfer was tested under three states:

- unpaused -> `EXECUTE_NOW`
- paused -> `PAUSED`
- unpaused again -> `EXECUTE_NOW`

Meaning:
The exact same payload does not remain immediately executable when governance state changes.

See:
- `KINE_PAUSE_UNPAUSE_PROOF.md`

### 2. Cap Threshold Proof
The same transfer class was tested with different amount thresholds:

- below cap -> `EXECUTE_NOW`
- above cap -> `QUEUED`

Meaning:
Execution rights change when policy threshold changes, even when transaction class remains the same.

See:
- `KINE_CAP_THRESHOLD_PROOF.md`

### 3. Allowlist Boundary Proof
The same transfer class was tested against two governed destination states:

- allowlisted destination -> `EXECUTE_NOW`
- non-allowlisted destination -> `QUEUED`

Meaning:
Execution rights are constrained by governed destination boundaries, not just by signing authority.

See:
- `KINE_ALLOWLIST_BOUNDARY_PROOF.md`

## Public interpretation
These proofs show that AION Guard Lite is not merely:
- a warning layer
- a labeling tool
- a passive risk score

It is a policy-backed execution-governance runtime that can produce different execution posture for valid requests under different governance conditions.

## Important boundary
This proof pack is intentionally sanitized for public release.

It includes:
- proof outcomes
- decision posture
- narrative meaning
- governance interpretation

It does not include:
- source code
- private implementation details
- local machine paths
- internal-only operational notes