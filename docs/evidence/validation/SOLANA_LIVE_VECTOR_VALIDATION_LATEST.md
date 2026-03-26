# Solana Live Test-Vector Validation

Generated: 2026-03-25T18:20:51
Pass: True
BaseUrl: http://127.0.0.1:8787
RpcUrl: https://api.devnet.solana.com
Slot: 451039684
Signature: 2ahFwX6HD8yPoUabCfWeSZytRbVcVjhMaDCFdeZbUz7eJ55kd2F5fKZPdhyvBRTjCimuGvgK7w6CLTTENKVdWMNt

## What this proves
- Wallet Lite processed a live network-derived Solana devnet vector.
- The vector was sourced from a recent finalized devnet block.
- Receipt continuity was preserved.
- Preview governance remained intact under live-derived transaction shape.

## Key Result Checks
- chainFamily = solana
- decision = EXECUTE_NOW
- recommendedAction = EXECUTE
- signerCount = 2
- writableAccountCount = 2
- feeLamports = 5000

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
               "transactionType":  "network_derived_live_vector",
               "instructionCount":  1,
               "accountKeyCount":  3,
               "writableAccountCount":  2,
               "signerCount":  2,
               "feeLamports":  "5000",
               "recentBlockhashPresent":  true
           },
    "narrative":  {
                      "kind":  "sol_basic_execution",
                      "summary":  "Execute Solana instruction bundle",
                      "confidence":  0.86
                  },
    "risk":  {
                 "score":  35,
                 "level":  "medium",
                 "reasons":  [
                                 "SOL_MULTI_SIGNER",
                                 "SOL_BASIC_EXECUTION"
                             ]
             },
    "consequence":  {
                        "applied":  true,
                        "chainFamily":  "solana",
                        "status":  "COMPLETE",
                        "summaryFlags":  [
                                             "SOL_VALUE_TRANSFER",
                                             "SOL_MULTI_SIGNER"
                                         ],
                        "valueMovement":  {
                                              "feeLamports":  "5000",
                                              "signerCount":  2
                                          },
                        "programInteraction":  {
                                                   "programIds":  [
                                                                      "Vote111111111111111111111111111111111111111"
                                                                  ],
                                                   "unknownProgramCount":  0,
                                                   "instructionCount":  1
                                               },
                        "accountRisk":  {
                                            "accountKeyCount":  3,
                                            "writableAccountCount":  2,
                                            "signerCount":  2,
                                            "classification":  "multi_signer"
                                        }
                    },
    "recommendedAction":  "EXECUTE",
    "adapter":  {
                    "name":  "solana-adapter-mvp",
                    "status":  "runtime-hardened"
                },
    "receipt":  {
                    "receiptId":  "decision_20260326T002051Z_3535f0d4",
                    "sha256":  "3535f0d4a8c518bfd7b74904c440184f73cea2593f9cf4b4417eb783aa17b36f",
                    "path":  "%REPO_ROOT%\\bin\\wallet-lite-runtime\\.aion\\decision-receipts\\decision_20260326T002051Z_3535f0d4.json"
                }
}