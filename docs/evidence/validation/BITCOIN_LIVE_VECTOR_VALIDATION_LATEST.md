# Bitcoin Live Test-Vector Validation

Generated: 2026-03-25T16:32:30
Pass: True
BaseUrl: http://127.0.0.1:8787
MempoolBase: https://mempool.space/signet/api
TipHash: 00000001f0eadea37dad7a90952ceaa4ab4462bef53be5eb93717547dc448875
Txid: 9e38b8218a51590e641b3f9045febcb03149b32e6a3247a2535beb6fb49d2f97

## What this proves
- Wallet Lite processed a live network-derived Bitcoin signet vector.
- The vector was sourced from the current signet tip block.
- Receipt continuity was preserved.
- Preview governance remained intact under live-derived transaction shape.

## Key Result Checks
- chainFamily = bitcoin
- decision = QUEUED
- recommendedAction = QUEUE_AND_REVIEW
- inputCount = 11
- outputCount = 11
- feeSats = 1100

## Raw Response

{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "bitcoin",
    "policyDecision":  "QUEUED",
    "decision":  "QUEUED",
    "reasonCodes":  [
                        "UNUSUAL_OUTPUT_COUNT_REVIEW"
                    ],
    "tx":  {
               "network":  "bitcoin-signet",
               "inputCount":  11,
               "outputCount":  11,
               "totalValueSats":  "10616712",
               "feeSats":  "1100",
               "feeRateSatVb":  "0",
               "changeOutputPresent":  true
           },
    "narrative":  {
                      "kind":  "btc_send_multi_output",
                      "summary":  "Send BTC with multiple recipient outputs",
                      "confidence":  0.82
                  },
    "risk":  {
                 "score":  50,
                 "level":  "medium",
                 "reasons":  [
                                 "BTC_UNUSUAL_OUTPUT_COUNT"
                             ]
             },
    "consequence":  {
                        "applied":  true,
                        "chainFamily":  "bitcoin",
                        "status":  "COMPLETE",
                        "summaryFlags":  [
                                             "BITCOIN_VALUE_MOVEMENT",
                                             "UNUSUAL_OUTPUT_STRUCTURE"
                                         ],
                        "valueMovement":  {
                                              "totalValueSats":  "10616712",
                                              "outputCount":  11,
                                              "recipientOutputCount":  10
                                          },
                        "feePosture":  {
                                           "feeSats":  "1100",
                                           "feeRateSatVb":  "0",
                                           "classification":  "normal",
                                           "summary":  "Bitcoin fee posture appears normal."
                                       },
                        "outputStructure":  {
                                                "outputCount":  11,
                                                "unusualOutputCount":  11,
                                                "dustLikePattern":  false,
                                                "unknownDestinationCount":  0
                                            },
                        "changePosture":  {
                                              "changeOutputPresent":  true,
                                              "classification":  "expected",
                                              "summary":  "Change structure appears normal."
                                          }
                    },
    "recommendedAction":  "QUEUE_AND_REVIEW",
    "adapter":  {
                    "name":  "bitcoin-adapter-mvp",
                    "status":  "runtime-hardened"
                },
    "receipt":  {
                    "receiptId":  "decision_20260325T223230Z_de50db74",
                    "sha256":  "de50db7411a8cdac6850455942a7ee19a0565a154767500cd6e564aa45e344cc",
                    "path":  "C:\\Lab_Research\\aion-guard-lite\\bin\\wallet-lite-runtime\\.aion\\decision-receipts\\decision_20260325T223230Z_de50db74.json"
                }
}