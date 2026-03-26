# SOL6.1 Solana Unknown-Program Validation

Generated: 2026-03-25T15:07:41
Pass: True
BaseUrl: http://127.0.0.1:8787

## What this proves
- Solana unknown-program posture is recognized in the live runtime.
- Solana preview is queued for review when an unknown program is referenced.
- SOL_UNKNOWN_PROGRAM reason surface is emitted.
- Solana consequence block surfaces unknown-program exposure.

## Key Result Checks
- chainFamily = solana
- decision = QUEUED
- recommendedAction = QUEUE_AND_REVIEW
- reasonCodes = SOL_UNKNOWN_PROGRAM
- unknownProgramCount = 1

## Raw Response

{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "solana",
    "policyDecision":  "QUEUED",
    "decision":  "QUEUED",
    "reasonCodes":  [
                        "SOL_UNKNOWN_PROGRAM"
                    ],
    "tx":  {
               "network":  "solana-devnet",
               "transactionType":  "custom_program_interaction",
               "instructionCount":  1,
               "accountKeyCount":  3,
               "writableAccountCount":  2,
               "signerCount":  1,
               "feeLamports":  "5000",
               "recentBlockhashPresent":  true
           },
    "narrative":  {
                      "kind":  "sol_unknown_program_execution",
                      "summary":  "Solana transaction references unknown program",
                      "confidence":  0.66
                  },
    "risk":  {
                 "score":  72,
                 "level":  "high",
                 "reasons":  [
                                 "SOL_UNKNOWN_PROGRAM"
                             ]
             },
    "consequence":  {
                        "applied":  true,
                        "chainFamily":  "solana",
                        "status":  "COMPLETE",
                        "summaryFlags":  [
                                             "SOL_VALUE_TRANSFER",
                                             "SOL_UNKNOWN_PROGRAM"
                                         ],
                        "valueMovement":  {
                                              "feeLamports":  "5000",
                                              "signerCount":  1
                                          },
                        "programInteraction":  {
                                                   "programIds":  [
                                                                      "CustomUnknownProgram1111111111111111111111111"
                                                                  ],
                                                   "unknownProgramCount":  1,
                                                   "instructionCount":  1
                                               },
                        "accountRisk":  {
                                            "accountKeyCount":  3,
                                            "writableAccountCount":  2,
                                            "signerCount":  1,
                                            "classification":  "bounded"
                                        }
                    },
    "recommendedAction":  "QUEUE_AND_REVIEW",
    "adapter":  {
                    "name":  "solana-adapter-mvp",
                    "status":  "runtime-hardened"
                },
    "receipt":  {
                    "receiptId":  "decision_20260325T210741Z_a1d93ff6",
                    "sha256":  "a1d93ff6df4b33f8ba34698671e5feab3309b60e4f73e63bf707709887f75db1",
                    "path":  "%REPO_ROOT%\\bin\\wallet-lite-runtime\\.aion\\decision-receipts\\decision_20260325T210741Z_a1d93ff6.json"
                }
}