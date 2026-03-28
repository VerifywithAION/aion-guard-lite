# Wallet Lite Public API Surface V1

## Purpose

This document defines the current **public-safe local API surface** for Wallet Guard Lite.

It is intentionally thin enough to support adoption without exposing private implementation internals.

Wallet Guard Lite should be understood as a **headless governed execution layer** that can be called before execution and rendered through any builder-owned interface.

---

## Public-use posture

Wallet Guard Lite currently supports this public-safe usage posture:

- **Yes**: run the API locally
- **Yes**: run the local demo UI
- **Yes**: reproduce preview and provider-wrapper proof flows
- **No**: this is not currently presented as a public hosted production gateway
- **No**: this does not declassify the private core

---

## Base URL

Typical local base URL:

`http://127.0.0.1:8787`

---

## Endpoint summary

| Endpoint | Method | Purpose |
|---|---|---|
| `/health` | GET | liveness and policy version |
| `/v1/dev/key` | GET | dev-only local key retrieval |
| `/v1/dev/usage` | GET | dev-only usage visibility |
| `/v1/policy/profiles` | GET | available policy profiles |
| `/v1/preview` | POST | evaluate transaction intent before execution |
| `/v1/provider/evaluate` | POST | evaluate provider-wrapper request before execution |
| `/v1/history` | GET | recent decision history |
| `/v1/history/clear` | POST | clear local server-side history |
| `/v1/export` | GET | current export summary |

---

## Decision family

Wallet Guard Lite currently returns runtime decision posture such as:

- `ALLOW`
- `WARN`
- `BLOCK`

### Meaning

- `ALLOW` -> request may proceed
- `WARN` -> request requires explicit human review or override in the integrating client
- `BLOCK` -> request must not proceed

Clients should obey the returned decision rather than inferring final policy from any single reason code alone.

---

## Policy profiles

Current profile family includes:

- `consumer`
- `treasury`
- `exchange`
- `institutional`

The same request may produce different posture depending on the selected policy profile.

---

## Typical preview request

`POST /v1/preview`

    {
      "chainFamily": "evm",
      "network": "sepolia",
      "from": "0xabc...",
      "to": "0xdef...",
      "value": "0.0001",
      "data": "0x",
      "policyProfile": "consumer"
    }

## Typical preview response fields

    {
      "ok": true,
      "version": "wallet-guard-lite-api.v1",
      "policyVersion": "kine.v6.intel-seed",
      "policyProfile": "consumer",
      "chainFamily": "evm",
      "network": "sepolia",
      "decision": "WARN",
      "riskLevel": "HIGH",
      "reasonCode": "FIRST_TIME_DESTINATION",
      "message": "First-time interaction with destination address.",
      "ruleHits": [],
      "overrideRequired": true,
      "overrideUsed": false,
      "simulatedImpact": {},
      "receipt": {}
    }

### Common response fields

- `decision`
- `riskLevel`
- `reasonCode`
- `message`
- `ruleHits`
- `overrideRequired`
- `overrideUsed`
- `simulatedImpact`
- `receipt`

---

## Typical provider-evaluation request

`POST /v1/provider/evaluate`

    {
      "providerMethod": "eth_signTypedData_v4",
      "providerParams": [
        "0xabc...",
        "{\"types\":{},\"domain\":{},\"message\":{}}"
      ],
      "network": "sepolia",
      "chainId": "0xaa36a7",
      "policyProfile": "consumer"
    }

## Typical provider-evaluation response

    {
      "ok": true,
      "policyVersion": "kine.v6.intel-seed",
      "policyProfile": "consumer",
      "providerMethod": "eth_signTypedData_v4",
      "decision": "BLOCK",
      "riskLevel": "CRITICAL",
      "reasonCode": "UNLIMITED_PERMIT_SIGNATURE",
      "message": "Unlimited permit-style signature blocked",
      "ruleHits": [
        "TYPED_DATA_SIGNATURE",
        "PERMIT_SIGNATURE",
        "UNLIMITED_PERMIT_SIGNATURE"
      ],
      "overrideRequired": false,
      "overrideUsed": false,
      "simulatedImpact": {},
      "receipt": {}
    }

---

## Example curl

### Health

    curl http://127.0.0.1:8787/health

### Dev key

    curl http://127.0.0.1:8787/v1/dev/key

### Preview

    curl -X POST http://127.0.0.1:8787/v1/preview ^
      -H "Content-Type: application/json" ^
      -H "x-api-key: wl_xxx" ^
      -d "{\"chainFamily\":\"evm\",\"network\":\"sepolia\",\"from\":\"0xabc...\",\"to\":\"0xdef...\",\"value\":\"0.0001\",\"data\":\"0x\",\"policyProfile\":\"consumer\"}"

---

## Example PowerShell 5.1

### Health

    Invoke-RestMethod "http://127.0.0.1:8787/health"

### Dev key

    Invoke-RestMethod "http://127.0.0.1:8787/v1/dev/key"

### Preview

    $Body = @{
        chainFamily   = "evm"
        network       = "sepolia"
        from          = "0xabc..."
        to            = "0xdef..."
        value         = "0.0001"
        data          = "0x"
        policyProfile = "consumer"
    } | ConvertTo-Json -Depth 8

    Invoke-RestMethod `
        -Uri "http://127.0.0.1:8787/v1/preview" `
        -Method POST `
        -ContentType "application/json" `
        -Headers @{ "x-api-key" = "wl_xxx" } `
        -Body $Body

---

## What builders can build on top

Integrators may build any UI or orchestration they want, including:

- shield indicators
- security ribbons
- review drawers
- treasury dashboards
- wallet overlays
- analyst consoles
- backend approval pipelines
- custom institution-facing flows

Wallet Guard Lite provides governance.  
Integrators provide user experience.

---

## Public boundary

This API surface does not expose:

- private engine internals
- monetizable heuristics
- private harnesses
- internal orchestration
- private deployment structure
- premium rule-pack internals

It describes how to consume the product, not how to rebuild the private core.
---

## V7 impact intelligence surface

Wallet Guard Lite may also return public-safe impact interpretation fields:

- explanation
- impact
- whyThisMatters
- estimatedLossScope
- ttackPatternFamily
- impactIntelligence

These fields translate technical runtime decisions into human-readable consequence language.

Example uses:

- wallet warning panels
- treasury review consoles
- partner risk drawers
- anti-phishing education surfaces
- support and investigation workflows

This is still public-safe. It describes consequences, not private engine internals.

