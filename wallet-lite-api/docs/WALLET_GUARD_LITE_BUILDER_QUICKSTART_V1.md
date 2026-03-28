# Wallet Guard Lite - Builder Quickstart V1

## Goal

This quickstart shows builders how to understand, run, and integrate Wallet Guard Lite in its current public-safe posture.

Wallet Guard Lite is a **local-first governed execution API**. You run it locally, send transaction-intent or provider-evaluation requests to it, and render the returned decision in your own UI.

---

## Current public-safe posture

Strongest current public-safe posture:

- Windows-first
- EVM-first
- local API runtime
- wallet-style demo UI
- proof-backed demo and evidence path

This is **not** currently presented as a public hosted production gateway.

---

## What builders can do today

Builders can:

- run the local API
- call the preview endpoint before execution
- call the provider-evaluation endpoint for provider-wrapper style flows
- render allow / warn / block in their own UX
- inspect reason codes, receipts, and simulated impact
- build dashboards, indicators, review consoles, and wallet overlays on top

Builders should not interpret this repo as a declassification of the private core.

---

## Integration model

1. User prepares a transaction or signature request.
2. Builder sends the request to Wallet Guard Lite before execution.
3. Wallet Guard Lite returns:
   - decision
   - risk level
   - reason code
   - message
   - rule hits
   - simulated impact
   - receipt
4. Builder decides how to render and enforce the outcome.

---

## Core local endpoints

### Transaction preview
`POST /v1/preview`

### Provider-wrapper evaluation
`POST /v1/provider/evaluate`

### Policy profiles
`GET /v1/policy/profiles`

### Recent decision history
`GET /v1/history`

### Current export summary
`GET /v1/export`

---

## Typical preview request

    {
      "chainFamily": "evm",
      "network": "sepolia",
      "from": "0xabc...",
      "to": "0xdef...",
      "value": "0.0001",
      "data": "0x",
      "policyProfile": "consumer"
    }

## Typical preview response

    {
      "ok": true,
      "decision": "WARN",
      "riskLevel": "HIGH",
      "reasonCode": "FIRST_TIME_DESTINATION",
      "message": "First-time interaction with destination address.",
      "ruleHits": [
        "VALUE_TRANSFER",
        "FIRST_TIME_DESTINATION"
      ],
      "overrideRequired": true,
      "overrideUsed": false,
      "simulatedImpact": {
        "balanceChange": "0.0001",
        "permissionChange": "NONE",
        "approvalScope": "NONE",
        "destinationType": "EOA_OR_UNKNOWN",
        "from": "0xabc...",
        "to": "0xdef...",
        "userFacingSummary": "This is the first time this wallet has interacted with this destination."
      },
      "receipt": {
        "id": "uuid",
        "timestamp": "2026-03-28T00:00:00Z",
        "policyVersion": "kine.v7.impact-intelligence",
        "txFingerprint": "sha256...",
        "overrideRequired": true,
        "overrideUsed": false
      }
    }

---

## Builder freedom

Builders own:

- wallet UX
- dashboards
- modals
- review flows
- visual indicators
- alerts
- approvals console design
- brand and interaction layer

Wallet Guard Lite owns:

- execution decision layer
- risk signal
- receipt and evidence fields
- pre-execution posture

---

## Recommended first run path

Read these in order:

1. `README.md`
2. `docs/public/WALLET_LITE_DEMO_WALKTHROUGH_V1.md`
3. `docs/api/WALLET_LITE_API_SPEC_V1.md`
4. `docs/evidence/EVIDENCE_INDEX.md`

That is the fastest path from first contact to reproducible proof.

---

## V7 impact intelligence

Wallet Guard Lite now returns additional consequence-oriented fields so integrators can explain not only the decision, but why it matters in real financial terms.

New public-safe fields include:

- explanation
- impact
- whyThisMatters
- estimatedLossScope
- attackPatternFamily
- impactIntelligence

This allows builders to render Wallet Guard Lite as a guardian-style protection layer rather than only a raw classifier.


