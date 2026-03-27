# Wallet Guard Lite API Specification v1

## Base model

Wallet Guard Lite is a headless execution firewall.

Clients submit transaction intent to the API before execution.
The API returns a decision plus receipt and evidence fields.

## 1. GET /health

Purpose:
Liveness and policy version check.

Example response:

    {
      "ok": true,
      "service": "wallet-guard-lite-api",
      "port": 8787,
      "policyVersion": "kine.v3.forensic",
      "decisionLogPath": "server-local path"
    }

## 2. GET /v1/dev/key

Purpose:
Development-only API key retrieval.

Example response:

    {
      "ok": true,
      "apiKey": "wl_xxx",
      "monthlyLimit": 15,
      "policyVersion": "kine.v3.forensic"
    }

## 3. GET /v1/dev/usage

Purpose:
Development-only usage visibility.

Example response:

    {
      "ok": true,
      "usage": {
        "wl_xxx": {
          "count": 3
        }
      }
    }

## 4. POST /v1/preview

Purpose:
Submit transaction intent for pre-execution evaluation.

Request body:

    {
      "chainFamily": "evm",
      "network": "sepolia",
      "from": "0xabc...",
      "to": "0xdef...",
      "value": "0.0001",
      "data": "0x"
    }

Required fields:
- chainFamily
- to

Example response:

    {
      "ok": true,
      "version": "wallet-guard-lite-api.v1",
      "policyVersion": "kine.v3.forensic",
      "chainFamily": "evm",
      "network": "sepolia",
      "decision": "ALLOW",
      "riskLevel": "LOW",
      "reasonCode": "SELF_TRANSFER",
      "message": "Self-transfer detected",
      "ruleHits": [
        "VALUE_TRANSFER",
        "SELF_TRANSFER"
      ],
      "overrideRequired": false,
      "overrideUsed": false,
      "simulatedImpact": {
        "balanceChange": "0.0001",
        "permissionChange": "NONE",
        "approvalScope": "NONE",
        "destinationType": "EOA_OR_UNKNOWN",
        "from": "0xabc...",
        "to": "0xabc...",
        "userFacingSummary": "This appears to be a self-transfer."
      },
      "receipt": {
        "id": "uuid",
        "timestamp": "2026-03-27T20:15:57.629Z",
        "policyVersion": "kine.v3.forensic",
        "ruleHits": [
          "VALUE_TRANSFER",
          "SELF_TRANSFER"
        ],
        "txFingerprint": "sha256...",
        "overrideRequired": false,
        "overrideUsed": false
      }
    }

## 5. GET /v1/history

Purpose:
Retrieve recent forensic decision history.

Optional query:
- limit

Example response:

    {
      "ok": true,
      "policyVersion": "kine.v3.forensic",
      "count": 3,
      "items": []
    }

## 6. POST /v1/history/clear

Purpose:
Clear server-side history log.

Example response:

    {
      "ok": true,
      "cleared": true,
      "policyVersion": "kine.v3.forensic",
      "decisionLogPath": "server-local path"
    }

## 7. GET /v1/export

Purpose:
Generate and expose a current export bundle summary.

Example response:

    {
      "ok": true,
      "policyVersion": "kine.v3.forensic",
      "exportPath": "server-local path",
      "count": 3
    }

## Decision semantics

ALLOW
Transaction may proceed.

WARN
Transaction requires explicit human review or override in the integrating client.

BLOCK
Transaction must not proceed.

## Public integration rule

Integrators may build any UI or dashboard layer they want, including:
- security badges
- risk indicators
- treasury consoles
- alert banners
- transaction review drawers
- browser wallet overlays

The API is intentionally presentation-agnostic.