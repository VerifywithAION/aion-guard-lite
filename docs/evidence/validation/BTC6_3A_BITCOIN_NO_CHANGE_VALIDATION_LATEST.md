# BTC6.3A Bitcoin No-Change Validation

Generated: 2026-03-25T12:45:34
Pass: True
BaseUrl: http://127.0.0.1:8787

## What this proves
- Bitcoin no-change posture is recognized in the live runtime.
- Bitcoin preview is queued for review when no change output is present.
- NO_CHANGE_OUTPUT_REVIEW reason surface is emitted.
- Bitcoin consequence block surfaces missing change posture.

## Key Result Checks
- decision = QUEUED
- recommendedAction = QUEUE_AND_REVIEW
- reasonCodes = NO_CHANGE_OUTPUT_REVIEW
- changePosture.classification = missing
- summaryFlags = BITCOIN_VALUE_MOVEMENT, NO_CHANGE_OUTPUT

## Raw Response

{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "bitcoin",
    "policyDecision":  "QUEUED",
    "decision":  "QUEUED",
    "reasonCodes":  [
                        "NO_CHANGE_OUTPUT_REVIEW"
                    ],
    "tx":  {
               "network":  "bitcoin-signet",
               "inputCount":  1,
               "outputCount":  1,
               "totalValueSats":  "75000",
               "feeSats":  "1200",
               "feeRateSatVb":  "6",
               "changeOutputPresent":  false
           },
    "narrative":  {
                      "kind":  "btc_send",
                      "summary":  "Send BTC",
                      "confidence":  0.8
                  },
    "risk":  {
                 "score":  45,
                 "level":  "medium",
                 "reasons":  [
                                 "BTC_NO_CHANGE_OUTPUT"
                             ]
             },
    "consequence":  {
                        "applied":  true,
                        "chainFamily":  "bitcoin",
                        "status":  "COMPLETE",
                        "summaryFlags":  [
                                             "BITCOIN_VALUE_MOVEMENT",
                                             "NO_CHANGE_OUTPUT"
                                         ],
                        "valueMovement":  {
                                              "totalValueSats":  "75000",
                                              "outputCount":  1,
                                              "recipientOutputCount":  1
                                          },
                        "feePosture":  {
                                           "feeSats":  "1200",
                                           "feeRateSatVb":  "6",
                                           "classification":  "normal",
                                           "summary":  "Bitcoin fee posture appears normal."
                                       },
                        "outputStructure":  {
                                                "outputCount":  1,
                                                "unusualOutputCount":  0,
                                                "dustLikePattern":  false,
                                                "unknownDestinationCount":  0
                                            },
                        "changePosture":  {
                                              "changeOutputPresent":  false,
                                              "classification":  "missing",
                                              "summary":  "No change output is present."
                                          }
                    },
    "recommendedAction":  "QUEUE_AND_REVIEW",
    "adapter":  {
                    "name":  "bitcoin-adapter-mvp",
                    "status":  "runtime-hardened"
                },
    "receipt":  {
                    "receiptId":  "decision_20260325T184534Z_63cd5903",
                    "sha256":  "63cd5903530e309ef5169a0cc0fdd30dffd9c2c337c4df16ed7777e70e436e85",
                    "path":  "C:\\Lab_Research\\aion-guard-lite\\bin\\wallet-lite-runtime\\.aion\\decision-receipts\\decision_20260325T184534Z_63cd5903.json"
                }
}