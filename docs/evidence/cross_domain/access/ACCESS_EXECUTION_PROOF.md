# Access Execution Proof

## Purpose

Show that the governed execution primitive applies to access control and privilege escalation.

## Canonical Primitive

**intent -> preview -> decision -> consequence -> receipt -> execution gate**

---

## Scenario 1 — Admin role assumption attempt

### Intent
Assume role:
- requested role: `global_admin`
- actor: `user.delta`

### Preview
- privilege escalation
- unrestricted authority if granted
- invariant family:
  - delegated authority
  - harm boundary

### Decision
**BLOCK**

### Consequence
Execution would grant unrestricted system control and elevate blast radius dramatically.

### Receipt
- decision: `BLOCK`
- reason: `restricted_role_assumption`
- policy: `access_control_guard_v1`
- execution gate: `stop`

---

## Why this matters

Access systems are not just authentication surfaces.
They are governed execution surfaces for authority itself.

