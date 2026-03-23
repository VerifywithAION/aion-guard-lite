# What Has Been Proven

## Purpose
This document explains, in plain language, what Wallet Lite has already proven and where that proof can be inspected in this public repository.

Wallet Lite is presented here as a **source-closed, evidence-backed governed wallet runtime**.

That means this repo is not asking reviewers to trust marketing language alone.
It provides concrete proof artifacts and validation reports.

---

## Core thesis proven

### Key Is Not Enough
Wallet Lite is built around the KINE principle:

**Key Is Not Enough**

The idea is that valid signing authority alone should not automatically imply immediate execution.

Instead, Wallet Lite introduces a governed posture:

**intent -> preview -> classify -> govern -> execute**

The strongest public proof for this thesis is centered on the EVM proof family.

See:
- [EVM_KINE_PROOF_REPORT.md](../proofs/EVM_KINE_PROOF_REPORT.md)
- [PROOF_INDEX.md](../proofs/PROOF_INDEX.md)
- [PUBLIC_CAPABILITY_PROOF_REPORT.md](../proofs/PUBLIC_CAPABILITY_PROOF_REPORT.md)
- [REAL_DATA_REPLAY_PROOF_REPORT.md](../proofs/REAL_DATA_REPLAY_PROOF_REPORT.md)

---

## What risk surfaces have been validated

### 1. Approval Hardening V1
What was proven:
- malformed approvals can be blocked
- zero-address spender approvals can be blocked
- zero-amount revoke/reset posture can remain executable
- unknown approvals can be queued for review
- unlimited approvals can be queued for review

Evidence:
- [APPROVAL_HARDENING_V1_REPORT_20260313_214208.md](validation/APPROVAL_HARDENING_V1_REPORT_20260313_214208.md)
- [APPROVAL_HARDENING_V1_REPORT_20260313_214208.json](validation/APPROVAL_HARDENING_V1_REPORT_20260313_214208.json)

---

### 2. Address Poisoning Guard V1
What was proven:
- trusted destination posture can preserve base behavior
- first-seen / unknown destinations can be queued for review
- lookalike destinations can be queued for review

Evidence:
- [ADDRESS_POISONING_GUARD_V1_REPORT_20260313_220817.md](validation/ADDRESS_POISONING_GUARD_V1_REPORT_20260313_220817.md)
- [ADDRESS_POISONING_GUARD_V1_REPORT_20260313_220817.json](validation/ADDRESS_POISONING_GUARD_V1_REPORT_20260313_220817.json)

---

### 3. Signature Intent Decoder V1
What was proven:
- opaque signature requests can be reviewed instead of blindly trusted
- malformed typed-sign structures can be blocked
- typed-sign requests with insufficient readability can be queued for review

Evidence:
- [SIGNATURE_INTENT_DECODER_V1_REPORT_20260313_222842.md](validation/SIGNATURE_INTENT_DECODER_V1_REPORT_20260313_222842.md)
- [SIGNATURE_INTENT_DECODER_V1_REPORT_20260313_222842.json](validation/SIGNATURE_INTENT_DECODER_V1_REPORT_20260313_222842.json)

---

### 4. Domain / Session Guard V1
What was proven:
- trusted fresh bounded sessions can preserve base behavior
- missing domain context can trigger review
- unknown domains can trigger review
- stale sessions can trigger review
- broad session permissions can trigger review

Evidence:
- [DOMAIN_SESSION_GUARD_V1_REPORT_20260313_233602.md](validation/DOMAIN_SESSION_GUARD_V1_REPORT_20260313_233602.md)
- [DOMAIN_SESSION_GUARD_V1_REPORT_20260313_233602.json](validation/DOMAIN_SESSION_GUARD_V1_REPORT_20260313_233602.json)

---

### 5. Route / Slippage Sanity Guard V1
What was proven:
- sane route posture can preserve base behavior
- high slippage can trigger review
- excessive route complexity can trigger review
- weak route confidence can trigger review

Evidence:
- [ROUTE_SLIPPAGE_SANITY_GUARD_V1_REPORT_20260313_234738.md](validation/ROUTE_SLIPPAGE_SANITY_GUARD_V1_REPORT_20260313_234738.md)
- [ROUTE_SLIPPAGE_SANITY_GUARD_V1_REPORT_20260313_234738.json](validation/ROUTE_SLIPPAGE_SANITY_GUARD_V1_REPORT_20260313_234738.json)

---

## What this means in practical terms
Wallet Lite is no longer only a concept or presentation layer.

The public proof set shows that it already behaves like a governed execution boundary across several concrete wallet risk surfaces.

That means the current public claim is fair:

Wallet Lite is a real governed wallet runtime prototype with validated safety layers and proof-bearing evidence.

---

## What is not being claimed
This public evidence does **not** claim that Wallet Lite is already:

- a finished mass-market retail wallet
- a full open-source implementation repo
- a complete premium policy operating system
- a final institutional control plane

Those belong to later private or premium layers.

This public repo only claims what is actually evidenced.

---

## Where to start
If you are reviewing this repo for the first time, start here:

1. [PROOF_INDEX.md](../proofs/PROOF_INDEX.md)
2. [EVIDENCE_INDEX.md](EVIDENCE_INDEX.md)
3. [APPROVAL_HARDENING_V1_REPORT_20260313_214208.md](validation/APPROVAL_HARDENING_V1_REPORT_20260313_214208.md)
4. [ADDRESS_POISONING_GUARD_V1_REPORT_20260313_220817.md](validation/ADDRESS_POISONING_GUARD_V1_REPORT_20260313_220817.md)
5. [SIGNATURE_INTENT_DECODER_V1_REPORT_20260313_222842.md](validation/SIGNATURE_INTENT_DECODER_V1_REPORT_20260313_222842.md)
6. [DOMAIN_SESSION_GUARD_V1_REPORT_20260313_233602.md](validation/DOMAIN_SESSION_GUARD_V1_REPORT_20260313_233602.md)
7. [ROUTE_SLIPPAGE_SANITY_GUARD_V1_REPORT_20260313_234738.md](validation/ROUTE_SLIPPAGE_SANITY_GUARD_V1_REPORT_20260313_234738.md)

---

## Final summary
What has been proven is not merely that Wallet Lite can describe governance.

What has been proven is that Wallet Lite can apply governed posture across multiple practical wallet risk surfaces, with public evidence artifacts available for inspection in this repository.

---

## Enhanced Governance Layer (March 2026)

A second major validation layer has now been added on top of the earlier V1 proof set.

This enhanced layer preserves all earlier proven risk-surface evidence and adds new governed-execution capabilities that were validated privately, then proven through the live runtime path, and then proven again in a staged Windows packaged-runtime flow.

### Additional capabilities proven

#### 6. Domain Authenticity Guard
What was proven:
- missing-domain review posture
- unknown-domain review posture
- first-seen domain review posture
- trusted-but-unverified domain review posture
- suspicious connection-source review posture
- lookalike-domain review posture

Evidence:
- [DOMAIN_AUTHENTICITY_GUARD_VALIDATION_20260315_124905.md](validation/DOMAIN_AUTHENTICITY_GUARD_VALIDATION_20260315_124905.md)
- [DOMAIN_AUTHENTICITY_GUARD_VALIDATION_20260315_124905.json](validation/DOMAIN_AUTHENTICITY_GUARD_VALIDATION_20260315_124905.json)

#### 7. Session Permission Guard V2
What was proven:
- stale session review posture
- broad session review posture
- high-risk session method review posture
- unexpected chain review posture
- dormant session review posture
- risky session reuse review posture

Evidence:
- [SESSION_PERMISSION_GUARD_V2_VALIDATION_20260315_124905.md](validation/SESSION_PERMISSION_GUARD_V2_VALIDATION_20260315_124905.md)
- [SESSION_PERMISSION_GUARD_V2_VALIDATION_20260315_124905.json](validation/SESSION_PERMISSION_GUARD_V2_VALIDATION_20260315_124905.json)

#### 8. Known-Pattern Execution Guard
What was proven:
- unlimited approval pattern review
- first-time spender pattern review
- unknown destination plus large amount review
- stale-session plus signature review
- dangerous route pattern review
- poisoned-history destination pattern review
- suspicious signature scope review

Evidence:
- [KNOWN_PATTERN_GUARD_VALIDATION_20260315_124448.md](validation/KNOWN_PATTERN_GUARD_VALIDATION_20260315_124448.md)
- [KNOWN_PATTERN_GUARD_VALIDATION_20260315_124448.json](validation/KNOWN_PATTERN_GUARD_VALIDATION_20260315_124448.json)

#### 9. Governance-Event Security Receipts
What was proven:
- governance event extraction into receipts
- governance event family tagging
- governance event count capture
- final decision capture
- recommended action capture

Evidence:
- [SECURITY_RECEIPTS_VALIDATION_20260315_124449.md](validation/SECURITY_RECEIPTS_VALIDATION_20260315_124449.md)
- [SECURITY_RECEIPTS_VALIDATION_20260315_124449.json](validation/SECURITY_RECEIPTS_VALIDATION_20260315_124449.json)

#### 10. Enhanced Real-Flow Runtime Proof
What was proven:
- the enhanced pre-chain governed cases work through the live `/decision/preview` runtime path
- the proof was not limited to isolated harness validation
- live runtime responses and receipts were observed for the enhanced guarded cases

Evidence:
- [ENHANCED_REAL_FLOW_VALIDATION_20260315_143236.md](validation/ENHANCED_REAL_FLOW_VALIDATION_20260315_143236.md)
- [ENHANCED_REAL_FLOW_VALIDATION_20260315_143236.json](validation/ENHANCED_REAL_FLOW_VALIDATION_20260315_143236.json)

#### 11. Enhanced Staged Windows Packaged-Runtime Proof
What was proven:
- the staged enhanced runtime package was refreshed from the private build
- the staged packaged runtime started successfully on Windows
- guarded runtime cases and receipt behavior passed in staged packaged form

Evidence:
- [ENHANCED_RUNTIME_STAGE_REFRESH_20260315_153115.md](validation/ENHANCED_RUNTIME_STAGE_REFRESH_20260315_153115.md)
- [ENHANCED_STAGED_WINDOWS_SMOKE_TEST_20260315_153708.md](validation/ENHANCED_STAGED_WINDOWS_SMOKE_TEST_20260315_153708.md)
- [ENHANCED_STAGED_WINDOWS_SMOKE_TEST_20260315_153708.json](validation/ENHANCED_STAGED_WINDOWS_SMOKE_TEST_20260315_153708.json)

### Current public truth after enhancement
Wallet Lite now has public evidence for both:
- the original V1 governed risk-surface layer
- the newer enhanced governance layer

This means the evidence history is cumulative, not replacement-based.

The earlier phase evidence remains valid and preserved.
The enhanced phase evidence adds another proven layer on top.

### What is still not yet being claimed
This public evidence still does not claim that Wallet Lite has already completed:
- macOS packaged-runtime proof
- Linux packaged-runtime proof
- final chain-backed execution proof for fully trusted EXECUTE_NOW runtime cases
- full compatibility matrix completion

Those remain part of the next proof wave.

## Real Wallet Testnet Connectivity

What is proven:
- Wallet Lite can attach to a real browser wallet session in the testnet harness.
- Wallet connection and Sepolia selection are evidenced from harness captures.
- Real preview attempts are evidenced through the harness path.

What is not yet proven:
- Successful chain-backed Sepolia governance preview still requires a real deployed policy contract address compatible with the runtime.
