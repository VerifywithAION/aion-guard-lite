# Known Pattern Guard Validation

Generated: 2026-03-15T12:44:48

Overall: PASS
Pass Count: 8
Fail Count: 0

## UnlimitedApprovalPattern

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: UNLIMITED_APPROVAL_PATTERN_REVIEW
- Actual ReasonCode: UNLIMITED_APPROVAL_PATTERN_REVIEW
- Destination Classification: unknown
- Approval Classification: unlimited_unknown_spender
- Signature ReasonCode: 
- Route ReasonCode: 
- Poisoning ReasonCode: 
- DomainSession ReasonCode: 
- Summary: Unlimited approval pattern requires governed review.

## FirstTimeSpenderPattern

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: FIRST_TIME_SPENDER_PATTERN_REVIEW
- Actual ReasonCode: FIRST_TIME_SPENDER_PATTERN_REVIEW
- Destination Classification: unknown
- Approval Classification: unknown_spender
- Signature ReasonCode: 
- Route ReasonCode: 
- Poisoning ReasonCode: 
- DomainSession ReasonCode: 
- Summary: First-time spender approval pattern requires governed review.

## UnknownDestinationLargeAmount

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: UNKNOWN_DESTINATION_LARGE_AMOUNT_REVIEW
- Actual ReasonCode: UNKNOWN_DESTINATION_LARGE_AMOUNT_REVIEW
- Destination Classification: unknown
- Approval Classification: 
- Signature ReasonCode: 
- Route ReasonCode: 
- Poisoning ReasonCode: 
- DomainSession ReasonCode: 
- Summary: Unknown destination with large amount requires governed review.

## StaleSessionSignaturePattern

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: STALE_SESSION_SIGNATURE_PATTERN_REVIEW
- Actual ReasonCode: STALE_SESSION_SIGNATURE_PATTERN_REVIEW
- Destination Classification: trusted
- Approval Classification: 
- Signature ReasonCode: opaque_sign_review
- Route ReasonCode: 
- Poisoning ReasonCode: 
- DomainSession ReasonCode: stale_session_review
- Summary: Stale session combined with signature request requires governed review.

## DangerousRoutePattern

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: DANGEROUS_ROUTE_PATTERN_REVIEW
- Actual ReasonCode: DANGEROUS_ROUTE_PATTERN_REVIEW
- Destination Classification: trusted
- Approval Classification: 
- Signature ReasonCode: 
- Route ReasonCode: high_slippage_review
- Poisoning ReasonCode: 
- DomainSession ReasonCode: 
- Summary: Dangerous route pattern requires governed review.

## PoisonedHistoryDestinationPattern

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: POISONED_HISTORY_DESTINATION_PATTERN_REVIEW
- Actual ReasonCode: POISONED_HISTORY_DESTINATION_PATTERN_REVIEW
- Destination Classification: unknown
- Approval Classification: 
- Signature ReasonCode: 
- Route ReasonCode: 
- Poisoning ReasonCode: destination_lookalike_review
- DomainSession ReasonCode: 
- Summary: Poisoned-history or lookalike destination pattern requires governed review.

## SuspiciousSignatureScopePattern

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: SUSPICIOUS_SIGNATURE_SCOPE_PATTERN_REVIEW
- Actual ReasonCode: SUSPICIOUS_SIGNATURE_SCOPE_PATTERN_REVIEW
- Destination Classification: trusted
- Approval Classification: 
- Signature ReasonCode: unreadable_typed_sign_review
- Route ReasonCode: 
- Poisoning ReasonCode: 
- DomainSession ReasonCode: 
- Summary: Suspicious signature scope pattern requires governed review.

## NoKnownPatternApplied

- Pass: True
- Expected Decision: EXECUTE_NOW
- Actual Decision: EXECUTE_NOW
- Expected ReasonCode: NO_KNOWN_PATTERN_GUARD_APPLIED
- Actual ReasonCode: NO_KNOWN_PATTERN_GUARD_APPLIED
- Destination Classification: trusted
- Approval Classification: 
- Signature ReasonCode: 
- Route ReasonCode: 
- Poisoning ReasonCode: 
- DomainSession ReasonCode: 
- Summary: No governed known-pattern rule was triggered.

