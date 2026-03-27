# Wallet Guard Lite Reason Codes

## Current known reason codes

SAFE
Default safe result.

VALUE_TRANSFER
A value-bearing transaction was detected.

CONTRACT_INTERACTION
The payload appears to call contract logic.

MULTI_INSTRUCTION_BUNDLE
Multiple instructions or bundled actions were detected.

SELF_TRANSFER
The sender and recipient appear identical.

TOKEN_APPROVAL
Token approval semantics detected.

ADDRESS_POISONING_SUSPECTED
Destination resembles the sender address in a poisoning-like pattern.

DRAIN_BUNDLE_DETECTED
A drain-style multi-step bundle was detected.

UNKNOWN_CONTRACT_CALL
Contract calldata does not match the current known-safe selector set.

ABNORMAL_CALLDATA_SIZE
Calldata size is unusually large.

EXPLOIT_LIKE_SELECTOR
Blocked selector pattern matched.

UNLIMITED_APPROVAL
Unlimited approval pattern detected and blocked.

## Decision mapping model

- Some codes map to ALLOW
- Some codes map to WARN
- Some codes map to BLOCK

Public clients should always rely on the API's returned decision, not infer final policy solely from the code.