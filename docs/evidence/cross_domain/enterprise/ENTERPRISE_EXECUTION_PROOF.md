# Enterprise Execution Proof

## Purpose

Show that the governed execution primitive applies to enterprise approvals.

## Canonical Primitive

**intent -> preview -> decision -> consequence -> receipt -> execution gate**

---

## Scenario 1 — Large vendor payment requiring review

### Intent
Approve vendor payment:
- amount: `$250,000`
- approver: `single signer`

### Preview
- exceeds single-approval threshold
- requires multi-party approval
- invariant family:
  - threshold violation
  - human review requirement

### Decision
**QUEUE / REVIEW**

### Consequence
Execution without review exposes the organization to fraud, governance failure, and payment-control breakdown.

### Receipt
- decision: `REVIEW_REQUIRED`
- reason: `approval_threshold_exceeded`
- policy: `enterprise_approval_v1`
- execution gate: `queue_for_review`

---

## Why this matters

Enterprise approvals are execution problems, not just paperwork.
Once the consequence is high enough, policy and review must intervene before commitment.

