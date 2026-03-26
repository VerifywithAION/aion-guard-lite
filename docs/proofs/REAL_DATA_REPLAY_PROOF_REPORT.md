# AION Guard Lite Real Data Replay Proof Report

Generated: 2026-03-11T23:29:52
BaseUrl: http://127.0.0.1:8787
FixtureRoot: .\runtime\proofs\replay-fixtures

This report records controlled replay of public-chain transaction archetypes converted into Wallet-Lite preview payloads.

## Runtime Health

**Status:** PASS

~~~json
{
    "ok":  true,
    "service":  "aion.decision-api.v1"
}
~~~

## Replay Scenarios

## Bitcoin PSBT multisig review

**Claim tested:** PSBT or multisig-like Bitcoin flows route to review.

**Source note:** Normalized multisig/PSBT archetype for replay proofing.

**Fixture file:** .\runtime\proofs\replay-fixtures\bitcoin\bitcoin_psbt_multisig_archetype.json

**Normalized preview payload**

~~~json
{
    "chainFamily":  "bitcoin",
    "network":  "bitcoin",
    "multisig":  true,
    "psbtBase64":  "cHNidP8BAFICAAAA",
    "inputs":  [
                   {
                       "txid":  "btc_archetype_003",
                       "vout":  2,
                       "valueSats":  800000
                   }
               ],
    "outputs":  [
                    {
                        "address":  "bc1qrecipientexample0004",
                        "valueSats":  300000,
                        "scriptType":  "p2wsh"
                    },
                    {
                        "address":  "bc1qchangeexample0004",
                        "valueSats":  480000,
                        "scriptType":  "p2wsh",
                        "change":  true
                    }
                ],
    "feeSats":  20000
}
~~~

**Status:** PASS

**Observed decision:** QUEUED
**Narrative kind:** btc_psbt_or_multisig
**Risk level:** medium
**Recommended action:** QUEUE_AND_REVIEW
**Receipt ID:** decision_20260312T052952Z_f45c47eb
**Receipt SHA256:** f45c47eb52f1b8fb0ebd092b9ead54bcb8ba4674e056119980ba7adbbd8b25a0

**Runtime response**

~~~json
{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "bitcoin",
    "policyDecision":  "EXECUTE_NOW",
    "decision":  "QUEUED",
    "tx":  {
               "network":  "bitcoin",
               "inputCount":  1,
               "outputCount":  2,
               "feeSats":  20000
           },
    "narrative":  {
                      "kind":  "btc_psbt_or_multisig",
                      "summary":  "Bitcoin PSBT or multisig flow",
                      "confidence":  0.92
                  },
    "risk":  {
                 "score":  55,
                 "level":  "medium",
                 "reasons":  [
                                 "BTC_MULTI_OUTPUT",
                                 "BTC_PSBT_OR_MULTISIG"
                             ]
             },
    "recommendedAction":  "QUEUE_AND_REVIEW",
    "adapter":  {
                    "name":  "bitcoin-adapter-mvp",
                    "status":  "runtime-wired"
                },
    "receipt":  {
                    "receiptId":  "decision_20260312T052952Z_f45c47eb",
                    "sha256":  "f45c47eb52f1b8fb0ebd092b9ead54bcb8ba4674e056119980ba7adbbd8b25a0",
                    "path":  "%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T052952Z_f45c47eb.json"
                }
}
~~~

## Bitcoin routine send with change

**Claim tested:** Routine BTC send with change remains executable.

**Source note:** Normalized public-chain Bitcoin payment archetype for replay proofing.

**Fixture file:** .\runtime\proofs\replay-fixtures\bitcoin\bitcoin_standard_send_archetype.json

**Normalized preview payload**

~~~json
{
    "chainFamily":  "bitcoin",
    "network":  "bitcoin",
    "inputs":  [
                   {
                       "txid":  "btc_archetype_001",
                       "vout":  0,
                       "valueSats":  250000
                   }
               ],
    "outputs":  [
                    {
                        "address":  "bc1qrecipientexample0001",
                        "valueSats":  100000,
                        "scriptType":  "p2wpkh"
                    },
                    {
                        "address":  "bc1qchangeexample0001",
                        "valueSats":  145000,
                        "scriptType":  "p2wpkh",
                        "change":  true
                    }
                ],
    "feeSats":  5000
}
~~~

**Status:** PASS

**Observed decision:** EXECUTE_NOW
**Narrative kind:** btc_send_multi_output
**Risk level:** medium
**Recommended action:** EXECUTE
**Receipt ID:** decision_20260312T052952Z_7c2b9aa4
**Receipt SHA256:** 7c2b9aa48982a35a5bfcd124f02f9cf82c6e88e3f7ea80265966311f48c7b852

**Runtime response**

~~~json
{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "bitcoin",
    "policyDecision":  "EXECUTE_NOW",
    "decision":  "EXECUTE_NOW",
    "tx":  {
               "network":  "bitcoin",
               "inputCount":  1,
               "outputCount":  2,
               "feeSats":  5000
           },
    "narrative":  {
                      "kind":  "btc_send_multi_output",
                      "summary":  "Send BTC with multiple outputs",
                      "confidence":  0.92
                  },
    "risk":  {
                 "score":  25,
                 "level":  "medium",
                 "reasons":  [
                                 "BTC_MULTI_OUTPUT"
                             ]
             },
    "recommendedAction":  "EXECUTE",
    "adapter":  {
                    "name":  "bitcoin-adapter-mvp",
                    "status":  "runtime-wired"
                },
    "receipt":  {
                    "receiptId":  "decision_20260312T052952Z_7c2b9aa4",
                    "sha256":  "7c2b9aa48982a35a5bfcd124f02f9cf82c6e88e3f7ea80265966311f48c7b852",
                    "path":  "%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T052952Z_7c2b9aa4.json"
                }
}
~~~

## Bitcoin unknown output review

**Claim tested:** Unknown or nonstandard Bitcoin outputs escalate to review.

**Source note:** Normalized suspicious public-chain Bitcoin output archetype for replay proofing.

**Fixture file:** .\runtime\proofs\replay-fixtures\bitcoin\bitcoin_unknown_output_archetype.json

**Normalized preview payload**

~~~json
{
    "chainFamily":  "bitcoin",
    "network":  "bitcoin",
    "inputs":  [
                   {
                       "txid":  "btc_archetype_002",
                       "vout":  0,
                       "valueSats":  500000
                   }
               ],
    "outputs":  [
                    {
                        "address":  "unknown-destination",
                        "valueSats":  200000,
                        "scriptType":  "unknown"
                    },
                    {
                        "address":  "bc1qchangeexample0003",
                        "valueSats":  290000,
                        "scriptType":  "p2wpkh",
                        "change":  true
                    }
                ],
    "feeSats":  10000
}
~~~

**Status:** PASS

**Observed decision:** QUEUED
**Narrative kind:** btc_unknown_script
**Risk level:** high
**Recommended action:** QUEUE_AND_REVIEW
**Receipt ID:** decision_20260312T052952Z_9f5ddcd5
**Receipt SHA256:** 9f5ddcd543d3021b13d9cc6fde6106c49334cc4fc3e498f6aff684348d6c9164

**Runtime response**

~~~json
{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "bitcoin",
    "policyDecision":  "EXECUTE_NOW",
    "decision":  "QUEUED",
    "tx":  {
               "network":  "bitcoin",
               "inputCount":  1,
               "outputCount":  2,
               "feeSats":  10000
           },
    "narrative":  {
                      "kind":  "btc_unknown_script",
                      "summary":  "Unknown or nonstandard Bitcoin output",
                      "confidence":  0.65
                  },
    "risk":  {
                 "score":  75,
                 "level":  "high",
                 "reasons":  [
                                 "BTC_MULTI_OUTPUT",
                                 "BTC_UNKNOWN_SCRIPT"
                             ]
             },
    "recommendedAction":  "QUEUE_AND_REVIEW",
    "adapter":  {
                    "name":  "bitcoin-adapter-mvp",
                    "status":  "runtime-wired"
                },
    "receipt":  {
                    "receiptId":  "decision_20260312T052952Z_9f5ddcd5",
                    "sha256":  "9f5ddcd543d3021b13d9cc6fde6106c49334cc4fc3e498f6aff684348d6c9164",
                    "path":  "%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T052952Z_9f5ddcd5.json"
                }
}
~~~

## Cosmos routine bank send

**Claim tested:** Routine Cosmos bank send remains executable.

**Source note:** Normalized public-chain Cosmos bank send archetype for replay proofing.

**Fixture file:** .\runtime\proofs\replay-fixtures\cosmos\cosmos_bank_send_archetype.json

**Normalized preview payload**

~~~json
{
    "chainFamily":  "cosmos",
    "network":  "cosmos",
    "messages":  [
                     {
                         "module":  "bank",
                         "action":  "send",
                         "typeUrl":  "/cosmos.bank.v1beta1.MsgSend"
                     }
                 ]
}
~~~

**Status:** PASS

**Observed decision:** EXECUTE_NOW
**Narrative kind:** cosmos_bank_send
**Risk level:** low
**Recommended action:** EXECUTE
**Receipt ID:** decision_20260312T052952Z_d759907f
**Receipt SHA256:** d759907f41c29270ddcd5b7d4ab6117521b8c89ebc3d873c78ddc5e371a039d1

**Runtime response**

~~~json
{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "cosmos",
    "policyDecision":  "EXECUTE_NOW",
    "decision":  "EXECUTE_NOW",
    "tx":  {
               "network":  "cosmos",
               "messageCount":  1
           },
    "narrative":  {
                      "kind":  "cosmos_bank_send",
                      "summary":  "Cosmos bank send",
                      "confidence":  0.9
                  },
    "risk":  {
                 "score":  15,
                 "level":  "low",
                 "reasons":  [
                                 "COSMOS_BANK_SEND"
                             ]
             },
    "recommendedAction":  "EXECUTE",
    "adapter":  {
                    "name":  "cosmos-adapter-mvp",
                    "status":  "runtime-wired"
                },
    "receipt":  {
                    "receiptId":  "decision_20260312T052952Z_d759907f",
                    "sha256":  "d759907f41c29270ddcd5b7d4ab6117521b8c89ebc3d873c78ddc5e371a039d1",
                    "path":  "%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T052952Z_d759907f.json"
                }
}
~~~

## Cosmos governance-sensitive action

**Claim tested:** Governance-sensitive Cosmos actions escalate to review.

**Source note:** Normalized public-chain Cosmos governance archetype for replay proofing.

**Fixture file:** .\runtime\proofs\replay-fixtures\cosmos\cosmos_governance_archetype.json

**Normalized preview payload**

~~~json
{
    "chainFamily":  "cosmos",
    "network":  "cosmos",
    "messages":  [
                     {
                         "module":  "gov",
                         "action":  "vote",
                         "typeUrl":  "/cosmos.gov.v1.MsgVote"
                     }
                 ]
}
~~~

**Status:** PASS

**Observed decision:** QUEUED
**Narrative kind:** cosmos_governance
**Risk level:** medium
**Recommended action:** QUEUE_AND_REVIEW
**Receipt ID:** decision_20260312T052952Z_24ea42f7
**Receipt SHA256:** 24ea42f76a9aa4f4e320f65ae6d14c878e3c18843b54a231bb47e0790ef7a6ac

**Runtime response**

~~~json
{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "cosmos",
    "policyDecision":  "EXECUTE_NOW",
    "decision":  "QUEUED",
    "tx":  {
               "network":  "cosmos",
               "messageCount":  1
           },
    "narrative":  {
                      "kind":  "cosmos_governance",
                      "summary":  "Cosmos governance-sensitive action",
                      "confidence":  0.9
                  },
    "risk":  {
                 "score":  60,
                 "level":  "medium",
                 "reasons":  [
                                 "COSMOS_GOVERNANCE"
                             ]
             },
    "recommendedAction":  "QUEUE_AND_REVIEW",
    "adapter":  {
                    "name":  "cosmos-adapter-mvp",
                    "status":  "runtime-wired"
                },
    "receipt":  {
                    "receiptId":  "decision_20260312T052952Z_24ea42f7",
                    "sha256":  "24ea42f76a9aa4f4e320f65ae6d14c878e3c18843b54a231bb47e0790ef7a6ac",
                    "path":  "%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T052952Z_24ea42f7.json"
                }
}
~~~

## Cosmos staking delegation

**Claim tested:** Routine staking delegation remains executable with visible medium-risk classification.

**Source note:** Normalized public-chain Cosmos staking archetype for replay proofing.

**Fixture file:** .\runtime\proofs\replay-fixtures\cosmos\cosmos_staking_archetype.json

**Normalized preview payload**

~~~json
{
    "chainFamily":  "cosmos",
    "network":  "cosmos",
    "messages":  [
                     {
                         "module":  "staking",
                         "action":  "delegate",
                         "typeUrl":  "/cosmos.staking.v1beta1.MsgDelegate"
                     }
                 ]
}
~~~

**Status:** PASS

**Observed decision:** EXECUTE_NOW
**Narrative kind:** cosmos_staking
**Risk level:** medium
**Recommended action:** EXECUTE
**Receipt ID:** decision_20260312T052952Z_ce596966
**Receipt SHA256:** ce596966d8ea330934191627af79700ec241a93b6809786cf913130dd6bfef7d

**Runtime response**

~~~json
{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "cosmos",
    "policyDecision":  "EXECUTE_NOW",
    "decision":  "EXECUTE_NOW",
    "tx":  {
               "network":  "cosmos",
               "messageCount":  1
           },
    "narrative":  {
                      "kind":  "cosmos_staking",
                      "summary":  "Cosmos staking/delegation action",
                      "confidence":  0.9
                  },
    "risk":  {
                 "score":  35,
                 "level":  "medium",
                 "reasons":  [
                                 "COSMOS_STAKING"
                             ]
             },
    "recommendedAction":  "EXECUTE",
    "adapter":  {
                    "name":  "cosmos-adapter-mvp",
                    "status":  "runtime-wired"
                },
    "receipt":  {
                    "receiptId":  "decision_20260312T052952Z_ce596966",
                    "sha256":  "ce596966d8ea330934191627af79700ec241a93b6809786cf913130dd6bfef7d",
                    "path":  "%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T052952Z_ce596966.json"
                }
}
~~~

## EVM routine native transfer

**Claim tested:** Routine low-risk EVM native transfer remains executable.

**Source note:** Normalized public-chain transaction archetype for replay proofing.

**Fixture file:** .\runtime\proofs\replay-fixtures\evm\evm_native_transfer_archetype.json

**Normalized preview payload**

~~~json
{
    "rpcUrl":  "http://127.0.0.1:8545",
    "policy":  "0x49fd2BE640DB2910c2fAb69bB8531Ab6E76127ff",
    "to":  "0x1111111111111111111111111111111111111111",
    "value":  "1",
    "data":  "0x"
}
~~~

**Status:** PASS

**Observed decision:** EXECUTE_NOW
**Narrative kind:** native_transfer
**Risk level:** low
**Recommended action:** EXECUTE
**Receipt ID:** decision_20260312T052952Z_95de896f
**Receipt SHA256:** 95de896fdf9234cbc29dcd62c54a099d04bbb846f67105cc024731f06f817eb7

**Runtime response**

~~~json
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
    "recommendedAction":  "EXECUTE",
    "receipt":  {
                    "receiptId":  "decision_20260312T052952Z_95de896f",
                    "sha256":  "95de896fdf9234cbc29dcd62c54a099d04bbb846f67105cc024731f06f817eb7",
                    "path":  "%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T052952Z_95de896f.json"
                }
}
~~~

## EVM approve to unknown destination

**Claim tested:** Approval-style risk to unknown destinations escalates to review.

**Source note:** Normalized public-chain ERC20 approval archetype for replay proofing.

**Fixture file:** .\runtime\proofs\replay-fixtures\evm\evm_unknown_approve_archetype.json

**Normalized preview payload**

~~~json
{
    "rpcUrl":  "http://127.0.0.1:8545",
    "policy":  "0x49fd2BE640DB2910c2fAb69bB8531Ab6E76127ff",
    "to":  "0x5555555555555555555555555555555555555555",
    "value":  "0",
    "data":  "0x095ea7b3000000000000000000000000aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa0000000000000000000000000000000000000000000000000000000000000001"
}
~~~

**Status:** PASS

**Observed decision:** QUEUED
**Narrative kind:** erc20_approve
**Risk level:** high
**Recommended action:** QUEUE_AND_REVIEW
**Receipt ID:** decision_20260312T052952Z_7541a47f
**Receipt SHA256:** 7541a47fb9add64faedb9645b663ad0a64042a28fca56824d00d29a33bce7bce

**Runtime response**

~~~json
{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "evm",
    "policyDecision":  "EXECUTE_NOW",
    "decision":  "QUEUED",
    "escalation":  {
                       "applied":  true,
                       "from":  "EXECUTE_NOW",
                       "to":  "QUEUED",
                       "reasonCodes":  [
                                           "ESC_UNKNOWN_APPROVAL"
                                       ],
                       "summary":  "Escalated by intelligence policy"
                   },
    "verdictCode":  0,
    "tx":  {
               "to":  "0x5555555555555555555555555555555555555555",
               "value":  "0",
               "data":  "0x095ea7b3000000000000000000000000aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa0000000000000000000000000000000000000000000000000000000000000001"
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
                   "eta":  "0"
               },
    "recommendedAction":  "QUEUE_AND_REVIEW",
    "receipt":  {
                    "receiptId":  "decision_20260312T052952Z_7541a47f",
                    "sha256":  "7541a47fb9add64faedb9645b663ad0a64042a28fca56824d00d29a33bce7bce",
                    "path":  "%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T052952Z_7541a47f.json"
                }
}
~~~

## EVM unknown contract interaction

**Claim tested:** Unknown EVM contract interactions escalate to review.

**Source note:** Normalized suspicious public-chain interaction archetype for replay proofing.

**Fixture file:** .\runtime\proofs\replay-fixtures\evm\evm_unknown_contract_archetype.json

**Normalized preview payload**

~~~json
{
    "rpcUrl":  "http://127.0.0.1:8545",
    "policy":  "0x49fd2BE640DB2910c2fAb69bB8531Ab6E76127ff",
    "to":  "0x5555555555555555555555555555555555555555",
    "value":  "0",
    "data":  "0x12345678"
}
~~~

**Status:** PASS

**Observed decision:** QUEUED
**Narrative kind:** contract_call_unknown
**Risk level:** medium
**Recommended action:** QUEUE_AND_REVIEW
**Receipt ID:** decision_20260312T052953Z_d6b03c2d
**Receipt SHA256:** d6b03c2d15e1323f7991dd7f205c9c0b7ee0ada19acaddfbdf3f98fe0460c5c4

**Runtime response**

~~~json
{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "evm",
    "policyDecision":  "EXECUTE_NOW",
    "decision":  "QUEUED",
    "escalation":  {
                       "applied":  true,
                       "from":  "EXECUTE_NOW",
                       "to":  "QUEUED",
                       "reasonCodes":  [
                                           "ESC_UNKNOWN_CALL_HIGH_RISK"
                                       ],
                       "summary":  "Escalated by intelligence policy"
                   },
    "verdictCode":  0,
    "tx":  {
               "to":  "0x5555555555555555555555555555555555555555",
               "value":  "0",
               "data":  "0x12345678"
           },
    "policy":  {
                   "paused":  false
               },
    "narrative":  {
                      "kind":  "contract_call_unknown",
                      "summary":  "Unknown contract interaction",
                      "confidence":  0.2,
                      "selector":  "0x12345678"
                  },
    "destination":  {
                        "classification":  "unknown",
                        "risk":  "unknown",
                        "labels":  [

                                   ]
                    },
    "risk":  {
                 "score":  65,
                 "level":  "medium",
                 "reasons":  [
                                 "DEST_UNKNOWN",
                                 "NARRATIVE_UNKNOWN_CALL"
                             ]
             },
    "timing":  {
                   "eta":  "0"
               },
    "recommendedAction":  "QUEUE_AND_REVIEW",
    "receipt":  {
                    "receiptId":  "decision_20260312T052953Z_d6b03c2d",
                    "sha256":  "d6b03c2d15e1323f7991dd7f205c9c0b7ee0ada19acaddfbdf3f98fe0460c5c4",
                    "path":  "%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T052953Z_d6b03c2d.json"
                }
}
~~~

## Solana routine SOL transfer

**Claim tested:** Routine SOL transfer remains executable.

**Source note:** Normalized public-chain Solana transfer archetype for replay proofing.

**Fixture file:** .\runtime\proofs\replay-fixtures\solana\solana_native_transfer_archetype.json

**Normalized preview payload**

~~~json
{
    "chainFamily":  "solana",
    "network":  "solana",
    "accounts":  [
                     {
                         "pubkey":  "From111",
                         "isSigner":  true,
                         "isWritable":  true
                     },
                     {
                         "pubkey":  "To111",
                         "isSigner":  false,
                         "isWritable":  true
                     }
                 ],
    "instructions":  [
                         {
                             "programId":  "11111111111111111111111111111111",
                             "programLabel":  "system",
                             "name":  "transfer"
                         }
                     ]
}
~~~

**Status:** PASS

**Observed decision:** EXECUTE_NOW
**Narrative kind:** sol_transfer
**Risk level:** low
**Recommended action:** EXECUTE
**Receipt ID:** decision_20260312T052953Z_eb837ba9
**Receipt SHA256:** eb837ba952fa8d9f75f50029ecd497aea63c6c61cd03e7957ce04d422389d3be

**Runtime response**

~~~json
{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "solana",
    "policyDecision":  "EXECUTE_NOW",
    "decision":  "EXECUTE_NOW",
    "tx":  {
               "network":  "solana",
               "instructionCount":  1,
               "accountCount":  2,
               "writableSignerCount":  1
           },
    "narrative":  {
                      "kind":  "sol_transfer",
                      "summary":  "Transfer SOL",
                      "confidence":  0.91
                  },
    "risk":  {
                 "score":  15,
                 "level":  "low",
                 "reasons":  [
                                 "SOL_SYSTEM_PROGRAM"
                             ]
             },
    "recommendedAction":  "EXECUTE",
    "adapter":  {
                    "name":  "solana-adapter-mvp",
                    "status":  "runtime-wired"
                },
    "receipt":  {
                    "receiptId":  "decision_20260312T052953Z_eb837ba9",
                    "sha256":  "eb837ba952fa8d9f75f50029ecd497aea63c6c61cd03e7957ce04d422389d3be",
                    "path":  "%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T052953Z_eb837ba9.json"
                }
}
~~~

## Solana SPL token transfer

**Claim tested:** Recognized SPL token transfer remains executable with visible medium-risk classification.

**Source note:** Normalized public-chain SPL token archetype for replay proofing.

**Fixture file:** .\runtime\proofs\replay-fixtures\solana\solana_spl_transfer_archetype.json

**Normalized preview payload**

~~~json
{
    "chainFamily":  "solana",
    "network":  "solana",
    "accounts":  [
                     {
                         "pubkey":  "Owner111",
                         "isSigner":  true,
                         "isWritable":  false
                     },
                     {
                         "pubkey":  "SourceToken111",
                         "isSigner":  false,
                         "isWritable":  true
                     },
                     {
                         "pubkey":  "DestToken111",
                         "isSigner":  false,
                         "isWritable":  true
                     }
                 ],
    "instructions":  [
                         {
                             "programId":  "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                             "programLabel":  "spl-token",
                             "name":  "transferChecked"
                         }
                     ]
}
~~~

**Status:** PASS

**Observed decision:** EXECUTE_NOW
**Narrative kind:** spl_token_transfer
**Risk level:** medium
**Recommended action:** EXECUTE
**Receipt ID:** decision_20260312T052953Z_0d9f80f2
**Receipt SHA256:** 0d9f80f207d2d62c216750335c060b0236f875edb331d8f1dd373675a6f166d8

**Runtime response**

~~~json
{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "solana",
    "policyDecision":  "EXECUTE_NOW",
    "decision":  "EXECUTE_NOW",
    "tx":  {
               "network":  "solana",
               "instructionCount":  1,
               "accountCount":  3,
               "writableSignerCount":  0
           },
    "narrative":  {
                      "kind":  "spl_token_transfer",
                      "summary":  "Transfer SPL token",
                      "confidence":  0.91
                  },
    "risk":  {
                 "score":  25,
                 "level":  "medium",
                 "reasons":  [
                                 "SOL_TOKEN_PROGRAM"
                             ]
             },
    "recommendedAction":  "EXECUTE",
    "adapter":  {
                    "name":  "solana-adapter-mvp",
                    "status":  "runtime-wired"
                },
    "receipt":  {
                    "receiptId":  "decision_20260312T052953Z_0d9f80f2",
                    "sha256":  "0d9f80f207d2d62c216750335c060b0236f875edb331d8f1dd373675a6f166d8",
                    "path":  "%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T052953Z_0d9f80f2.json"
                }
}
~~~

## Solana unknown program review

**Claim tested:** Unknown Solana program instructions escalate to review.

**Source note:** Normalized suspicious Solana custom-program archetype for replay proofing.

**Fixture file:** .\runtime\proofs\replay-fixtures\solana\solana_unknown_program_archetype.json

**Normalized preview payload**

~~~json
{
    "chainFamily":  "solana",
    "network":  "solana",
    "accounts":  [
                     {
                         "pubkey":  "User111",
                         "isSigner":  true,
                         "isWritable":  true
                     },
                     {
                         "pubkey":  "Mystery111",
                         "isSigner":  false,
                         "isWritable":  true
                     },
                     {
                         "pubkey":  "Other111",
                         "isSigner":  false,
                         "isWritable":  true
                     }
                 ],
    "instructions":  [
                         {
                             "programId":  "MysteryProgram1111111111111111111111111111",
                             "programLabel":  "unknown",
                             "name":  "unknown"
                         }
                     ]
}
~~~

**Status:** PASS

**Observed decision:** QUEUED
**Narrative kind:** sol_unknown_program
**Risk level:** high
**Recommended action:** QUEUE_AND_REVIEW
**Receipt ID:** decision_20260312T052953Z_6e49e6d6
**Receipt SHA256:** 6e49e6d6d63beec8440738aa69a899ced73d1cb9083e9a409c56320311f7016e

**Runtime response**

~~~json
{
    "ok":  true,
    "version":  "aion.decision.v1",
    "chainFamily":  "solana",
    "policyDecision":  "EXECUTE_NOW",
    "decision":  "QUEUED",
    "tx":  {
               "network":  "solana",
               "instructionCount":  1,
               "accountCount":  3,
               "writableSignerCount":  1
           },
    "narrative":  {
                      "kind":  "sol_unknown_program",
                      "summary":  "Unknown Solana program instruction",
                      "confidence":  0.6
                  },
    "risk":  {
                 "score":  75,
                 "level":  "high",
                 "reasons":  [
                                 "SOL_UNKNOWN_PROGRAM"
                             ]
             },
    "recommendedAction":  "QUEUE_AND_REVIEW",
    "adapter":  {
                    "name":  "solana-adapter-mvp",
                    "status":  "runtime-wired"
                },
    "receipt":  {
                    "receiptId":  "decision_20260312T052953Z_6e49e6d6",
                    "sha256":  "6e49e6d6d63beec8440738aa69a899ced73d1cb9083e9a409c56320311f7016e",
                    "path":  "%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T052953Z_6e49e6d6.json"
                }
}
~~~

## Interpretation

These replay proofs use normalized public-chain transaction archetypes, not live user wallet traffic.
They still provide real runtime evidence because each scenario hit the running Wallet-Lite service, produced a decision, and emitted receipt metadata.

