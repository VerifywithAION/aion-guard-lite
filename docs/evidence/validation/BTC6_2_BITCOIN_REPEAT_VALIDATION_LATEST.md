# BTC6.2 Bitcoin Repeat Determinism Validation

Generated: 2026-03-25T13:09:09
Pass: True
BaseUrl: http://127.0.0.1:8787
Runs: 3

## What this proves
- The same normalized Bitcoin request can be run repeatedly.
- Bitcoin preview remains structurally deterministic across repeated runs.
- Decision family, reason surfaces, consequence interpretation, and recommended action remain stable.

## Baseline Normalized Result
- decision = EXECUTE_NOW
- recommendedAction = EXECUTE
- reasonCodes = 
- consequenceFlags = BITCOIN_VALUE_MOVEMENT
- feeClassification = normal
- changeClassification = expected

## Normalized Runs

[
    {
        "chainFamily":  "bitcoin",
        "decision":  "EXECUTE_NOW",
        "recommendedAction":  "EXECUTE",
        "reasonCodes":  {

                        },
        "riskLevel":  "low",
        "riskReasons":  "BTC_BASIC_SEND",
        "narrativeKind":  "btc_send",
        "consequenceStatus":  "COMPLETE",
        "consequenceFlags":  "BITCOIN_VALUE_MOVEMENT",
        "totalValueSats":  "99000",
        "feeClassification":  "normal",
        "changeClassification":  "expected"
    },
    {
        "chainFamily":  "bitcoin",
        "decision":  "EXECUTE_NOW",
        "recommendedAction":  "EXECUTE",
        "reasonCodes":  {

                        },
        "riskLevel":  "low",
        "riskReasons":  "BTC_BASIC_SEND",
        "narrativeKind":  "btc_send",
        "consequenceStatus":  "COMPLETE",
        "consequenceFlags":  "BITCOIN_VALUE_MOVEMENT",
        "totalValueSats":  "99000",
        "feeClassification":  "normal",
        "changeClassification":  "expected"
    },
    {
        "chainFamily":  "bitcoin",
        "decision":  "EXECUTE_NOW",
        "recommendedAction":  "EXECUTE",
        "reasonCodes":  {

                        },
        "riskLevel":  "low",
        "riskReasons":  "BTC_BASIC_SEND",
        "narrativeKind":  "btc_send",
        "consequenceStatus":  "COMPLETE",
        "consequenceFlags":  "BITCOIN_VALUE_MOVEMENT",
        "totalValueSats":  "99000",
        "feeClassification":  "normal",
        "changeClassification":  "expected"
    }
]
