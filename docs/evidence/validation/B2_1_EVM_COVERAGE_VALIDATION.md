# B2.1 EVM Coverage Validation

## Purpose

This report documents the first controlled expansion of the B2 Deep Simulation Layer beyond the initial native-transfer proof posture.

B2.1 increases consequence coverage on the strongest current Wallet Lite baseline:

- Windows-first
- EVM-first
- Sepolia-backed governed preview
- proof-pack compatible runtime path

The purpose of B2.1 is not to introduce uncontrolled complexity.

The purpose is to make the EVM consequence layer more useful on security-relevant transaction shapes while preserving the existing proof path.

---

## What B2.1 adds

B2.1 expands the deterministic `simulation` block with richer EVM interpretation for:

- ERC20 approve
- ERC20 transfer
- unknown contract interaction posture

This means the runtime can now produce more useful consequence signals without replacing the core decision surface.

---

## B2.1 behavior expansion

### 1. Richer approval interpretation
B2.1 can now surface:

- token contract
- spender
- allowance amount
- unlimited approval posture
- persistent permission posture
- approval-specific summary flags

### 2. Richer token transfer interpretation
B2.1 can now surface:

- token delta
- recipient participation in external call surface
- transfer-specific summary flags

### 3. Better unknown interaction posture
B2.1 can now surface:

- partial-confidence status
- unknown contract interaction flags
- conservative downstream-target flags

---

## Proof compatibility result

B2.1 did not break the strongest current proof path.

Observed after the B2.1 runtime patch:

- X5 verify remained OK
- Sepolia verify remained HTTP_200
- C2 proof pack remained PASS

This confirms that B2.1 is additive and proof-compatible.

---

## Why this matters

B2 V1 established that Wallet Lite could emit a live consequence layer.

B2.1 establishes that the layer is becoming more useful on real EVM transaction families, especially those relevant to wallet security posture.

That is the correct direction for Track B.

---

## Current claim boundary

This report supports the following claim:

Wallet Lite now has a broader deterministic EVM consequence layer than the initial B2 V1 posture.

This report does not yet claim:

- full trace-based execution simulation
- full state-diff truth
- token balance reconciliation against on-chain final state
- multi-chain B2 parity
- mainnet-grade B2 maturity

Those remain future phases.

---

## Canonical summary

B2.1 expands the useful depth of the EVM consequence layer while preserving the strongest current proof baseline.