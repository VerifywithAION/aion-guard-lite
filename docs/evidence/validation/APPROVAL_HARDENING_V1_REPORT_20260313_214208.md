# Approval Hardening V1 Validation Report

Generated: 2026-03-13T21:42:12
Policy: 0x49fd2BE640DB2910c2fAb69bB8531Ab6E76127ff

Pass Count: 5
Fail Count: 0

## MalformedApprove_Blocked

Pass: True
Expected Decision: BLOCKED
Actual Decision: BLOCKED
Expected Action: BLOCK
Actual Action: BLOCK

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
                               "applied":  true,
                               "decision":  "BLOCKED",
                               "reasonCode":  "MALFORMED_APPROVAL",
                               "summary":  "Malformed ERC20 approval payload has been blocked.",
                               "classification":  "malformed"
                           },
    "verdictCode":  0,
    "tx":  {
               "to":  "0x2222222222222222222222222222222222222222",
               "value":  "0",
               "data":  "0x095ea7b3deadbeef"
           },
    "policy":  {
                   "paused":  false
               },
    "narrative":  {
                      "kind":  "contract_call_unknown",
                      "summary":  "Malformed approve-like contract interaction",
                      "confidence":  0.35,
                      "selector":  "0x095ea7b3"
                  },
    "destination":  {
                        "classification":  "trusted",
                        "risk":  "low",
                        "labels":  [
                                       "trusted_counterparty"
                                   ]
                    },
    "risk":  {
                 "score":  40,
                 "level":  "medium",
                 "reasons":  [
                                 "DEST_TRUSTED",
                                 "NARRATIVE_UNKNOWN_CALL"
                             ]
             },
    "timing":  {
                   "eta":  "0"
               },
    "recommendedAction":  "BLOCK",
    "receipt":  {
                    "receiptId":  "decision_20260314T034212Z_587e58bd",
                    "sha256":  "587e58bdcc1cdc22fd57b748ffc526371dcc8f198e2cac0ce36d4bff3c8c979c",
                    "path":  "%REPO_ROOT%\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T034212Z_587e58bd.json"
                }
}
---

## ZeroAddressSpender_Blocked

Pass: True
Expected Decision: BLOCKED
Actual Decision: BLOCKED
Expected Action: BLOCK
Actual Action: BLOCK

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
                               "applied":  true,
                               "decision":  "BLOCKED",
                               "reasonCode":  "INVALID_SPENDER_ZERO",
                               "summary":  "Approval to the zero address has been blocked.",
                               "spender":  "0x0000000000000000000000000000000000000000",
                               "amount":  "1",
                               "classification":  "invalid_spender"
                           },
    "verdictCode":  0,
    "tx":  {
               "to":  "0x2222222222222222222222222222222222222222",
               "value":  "0",
               "data":  "0x095ea7b300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
           },
    "policy":  {
                   "paused":  false
               },
    "narrative":  {
                      "kind":  "erc20_approve",
                      "summary":  "Approve ERC20 spending",
                      "confidence":  0.98,
                      "selector":  "0x095ea7b3"
                  },
    "destination":  {
                        "classification":  "trusted",
                        "risk":  "low",
                        "labels":  [
                                       "trusted_counterparty"
                                   ]
                    },
    "risk":  {
                 "score":  45,
                 "level":  "medium",
                 "reasons":  [
                                 "DEST_TRUSTED",
                                 "NARRATIVE_APPROVE"
                             ]
             },
    "timing":  {
                   "eta":  "0"
               },
    "recommendedAction":  "BLOCK",
    "receipt":  {
                    "receiptId":  "decision_20260314T034212Z_6c2a9d97",
                    "sha256":  "6c2a9d976aa2861296b4446df3fb4d75daa72e6c67e4d426abd3a79af11e572e",
                    "path":  "%REPO_ROOT%\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T034212Z_6c2a9d97.json"
                }
}
---

## ZeroAmountApprove_ExecuteNow

Pass: True
Expected Decision: EXECUTE_NOW
Actual Decision: EXECUTE_NOW
Expected Action: EXECUTE
Actual Action: EXECUTE

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
                               "applied":  true,
                               "decision":  "EXECUTE_NOW",
                               "reasonCode":  "APPROVAL_REVOKE_RESET",
                               "summary":  "Zero-amount approval is treated as a revoke/reset posture and remains executable.",
                               "spender":  "0x3333333333333333333333333333333333333333",
                               "amount":  "0",
                               "classification":  "revoke_reset"
                           },
    "verdictCode":  0,
    "tx":  {
               "to":  "0x2222222222222222222222222222222222222222",
               "value":  "0",
               "data":  "0x095ea7b300000000000000000000000033333333333333333333333333333333333333330000000000000000000000000000000000000000000000000000000000000000"
           },
    "policy":  {
                   "paused":  false
               },
    "narrative":  {
                      "kind":  "erc20_approve",
                      "summary":  "Approve ERC20 spending",
                      "confidence":  0.98,
                      "selector":  "0x095ea7b3"
                  },
    "destination":  {
                        "classification":  "trusted",
                        "risk":  "low",
                        "labels":  [
                                       "trusted_counterparty"
                                   ]
                    },
    "risk":  {
                 "score":  45,
                 "level":  "medium",
                 "reasons":  [
                                 "DEST_TRUSTED",
                                 "NARRATIVE_APPROVE"
                             ]
             },
    "timing":  {
                   "eta":  "0"
               },
    "recommendedAction":  "EXECUTE",
    "receipt":  {
                    "receiptId":  "decision_20260314T034212Z_d745bef1",
                    "sha256":  "d745bef129e26923582f730f994ec30da513bd3684ffb4f1f33361ff75843b89",
                    "path":  "%REPO_ROOT%\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T034212Z_d745bef1.json"
                }
}
---

## UnknownApproval_Queued

Pass: True
Expected Decision: QUEUED
Actual Decision: QUEUED
Expected Action: QUEUE_AND_REVIEW
Actual Action: QUEUE_AND_REVIEW

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
                               "applied":  true,
                               "decision":  "QUEUED",
                               "reasonCode":  "APPROVAL_UNKNOWN_SPENDER",
                               "summary":  "ERC20 approval requires governed review.",
                               "spender":  "0x4444444444444444444444444444444444444444",
                               "amount":  "1",
                               "classification":  "unknown_spender"
                           },
    "verdictCode":  0,
    "tx":  {
               "to":  "0x2222222222222222222222222222222222222222",
               "value":  "0",
               "data":  "0x095ea7b300000000000000000000000044444444444444444444444444444444444444440000000000000000000000000000000000000000000000000000000000000001"
           },
    "policy":  {
                   "paused":  false
               },
    "narrative":  {
                      "kind":  "erc20_approve",
                      "summary":  "Approve ERC20 spending",
                      "confidence":  0.98,
                      "selector":  "0x095ea7b3"
                  },
    "destination":  {
                        "classification":  "trusted",
                        "risk":  "low",
                        "labels":  [
                                       "trusted_counterparty"
                                   ]
                    },
    "risk":  {
                 "score":  45,
                 "level":  "medium",
                 "reasons":  [
                                 "DEST_TRUSTED",
                                 "NARRATIVE_APPROVE"
                             ]
             },
    "timing":  {
                   "eta":  "0"
               },
    "recommendedAction":  "QUEUE_AND_REVIEW",
    "receipt":  {
                    "receiptId":  "decision_20260314T034212Z_a320000a",
                    "sha256":  "a320000aad87783d0edccdec53af6ec37c9b00bbd9698f2d501597383ae200ad",
                    "path":  "%REPO_ROOT%\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T034212Z_a320000a.json"
                }
}
---

## UnlimitedApproval_Queued

Pass: True
Expected Decision: QUEUED
Actual Decision: QUEUED
Expected Action: QUEUE_AND_REVIEW
Actual Action: QUEUE_AND_REVIEW

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
                               "applied":  true,
                               "decision":  "QUEUED",
                               "reasonCode":  "APPROVAL_UNLIMITED_UNKNOWN_SPENDER",
                               "summary":  "Unlimited ERC20 approval requires governed review.",
                               "spender":  "0x5555555555555555555555555555555555555555",
                               "amount":  "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                               "classification":  "unlimited_unknown_spender"
                           },
    "verdictCode":  0,
    "tx":  {
               "to":  "0x2222222222222222222222222222222222222222",
               "value":  "0",
               "data":  "0x095ea7b30000000000000000000000005555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
           },
    "policy":  {
                   "paused":  false
               },
    "narrative":  {
                      "kind":  "erc20_approve",
                      "summary":  "Approve ERC20 spending",
                      "confidence":  0.98,
                      "selector":  "0x095ea7b3"
                  },
    "destination":  {
                        "classification":  "trusted",
                        "risk":  "low",
                        "labels":  [
                                       "trusted_counterparty"
                                   ]
                    },
    "risk":  {
                 "score":  45,
                 "level":  "medium",
                 "reasons":  [
                                 "DEST_TRUSTED",
                                 "NARRATIVE_APPROVE"
                             ]
             },
    "timing":  {
                   "eta":  "0"
               },
    "recommendedAction":  "QUEUE_AND_REVIEW",
    "receipt":  {
                    "receiptId":  "decision_20260314T034212Z_e26741e7",
                    "sha256":  "e26741e7cb87ff9dd9e0f6086a0185acec2b0592dfe0d778f277ff760dd18b15",
                    "path":  "%REPO_ROOT%\\packages\\decision-api\\.aion\\decision-receipts\\decision_20260314T034212Z_e26741e7.json"
                }
}
---
