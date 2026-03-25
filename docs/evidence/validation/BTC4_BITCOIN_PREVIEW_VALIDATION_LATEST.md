# BTC4 Bitcoin Preview Validation

Generated: 2026-03-25T12:29:20
Pass: True
BaseUrl: http://127.0.0.1:8787

## What this proves
- Bitcoin preview path is live in the runtime.
- Bitcoin response returns deterministic Wallet Lite-compatible structure.
- Receipt continuity is preserved.
- Lite-safe Bitcoin consequence block is present.

## Key Result Checks
- chainFamily = bitcoin
- decision = EXECUTE_NOW
- consequence.status = COMPLETE
- totalValueSats = 99000
- feePosture.classification = normal
- changePosture.classification = expected

## Raw Response

{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "bitcoin",
    "policyDecision":  "EXECUTE_NOW",
    "decision":  "EXECUTE_NOW",
    "reasonCodes":  [

                    ],
    "tx":  {
               "network":  "bitcoin-signet",
               "inputCount":  2,
               "outputCount":  2,
               "totalValueSats":  "99000",
               "feeSats":  "1000",
               "feeRateSatVb":  "5",
               "changeOutputPresent":  true
           },
    "narrative":  {
                      "kind":  "btc_send",
                      "summary":  "Send BTC",
                      "confidence":  0.92
                  },
    "risk":  {
                 "score":  15,
                 "level":  "low",
                 "reasons":  [
                                 "BTC_BASIC_SEND"
                             ]
             },
    "consequence":  {
                        "applied":  true,
                        "chainFamily":  "bitcoin",
                        "status":  "COMPLETE",
                        "summaryFlags":  [
                                             "BITCOIN_VALUE_MOVEMENT"
                                         ],
                        "valueMovement":  {
                                              "totalValueSats":  "99000",
                                              "outputCount":  2,
                                              "recipientOutputCount":  1
                                          },
                        "feePosture":  {
                                           "feeSats":  "1000",
                                           "feeRateSatVb":  "5",
                                           "classification":  "normal",
                                           "summary":  "Bitcoin fee posture appears normal."
                                       },
                        "outputStructure":  {
                                                "outputCount":  2,
                                                "unusualOutputCount":  0,
                                                "dustLikePattern":  false,
                                                "unknownDestinationCount":  0
                                            },
                        "changePosture":  {
                                              "changeOutputPresent":  true,
                                              "classification":  "expected",
                                              "summary":  "Change structure appears normal."
                                          }
                    },
    "recommendedAction":  "EXECUTE",
    "adapter":  {
                    "name":  "bitcoin-adapter-mvp",
                    "status":  "runtime-hardened"
                },
    "receipt":  {
                    "receiptId":  "decision_20260325T182920Z_20bbe795",
                    "sha256":  "20bbe795dce65f4ddc904084d68a1eb2d08ac7c40ca3d04fc4c6c9d8f756ebde",
                    "path":  "C:\\Lab_Research\\aion-guard-lite\\bin\\wallet-lite-runtime\\.aion\\decision-receipts\\decision_20260325T182920Z_20bbe795.json"
                }
}