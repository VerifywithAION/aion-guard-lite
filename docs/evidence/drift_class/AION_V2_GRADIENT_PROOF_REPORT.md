# AION V2 Gradient Proof Report

Generated: 2026-04-02T12:28:52.1050200-06:00
Runtime base URL: http://127.0.0.1:8787

## Purpose

This proof bundle tests whether the Wallet Guard runtime differentiates between three classes of action:

- SAFE
- SUSPICIOUS
- DANGEROUS

The ideal gradient is:

- SAFE -> ALLOW
- SUSPICIOUS -> WARN
- DANGEROUS -> BLOCK

## Results

### SAFE

- Decision: ALLOW
- ReasonCode: SELF_TRANSFER
- RiskLevel: LOW
- Message: Self-transfer detected
- Request: C:\Lab_Research\_AION_V2_GRADIENT_PROOF_20260402_122851\03_safe_request.json
- Response: C:\Lab_Research\_AION_V2_GRADIENT_PROOF_20260402_122851\04_safe_response.json

### SUSPICIOUS

- Decision: WARN
- ReasonCode: FIRST_TIME_DESTINATION
- RiskLevel: HIGH
- Message: First-time interaction with destination address.
- Request: C:\Lab_Research\_AION_V2_GRADIENT_PROOF_20260402_122851\05_suspicious_request.json
- Response: C:\Lab_Research\_AION_V2_GRADIENT_PROOF_20260402_122851\06_suspicious_response.json

### DANGEROUS

- Decision: BLOCK
- ReasonCode: INSTITUTIONAL_VALUE_TRANSFER_BLOCKED
- RiskLevel: CRITICAL
- Message: Institutional policy blocked non-self value transfer.
- Request: C:\Lab_Research\_AION_V2_GRADIENT_PROOF_20260402_122851\07_dangerous_request.json
- Response: C:\Lab_Research\_AION_V2_GRADIENT_PROOF_20260402_122851\08_dangerous_response.json

## Gradient Assessment

- Observed decisions: ALLOW, WARN, BLOCK
- Unique decisions: ALLOW, BLOCK, WARN
- Distinct count: 3
- Has gradient: True
- Ideal gradient achieved: True

## Interpretation

This report does NOT prove that AION discovered a real exploit.

It proves whether the runtime currently behaves as:

- a hard policy gate only
- or a differentiated decision system with gradient behavior

## Raw Files

- C:\Lab_Research\_AION_V2_GRADIENT_PROOF_20260402_122851\01_health.json
- C:\Lab_Research\_AION_V2_GRADIENT_PROOF_20260402_122851\02_dev_key.json
- C:\Lab_Research\_AION_V2_GRADIENT_PROOF_20260402_122851\03_safe_request.json
- C:\Lab_Research\_AION_V2_GRADIENT_PROOF_20260402_122851\04_safe_response.json
- C:\Lab_Research\_AION_V2_GRADIENT_PROOF_20260402_122851\05_suspicious_request.json
- C:\Lab_Research\_AION_V2_GRADIENT_PROOF_20260402_122851\06_suspicious_response.json
- C:\Lab_Research\_AION_V2_GRADIENT_PROOF_20260402_122851\07_dangerous_request.json
- C:\Lab_Research\_AION_V2_GRADIENT_PROOF_20260402_122851\08_dangerous_response.json
- C:\Lab_Research\_AION_V2_GRADIENT_PROOF_20260402_122851\09_summary.json
