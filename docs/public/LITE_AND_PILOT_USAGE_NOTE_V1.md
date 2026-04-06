# Lite and Pilot Usage Note V1

## Purpose

This document defines the public-safe access model for Wallet Guard Lite.

It clarifies how the system is exposed for:
- community usage
- integration pilots
- future production deployment

This repo is a **public-safe proof surface**, not a full production access layer.

---

## Access Model Overview

Wallet Guard Lite currently operates across three conceptual lanes:

### 1. Lite (Community Gift)

The Lite lane is designed as a public-safe entry point.

It is intentionally constrained.

Purpose:
- demonstrate governed execution behavior
- allow experimentation
- provide community access

Characteristics:
- limited usage capacity
- no production guarantees
- no SLA
- local-first runtime posture

This lane exists to:
> prove the system works without exposing internal engine complexity.

---

### 2. Pilot (Integration Lane)

The Pilot lane is used for real integrations under controlled conditions.

Purpose:
- validate end-to-end behavior inside external systems
- test governed checkpoints on real workflows
- stabilize adapter contracts

Characteristics:
- relaxed usage constraints compared to Lite
- direct coordination with integrators
- deterministic behavior validation
- receipt continuity across systems

Important:
> Pilot access is not automatically equivalent to public Lite limits.

It is an operational allowance to ensure:
- clean testing
- no artificial friction
- accurate evaluation of system behavior

---

### 3. Production (Future)

Production access is not publicly exposed in this repository.

Future characteristics may include:
- stable API guarantees
- defined usage tiers
- SLA-backed behavior
- extended policy surfaces

---

## Boundary Conditions

This repository does NOT expose:
- internal engine logic
- private heuristics
- attack corpora
- sensitive configurations
- production orchestration

This repository DOES expose:
- API interaction model
- decision structure
- receipt schema
- evidence and proof artifacts
- integration posture

---

## Integration Guidance

Builders should treat Wallet Guard Lite as:

> a governed execution checkpoint, not a full application layer

The correct integration pattern is:

external system → adapter → Wallet Guard runtime → decision + receipt → execution gate

---

## Key Principle

The purpose of this system is not unrestricted access.

It is:

> controlled, deterministic governance of irreversible actions

---

## Summary

- Lite = public, constrained, proof-oriented
- Pilot = controlled integration lane for real systems
- Production = future expansion (not exposed here)

This structure ensures:
- safe public exposure
- real-world validation
- protection of core system integrity
