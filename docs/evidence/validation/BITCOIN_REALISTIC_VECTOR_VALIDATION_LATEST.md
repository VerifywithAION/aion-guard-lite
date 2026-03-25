# Bitcoin Realistic Vector Validation

Generated: 2026-03-25T13:38:19
Pass: True
BaseUrl: http://127.0.0.1:8787

## Purpose
This proof uses realistic Bitcoin transaction shape data:
- realistic testnet/signet-style addresses
- realistic fee posture
- realistic output and change pattern
- no broadcast, preview only

## What this proves
- Bitcoin preview can process realistic-looking Bitcoin transaction shape.
- Receipt continuity is preserved.
- Consequence layer remains present.
- This strengthens public credibility beyond purely synthetic payload shape.

## Key Result Checks
- chainFamily = bitcoin
- decision = EXECUTE_NOW
- totalValueSats = 199320
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
               "totalValueSats":  "199320",
               "feeSats":  "1680",
               "feeRateSatVb":  "7",
               "changeOutputPresent":  true
           },
    "narrative":  {
                      "kind":  "btc_psbt_or_multisig",
                      "summary":  "Bitcoin PSBT or multisig flow",
                      "confidence":  0.88
                  },
    "risk":  {
                 "score":  40,
                 "level":  "medium",
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
                                              "totalValueSats":  "199320",
                                              "outputCount":  2,
                                              "recipientOutputCount":  1
                                          },
                        "feePosture":  {
                                           "feeSats":  "1680",
                                           "feeRateSatVb":  "7",
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
                    "receiptId":  "decision_20260325T193819Z_163f3633",
                    "sha256":  "163f363369635f6a4b7fd17db756efdaa03fb76e30aedceff10ad01413e42902",
                    "path":  "C:\\Lab_Research\\aion-guard-lite\\bin\\wallet-lite-runtime\\.aion\\decision-receipts\\decision_20260325T193819Z_163f3633.json"
                }
}