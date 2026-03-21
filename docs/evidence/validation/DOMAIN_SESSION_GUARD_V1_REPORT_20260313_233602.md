# Domain Session Guard V1 Validation Report

Generated: 2026-03-13T23:36:06
Policy: 0x49fd2BE640DB2910c2fAb69bB8531Ab6E76127ff

Pass Count: 5
Fail Count: 0

## TrustedFreshSession_PreserveBase

Pass: True
Expected Decision: EXECUTE_NOW
Actual Decision: EXECUTE_NOW
Expected Action: EXECUTE
Actual Action: EXECUTE
Expected ReasonCode: NO_DOMAIN_SESSION_GUARD_APPLIED
Actual ReasonCode: NO_DOMAIN_SESSION_GUARD_APPLIED

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
    "domainSessionGuard":  {
                               "applied":  false,
                               "decision":  "EXECUTE_NOW",
                               "reasonCode":  "NO_DOMAIN_SESSION_GUARD_APPLIED",
                               "summary":  "Trusted domain and bounded fresh session preserve base behavior.",
                               "domain":  "trusted.example"
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
                    "receiptId":  "decision_20260314T053606Z_318eba09",
                    "sha256":  "318eba094022a711417b6cd74dd1ad6932a16cecfe754f745c6cb01cc1c4485b",
                    "path":  "C:\\Lab_Research\\aion-guard-lite\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T053606Z_318eba09.json"
                }
}
---

## MissingDomain_Queued

Pass: True
Expected Decision: QUEUED
Actual Decision: QUEUED
Expected Action: QUEUE_AND_REVIEW
Actual Action: QUEUE_AND_REVIEW
Expected ReasonCode: MISSING_DOMAIN_REVIEW
Actual ReasonCode: MISSING_DOMAIN_REVIEW

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
                            "applied":  false
                        },
    "domainSessionGuard":  {
                               "applied":  true,
                               "decision":  "QUEUED",
                               "reasonCode":  "MISSING_DOMAIN_REVIEW",
                               "summary":  "Missing request domain requires governed review."
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
                    "receiptId":  "decision_20260314T053606Z_86867df4",
                    "sha256":  "86867df4ba844de0a04b10d0d7a3b9468f6cf5a8582b6fce9b45980d96819c0f",
                    "path":  "C:\\Lab_Research\\aion-guard-lite\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T053606Z_86867df4.json"
                }
}
---

## UnknownDomain_Queued

Pass: True
Expected Decision: QUEUED
Actual Decision: QUEUED
Expected Action: QUEUE_AND_REVIEW
Actual Action: QUEUE_AND_REVIEW
Expected ReasonCode: UNKNOWN_DOMAIN_REVIEW
Actual ReasonCode: UNKNOWN_DOMAIN_REVIEW

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
                            "applied":  false
                        },
    "domainSessionGuard":  {
                               "applied":  true,
                               "decision":  "QUEUED",
                               "reasonCode":  "UNKNOWN_DOMAIN_REVIEW",
                               "summary":  "Unknown request domain requires governed review.",
                               "domain":  "evil.example"
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
                    "receiptId":  "decision_20260314T053606Z_164cb802",
                    "sha256":  "164cb8023d5f2e5e56ce69757748ce23c6e56687a7bb816083224966420dbb94",
                    "path":  "C:\\Lab_Research\\aion-guard-lite\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T053606Z_164cb802.json"
                }
}
---

## StaleSession_Queued

Pass: True
Expected Decision: QUEUED
Actual Decision: QUEUED
Expected Action: QUEUE_AND_REVIEW
Actual Action: QUEUE_AND_REVIEW
Expected ReasonCode: STALE_SESSION_REVIEW
Actual ReasonCode: STALE_SESSION_REVIEW

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
                            "applied":  false
                        },
    "domainSessionGuard":  {
                               "applied":  true,
                               "decision":  "QUEUED",
                               "reasonCode":  "STALE_SESSION_REVIEW",
                               "summary":  "Stale session requires governed review.",
                               "domain":  "trusted.example"
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
                    "receiptId":  "decision_20260314T053606Z_3a6394b8",
                    "sha256":  "3a6394b888c876c9109bf469c47ae0a40e23de9008ea61afe524e75fbc265b62",
                    "path":  "C:\\Lab_Research\\aion-guard-lite\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T053606Z_3a6394b8.json"
                }
}
---

## BroadSession_Queued

Pass: True
Expected Decision: QUEUED
Actual Decision: QUEUED
Expected Action: QUEUE_AND_REVIEW
Actual Action: QUEUE_AND_REVIEW
Expected ReasonCode: BROAD_SESSION_REVIEW
Actual ReasonCode: BROAD_SESSION_REVIEW

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
                            "applied":  false
                        },
    "domainSessionGuard":  {
                               "applied":  true,
                               "decision":  "QUEUED",
                               "reasonCode":  "BROAD_SESSION_REVIEW",
                               "summary":  "Broad session permissions require governed review.",
                               "domain":  "trusted.example"
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
                    "receiptId":  "decision_20260314T053606Z_56506c98",
                    "sha256":  "56506c98bc31a810e0ed8a82ddc3b031c77f0f4c962d03da3efcc1444d20e870",
                    "path":  "C:\\Lab_Research\\aion-guard-lite\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T053606Z_56506c98.json"
                }
}
---
