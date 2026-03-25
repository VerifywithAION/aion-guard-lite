# SOL7 Solana Repeat Determinism Validation

Generated: 2026-03-25T15:36:44
Pass: True
BaseUrl: http://127.0.0.1:8787
Runs: 3

## What this proves
- The same normalized Solana request can be run repeatedly.
- Solana preview remains structurally deterministic across repeated runs.
- Decision family, reason surfaces, consequence interpretation, and recommended action remain stable.

## Baseline Normalized Result
- decision = EXECUTE_NOW
- recommendedAction = EXECUTE
- reasonCodes = 
- consequenceFlags = SOL_VALUE_TRANSFER
- accountRiskClassification = bounded
- instructionCount = 2

## Normalized Runs

[
    {
        "chainFamily":  "solana",
        "decision":  "EXECUTE_NOW",
        "recommendedAction":  "EXECUTE",
        "reasonCodes":  {

                        },
        "riskLevel":  "low",
        "riskReasons":  "SOL_BASIC_EXECUTION",
        "narrativeKind":  "sol_basic_execution",
        "consequenceStatus":  "COMPLETE",
        "consequenceFlags":  "SOL_VALUE_TRANSFER",
        "instructionCount":  "2",
        "unknownProgramCount":  "0",
        "writableAccountCount":  "2",
        "accountRiskClassification":  "bounded",
        "feeLamports":  "7000",
        "signerCount":  "1"
    },
    {
        "chainFamily":  "solana",
        "decision":  "EXECUTE_NOW",
        "recommendedAction":  "EXECUTE",
        "reasonCodes":  {

                        },
        "riskLevel":  "low",
        "riskReasons":  "SOL_BASIC_EXECUTION",
        "narrativeKind":  "sol_basic_execution",
        "consequenceStatus":  "COMPLETE",
        "consequenceFlags":  "SOL_VALUE_TRANSFER",
        "instructionCount":  "2",
        "unknownProgramCount":  "0",
        "writableAccountCount":  "2",
        "accountRiskClassification":  "bounded",
        "feeLamports":  "7000",
        "signerCount":  "1"
    },
    {
        "chainFamily":  "solana",
        "decision":  "EXECUTE_NOW",
        "recommendedAction":  "EXECUTE",
        "reasonCodes":  {

                        },
        "riskLevel":  "low",
        "riskReasons":  "SOL_BASIC_EXECUTION",
        "narrativeKind":  "sol_basic_execution",
        "consequenceStatus":  "COMPLETE",
        "consequenceFlags":  "SOL_VALUE_TRANSFER",
        "instructionCount":  "2",
        "unknownProgramCount":  "0",
        "writableAccountCount":  "2",
        "accountRiskClassification":  "bounded",
        "feeLamports":  "7000",
        "signerCount":  "1"
    }
]
