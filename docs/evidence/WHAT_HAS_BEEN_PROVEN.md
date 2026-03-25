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

## Sepolia Chain-Backed Governed Preview

What is proven:
- A real GuardPolicy contract was deployed on Sepolia.
- The deployed policy address returns real contract code.
- Wallet Lite runtime can call the live policy path and return a governed preview result.
- The returned result is structured, machine-readable, and evidence-bearing.
- The observed preview result is `QUEUED` for an unknown destination flow, with a real receipt emitted.

Evidence:
- [WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.md](validation/WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.md)
- [WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.json](validation/WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.json)

## Real Browser Wallet TX Flow (X5 Reproducible Demo)

What is proven:
- A real browser wallet can connect through the Wallet Lite testnet harness.
- The harness can route a real wallet-originated request into the Wallet Lite runtime before execution.
- The runtime returns a deterministic governed result for an unknown-destination native transfer.
- The reproducible verification path returns `X5_VERIFY_OK`.
- Receipt generation, reason surfaces, and recommended action are preserved in the result.

Evidence:
- [WALLET_LITE_REAL_TX_FLOW_PROOF.md](validation/WALLET_LITE_REAL_TX_FLOW_PROOF.md)

Operational artifacts:
- `scripts/RUN_WALLET_LITE_X5_DEMO.ps1`
- `scripts/VERIFY_WALLET_LITE_X5.ps1`

## B2 Deep Simulation V1

What is proven:
- Wallet Lite now returns an additive `simulation` block in the live EVM preview response.
- The simulation block is deterministic and structured.
- The simulation block can surface native value movement, external call surface summary, and persistent-risk posture.
- B2 V1 was integrated without breaking X5 verify, Sepolia verify, or the C2 proof pack.

Evidence:
- [B2_DEEP_SIMULATION_V1_VALIDATION.md](validation/B2_DEEP_SIMULATION_V1_VALIDATION.md)

Current boundary:
- This proves a first live EVM deep-simulation layer.
- It does not yet prove full trace-based execution simulation or multi-chain parity.

## B2.1 EVM Coverage Expansion

What is proven:
- Wallet Lite now has a broader deterministic `simulation` block on the current EVM baseline.
- The consequence layer now covers richer approval and token-transfer posture than the original B2 V1 native-transfer baseline.
- Unknown contract interaction posture is surfaced more explicitly through partial-confidence simulation flags.
- B2.1 remained compatible with X5 verify, Sepolia verify, and the C2 proof pack.

Evidence:
- [B2_1_EVM_COVERAGE_VALIDATION.md](validation/B2_1_EVM_COVERAGE_VALIDATION.md)

Current boundary:
- This proves broader EVM consequence coverage.
- It does not yet prove full trace-based simulation or multi-chain parity.

## EVM Lock Declaration

What is proven:
- EVM is now the canonical locked reference tier for Wallet Lite.
- Wallet Lite EVM includes governed preview, receipts, proof-pack compatibility, native transfer simulation, approval proof, and transfer proof.
- Future platform and chain work must meet this proof grade before parity can be claimed.

Evidence:
- [WALLET_LITE_EVM_LOCK_DECLARATION.md](validation/WALLET_LITE_EVM_LOCK_DECLARATION.md)
- [B2_DEEP_SIMULATION_V1_VALIDATION.md](validation/B2_DEEP_SIMULATION_V1_VALIDATION.md)
- [B2_1_EVM_COVERAGE_VALIDATION.md](validation/B2_1_EVM_COVERAGE_VALIDATION.md)
- [B2_2_APPROVAL_SIMULATION_VALIDATION_LATEST.md](validation/B2_2_APPROVAL_SIMULATION_VALIDATION_LATEST.md)
- [B2_3_TRANSFER_SIMULATION_VALIDATION_LATEST.md](validation/B2_3_TRANSFER_SIMULATION_VALIDATION_LATEST.md)

Current boundary:
- This locks EVM as the current Wallet Lite reference tier.
- It does not yet claim same-tier parity for macOS, Linux, Bitcoin, Solana, or Cosmos.

## BTC5 Bitcoin Preview Validation

What is proven:
- Bitcoin now has a live runtime preview path in Wallet Lite.
- `chainFamily = bitcoin` traverses the runtime and returns a structured Wallet Lite-compatible preview response.
- Receipt continuity is preserved for the Bitcoin preview path.
- A Lite-safe Bitcoin consequence block is present in the preview response.
- Bitcoin is now represented in the evidence layer as a proof-backed runtime path.

Evidence:
- [BTC5_BITCOIN_PREVIEW_VALIDATION.md](validation/BTC5_BITCOIN_PREVIEW_VALIDATION.md)
- [BTC4_BITCOIN_PREVIEW_VALIDATION_LATEST.md](validation/BTC4_BITCOIN_PREVIEW_VALIDATION_LATEST.md)

Current boundary:
- This proves Bitcoin runtime preview exists and is evidence-backed.
- It does not yet declare Bitcoin locked at EVM parity.

## Bitcoin Lock Declaration

What is proven:
- Bitcoin is now a locked Wallet Lite proof tier.
- Bitcoin has a live runtime preview path, receipt continuity, multiple proof families, deterministic repeat behavior, and evidence-layer representation.
- Bitcoin now serves alongside EVM as a locked reference tier for future chain parity work.

Evidence:
- [WALLET_LITE_BITCOIN_LOCK_DECLARATION.md](validation/WALLET_LITE_BITCOIN_LOCK_DECLARATION.md)
- [BTC5_BITCOIN_PREVIEW_VALIDATION.md](validation/BTC5_BITCOIN_PREVIEW_VALIDATION.md)
- [BTC6_3A_BITCOIN_NO_CHANGE_VALIDATION_LATEST.md](validation/BTC6_3A_BITCOIN_NO_CHANGE_VALIDATION_LATEST.md)
- [BTC6_3B_BITCOIN_HIGH_FEE_VALIDATION_LATEST.md](validation/BTC6_3B_BITCOIN_HIGH_FEE_VALIDATION_LATEST.md)
- [BTC6_2_BITCOIN_REPEAT_VALIDATION_LATEST.md](validation/BTC6_2_BITCOIN_REPEAT_VALIDATION_LATEST.md)

Current boundary:
- This locks Bitcoin at the Wallet Lite proof tier.
- It does not claim Guard Pro-grade Bitcoin intelligence, mempool-aware optimization, or enterprise mainnet maturity across all edge cases.

## Chain Status Declaration

What is proven:
- EVM is locked.
- Bitcoin is locked.
- Solana and Cosmos are not yet started and no parity is claimed.

Evidence:
- [WALLET_LITE_CHAIN_STATUS_DECLARATION.md](WALLET_LITE_CHAIN_STATUS_DECLARATION.md)

## Bitcoin Realistic Vector Validation

What is proven:
- Wallet Lite can process a realistic Bitcoin transaction-shape preview with realistic address format, fee range, output structure, and change posture.
- Receipt continuity and consequence surfaces remain intact.

Evidence:
- [BITCOIN_REALISTIC_VECTOR_VALIDATION.md](validation/BITCOIN_REALISTIC_VECTOR_VALIDATION.md)
- [BITCOIN_REALISTIC_VECTOR_VALIDATION_LATEST.md](validation/BITCOIN_REALISTIC_VECTOR_VALIDATION_LATEST.md)

## SOL5 Solana Preview Validation

What is proven:
- Solana now has a live runtime preview path in Wallet Lite.
- `chainFamily = solana` traverses the runtime and returns a structured Wallet Lite-compatible preview response.
- Receipt continuity is preserved for the Solana preview path.
- A Lite-safe Solana consequence block is present in the preview response.
- Solana is now represented in the evidence layer as a proof-backed runtime path.

Evidence:
- [SOL5_SOLANA_PREVIEW_VALIDATION.md](validation/SOL5_SOLANA_PREVIEW_VALIDATION.md)
- [SOL4_SOLANA_PREVIEW_VALIDATION_LATEST.md](validation/SOL4_SOLANA_PREVIEW_VALIDATION_LATEST.md)

Current boundary:
- This proves Solana runtime preview exists and is evidence-backed.
- It does not yet declare Solana locked.
