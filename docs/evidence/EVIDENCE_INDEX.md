# Wallet Guard Lite Evidence Index

## Purpose

This folder contains the public evidence layer for Wallet Guard Lite.

It is meant to show:

- what was validated
- which proof artifacts support the claims
- that Wallet Guard Lite is a real governed execution product surface
- how the V-series execution-governance evolution is evidenced publicly

It is not meant to expose implementation source.

---

## Evidence classification

The V-series evidence is divided into two categories:

### Archival reconstruction packs
- V2
- V3
- V4

These phases are historically real but currently reconstructed from preserved outputs and prior runtime behavior.  
They are included for continuity and architectural traceability.

### Canonical hydrated evidence packs
- V5
- V6 (in progress)

These phases contain reproducible, machine-verifiable artifacts and represent the strongest current proof boundary.

---

## Recommended first proof path

For the fastest public-safe evaluation path, read in this order:

1. [Demo Walkthrough](../public/WALLET_LITE_DEMO_WALKTHROUGH_V1.md)
2. [What Has Been Proven](WHAT_HAS_BEEN_PROVEN.md)
3. [Phase 4 Attack Lab Validation](../wallet-lite-api/evidence/phase4_attack_lab/WALLET_LITE_ATTACK_LAB_VALIDATION_V1.md)
4. [Phase 5 Defensive Hardening Validation](../wallet-lite-api/evidence/phase5_defensive_hardening/WALLET_LITE_PHASE5_DEFENSIVE_HARDENING_LATEST.md)

---

## V-series execution-governance matrix

| Phase | What was added | What was proven | How to reproduce | Evidence path |
|---|---|---|---|---|
| V2 | rule hardening | structured allow / warn / block semantics for transaction classes | run local preview flows and inspect decision output | `docs/evidence/kine_v2_alpha/` |
| V3 | forensic persistence | history, receipts, export, server-side evidence posture | run previews, inspect `/v1/history` and `/v1/export` | `docs/evidence/kine_v3_forensic/` |
| V4 | provider-wrapper MVP | provider-method evaluation including permit-style signature blocking | run wrapped request tests from local UI | `docs/evidence/kine_v4_provider-mvp/` |
| V5 | policy packs | profile-dependent governance across consumer / treasury / exchange / institutional | switch policy profile and replay the same request | `docs/evidence/kine_v5_policy-packs/` |
| V6 | intel seed | threat-intel seeded and first-time-destination-sensitive runtime posture | run first-time destination + known-bad-pattern tests locally | local demo walkthrough + current runtime posture |
| V7 | impact intelligence | human-readable consequence, loss scope, and attack-pattern explanation layer | run malicious approval + wrapped permit + first-time destination tests and inspect Guardian Insight | local demo walkthrough + current runtime posture |

---

## KINE evidence packs

### Archival reconstruction packs

#### KINE v2 alpha
- [kine_v2_alpha/CHECK.txt](kine_v2_alpha/CHECK.txt)
- [kine_v2_alpha/HISTORY.json](kine_v2_alpha/HISTORY.json)
- [kine_v2_alpha/SUMMARY.md](kine_v2_alpha/SUMMARY.md)

#### KINE v3 forensic
- [kine_v3_forensic/CHECK.txt](kine_v3_forensic/CHECK.txt)
- [kine_v3_forensic/HISTORY.json](kine_v3_forensic/HISTORY.json)
- [kine_v3_forensic/SUMMARY.md](kine_v3_forensic/SUMMARY.md)

#### KINE v4 provider-mvp
- [kine_v4_provider-mvp/CHECK.txt](kine_v4_provider-mvp/CHECK.txt)
- [kine_v4_provider-mvp/HISTORY.json](kine_v4_provider-mvp/HISTORY.json)
- [kine_v4_provider-mvp/SUMMARY.md](kine_v4_provider-mvp/SUMMARY.md)

### Canonical hydrated pack

#### KINE v5 policy-packs
- [kine_v5_policy-packs/CHECK.txt](kine_v5_policy-packs/CHECK.txt)
- [kine_v5_policy-packs/HISTORY.json](kine_v5_policy-packs/HISTORY.json)
- [kine_v5_policy-packs/SUMMARY.md](kine_v5_policy-packs/SUMMARY.md)

---

## Validation reports included

### Approval Hardening V1
- [APPROVAL_HARDENING_V1_REPORT_20260313_214208.md](validation/APPROVAL_HARDENING_V1_REPORT_20260313_214208.md)
- [APPROVAL_HARDENING_V1_REPORT_20260313_214208.json](validation/APPROVAL_HARDENING_V1_REPORT_20260313_214208.json)

### Address Poisoning Guard V1
- [ADDRESS_POISONING_GUARD_V1_REPORT_20260313_220817.md](validation/ADDRESS_POISONING_GUARD_V1_REPORT_20260313_220817.md)
- [ADDRESS_POISONING_GUARD_V1_REPORT_20260313_220817.json](validation/ADDRESS_POISONING_GUARD_V1_REPORT_20260313_220817.json)

### Signature Intent Decoder V1
- [SIGNATURE_INTENT_DECODER_V1_REPORT_20260313_222842.md](validation/SIGNATURE_INTENT_DECODER_V1_REPORT_20260313_222842.md)
- [SIGNATURE_INTENT_DECODER_V1_REPORT_20260313_222842.json](validation/SIGNATURE_INTENT_DECODER_V1_REPORT_20260313_222842.json)

### Domain Session Guard V1
- [DOMAIN_SESSION_GUARD_V1_REPORT_20260313_233602.md](validation/DOMAIN_SESSION_GUARD_V1_REPORT_20260313_233602.md)
- [DOMAIN_SESSION_GUARD_V1_REPORT_20260313_233602.json](validation/DOMAIN_SESSION_GUARD_V1_REPORT_20260313_233602.json)

### Route / Slippage Sanity Guard V1
- [ROUTE_SLIPPAGE_SANITY_GUARD_V1_REPORT_20260313_234738.md](validation/ROUTE_SLIPPAGE_SANITY_GUARD_V1_REPORT_20260313_234738.md)
- [ROUTE_SLIPPAGE_SANITY_GUARD_V1_REPORT_20260313_234738.json](validation/ROUTE_SLIPPAGE_SANITY_GUARD_V1_REPORT_20260313_234738.json)

### Enhanced Governance Layer (E1-E4) - March 2026
- [DOMAIN_AUTHENTICITY_GUARD_VALIDATION_20260315_124905.md](validation/DOMAIN_AUTHENTICITY_GUARD_VALIDATION_20260315_124905.md)
- [SESSION_PERMISSION_GUARD_V2_VALIDATION_20260315_124905.md](validation/SESSION_PERMISSION_GUARD_V2_VALIDATION_20260315_124905.md)
- [KNOWN_PATTERN_GUARD_VALIDATION_20260315_124448.md](validation/KNOWN_PATTERN_GUARD_VALIDATION_20260315_124448.md)
- [SECURITY_RECEIPTS_VALIDATION_20260315_124449.md](validation/SECURITY_RECEIPTS_VALIDATION_20260315_124449.md)
- [WALLET_LITE_ENHANCEMENT_VALIDATION_ROLLUP_20260315.md](validation/WALLET_LITE_ENHANCEMENT_VALIDATION_ROLLUP_20260315.md)
- [ENHANCED_REAL_FLOW_VALIDATION_20260315_143236.md](validation/ENHANCED_REAL_FLOW_VALIDATION_20260315_143236.md)
- [ENHANCED_STAGED_WINDOWS_SMOKE_TEST_20260315_153708.md](validation/ENHANCED_STAGED_WINDOWS_SMOKE_TEST_20260315_153708.md)

---

## Live and reproducible runtime evidence

### Live Wallet Testnet Connectivity
- [WALLET_LITE_TESTNET_CONNECTIVITY_PROOF_LATEST.md](validation/WALLET_LITE_TESTNET_CONNECTIVITY_PROOF_LATEST.md)
- [WALLET_LITE_TESTNET_CONNECTIVITY_PROOF_LATEST.json](validation/WALLET_LITE_TESTNET_CONNECTIVITY_PROOF_LATEST.json)

### Sepolia Policy Verify
- [WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.md](validation/WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.md)
- [WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.json](validation/WALLET_LITE_SEPOLIA_POLICY_VERIFY_LATEST.json)

### Real TX Flow / X5 Reproducible Demo
- [WALLET_LITE_REAL_TX_FLOW_PROOF.md](validation/WALLET_LITE_REAL_TX_FLOW_PROOF.md)

---

## Chain and boundary references

### B2 Deep Simulation V1
- [B2_DEEP_SIMULATION_V1_VALIDATION.md](validation/B2_DEEP_SIMULATION_V1_VALIDATION.md)

### B2.1 EVM Coverage Expansion
- [B2_1_EVM_COVERAGE_VALIDATION.md](validation/B2_1_EVM_COVERAGE_VALIDATION.md)

### EVM Lock Declaration
- [WALLET_LITE_EVM_LOCK_DECLARATION.md](validation/WALLET_LITE_EVM_LOCK_DECLARATION.md)

### Bitcoin Proof References
- [BTC5_BITCOIN_PREVIEW_VALIDATION.md](validation/BTC5_BITCOIN_PREVIEW_VALIDATION.md)
- [BITCOIN_REALISTIC_VECTOR_VALIDATION.md](validation/BITCOIN_REALISTIC_VECTOR_VALIDATION.md)
- [WALLET_LITE_BITCOIN_LOCK_DECLARATION.md](validation/WALLET_LITE_BITCOIN_LOCK_DECLARATION.md)

### Solana Proof References
- [SOL5_SOLANA_PREVIEW_VALIDATION.md](validation/SOL5_SOLANA_PREVIEW_VALIDATION.md)

### Chain Status
- [WALLET_LITE_CHAIN_STATUS_DECLARATION.md](WALLET_LITE_CHAIN_STATUS_DECLARATION.md)
- [WALLET_LITE_MULTI_CHAIN_LOCK_DECLARATION.md](WALLET_LITE_MULTI_CHAIN_LOCK_DECLARATION.md)

---

## Public posture and claim-boundary references

- [PUBLIC_PRODUCT_BOUNDARY.md](PUBLIC_PRODUCT_BOUNDARY.md)
- [PUBLIC_RELEASE_READINESS_REPORT.md](PUBLIC_RELEASE_READINESS_REPORT.md)
- [PUBLIC_REPO_POSTURE.md](PUBLIC_REPO_POSTURE.md)
- [PUBLIC_SAFE_API_SURFACE_PLAN.md](PUBLIC_SAFE_API_SURFACE_PLAN.md)
- [../public/WALLET_LITE_PUBLIC_API_SURFACE_V1.md](../public/WALLET_LITE_PUBLIC_API_SURFACE_V1.md)
- [../public/WALLET_LITE_INTEGRATION_FLOW_V1.md](../public/WALLET_LITE_INTEGRATION_FLOW_V1.md)
- [../public/WALLET_LITE_EXAMPLE_PAYLOADS_V1.md](../public/WALLET_LITE_EXAMPLE_PAYLOADS_V1.md)
- [../public/WALLET_LITE_CUSTOMER_GRADE_READINESS_V1.md](../public/WALLET_LITE_CUSTOMER_GRADE_READINESS_V1.md)
- [../public/WALLET_LITE_PUBLIC_CLAIM_BOUNDARY_V1.md](../public/WALLET_LITE_PUBLIC_CLAIM_BOUNDARY_V1.md)

---

## Terminal evidence policy

Curated terminal transcripts may be placed under:
- [transcripts/README.md](transcripts/README.md)

Only sanitized final successful transcripts should be included publicly.  
Do not include raw logs that reveal private paths, private repo layout, secrets, or premium implementation details.


