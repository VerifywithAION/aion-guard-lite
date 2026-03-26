# Route Slippage Sanity Guard V1 Validation Report

Generated: 2026-03-13T23:47:42
Policy: 0x49fd2BE640DB2910c2fAb69bB8531Ab6E76127ff

Pass Count: 4
Fail Count: 0

## SaneRoute_PreserveBase

Pass: True
Expected Decision: EXECUTE_NOW
Actual Decision: EXECUTE_NOW
Expected Action: EXECUTE
Actual Action: EXECUTE
Expected ReasonCode: NO_ROUTE_SLIPPAGE_GUARD_APPLIED
Actual ReasonCode: NO_ROUTE_SLIPPAGE_GUARD_APPLIED

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
    "routeSlippageGuard":  {
                               "applied":  false,
                               "decision":  "EXECUTE_NOW",
                               "reasonCode":  "NO_ROUTE_SLIPPAGE_GUARD_APPLIED",
                               "summary":  "Route and slippage remain within sane execution bounds.",
                               "slippageBps":  50,
                               "routeHops":  1,
                               "routeConfidence":  "high",
                               "routeLabel":  "direct_pool"
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
                    "receiptId":  "decision_20260314T054742Z_e055f6b2",
                    "sha256":  "e055f6b2af266f71e0676e8a1ac31f23aa66baf230c0e2d666162812f92142c6",
                    "path":  "%REPO_ROOT%\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T054742Z_e055f6b2.json"
                }
}
---

## HighSlippage_Queued

Pass: True
Expected Decision: QUEUED
Actual Decision: QUEUED
Expected Action: QUEUE_AND_REVIEW
Actual Action: QUEUE_AND_REVIEW
Expected ReasonCode: HIGH_SLIPPAGE_REVIEW
Actual ReasonCode: HIGH_SLIPPAGE_REVIEW

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
                               "applied":  false,
                               "decision":  "EXECUTE_NOW",
                               "reasonCode":  "NO_DOMAIN_SESSION_GUARD_APPLIED",
                               "summary":  "Trusted domain and bounded fresh session preserve base behavior.",
                               "domain":  "trusted.example"
                           },
    "routeSlippageGuard":  {
                               "applied":  true,
                               "decision":  "QUEUED",
                               "reasonCode":  "HIGH_SLIPPAGE_REVIEW",
                               "summary":  "High slippage requires governed review.",
                               "slippageBps":  250,
                               "routeHops":  1,
                               "routeConfidence":  "high",
                               "routeLabel":  "direct_pool"
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
                    "receiptId":  "decision_20260314T054742Z_3c786f35",
                    "sha256":  "3c786f35c35b4a220e2c30e081c2ffb6ceff548beb596ccff00768ddcae1c40d",
                    "path":  "%REPO_ROOT%\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T054742Z_3c786f35.json"
                }
}
---

## ExcessiveRouteHops_Queued

Pass: True
Expected Decision: QUEUED
Actual Decision: QUEUED
Expected Action: QUEUE_AND_REVIEW
Actual Action: QUEUE_AND_REVIEW
Expected ReasonCode: EXCESSIVE_ROUTE_HOPS_REVIEW
Actual ReasonCode: EXCESSIVE_ROUTE_HOPS_REVIEW

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
                               "applied":  false,
                               "decision":  "EXECUTE_NOW",
                               "reasonCode":  "NO_DOMAIN_SESSION_GUARD_APPLIED",
                               "summary":  "Trusted domain and bounded fresh session preserve base behavior.",
                               "domain":  "trusted.example"
                           },
    "routeSlippageGuard":  {
                               "applied":  true,
                               "decision":  "QUEUED",
                               "reasonCode":  "EXCESSIVE_ROUTE_HOPS_REVIEW",
                               "summary":  "Route complexity requires governed review.",
                               "slippageBps":  50,
                               "routeHops":  4,
                               "routeConfidence":  "high",
                               "routeLabel":  "multi_hop"
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
                    "receiptId":  "decision_20260314T054742Z_fc9ff939",
                    "sha256":  "fc9ff9396713192687a2cbe1092df6429b705c904df387655a9671aeaf92a993",
                    "path":  "%REPO_ROOT%\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T054742Z_fc9ff939.json"
                }
}
---

## WeakRouteConfidence_Queued

Pass: True
Expected Decision: QUEUED
Actual Decision: QUEUED
Expected Action: QUEUE_AND_REVIEW
Actual Action: QUEUE_AND_REVIEW
Expected ReasonCode: WEAK_ROUTE_CONFIDENCE_REVIEW
Actual ReasonCode: WEAK_ROUTE_CONFIDENCE_REVIEW

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
                               "applied":  false,
                               "decision":  "EXECUTE_NOW",
                               "reasonCode":  "NO_DOMAIN_SESSION_GUARD_APPLIED",
                               "summary":  "Trusted domain and bounded fresh session preserve base behavior.",
                               "domain":  "trusted.example"
                           },
    "routeSlippageGuard":  {
                               "applied":  true,
                               "decision":  "QUEUED",
                               "reasonCode":  "WEAK_ROUTE_CONFIDENCE_REVIEW",
                               "summary":  "Weak route confidence requires governed review.",
                               "slippageBps":  50,
                               "routeHops":  1,
                               "routeConfidence":  "medium",
                               "routeLabel":  "uncertain_solver"
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
                    "receiptId":  "decision_20260314T054742Z_08509599",
                    "sha256":  "085095996e0850c015011d9f7a51e098f3dc5a1c8edf2155967b7502a7c8d4de",
                    "path":  "%REPO_ROOT%\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T054742Z_08509599.json"
                }
}
---
