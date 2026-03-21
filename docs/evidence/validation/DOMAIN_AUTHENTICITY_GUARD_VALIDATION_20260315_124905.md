# Domain Authenticity Guard Validation

Generated: 2026-03-15T12:49:05

Overall: PASS
Pass Count: 9
Fail Count: 0

## MissingDomain

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: MISSING_DOMAIN_REVIEW
- Actual ReasonCode: MISSING_DOMAIN_REVIEW
- Classification: MISSING
- Domain: 
- Matched Trusted Domain: 
- Verified: False
- Connection Source: 
- Summary: Missing request domain requires governed review.

## TrustedVerifiedFreshBounded

- Pass: True
- Expected Decision: EXECUTE_NOW
- Actual Decision: EXECUTE_NOW
- Expected ReasonCode: NO_DOMAIN_SESSION_GUARD_APPLIED
- Actual ReasonCode: NO_DOMAIN_SESSION_GUARD_APPLIED
- Classification: TRUSTED_VERIFIED
- Domain: app.aion.test
- Matched Trusted Domain: app.aion.test
- Verified: True
- Connection Source: wallet_ui
- Summary: Trusted verified domain and bounded fresh session preserve base behavior.

## TrustedUnverified

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: UNVERIFIED_TRUSTED_DOMAIN_REVIEW
- Actual ReasonCode: UNVERIFIED_TRUSTED_DOMAIN_REVIEW
- Classification: TRUSTED_UNVERIFIED
- Domain: wallet.aion.test
- Matched Trusted Domain: wallet.aion.test
- Verified: False
- Connection Source: wallet_ui
- Summary: Trusted domain without verification requires governed review.

## FirstSeenUnknown

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: FIRST_SEEN_DOMAIN_REVIEW
- Actual ReasonCode: FIRST_SEEN_DOMAIN_REVIEW
- Classification: FIRST_SEEN
- Domain: brandnew.example
- Matched Trusted Domain: 
- Verified: False
- Connection Source: wallet_ui
- Summary: First-seen domain requires governed review.

## UnknownDomain

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: UNKNOWN_DOMAIN_REVIEW
- Actual ReasonCode: UNKNOWN_DOMAIN_REVIEW
- Classification: UNKNOWN
- Domain: random-unknown.example
- Matched Trusted Domain: 
- Verified: False
- Connection Source: wallet_ui
- Summary: Unknown request domain requires governed review.

## SuspiciousConnection

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: SUSPICIOUS_CONNECTION_REVIEW
- Actual ReasonCode: SUSPICIOUS_CONNECTION_REVIEW
- Classification: SUSPICIOUS_CONNECTION
- Domain: app.aion.test
- Matched Trusted Domain: 
- Verified: True
- Connection Source: phishing
- Summary: Suspicious connection source requires governed review.

## LookalikeDomain

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: LOOKALIKE_DOMAIN_REVIEW
- Actual ReasonCode: LOOKALIKE_DOMAIN_REVIEW
- Classification: LOOKALIKE
- Domain: apq.aion.test
- Matched Trusted Domain: app.aion.test
- Verified: False
- Connection Source: wallet_ui
- Summary: Lookalike domain requires governed review.

## StaleTrustedVerifiedSession

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: STALE_SESSION_REVIEW
- Actual ReasonCode: STALE_SESSION_REVIEW
- Classification: TRUSTED_VERIFIED
- Domain: app.aion.test
- Matched Trusted Domain: app.aion.test
- Verified: True
- Connection Source: wallet_ui
- Summary: Stale session requires governed review.

## BroadTrustedVerifiedSession

- Pass: True
- Expected Decision: QUEUED
- Actual Decision: QUEUED
- Expected ReasonCode: BROAD_SESSION_REVIEW
- Actual ReasonCode: BROAD_SESSION_REVIEW
- Classification: TRUSTED_VERIFIED
- Domain: app.aion.test
- Matched Trusted Domain: app.aion.test
- Verified: True
- Connection Source: wallet_ui
- Summary: Broad session permissions require governed review.

