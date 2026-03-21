# KINE Pause / Unpause Same-Payload Proof

## Objective
Demonstrate that the exact same valid native transfer can move between executable and non-executable posture depending only on governance pause state.

## Transaction class
- EVM native transfer
- same destination class
- same payload structure
- same runtime family

## Observed cycle

### Phase A - Unpaused
Observed posture:
- `policyDecision: EXECUTE_NOW`
- `decision: EXECUTE_NOW`
- `recommendedAction: EXECUTE`

Interpretation:
A normal governed transfer is immediately executable when policy is not paused.

### Phase B - Paused
Observed posture:
- `policyDecision: PAUSED`
- `decision: PAUSED`
- `recommendedAction: UNPAUSE_OR_ABORT`

Interpretation:
The same valid transfer no longer proceeds immediately once governance state is paused.

### Phase C - Unpaused again
Observed posture:
- `policyDecision: EXECUTE_NOW`
- `decision: EXECUTE_NOW`
- `recommendedAction: EXECUTE`

Interpretation:
The same payload returns to executable state once pause is removed.

## Why this matters
This is a strong KINE proof because:

- the payload remained valid
- the transaction class remained the same
- only governance state changed
- execution posture changed accordingly

That means:
**the key and payload are not enough by themselves.**