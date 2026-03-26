# SOL4 Solana Preview Validation

Generated: 2026-03-25T14:53:16
Pass: True
BaseUrl: http://127.0.0.1:8787

## What this proves
- Solana preview path is live in the runtime.
- Solana response returns Wallet Lite-compatible structure.
- Receipt continuity is preserved.
- Solana consequence block is present.

## Key Result Checks
- chainFamily = solana
- decision = EXECUTE_NOW
- recommendedAction = EXECUTE
- consequence.status = COMPLETE

## Raw Response

{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "solana",
    "policyDecision":  "EXECUTE_NOW",
    "decision":  "EXECUTE_NOW",
    "reasonCodes":  [

                    ],
    "tx":  {
               "network":  "solana-devnet",
               "transactionType":  "transfer",
               "instructionCount":  1,
               "accountKeyCount":  3,
               "writableAccountCount":  2,
               "signerCount":  1,
               "feeLamports":  "5000",
               "recentBlockhashPresent":  true
           },
    "narrative":  {
                      "kind":  "sol_basic_execution",
                      "summary":  "Execute Solana instruction bundle",
                      "confidence":  0.93
                  },
    "risk":  {
                 "score":  18,
                 "level":  "low",
                 "reasons":  [
                                 "SOL_BASIC_EXECUTION"
                             ]
             },
    "consequence":  {
                        "applied":  true,
                        "chainFamily":  "solana",
                        "status":  "COMPLETE",
                        "summaryFlags":  [
                                             "SOL_VALUE_TRANSFER"
                                         ],
                        "valueMovement":  {
                                              "feeLamports":  "5000",
                                              "signerCount":  1
                                          },
                        "programInteraction":  {
                                                   "programIds":  [
                                                                      "11111111111111111111111111111111"
                                                                  ],
                                                   "unknownProgramCount":  0,
                                                   "instructionCount":  1
                                               },
                        "accountRisk":  {
                                            "accountKeyCount":  3,
                                            "writableAccountCount":  2,
                                            "signerCount":  1,
                                            "classification":  "bounded"
                                        }
                    },
    "recommendedAction":  "EXECUTE",
    "adapter":  {
                    "name":  "solana-adapter-mvp",
                    "status":  "runtime-hardened"
                },
    "receipt":  {
                    "receiptId":  "decision_20260325T205316Z_92426c6b",
                    "sha256":  "92426c6b2139e9bcffc57d0f950e84adcb958175ca942f6e7a93ed4e8f09e076",
                    "path":  "%REPO_ROOT%\\bin\\wallet-lite-runtime\\.aion\\decision-receipts\\decision_20260325T205316Z_92426c6b.json"
                }
}