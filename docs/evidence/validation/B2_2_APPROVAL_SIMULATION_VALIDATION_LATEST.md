# B2.2 Approval Simulation Validation

Generated: 2026-03-25T11:28:14
Pass: True
BaseUrl: http://127.0.0.1:8787
Policy: 0xE08ebE47F308e2831bf10a619cb434B64A001d0B
RpcUrl: https://ethereum-sepolia-rpc.publicnode.com

## What this proves
- ERC20 approve shape is recognized in the live runtime.
- simulation.approvalDiff is present.
- spender is surfaced deterministically.
- unlimited approval posture is surfaced.
- persistent permission risk is surfaced.

## Key Result Checks
- approvalDiff.applied = True
- approvalDiff.spender = 0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
- approvalDiff.isUnlimited = True
- persistentRisk.present = True
- summaryFlags = APPROVAL_RISK_DETECTED, PERSISTENT_PERMISSION_CREATED, UNLIMITED_APPROVAL_DETECTED

## Raw Response

{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "evm",
    "policyDecision":  "QUEUED",
    "decision":  "QUEUED",
    "escalation":  {
                       "applied":  false,
                       "from":  "QUEUED",
                       "to":  "QUEUED",
                       "reasonCodes":  [
                                           "ESC_UNKNOWN_APPROVAL"
                                       ],
                       "summary":  "No escalation applied"
                   },
    "approvalGovernance":  {
                               "applied":  true,
                               "decision":  "QUEUED",
                               "reasonCode":  "APPROVAL_UNLIMITED_UNKNOWN_SPENDER",
                               "summary":  "Unlimited ERC20 approval requires governed review.",
                               "spender":  "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                               "amount":  "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                               "classification":  "unlimited_unknown_spender"
                           },
    "poisoningGuard":  {
                           "applied":  true,
                           "decision":  "QUEUED",
                           "reasonCode":  "DESTINATION_FIRST_SEEN_REVIEW",
                           "summary":  "First-seen or insufficiently trusted destination requires governed review.",
                           "classification":  "unknown"
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
    "routeSlippageGuard":  {
                               "applied":  false,
                               "decision":  "EXECUTE_NOW",
                               "reasonCode":  "NO_ROUTE_SLIPPAGE_GUARD_APPLIED",
                               "summary":  "Route and slippage remain within sane execution bounds.",
                               "slippageBps":  0,
                               "routeHops":  1,
                               "routeConfidence":  "",
                               "routeLabel":  ""
                           },
    "simulation":  {
                       "applied":  true,
                       "chainFamily":  "evm",
                       "status":  "COMPLETE",
                       "summaryFlags":  [
                                            "APPROVAL_RISK_DETECTED",
                                            "PERSISTENT_PERMISSION_CREATED",
                                            "UNLIMITED_APPROVAL_DETECTED"
                                        ],
                       "balanceDiff":  {
                                           "nativeAssetSymbol":  "ETH",
                                           "nativeDelta":  "0",
                                           "tokenDiffs":  [

                                                          ]
                                       },
                       "approvalDiff":  {
                                            "applied":  true,
                                            "token":  "0x5555555555555555555555555555555555555555",
                                            "spender":  "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                                            "allowanceAmount":  "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                                            "isUnlimited":  true,
                                            "isPersistent":  true
                                        },
                       "externalCallSurface":  {
                                                   "applied":  true,
                                                   "targetCount":  2,
                                                   "unknownTargetCount":  1,
                                                   "targets":  [
                                                                   {
                                                                       "address":  "0x5555555555555555555555555555555555555555",
                                                                       "classification":  "unknown"
                                                                   },
                                                                   {
                                                                       "address":  "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                                                                       "classification":  "spender"
                                                                   }
                                                               ]
                                               },
                       "persistentRisk":  {
                                              "applied":  true,
                                              "present":  true,
                                              "reason":  "Approval creates a permission that can survive after this transaction."
                                          }
                   },
    "verdictCode":  1,
    "tx":  {
               "to":  "0x5555555555555555555555555555555555555555",
               "value":  "0",
               "data":  "0x095ea7b3000000000000000000000000aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
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
                        "classification":  "unknown",
                        "risk":  "unknown",
                        "labels":  [

                                   ]
                    },
    "risk":  {
                 "score":  70,
                 "level":  "high",
                 "reasons":  [
                                 "DEST_UNKNOWN",
                                 "NARRATIVE_APPROVE"
                             ]
             },
    "timing":  {
                   "eta":  "1774459992"
               },
    "recommendedAction":  "QUEUE_AND_REVIEW",
    "receipt":  {
                    "receiptId":  "decision_20260325T172814Z_83368d70",
                    "sha256":  "83368d7086c0bfea775fc8d2005ad87542899560892db701b85bfafc1cf916ad",
                    "path":  "%REPO_ROOT%\\bin\\wallet-lite-runtime\\.aion\\decision-receipts\\decision_20260325T172814Z_83368d70.json"
                }
}