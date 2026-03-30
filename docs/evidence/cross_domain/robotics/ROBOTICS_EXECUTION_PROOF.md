# Robotics Execution Proof

## Purpose

Show that the governed execution primitive applies to physical robotic actions.

## Canonical Primitive

**intent -> preview -> decision -> consequence -> receipt -> execution gate**

---

## Scenario 1 — Unsafe movement near human zone

### Intent
Robot attempts:
- command: `move_arm`
- trajectory: `human_proximity_zone`
- speed: `unsafe`

### Preview
- violates safety boundary
- physical collision / injury risk
- invariant family:
  - harm boundary
  - irreversibility

### Decision
**STOP**

### Consequence
Execution could cause physical harm or unsafe environmental interaction.

### Receipt
- decision: `STOP`
- reason: `physical_safety_boundary_violation`
- policy: `robotics_safety_guard_v1`
- execution gate: `immediate_stop`

---

## Why this matters

Robotics makes the governed execution idea physically obvious:
intelligence is not enough if execution itself is not governed.

