# AI Agent Execution Proof

## Purpose

Show that the governed execution primitive applies to autonomous agent actions.

## Canonical Primitive

**intent -> preview -> decision -> consequence -> receipt -> execution gate**

---

## Scenario 1 — External payment tool call

### Intent
Agent attempts:
- tool_call: `send_payment`
- amount: `5 ETH`
- destination: `external_wallet`

### Preview
- action type: financial transfer
- authority: agent-controlled wallet
- risk: irreversible value transfer
- invariant family:
  - irreversibility
  - delegated authority
  - unknown destination

### Decision
**BLOCK**

### Consequence
Agent is attempting to move funds externally.
If executed, funds will be irreversibly transferred.

### Receipt
- decision: `BLOCK`
- reason: `unauthorized_financial_execution`
- policy: `agent_financial_guard_v1`
- execution gate: `stop`

---

## Why this matters

This shows that agent intelligence is not enough.

Once agents can act, they need governed execution before irreversible financial actions occur.

