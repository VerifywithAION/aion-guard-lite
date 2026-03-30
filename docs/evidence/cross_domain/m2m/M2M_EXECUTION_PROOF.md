# Machine-to-Machine Execution Proof

## Purpose

Show that the governed execution primitive applies to service-to-service actions.

## Canonical Primitive

**intent -> preview -> decision -> consequence -> receipt -> execution gate**

---

## Scenario 1 — Automated transfer to unknown endpoint

### Intent
Service attempts:
- action: `automated_transfer`
- amount: `50,000 units`
- target: `unknown.external.endpoint`

### Preview
- unverified destination
- irreversible transfer behavior
- invariant family:
  - unknown destination
  - irreversibility
  - delegated authority

### Decision
**BLOCK**

### Consequence
Execution could create unauthorized inter-service value movement or state corruption at an untrusted destination.

### Receipt
- decision: `BLOCK`
- reason: `unknown_destination_transfer`
- policy: `service_execution_guard_v1`
- execution gate: `stop`

---

## Why this matters

Machine-to-machine systems need execution governance, not only service permissions.
A trusted actor can still propose an untrusted action.

