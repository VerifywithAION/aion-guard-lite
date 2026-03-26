# WALLET_LITE_PUBLIC_DEMO_PATH_V1

## Purpose

This document defines the current public demo path for Wallet Guard Lite.

It is intended to give a clean, restrained, reproducible sequence that a technical evaluator can follow.

The demo path should show reality, not presentation tricks.

---

## Demo goal

The current public demo should prove that Wallet Guard Lite can:

- boot as a governed runtime
- expose health
- evaluate a pre-execution request
- return structured governed output
- preserve receipt posture
- validate against a live Sepolia policy path
- produce a final proof-pack result

---

## Strongest current demo posture

The strongest current public-safe demo posture is:

- Windows-first
- EVM-first
- local or packaged runtime
- browser-wallet harness path
- Sepolia-backed governed preview
- reproducible C2 proof pack

This is the recommended evaluation flow.

---

## Fast demo path

### Step 1
Read:

- `README.md`
- `docs/WALLET_LITE_PROOF_NARRATIVE.md`

This gives the evaluator the system meaning before execution.

### Step 2
Inspect:

- `docs/evidence/validation/WALLET_LITE_C2_PROOF_PACK_LATEST.md`
- `docs/evidence/validation/WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.md`

This gives the evaluator the latest public-safe proof artifacts.

### Step 3
Run the proof pack:

    .\scripts\RUN_WALLET_LITE_C2_PROOF_PACK.ps1

Expected current result:

- Overall = PASS
- X5 Verify OK = True
- Sepolia 200 = True

### Step 4
Optionally inspect the harness path manually:

- start or confirm harness
- open `http://127.0.0.1:8899/`
- connect MetaMask
- switch to Sepolia
- preview an unknown-destination native transfer

This demonstrates the live wallet-adjacent posture.

---

## What the demo currently proves

At the current stage, the public demo proves:

- runtime availability
- governed preview behavior
- reason-surface retention
- receipt-bearing output posture
- live Sepolia policy verification
- one-command proof-pack reproducibility

---

## What the demo does not yet prove

The public demo does not yet prove:

- full multi-chain parity
- final retail wallet UX maturity
- all-platform packaged parity
- final hosted gateway maturity
- final org-governance control plane

These remain later layers.

---

## Recommended evaluator interpretation

An evaluator should interpret the demo as proof of a real governed execution primitive, not as proof that every future system layer is already complete.

That is the correct and credible reading.

---

## Canonical summary

The current public demo path is a proof-first evaluation flow centered on the Windows-first, EVM-first runtime, harness, live Sepolia preview path, and C2 proof pack.

It is sufficient to establish that Wallet Guard Lite is real, structured, and reproducibly testable in its strongest current posture.