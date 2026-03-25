# B2.3 Transfer Simulation Validation

Generated: 2026-03-25T11:51:10
Pass: True
BaseUrl: http://127.0.0.1:8787
Policy: 0xE08ebE47F308e2831bf10a619cb434B64A001d0B
RpcUrl: https://ethereum-sepolia-rpc.publicnode.com

## What this proves
- ERC20 transfer shape is recognized in the live runtime.
- simulation.balanceDiff.tokenDiffs is present.
- recipient participation is surfaced in externalCallSurface.
- persistent permission risk is not falsely raised.

## Key Result Checks
- tokenDiffs count = 1
- first token delta = -1
- persistentRisk.present = False
- summaryFlags = TOKEN_TRANSFER_DETECTED, TOKEN_VALUE_MOVEMENT

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
                                            "TOKEN_TRANSFER_DETECTED",
                                            "TOKEN_VALUE_MOVEMENT"
                                        ],
                       "balanceDiff":  {
                                           "nativeAssetSymbol":  "ETH",
                                           "nativeDelta":  "0",
                                           "tokenDiffs":  [
                                                              {
                                                                  "token":  "0x5555555555555555555555555555555555555555",
                                                                  "symbol":  "TOKEN",
                                                                  "delta":  "-1"
                                                              }
                                                          ]
                                       },
                       "approvalDiff":  {
                                            "applied":  false
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
                                                                       "address":  "0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
                                                                       "classification":  "recipient"
                                                                   }
                                                               ]
                                               },
                       "persistentRisk":  {
                                              "applied":  false,
                                              "present":  false,
                                              "reason":  ""
                                          }
                   },
    "verdictCode":  1,
    "tx":  {
               "to":  "0x5555555555555555555555555555555555555555",
               "value":  "0",
               "data":  "0xa9059cbb000000000000000000000000bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb0000000000000000000000000000000000000000000000000000000000000001"
           },
    "policy":  {
                   "paused":  false
               },
    "narrative":  {
                      "kind":  "erc20_transfer",
                      "summary":  "Transfer ERC20 tokens",
                      "confidence":  0.98,
                      "selector":  "0xa9059cbb"
                  },
    "destination":  {
                        "classification":  "unknown",
                        "risk":  "unknown",
                        "labels":  [

                                   ]
                    },
    "risk":  {
                 "score":  40,
                 "level":  "medium",
                 "reasons":  [
                                 "DEST_UNKNOWN",
                                 "NARRATIVE_ERC20_TRANSFER"
                             ]
             },
    "timing":  {
                   "eta":  "1774461372"
               },
    "recommendedAction":  "QUEUE_AND_REVIEW",
    "receipt":  {
                    "receiptId":  "decision_20260325T175110Z_a0537879",
                    "sha256":  "a0537879e62e1f4f57d0b6e0d316a27b577b3edc9a1e27e995e4331764e1df51",
                    "path":  "C:\\Lab_Research\\aion-guard-lite\\bin\\wallet-lite-runtime\\.aion\\decision-receipts\\decision_20260325T175110Z_a0537879.json"
                }
}