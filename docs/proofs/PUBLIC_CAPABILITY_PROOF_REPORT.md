# AION Guard Lite Public Capability Proof Report

Generated: 2026-03-11T18:10:38
BaseUrl: http://127.0.0.1:8787

## Runtime Health

Status: PASS

{
    "ok":  true,
    "service":  "aion.decision-api.v1"
}

## Bitcoin simple send

Claim tested: Routine BTC send remains executable.

Request JSON

{
    "outputs":  [
                    {
                        "valueSats":  100000,
                        "scriptType":  "p2wpkh",
                        "address":  "bc1qrecipientexample0001"
                    },
                    {
                        "valueSats":  145000,
                        "scriptType":  "p2wpkh",
                        "change":  true,
                        "address":  "bc1qchangeexample0001"
                    }
                ],
    "chainFamily":  "bitcoin",
    "feeSats":  5000,
    "network":  "bitcoin",
    "inputs":  [
                   {
                       "valueSats":  250000,
                       "txid":  "abc123",
                       "vout":  0
                   }
               ]
}

Status: PASS

Observed decision: EXECUTE_NOW
Narrative kind: btc_send_multi_output
Risk level: medium
Recommended action: EXECUTE
Receipt ID: decision_20260312T001038Z_c99c4e20
Receipt SHA256: c99c4e204c20527358e98c27b861d3637a6db2b94a2e07d37bcb0468b9e5ee96

Response JSON

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
                    "receiptId":  "decision_20260312T001038Z_c99c4e20",
                    "sha256":  "c99c4e204c20527358e98c27b861d3637a6db2b94a2e07d37bcb0468b9e5ee96",
                    "path":  "%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T001038Z_c99c4e20.json"
                }
}

## Bitcoin unknown script

Claim tested: Unknown BTC output semantics escalate to review.

Request JSON

{
    "outputs":  [
                    {
                        "valueSats":  200000,
                        "scriptType":  "unknown",
                        "address":  "unknown-destination"
                    },
                    {
                        "valueSats":  290000,
                        "scriptType":  "p2wpkh",
                        "change":  true,
                        "address":  "bc1qchangeexample0003"
                    }
                ],
    "chainFamily":  "bitcoin",
    "feeSats":  10000,
    "network":  "bitcoin",
    "inputs":  [
                   {
                       "valueSats":  500000,
                       "txid":  "ghi789",
                       "vout":  0
                   }
               ]
}

Status: PASS

Observed decision: QUEUED
Narrative kind: btc_unknown_script
Risk level: high
Recommended action: QUEUE_AND_REVIEW
Receipt ID: decision_20260312T001038Z_a67c5638
Receipt SHA256: a67c5638f33d068d8b8445c125635cf315f43e66e42b2fbfda720785dbd6542c

Response JSON

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
                    "receiptId":  "decision_20260312T001038Z_a67c5638",
                    "sha256":  "a67c5638f33d068d8b8445c125635cf315f43e66e42b2fbfda720785dbd6542c",
                    "path":  "%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T001038Z_a67c5638.json"
                }
}

## Solana simple transfer

Claim tested: Routine SOL transfer remains executable.

Request JSON

{
    "instructions":  [
                         {
                             "name":  "transfer",
                             "programId":  "11111111111111111111111111111111",
                             "programLabel":  "system"
                         }
                     ],
    "chainFamily":  "solana",
    "network":  "solana",
    "accounts":  [
                     {
                         "isWritable":  true,
                         "isSigner":  true,
                         "pubkey":  "From111"
                     },
                     {
                         "isWritable":  true,
                         "isSigner":  false,
                         "pubkey":  "To111"
                     }
                 ]
}

Status: PASS

Observed decision: EXECUTE_NOW
Narrative kind: sol_transfer
Risk level: low
Recommended action: EXECUTE
Receipt ID: decision_20260312T001038Z_b1a7cd02
Receipt SHA256: b1a7cd02d44add482cf296628016ee13e4928d918bb229cb1f513bbe1c656040

Response JSON

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
                    "receiptId":  "decision_20260312T001038Z_b1a7cd02",
                    "sha256":  "b1a7cd02d44add482cf296628016ee13e4928d918bb229cb1f513bbe1c656040",
                    "path":  "%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T001038Z_b1a7cd02.json"
                }
}

## Solana unknown program

Claim tested: Unknown Solana program instructions escalate to review.

Request JSON

{
    "instructions":  [
                         {
                             "name":  "unknown",
                             "programId":  "MysteryProgram1111111111111111111111111111",
                             "programLabel":  "unknown"
                         }
                     ],
    "chainFamily":  "solana",
    "network":  "solana",
    "accounts":  [
                     {
                         "isWritable":  true,
                         "isSigner":  true,
                         "pubkey":  "User111"
                     },
                     {
                         "isWritable":  true,
                         "isSigner":  false,
                         "pubkey":  "Mystery111"
                     },
                     {
                         "isWritable":  true,
                         "isSigner":  false,
                         "pubkey":  "Other111"
                     }
                 ]
}

Status: PASS

Observed decision: QUEUED
Narrative kind: sol_unknown_program
Risk level: high
Recommended action: QUEUE_AND_REVIEW
Receipt ID: decision_20260312T001038Z_82982ad8
Receipt SHA256: 82982ad831921a66d281f331462292465f69d6e931374e5893c7b52c63e7771a

Response JSON

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
                    "receiptId":  "decision_20260312T001038Z_82982ad8",
                    "sha256":  "82982ad831921a66d281f331462292465f69d6e931374e5893c7b52c63e7771a",
                    "path":  "%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T001038Z_82982ad8.json"
                }
}

## Cosmos bank send

Claim tested: Routine Cosmos bank send remains executable.

Request JSON

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

Status: PASS

Observed decision: EXECUTE_NOW
Narrative kind: cosmos_bank_send
Risk level: low
Recommended action: EXECUTE
Receipt ID: decision_20260312T001038Z_9b17f7b3
Receipt SHA256: 9b17f7b3a36b3a09f63e3962a3131d682c6585e6c69d97ccfa60d5dd616d5730

Response JSON

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
                    "receiptId":  "decision_20260312T001038Z_9b17f7b3",
                    "sha256":  "9b17f7b3a36b3a09f63e3962a3131d682c6585e6c69d97ccfa60d5dd616d5730",
                    "path":  "%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T001038Z_9b17f7b3.json"
                }
}

## Cosmos governance action

Claim tested: Governance-sensitive Cosmos actions escalate to review.

Request JSON

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

Status: PASS

Observed decision: QUEUED
Narrative kind: cosmos_governance
Risk level: medium
Recommended action: QUEUE_AND_REVIEW
Receipt ID: decision_20260312T001038Z_272f634d
Receipt SHA256: 272f634dd1f9b27515769d2e64003a6f4cda272453bb4a755bc28e792c27092c

Response JSON

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
                    "receiptId":  "decision_20260312T001038Z_272f634d",
                    "sha256":  "272f634dd1f9b27515769d2e64003a6f4cda272453bb4a755bc28e792c27092c",
                    "path":  "%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T001038Z_272f634d.json"
                }
}

## Interpretation

This proof run shows that Wallet-Lite distinguishes routine actions from review-worthy actions across the currently supported non-EVM families.

