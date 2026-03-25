# SOL6.2 Solana Multi-Instruction Validation

Generated: 2026-03-25T15:17:42
Pass: True
BaseUrl: http://127.0.0.1:8787

## What this proves
- Solana high-complexity multi-instruction posture is recognized in the live runtime.
- Solana preview is queued for review under multi-instruction complexity.
- SOL_MULTI_INSTRUCTION reason surface is emitted.
- Solana consequence block surfaces complex instruction-set exposure.

## Key Result Checks
- chainFamily = solana
- decision = QUEUED
- recommendedAction = QUEUE_AND_REVIEW
- reasonCodes = SOL_MULTI_INSTRUCTION
- instructionCount = 4

## Raw Response

{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "solana",
    "policyDecision":  "QUEUED",
    "decision":  "QUEUED",
    "reasonCodes":  [
                        "SOL_MULTI_INSTRUCTION"
                    ],
    "tx":  {
               "network":  "solana-devnet",
               "transactionType":  "multi_instruction_bundle",
               "instructionCount":  4,
               "accountKeyCount":  6,
               "writableAccountCount":  4,
               "signerCount":  1,
               "feeLamports":  "8000",
               "recentBlockhashPresent":  true
           },
    "narrative":  {
                      "kind":  "sol_basic_execution",
                      "summary":  "Execute Solana instruction bundle",
                      "confidence":  0.82
                  },
    "risk":  {
                 "score":  50,
                 "level":  "medium",
                 "reasons":  [
                                 "SOL_COMPLEX_INSTRUCTIONS"
                             ]
             },
    "consequence":  {
                        "applied":  true,
                        "chainFamily":  "solana",
                        "status":  "COMPLETE",
                        "summaryFlags":  [
                                             "SOL_VALUE_TRANSFER",
                                             "SOL_COMPLEX_INSTRUCTION_SET"
                                         ],
                        "valueMovement":  {
                                              "feeLamports":  "8000",
                                              "signerCount":  1
                                          },
                        "programInteraction":  {
                                                   "programIds":  [
                                                                      "11111111111111111111111111111111",
                                                                      "ComputeBudget111111111111111111111111111111",
                                                                      "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                                                                      "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"
                                                                  ],
                                                   "unknownProgramCount":  0,
                                                   "instructionCount":  4
                                               },
                        "accountRisk":  {
                                            "accountKeyCount":  6,
                                            "writableAccountCount":  4,
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
                    "receiptId":  "decision_20260325T211742Z_35c90347",
                    "sha256":  "35c90347689ac9f44f9338cbc8996d484254209c22af2b5a509a55801af44109",
                    "path":  "C:\\Lab_Research\\aion-guard-lite\\bin\\wallet-lite-runtime\\.aion\\decision-receipts\\decision_20260325T211742Z_35c90347.json"
                }
}