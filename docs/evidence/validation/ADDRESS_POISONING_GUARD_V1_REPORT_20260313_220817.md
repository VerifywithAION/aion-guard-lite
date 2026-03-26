# Address Poisoning Guard V1 Validation Report

Generated: 2026-03-13T22:08:21
Policy: 0x49fd2BE640DB2910c2fAb69bB8531Ab6E76127ff

Pass Count: 3
Fail Count: 0

## TrustedDestination_PreserveBase

Pass: True
Expected Decision: EXECUTE_NOW
Actual Decision: EXECUTE_NOW
Expected Action: EXECUTE
Actual Action: EXECUTE
Expected ReasonCode: NO_POISONING_GUARD_APPLIED
Actual ReasonCode: NO_POISONING_GUARD_APPLIED

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
                    "receiptId":  "decision_20260314T040821Z_fea46e67",
                    "sha256":  "fea46e67d081757695bb94af05e4c578529565d1ef0ab697fa6e99fe839160cb",
                    "path":  "%REPO_ROOT%\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T040821Z_fea46e67.json"
                }
}
---

## UnknownDestination_Queued

Pass: True
Expected Decision: QUEUED
Actual Decision: QUEUED
Expected Action: QUEUE_AND_REVIEW
Actual Action: QUEUE_AND_REVIEW
Expected ReasonCode: DESTINATION_FIRST_SEEN_REVIEW
Actual ReasonCode: DESTINATION_FIRST_SEEN_REVIEW

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
                           "applied":  true,
                           "decision":  "QUEUED",
                           "reasonCode":  "DESTINATION_FIRST_SEEN_REVIEW",
                           "summary":  "First-seen or insufficiently trusted destination requires governed review.",
                           "classification":  "unknown"
                       },
    "verdictCode":  0,
    "tx":  {
               "to":  "0x5555555555555555555555555555555555555554",
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
                        "classification":  "unknown",
                        "risk":  "unknown",
                        "labels":  [

                                   ]
                    },
    "risk":  {
                 "score":  35,
                 "level":  "medium",
                 "reasons":  [
                                 "DEST_UNKNOWN",
                                 "NARRATIVE_NATIVE_TRANSFER"
                             ]
             },
    "timing":  {
                   "eta":  "0"
               },
    "recommendedAction":  "QUEUE_AND_REVIEW",
    "receipt":  {
                    "receiptId":  "decision_20260314T040821Z_703f6b1a",
                    "sha256":  "703f6b1ab3e55b6ee72c9f49715f2762f037c3a90654a45b9d42c3fe78338070",
                    "path":  "%REPO_ROOT%\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T040821Z_703f6b1a.json"
                }
}
---

## LookalikeDestination_Queued

Pass: True
Expected Decision: QUEUED
Actual Decision: QUEUED
Expected Action: QUEUE_AND_REVIEW
Actual Action: QUEUE_AND_REVIEW
Expected ReasonCode: DESTINATION_LOOKALIKE_REVIEW
Actual ReasonCode: DESTINATION_LOOKALIKE_REVIEW

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
                           "applied":  true,
                           "decision":  "QUEUED",
                           "reasonCode":  "DESTINATION_LOOKALIKE_REVIEW",
                           "summary":  "Destination appears visually suspicious and requires governed review.",
                           "classification":  "internal"
                       },
    "verdictCode":  0,
    "tx":  {
               "to":  "0x1111111111111111111111111111111111111111",
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
                        "classification":  "internal",
                        "risk":  "low",
                        "labels":  [
                                       "internal_wallet"
                                   ]
                    },
    "risk":  {
                 "score":  5,
                 "level":  "low",
                 "reasons":  [
                                 "DEST_INTERNAL",
                                 "NARRATIVE_NATIVE_TRANSFER"
                             ]
             },
    "timing":  {
                   "eta":  "0"
               },
    "recommendedAction":  "QUEUE_AND_REVIEW",
    "receipt":  {
                    "receiptId":  "decision_20260314T040821Z_14211ce2",
                    "sha256":  "14211ce2da135404e5c9199ff237a09d17b8fc1fe3f5c8f5858a4fc868c8d7c5",
                    "path":  "%REPO_ROOT%\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T040821Z_14211ce2.json"
                }
}
---
