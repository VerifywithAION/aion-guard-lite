# Wallet Lite Real TX Flow Proof

Generated: 2026-03-24  
Network: Sepolia  
Runtime: http://127.0.0.1:8787  
Harness: http://127.0.0.1:8899  
Policy: 0xE08ebE47F308e2831bf10a619cb434B64A001d0B  

---

## Purpose

This proof shows a real browser wallet flow passing through the Wallet Lite harness and runtime before execution.

---

## Proven

- runtime health was OK
- harness health was OK
- MetaMask connected successfully
- Sepolia policy address was used
- preview returned a structured governed result
- unknown destination transfer was classified as `QUEUED`
- structured reason surfaces were returned
- wallet-native warning behavior also appeared on the transaction request

---

## Scenario

Native Transfer — Unknown Destination

---

## Preview Summary

- Decision: `QUEUED`
- PolicyDecision: `QUEUED`
- RecommendedAction: `QUEUE_AND_REVIEW`

---

## Key Reason Surfaces

- `DESTINATION_FIRST_SEEN_REVIEW`
- `MISSING_DOMAIN_REVIEW`

---

## Runtime Interpretation

Wallet Lite determined that the destination was first-seen / insufficiently trusted and routed the action into governed review rather than immediate execution.

This confirms a real pre-sign governance path:

wallet -> harness -> runtime -> decision

---

## Important distinction

MetaMask warning behavior may also appear during the transaction request, but Wallet Lite is not equivalent to a wallet-native warning.

Wallet Lite provides:

- deterministic API output
- structured decision semantics
- machine-readable reason surfaces
- reproducible preview behavior
- integrator-facing governance logic

---

## Current boundary

This proof demonstrates pre-execution governance in a real wallet + testnet environment.

It does not yet claim final transaction enforcement by Wallet Lite itself.

---

## Repro path

1. Run `scripts\RUN_WALLET_LITE_X5_DEMO.ps1`
2. Open the harness
3. Connect MetaMask
4. Switch to Sepolia
5. Run `Native Transfer - Unknown Destination`
6. Confirm preview returns `QUEUED`
7. Run `scripts\VERIFY_WALLET_LITE_X5.ps1`

---

## Conclusion

Wallet Lite successfully operated as a governed execution boundary in a live browser-wallet + Sepolia testnet flow.