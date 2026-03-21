# KINE Allowlist Boundary Proof

## Objective
Demonstrate that the same transfer class receives different execution posture depending on governed destination boundary.

## Policy condition
The proof used a governed destination boundary where:

- one destination was explicitly allowlisted
- one destination was not allowlisted

## Observed behavior

### Allowlisted destination
Observed posture:
- `policyDecision: EXECUTE_NOW`
- `decision: EXECUTE_NOW`
- `recommendedAction: EXECUTE`

Interpretation:
An allowlisted destination remained executable.

### Non-allowlisted destination
Observed posture:
- `policyDecision: QUEUED`
- `decision: QUEUED`
- `recommendedAction: QUEUE_AND_REVIEW`

Interpretation:
The same transfer class no longer executed immediately when the destination fell outside the governed allowlist boundary.

## Why this matters
This is a strong KINE proof because:

- the transfer class remained the same
- the amount class remained the same
- the runtime remained the same
- only governed destination state changed execution rights

This is a practical anti-drain posture proof:
execution is constrained by governed destination boundaries, not just by transaction validity.