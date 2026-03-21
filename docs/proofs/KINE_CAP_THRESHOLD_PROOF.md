# KINE Cap Threshold Proof

## Objective
Demonstrate that the same transfer class receives different execution posture depending on policy amount threshold.

## Policy condition
A governed cap threshold was set so that:

- smaller transfer fell below cap
- larger transfer exceeded cap

## Observed behavior

### Below cap
Observed posture:
- `policyDecision: EXECUTE_NOW`
- `decision: EXECUTE_NOW`
- `recommendedAction: EXECUTE`

Interpretation:
A lower-value transfer remained immediately executable.

### Above cap
Observed posture:
- `policyDecision: QUEUED`
- `decision: QUEUED`
- `recommendedAction: QUEUE_AND_REVIEW`

Interpretation:
A larger transfer in the same transfer family became non-immediate once policy threshold was crossed.

## Why this matters
This is a strong KINE proof because:

- the transfer family remained the same
- the runtime remained the same
- destination class remained the same
- only governed amount threshold changed execution rights

That shows granular governance rather than a binary kill switch.