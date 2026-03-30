# Wallet Guard Lite — Guided Tour (V1)

## Purpose

This guided tour provides the fastest path to understand what this repository is, what has been proven, and how to interpret the artifacts.

The repository is not a collection of unrelated documents.

It is a structured proof of a system:

**governed execution before irreversible action**

---

## What this system is

Wallet Guard Lite is a proof-backed implementation of a broader idea:

> Actions should be interpreted, evaluated, and gated before they become real.

The system follows a canonical primitive:

**intent → preview → decision → consequence → receipt → execution gate**

This repository shows that this primitive is:
- real (wallet implementation)
- hardened (adversarial + deceptive cases)
- generalizable (multiple domains)
- testable (executable ordeal)
- invariant-aware (mirror attacks)

---

## Recommended reading order

Follow this sequence.

Each step builds on the previous one.

---

### 1. Entry point

**README**

Start here:

README.md

What to look for:
- overall system definition
- proof-backed posture
- high-level capabilities

---

### 2. Public release framing

docs/public/WALLET_LITE_PUBLIC_RELEASE_NOTE_V1.md

What this establishes:
- what is publicly claimed
- what is intentionally not exposed
- how to interpret the repository safely

---

### 3. Hardening posture

docs/public/WALLET_LITE_V7_HARDENING_NOTE.md

What this proves:
- adversarial testing has been performed
- deceptive-intent scenarios were considered
- explanation layer integrity matters

This shows the system is not naive.

---

### 4. Generalization layer

docs/public/GOVERNED_EXECUTION_GENERALIZATION_V1.md

docs/architecture/GOVERNED_EXECUTION_ARCHITECTURE_MAP_V1.md

What this establishes:
- this is not limited to wallets
- the same primitive can apply across:
  - AI agents
  - trading systems
  - enterprise approvals
  - access control
  - machine-to-machine systems
  - robotics

---

### 5. Cross-domain structural proof

docs/evidence/cross_domain/CROSS_DOMAIN_EXECUTION_PROOF_V1.md

What this proves:
- the same execution primitive can be mapped across multiple domains
- actions can be interpreted before execution in each domain

This is structural generalization.

---

### 6. Cross-domain executable proof (Ordeal)

docs/evidence/cross_domain/reports/CROSS_DOMAIN_ORDEAL_SUMMARY_V1.json

What this proves:
- multiple cases were executed
- decisions were produced deterministically
- execution gates were enforced before action

Key signals:
- total cases
- pass/fail counts
- receipt paths

This is executable generalization.

---

### 7. Invariant-level proof (Mirror Attacks)

docs/evidence/cross_domain/mirror_attacks/MIRROR_ATTACKS_EXECUTION_PROOF_V1.md

What this proves:
- the system is not only domain-aware
- it is invariant-aware

Same underlying danger appears in different domains:
- irreversible value transfer
- hidden privilege escalation
- deceptive intent

The system responds consistently at the consequence level.

---

## What has been proven

Across all artifacts, the repository demonstrates:

1. Actions can be interpreted before execution
2. A deterministic decision can be produced
3. Execution can be gated before irreversible effects
4. Receipts can be emitted for traceability
5. The same primitive can apply across domains
6. The system can reason about recurring consequence patterns

---

## What is not claimed

This repository does NOT claim:

- full production systems across all domains
- complete coverage of all possible invariants
- exposure of private attack corpora or internal heuristics

The goal is to demonstrate the primitive, not full deployment in every domain.

---

## How to interpret this repository

The correct interpretation is:

This is not a wallet-only tool.

It is:

> a governed execution layer with a proof-backed implementation and cross-domain evidence.

Wallet Guard Lite is the first concrete instance of that layer.

---

## Canonical takeaway

The system demonstrates that:

> execution can be governed before reality changes, and that this governance can generalize across domains and invariant families.

That is the core idea.

