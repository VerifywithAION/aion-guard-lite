# Wallet Guard Lite — Builder Quickstart V1

## Goal

This quickstart shows builders how to think about integrating Wallet Guard Lite.

## Integration model

1. User prepares a transaction in a wallet or dashboard.
2. Builder sends the preview payload to Wallet Guard Lite.
3. Wallet Guard Lite returns:
   - decision
   - risk level
   - reason code
   - message
   - receipt
4. Builder decides how to render that result.

## Core endpoint

POST /v1/preview

## Public-safe request shape

Typical fields include:

- chainFamily
- network
- from
- to
- value
- data or instructions

## Public-safe response shape

Typical fields include:

- decision
- riskLevel
- reasonCode
- message
- receipt

## Builder freedom

Builders own:

- wallet UX
- dashboards
- modals
- review flows
- visual design

Wallet Guard Lite owns:

- decision layer
- risk signal
- guard response