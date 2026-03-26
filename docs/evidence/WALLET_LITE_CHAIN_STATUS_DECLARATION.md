# Wallet Guard Lite Chain Status Declaration

## Purpose

This document defines the current chain-level status of Wallet Guard Lite.

It provides a single authoritative reference for:

- which chains are implemented
- which chains are proof-backed
- which chains are locked
- which chains are in-progress

This prevents ambiguity and enforces disciplined parity claims.

---

## Canonical principle

Wallet Guard Lite does not claim multi-chain capability based on partial implementation.

A chain is only considered locked when:

- runtime behavior is stable
- proof artifacts exist
- evidence is surfaced
- deterministic preview behavior is verified

---

## Current chain status

### EVM

Status: **LOCKED**

Capabilities:

- governed preview execution
- receipt emission
- consequence-aware simulation
- proof-backed validation
- evidence-layer representation

Notes:

EVM is the canonical reference tier.
All future chains must be compared against this baseline.

---

### Bitcoin

Status: **LOCKED**

Capabilities:

- normalized request boundary
- normalized response semantics
- Lite-safe consequence layer
- runtime preview path
- proof-backed validation
- deterministic repeat behavior
- evidence-layer representation

Notes:

Bitcoin is the first non-EVM locked chain.
It establishes cross-architecture proof discipline.

---

### Solana

Status: **NOT STARTED**

Planned:

- request normalization
- response alignment
- consequence layer
- runtime preview
- proof artifacts

No parity claims are made.

---

### Cosmos

Status: **NOT STARTED**

Planned:

- same parity path as Bitcoin and EVM
- schema-driven preview
- proof-backed validation

No parity claims are made.

---

## Anti-fake-parity rule

No chain may be described as:

- supported
- integrated
- multi-chain ready

unless it reaches locked status.

---

## What this means

Wallet Guard Lite currently supports:

- one smart-contract execution model (EVM)
- one UTXO-based model (Bitcoin)

Both are:

- proof-backed
- deterministic
- receipt-bearing
- publicly verifiable

This is sufficient to claim:

Wallet Guard Lite is a multi-architecture execution governance system.

---

## Future updates

This document must be updated whenever:

- a new chain reaches proof-backed runtime status
- a chain is declared locked
- parity claims change

This file is the single source of truth for chain capability.