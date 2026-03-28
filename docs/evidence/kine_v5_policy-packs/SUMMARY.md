# kine.v5.policy-packs

## Status
- Canonical machine evidence recovered from exported runtime evidence.
- Source file: wallet-lite-api/exports/kine_export_latest.json

## Count
- Entries: 3

## Decisions
- BLOCK: 3

## Policy Profiles
- institutional: 2
- treasury: 1

## Reason Codes
- INSTITUTIONAL_VALUE_TRANSFER_BLOCKED: 2
- TREASURY_VALUE_TRANSFER_BLOCKED: 1

## Latest Entry
- loggedAt: 2026-03-28T01:42:56.649Z
- decision: BLOCK
- riskLevel: CRITICAL
- reasonCode: INSTITUTIONAL_VALUE_TRANSFER_BLOCKED
- policyProfile: institutional
- receiptId: 0c7df561-47e3-4939-a85d-15e7751cd557

## Evidence Scope Captured
- consumer/treasury/institutional policy-pack behavior is represented only if present in the exported runtime evidence
- current recovered export contains the exact rows written by the live runtime at export time