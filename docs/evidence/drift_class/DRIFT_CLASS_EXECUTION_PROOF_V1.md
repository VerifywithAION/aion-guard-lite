# Drift-Class Execution Proof V1

## Purpose

This document records a public-safe local proof showing Wallet Guard Lite returning a full decision gradient before execution:

- SAFE -> ALLOW
- SUSPICIOUS -> WARN
- DANGEROUS -> BLOCK

This is not a reproduction of the real Drift exploit.

It is a proof that the execution layer can differentiate action classes and emit decision evidence before irreversible execution.

---

## What was tested

Three local preview cases were executed against the Wallet Guard runtime:

1. SAFE
   - self-transfer
   - low value
   - expected to be low risk

2. SUSPICIOUS
   - first-time destination
   - moderate value
   - expected to trigger review posture

3. DANGEROUS
   - high-value institutional outflow
   - unknown destination
   - expected to be blocked under policy

---

## Observed results

- SAFE -> ALLOW
- SUSPICIOUS -> WARN
- DANGEROUS -> BLOCK

Observed reason codes:

- SAFE -> SELF_TRANSFER
- SUSPICIOUS -> FIRST_TIME_DESTINATION
- DANGEROUS -> INSTITUTIONAL_VALUE_TRANSFER_BLOCKED

---

## Why this matters

This proves Wallet Guard Lite is not only a hard deny layer.

It can differentiate execution risk classes before signing and return:

- decision
- reason code
- risk level
- message
- receipt-backed evidence

---

## Interpretation boundary

This proof does **not** claim:

- reproduction of the full Drift exploit
- guaranteed prevention of every protocol exploit
- protocol-level exploit discovery

It does claim:

- differentiated pre-execution governance
- deterministic decision output
- evidence generation before irreversible action

That is the relevant public-safe claim.

