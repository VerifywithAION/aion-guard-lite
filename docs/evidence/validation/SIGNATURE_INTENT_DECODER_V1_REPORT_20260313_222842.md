# Signature Intent Decoder V1 Validation Report

Generated: 2026-03-13T22:28:46
Policy: 0x49fd2BE640DB2910c2fAb69bB8531Ab6E76127ff

Pass Count: 4
Fail Count: 0

## NoSignContext_PreserveBase

Pass: True
Expected Decision: EXECUTE_NOW
Actual Decision: EXECUTE_NOW
Expected Action: EXECUTE
Actual Action: EXECUTE
Expected ReasonCode: 
Actual ReasonCode: 

---
{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "evm",
    "policyDecision":  "EXECUTE_NOW",
    "decision":  "EXECUTE_NOW",
    "escalation":  {
                       "applied":  false,
                       "from":  "EXECUTE_NOW",
                       "to":  "EXECUTE_NOW",
                       "reasonCodes":  [

                                       ],
                       "summary":  "No escalation applied"
                   },
    "approvalGovernance":  {
                               "applied":  false
                           },
    "poisoningGuard":  {
                           "applied":  false,
                           "decision":  "EXECUTE_NOW",
                           "reasonCode":  "NO_POISONING_GUARD_APPLIED",
                           "summary":  "Destination remains under existing trusted policy behavior.",
                           "classification":  "trusted"
                       },
    "signatureIntent":  {
                            "applied":  false
                        },
    "verdictCode":  0,
    "tx":  {
               "to":  "0x2222222222222222222222222222222222222222",
               "value":  "1",
               "data":  "0x"
           },
    "policy":  {
                   "paused":  false
               },
    "narrative":  {
                      "kind":  "native_transfer",
                      "summary":  "Transfer native asset",
                      "confidence":  0.95
                  },
    "destination":  {
                        "classification":  "trusted",
                        "risk":  "low",
                        "labels":  [
                                       "trusted_counterparty"
                                   ]
                    },
    "risk":  {
                 "score":  10,
                 "level":  "low",
                 "reasons":  [
                                 "DEST_TRUSTED",
                                 "NARRATIVE_NATIVE_TRANSFER"
                             ]
             },
    "timing":  {
                   "eta":  "0"
               },
    "recommendedAction":  "EXECUTE",
    "receipt":  {
                    "receiptId":  "decision_20260314T042846Z_a9566a80",
                    "sha256":  "a9566a804ef586fd5c449776edf14365b231337dc1cf894438fb0b1a3156479c",
                    "path":  "C:\\Lab_Research\\aion-guard-lite\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T042846Z_a9566a80.json"
                }
}
---

## OpaqueSign_Queued

Pass: True
Expected Decision: QUEUED
Actual Decision: QUEUED
Expected Action: QUEUE_AND_REVIEW
Actual Action: QUEUE_AND_REVIEW
Expected ReasonCode: OPAQUE_SIGN_REVIEW
Actual ReasonCode: OPAQUE_SIGN_REVIEW

---
{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "evm",
    "policyDecision":  "EXECUTE_NOW",
    "decision":  "QUEUED",
    "escalation":  {
                       "applied":  false,
                       "from":  "EXECUTE_NOW",
                       "to":  "EXECUTE_NOW",
                       "reasonCodes":  [

                                       ],
                       "summary":  "No escalation applied"
                   },
    "approvalGovernance":  {
                               "applied":  false
                           },
    "poisoningGuard":  {
                           "applied":  false,
                           "decision":  "EXECUTE_NOW",
                           "reasonCode":  "NO_POISONING_GUARD_APPLIED",
                           "summary":  "Destination remains under existing trusted policy behavior.",
                           "classification":  "trusted"
                       },
    "signatureIntent":  {
                            "applied":  true,
                            "decision":  "QUEUED",
                            "reasonCode":  "OPAQUE_SIGN_REVIEW",
                            "summary":  "Opaque signature request requires governed review.",
                            "signType":  "opaque"
                        },
    "verdictCode":  0,
    "tx":  {
               "to":  "0x2222222222222222222222222222222222222222",
               "value":  "1",
               "data":  "0x"
           },
    "policy":  {
                   "paused":  false
               },
    "narrative":  {
                      "kind":  "native_transfer",
                      "summary":  "Transfer native asset",
                      "confidence":  0.95
                  },
    "destination":  {
                        "classification":  "trusted",
                        "risk":  "low",
                        "labels":  [
                                       "trusted_counterparty"
                                   ]
                    },
    "risk":  {
                 "score":  10,
                 "level":  "low",
                 "reasons":  [
                                 "DEST_TRUSTED",
                                 "NARRATIVE_NATIVE_TRANSFER"
                             ]
             },
    "timing":  {
                   "eta":  "0"
               },
    "recommendedAction":  "QUEUE_AND_REVIEW",
    "receipt":  {
                    "receiptId":  "decision_20260314T042846Z_ddb96312",
                    "sha256":  "ddb96312bdecd8c17052a4bc31033002295c8cc46e533f412d45f0e45a063b42",
                    "path":  "C:\\Lab_Research\\aion-guard-lite\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T042846Z_ddb96312.json"
                }
}
---

## MalformedTypedSign_Blocked

Pass: True
Expected Decision: BLOCKED
Actual Decision: BLOCKED
Expected Action: BLOCK
Actual Action: BLOCK
Expected ReasonCode: MALFORMED_TYPED_SIGN_BLOCKED
Actual ReasonCode: MALFORMED_TYPED_SIGN_BLOCKED

---
{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "evm",
    "policyDecision":  "EXECUTE_NOW",
    "decision":  "BLOCKED",
    "escalation":  {
                       "applied":  false,
                       "from":  "EXECUTE_NOW",
                       "to":  "EXECUTE_NOW",
                       "reasonCodes":  [

                                       ],
                       "summary":  "No escalation applied"
                   },
    "approvalGovernance":  {
                               "applied":  false
                           },
    "poisoningGuard":  {
                           "applied":  false,
                           "decision":  "EXECUTE_NOW",
                           "reasonCode":  "NO_POISONING_GUARD_APPLIED",
                           "summary":  "Destination remains under existing trusted policy behavior.",
                           "classification":  "trusted"
                       },
    "signatureIntent":  {
                            "applied":  true,
                            "decision":  "BLOCKED",
                            "reasonCode":  "MALFORMED_TYPED_SIGN_BLOCKED",
                            "summary":  "Malformed typed-sign request has been blocked.",
                            "signType":  "typed_v4"
                        },
    "verdictCode":  0,
    "tx":  {
               "to":  "0x2222222222222222222222222222222222222222",
               "value":  "1",
               "data":  "0x"
           },
    "policy":  {
                   "paused":  false
               },
    "narrative":  {
                      "kind":  "native_transfer",
                      "summary":  "Transfer native asset",
                      "confidence":  0.95
                  },
    "destination":  {
                        "classification":  "trusted",
                        "risk":  "low",
                        "labels":  [
                                       "trusted_counterparty"
                                   ]
                    },
    "risk":  {
                 "score":  10,
                 "level":  "low",
                 "reasons":  [
                                 "DEST_TRUSTED",
                                 "NARRATIVE_NATIVE_TRANSFER"
                             ]
             },
    "timing":  {
                   "eta":  "0"
               },
    "recommendedAction":  "BLOCK",
    "receipt":  {
                    "receiptId":  "decision_20260314T042846Z_8a885ad0",
                    "sha256":  "8a885ad0e0081b3c2e0b36ad2207556e193447ec14c4acbb835d8935432fd29b",
                    "path":  "C:\\Lab_Research\\aion-guard-lite\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T042846Z_8a885ad0.json"
                }
}
---

## ReadableTypedSign_Queued

Pass: True
Expected Decision: QUEUED
Actual Decision: QUEUED
Expected Action: QUEUE_AND_REVIEW
Actual Action: QUEUE_AND_REVIEW
Expected ReasonCode: UNREADABLE_TYPED_SIGN_REVIEW
Actual ReasonCode: UNREADABLE_TYPED_SIGN_REVIEW

---
{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "evm",
    "policyDecision":  "EXECUTE_NOW",
    "decision":  "QUEUED",
    "escalation":  {
                       "applied":  false,
                       "from":  "EXECUTE_NOW",
                       "to":  "EXECUTE_NOW",
                       "reasonCodes":  [

                                       ],
                       "summary":  "No escalation applied"
                   },
    "approvalGovernance":  {
                               "applied":  false
                           },
    "poisoningGuard":  {
                           "applied":  false,
                           "decision":  "EXECUTE_NOW",
                           "reasonCode":  "NO_POISONING_GUARD_APPLIED",
                           "summary":  "Destination remains under existing trusted policy behavior.",
                           "classification":  "trusted"
                       },
    "signatureIntent":  {
                            "applied":  true,
                            "decision":  "QUEUED",
                            "reasonCode":  "UNREADABLE_TYPED_SIGN_REVIEW",
                            "summary":  "Typed-sign request requires governed review until intent becomes more readable.",
                            "signType":  "typed_v4"
                        },
    "verdictCode":  0,
    "tx":  {
               "to":  "0x2222222222222222222222222222222222222222",
               "value":  "1",
               "data":  "0x"
           },
    "policy":  {
                   "paused":  false
               },
    "narrative":  {
                      "kind":  "native_transfer",
                      "summary":  "Transfer native asset",
                      "confidence":  0.95
                  },
    "destination":  {
                        "classification":  "trusted",
                        "risk":  "low",
                        "labels":  [
                                       "trusted_counterparty"
                                   ]
                    },
    "risk":  {
                 "score":  10,
                 "level":  "low",
                 "reasons":  [
                                 "DEST_TRUSTED",
                                 "NARRATIVE_NATIVE_TRANSFER"
                             ]
             },
    "timing":  {
                   "eta":  "0"
               },
    "recommendedAction":  "QUEUE_AND_REVIEW",
    "receipt":  {
                    "receiptId":  "decision_20260314T042846Z_df0953ea",
                    "sha256":  "df0953ea2e46756695f337a34972283d415544910ae4be1e1855458401782016",
                    "path":  "C:\\Lab_Research\\aion-guard-lite\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T042846Z_df0953ea.json"
                }
}
---
