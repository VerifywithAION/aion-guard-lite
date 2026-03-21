# Session Permission Guard v2 Validation

Generated: 2026-03-15T12:49:05

Overall: PASS
Pass Count: 7
Fail Count: 0

## FreshBoundedSafeSession

- Pass: True
- Expected Decision: EXECUTE_NOW
- Actual Decision: EXECUTE_NOW
- Expected ReasonCode: NO_DOMAIN_SESSION_GUARD_APPLIED
- Actual ReasonCode: NO_DOMAIN_SESSION_GUARD_APPLIED
- Classification: TRUSTED_VERIFIED
- Session Classification: FRESH_BOUNDED
- Domain: app.aion.test
- Flagged Method: 
- Flagged Chain: 
- Session Reuse Context: normal_reuse
- Summary: Trusted verified domain and bounded fresh session preserve base behavior.

## HighRiskMethod

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: HIGH_RISK_METHOD_REVIEW
- Actual ReasonCode: HIGH_RISK_METHOD_REVIEW
- Classification: TRUSTED_VERIFIED
- Session Classification: HIGH_RISK_METHOD
- Domain: app.aion.test
- Flagged Method: personal_sign
- Flagged Chain: 
- Session Reuse Context: 
- Summary: High-risk session method requires governed review.

## UnexpectedChain

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: UNEXPECTED_CHAIN_REVIEW
- Actual ReasonCode: UNEXPECTED_CHAIN_REVIEW
- Classification: TRUSTED_VERIFIED
- Session Classification: UNEXPECTED_CHAIN
- Domain: app.aion.test
- Flagged Method: 
- Flagged Chain: 99999
- Session Reuse Context: 
- Summary: Unexpected session chain requires governed review.

## DormantSession

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: DORMANT_SESSION_REVIEW
- Actual ReasonCode: DORMANT_SESSION_REVIEW
- Classification: TRUSTED_VERIFIED
- Session Classification: DORMANT
- Domain: app.aion.test
- Flagged Method: 
- Flagged Chain: 
- Session Reuse Context: 
- Summary: Dormant session requires governed review.

## RiskySessionReuse

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: RISKY_SESSION_REUSE_REVIEW
- Actual ReasonCode: RISKY_SESSION_REUSE_REVIEW
- Classification: TRUSTED_VERIFIED
- Session Classification: RISKY_REUSE
- Domain: app.aion.test
- Flagged Method: 
- Flagged Chain: 
- Session Reuse Context: popup_reuse
- Summary: Risky session reuse context requires governed review.

## BroadSessionStillQueues

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: BROAD_SESSION_REVIEW
- Actual ReasonCode: BROAD_SESSION_REVIEW
- Classification: TRUSTED_VERIFIED
- Session Classification: BROAD
- Domain: app.aion.test
- Flagged Method: 
- Flagged Chain: 
- Session Reuse Context: 
- Summary: Broad session permissions require governed review.

## StaleStillQueues

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: STALE_SESSION_REVIEW
- Actual ReasonCode: STALE_SESSION_REVIEW
- Classification: TRUSTED_VERIFIED
- Session Classification: STALE
- Domain: app.aion.test
- Flagged Method: 
- Flagged Chain: 
- Session Reuse Context: 
- Summary: Stale session requires governed review.

