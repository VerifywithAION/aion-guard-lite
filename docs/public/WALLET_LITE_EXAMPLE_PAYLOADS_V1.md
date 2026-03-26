# Wallet Lite Example Payloads V1

## Purpose

This document provides public-safe example payloads and example response shapes.

These examples are intentionally thin and customer-facing.

They are not implementation disclosures.

---

## Example 1 - EVM preview request

    {
      "chainFamily": "evm",
      "network": "sepolia",
      "walletAddress": "0x1111111111111111111111111111111111111111",
      "to": "0x2222222222222222222222222222222222222222",
      "value": "0",
      "data": "0x095ea7b3..."
    }

Example response:

    {
      "ok": true,
      "chainFamily": "evm",
      "decision": "QUEUED",
      "recommendedAction": "QUEUE_AND_REVIEW",
      "reasonCodes": ["APPROVAL_REVIEW"],
      "risk": {
        "level": "medium"
      },
      "receipt": {
        "receiptId": "example-receipt-id"
      }
    }

---

## Example 2 - Bitcoin preview request

    {
      "chainFamily": "bitcoin",
      "network": "bitcoin-signet",
      "walletAddress": "wallet-context",
      "outputs": [
        {
          "address": "tb1qexampleaddress0000000000000000000000000",
          "valueSats": "12000"
        }
      ],
      "feeSats": "500",
      "inputCount": 1,
      "outputCount": 1
    }

Example response:

    {
      "ok": true,
      "chainFamily": "bitcoin",
      "decision": "EXECUTE_NOW",
      "recommendedAction": "EXECUTE",
      "reasonCodes": [],
      "risk": {
        "level": "low"
      },
      "receipt": {
        "receiptId": "example-receipt-id"
      }
    }

---

## Example 3 - Solana preview request

    {
      "chainFamily": "solana",
      "network": "solana-devnet",
      "walletAddress": "So11111111111111111111111111111111111111112",
      "instructions": [
        {
          "programId": "11111111111111111111111111111111",
          "type": "transfer"
        }
      ],
      "signerCount": 1,
      "writableAccountCount": 2,
      "feeLamports": "5000"
    }

Example response:

    {
      "ok": true,
      "chainFamily": "solana",
      "decision": "EXECUTE_NOW",
      "recommendedAction": "EXECUTE",
      "reasonCodes": [],
      "risk": {
        "level": "low"
      },
      "receipt": {
        "receiptId": "example-receipt-id"
      }
    }

---

## Public-safe note

These examples illustrate consumption posture only.

They do not disclose private runtime internals.