# AION Guard Lite EVM KINE Proof Report

Generated: 2026-03-11T19:56:43
BaseUrl: http://127.0.0.1:8787

## Runtime Health

Status: PASS
Health JSON: {"ok":true,"service":"aion.decision-api.v1"}

## Demo Environment

RPC URL: http://127.0.0.1:8545
GuardPolicy: 0x49fd2BE640DB2910c2fAb69bB8531Ab6E76127ff

## EVM routine internal native transfer

Claim tested: Routine transfer remains executable.
Request JSON: {
    "rpcUrl":  "http://127.0.0.1:8545",
    "policy":  "0x49fd2BE640DB2910c2fAb69bB8531Ab6E76127ff",
    "to":  "0x1111111111111111111111111111111111111111",
    "data":  "0x",
    "value":  "1"
}
Decision: EXECUTE_NOW
Narrative: native_transfer
Risk: low
Recommended action: EXECUTE
Receipt ID: decision_20260312T015648Z_dcfe2225
Receipt SHA256: dcfe22259f91700e9951858aa0f0c3d29d3a2e57a94d91397dad354fba806643
Response JSON: {"ok":true,"version":"aion.decision.v1","chainFamily":"evm","policyDecision":"EXECUTE_NOW","decision":"EXECUTE_NOW","escalation":{"applied":false,"from":"EXECUTE_NOW","to":"EXECUTE_NOW","reasonCodes":[],"summary":"No escalation applied"},"verdictCode":0,"tx":{"to":"0x1111111111111111111111111111111111111111","value":"1","data":"0x"},"policy":{"paused":false},"narrative":{"kind":"native_transfer","summary":"Transfer native asset","confidence":0.95},"destination":{"classification":"internal","risk":"low","labels":["internal_wallet"]},"risk":{"score":5,"level":"low","reasons":["DEST_INTERNAL","NARRATIVE_NATIVE_TRANSFER"]},"timing":{"eta":"0"},"recommendedAction":"EXECUTE","receipt":{"receiptId":"decision_20260312T015648Z_dcfe2225","sha256":"dcfe22259f91700e9951858aa0f0c3d29d3a2e57a94d91397dad354fba806643","path":"%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T015648Z_dcfe2225.json"}}

## EVM unknown contract interaction

Claim tested: Suspicious contract interaction is not treated as routine execution.
Request JSON: {
    "rpcUrl":  "http://127.0.0.1:8545",
    "policy":  "0x49fd2BE640DB2910c2fAb69bB8531Ab6E76127ff",
    "to":  "0x5555555555555555555555555555555555555555",
    "data":  "0x12345678",
    "value":  "0"
}
Decision: QUEUED
Narrative: contract_call_unknown
Risk: medium
Recommended action: QUEUE_AND_REVIEW
Receipt ID: decision_20260312T015648Z_35fcbb66
Receipt SHA256: 35fcbb6615a399665e94ecb240fba8b5b25aa3c3da8b0f14dbea3c0a94744d6c
Response JSON: {"ok":true,"version":"aion.decision.v1","chainFamily":"evm","policyDecision":"EXECUTE_NOW","decision":"QUEUED","escalation":{"applied":true,"from":"EXECUTE_NOW","to":"QUEUED","reasonCodes":["ESC_UNKNOWN_CALL_HIGH_RISK"],"summary":"Escalated by intelligence policy"},"verdictCode":0,"tx":{"to":"0x5555555555555555555555555555555555555555","value":"0","data":"0x12345678"},"policy":{"paused":false},"narrative":{"kind":"contract_call_unknown","summary":"Unknown contract interaction","confidence":0.2,"selector":"0x12345678"},"destination":{"classification":"unknown","risk":"unknown","labels":[]},"risk":{"score":65,"level":"medium","reasons":["DEST_UNKNOWN","NARRATIVE_UNKNOWN_CALL"]},"timing":{"eta":"0"},"recommendedAction":"QUEUE_AND_REVIEW","receipt":{"receiptId":"decision_20260312T015648Z_35fcbb66","sha256":"35fcbb6615a399665e94ecb240fba8b5b25aa3c3da8b0f14dbea3c0a94744d6c","path":"%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T015648Z_35fcbb66.json"}}

## EVM approve to unknown destination

Claim tested: Approval-style authority expansion is escalated for review.
Request JSON: {
    "rpcUrl":  "http://127.0.0.1:8545",
    "policy":  "0x49fd2BE640DB2910c2fAb69bB8531Ab6E76127ff",
    "to":  "0x5555555555555555555555555555555555555555",
    "data":  "0x095ea7b3000000000000000000000000aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa0000000000000000000000000000000000000000000000000000000000000001",
    "value":  "0"
}
Decision: QUEUED
Narrative: erc20_approve
Risk: high
Recommended action: QUEUE_AND_REVIEW
Receipt ID: decision_20260312T015648Z_ef8039e1
Receipt SHA256: ef8039e1a59098ea95f645ae6f130469261de5e5c0931d034393830336cb6cf7
Response JSON: {"ok":true,"version":"aion.decision.v1","chainFamily":"evm","policyDecision":"EXECUTE_NOW","decision":"QUEUED","escalation":{"applied":true,"from":"EXECUTE_NOW","to":"QUEUED","reasonCodes":["ESC_UNKNOWN_APPROVAL"],"summary":"Escalated by intelligence policy"},"verdictCode":0,"tx":{"to":"0x5555555555555555555555555555555555555555","value":"0","data":"0x095ea7b3000000000000000000000000aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa0000000000000000000000000000000000000000000000000000000000000001"},"policy":{"paused":false},"narrative":{"kind":"erc20_approve","summary":"Approve ERC20 spending","confidence":0.98,"selector":"0x095ea7b3"},"destination":{"classification":"unknown","risk":"unknown","labels":[]},"risk":{"score":70,"level":"high","reasons":["DEST_UNKNOWN","NARRATIVE_APPROVE"]},"timing":{"eta":"0"},"recommendedAction":"QUEUE_AND_REVIEW","receipt":{"receiptId":"decision_20260312T015648Z_ef8039e1","sha256":"ef8039e1a59098ea95f645ae6f130469261de5e5c0931d034393830336cb6cf7","path":"%REPO_ROOT%\\.aion\\decision-receipts\\decision_20260312T015648Z_ef8039e1.json"}}

## Interpretation

This proof compares routine EVM behavior with suspicious interaction patterns.
If suspicious actions are queued or treated more strictly than routine actions, the runtime is demonstrating the KINE posture.
