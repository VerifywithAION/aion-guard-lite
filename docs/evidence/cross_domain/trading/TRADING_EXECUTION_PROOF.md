# Trading Execution Proof

## Purpose

Show that the governed execution primitive applies to automated trading actions.

## Canonical Primitive

**intent -> preview -> decision -> consequence -> receipt -> execution gate**

---

## Scenario 1 — Oversize order beyond policy

### Intent
Place order:
- size: `10x allowed risk`
- instrument: `BTC-PERP`

### Preview
- exceeds risk boundary
- violates `max_position_size`
- invariant family:
  - threshold violation
  - harm boundary

### Decision
**BLOCK**

### Consequence
Execution would expose the account to unacceptable drawdown and liquidation risk.

### Receipt
- decision: `BLOCK`
- reason: `risk_boundary_violation`
- policy: `trading_guard_v1`
- execution gate: `stop`

---

## Why this matters

Trading systems do not only need strategy.
They need a governed execution layer that can stop actions that violate constitutional risk boundaries.

