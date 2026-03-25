# BTC6.3B Bitcoin High-Fee Validation

Generated: 2026-03-25T12:52:34
Pass: True
BaseUrl: http://127.0.0.1:8787

## What this proves
- Bitcoin high-fee posture is recognized in the live runtime.
- Bitcoin preview is queued for review under high-fee conditions.
- HIGH_FEE_REVIEW reason surface is emitted.
- Bitcoin consequence block surfaces high-fee posture.

## Key Result Checks
- decision = QUEUED
- recommendedAction = QUEUE_AND_REVIEW
- reasonCodes = HIGH_FEE_REVIEW
- feePosture.classification = high
- summaryFlags = BITCOIN_VALUE_MOVEMENT, HIGH_FEE_POSTURE

## Raw Response

{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "bitcoin",
    "policyDecision":  "QUEUED",
    "decision":  "QUEUED",
    "reasonCodes":  [
                        "HIGH_FEE_REVIEW"
                    ],
    "tx":  {
               "network":  "bitcoin-signet",
               "inputCount":  2,
               "outputCount":  2,
               "totalValueSats":  "70000",
               "feeSats":  "60000",
               "feeRateSatVb":  "45",
               "changeOutputPresent":  true
           },
    "narrative":  {
                      "kind":  "btc_send",
                      "summary":  "Send BTC",
                      "confidence":  0.86
                  },
    "risk":  {
                 "score":  58,
                 "level":  "medium",
                 "reasons":  [
                                 "BTC_HIGH_FEE"
                             ]
             },
    "consequence":  {
                        "applied":  true,
                        "chainFamily":  "bitcoin",
                        "status":  "COMPLETE",
                        "summaryFlags":  [
                                             "BITCOIN_VALUE_MOVEMENT",
                                             "HIGH_FEE_POSTURE"
                                         ],
                        "valueMovement":  {
                                              "totalValueSats":  "70000",
                                              "outputCount":  2,
                                              "recipientOutputCount":  1
                                          },
                        "feePosture":  {
                                           "feeSats":  "60000",
                                           "feeRateSatVb":  "45",
                                           "classification":  "high",
                                           "summary":  "High Bitcoin fee posture requires review."
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
    "recommendedAction":  "QUEUE_AND_REVIEW",
    "adapter":  {
                    "name":  "bitcoin-adapter-mvp",
                    "status":  "runtime-hardened"
                },
    "receipt":  {
                    "receiptId":  "decision_20260325T185234Z_c3ca3065",
                    "sha256":  "c3ca3065d7c235a33513584d4c1ffcfda686fab3e0d1327785f4205941dd833e",
                    "path":  "C:\\Lab_Research\\aion-guard-lite\\bin\\wallet-lite-runtime\\.aion\\decision-receipts\\decision_20260325T185234Z_c3ca3065.json"
                }
}