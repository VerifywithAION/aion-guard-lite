# Wallet Guard Lite Demo Walkthrough V1

## Purpose

This guide provides the shortest clean walkthrough for:

- local boot
- local API verification
- wallet-style preview testing
- guarded-send posture
- provider-wrapper testing
- policy-pack testing
- V2-V6 proof demonstration

This is the recommended guide for:

- first-time evaluators
- screen recordings
- X demonstrations
- builder walkthroughs
- partner demos

---

## Public-safe truth before starting

Wallet Guard Lite is currently strongest as:

- a Windows-first local runtime posture
- a local API called before execution
- a wallet-style demo and proof flow
- a public-safe evidence-backed integration surface

This is not currently presented as a public hosted production gateway.

---

## Demo goal

Show that Wallet Guard Lite can:

1. run locally
2. return deterministic decision output
3. block clearly dangerous actions
4. warn on ambiguous actions
5. preserve evidence fields
6. evaluate provider-wrapper style requests
7. vary posture by policy profile

---

## Step 1 - Start the local API

Open the Wallet Guard Lite local runtime in your VS Code terminal and start the API.

Then verify:

### Health

    Invoke-RestMethod "http://127.0.0.1:8787/health"

### Dev key

    Invoke-RestMethod "http://127.0.0.1:8787/v1/dev/key"

You should see:

- `ok: true`
- service name
- local port
- current policy version
- dev API key

---

## Step 2 - Open the local demo UI

Open the local demo page in the browser.

In the UI:

1. Click **Connect MetaMask**
2. Click **Load Dev API Key**
3. Select a **Policy Profile**
4. Click **Use Wallet Context**

At this point the UI should be connected and ready to send preview requests to the local API.

---

## Step 3 - Run the self-transfer baseline

### Goal
Show a low-risk baseline.

### In the UI
1. Choose `consumer`
2. Click **Fill Self Transfer**
3. Click **Preview**

### Expected posture
Usually:
- `ALLOW`
- low risk
- self-transfer reasoning
- receipt and fingerprint fields returned

### What this proves
- live API call
- baseline safe transaction classification
- receipt emission
- simulated impact rendering

---

## Step 4 - Run malicious approval test

### Goal
Show hard blocking of a classic dangerous approval pattern.

### In the UI
1. Choose `consumer`
2. Click **Malicious Approval**
3. Click **Preview**

### Expected posture
- `BLOCK`
- critical risk
- reason code such as `UNLIMITED_APPROVAL`
- clear receipt fields
- no execution handoff

### What this proves
- rule hardening
- deterministic block posture
- approval risk classification
- simulated permission impact

---

## Step 5 - Run first-time destination test

### Goal
Show contextual warning behavior.

### In the UI
1. Use a different destination than your own address
2. Keep policy profile as `consumer`
3. Click **Preview**

### Expected posture
- `WARN` on first encounter
- first-time destination reasoning
- receipt and fingerprint
- simulated impact

### What this proves
- local context / seen-destination behavior
- contextual escalation beyond raw calldata
- warn posture instead of immediate block

---

## Step 6 - Run guarded send posture

### Goal
Show that the UI obeys returned decision posture.

### In the UI
1. Use a dangerous request like malicious approval
2. Click **Guarded Send**

### Expected posture
- blocked request does not proceed
- MetaMask should not open for a blocked action

### What this proves
- front-end enforcement respects the returned policy decision
- block posture is meaningful, not decorative

---

## Step 7 - Run wrapped approval transaction

### Goal
Show provider-wrapper style evaluation for a dangerous wrapped transaction.

### In the UI
1. Click **Load Wrapped Approval Tx**
2. Click **Run Wrapped Request**

### Expected posture
- `BLOCK`
- approval-related reason code
- provider / wrapper flow remains governed before execution

### What this proves
- provider-wrapper concept is real
- dangerous transaction classes can be caught before wallet execution

---

## Step 8 - Run wrapped permit signature

### Goal
Show provider evaluation of dangerous signature flow.

### In the UI
1. Click **Load Wrapped Permit Sign**
2. Click **Run Wrapped Request**

### Expected posture
- `BLOCK`
- permit-style or unlimited-permit signature reasoning
- no safe handoff for clearly dangerous signature pattern

### What this proves
- provider-method interception posture
- typed-data / permit-risk classification
- signature path governance

---

## Step 9 - Run policy-pack comparison

### Goal
Show that posture can differ across governance profiles.

Recommended profile order:

1. `consumer`
2. `treasury`
3. `exchange`
4. `institutional`

Use the same risky request and re-run it under different profiles.

### What to watch
- same request
- different policy profile
- different decision posture or stricter escalation

### What this proves
- policy packs are real
- governance is context-aware
- product is useful beyond a single generic wallet profile

---

## Step 10 - Inspect history and export

### API

    Invoke-RestMethod "http://127.0.0.1:8787/v1/history"
    Invoke-RestMethod "http://127.0.0.1:8787/v1/export"

### What to show in the recording
- recent items
- policy version
- policy profile
- reason codes
- receipt ids
- fingerprints

### What this proves
- forensic persistence
- exportable runtime evidence
- decision trail exists beyond the visible UI

---

## Suggested X recording sequence

For a short clean public recording:

1. show `/health`
2. show dev key retrieval
3. connect wallet in UI
4. run self-transfer allow baseline
5. run malicious approval block
6. run first-time destination warn
7. run wrapped permit signature block
8. switch policy profile and repeat one request
9. show history / export

This gives a very compact story:

- local API is real
- UI is real
- decisions are real
- provider-wrapper path is real
- policy packs are real
- evidence is real

---

## Best public-safe narration line

Use this:

**Wallet Guard Lite is a local-first governed execution API that evaluates requests before irreversible execution and returns structured decision posture with receipts and evidence.**

That is accurate and strong.

---

## What not to claim in the recording

Do not claim:

- public hosted production gateway
- full chain parity everywhere
- full enterprise hosted maturity
- open-source core engine
- full retail wallet product

Stay inside the current public-safe truth boundary.

---

## Canonical takeaway

A new evaluator should leave this walkthrough understanding:

- Wallet Guard Lite is real
- the API is callable locally
- the demo is reproducible
- the proof path is evidence-backed
- dangerous requests can be warned or blocked before execution
- the system is public-safe without declassifying the private core
---

## V7 — Impact Intelligence demo

### Goal
Show that Wallet Guard Lite now explains not only the decision, but also the financial and exploit consequence.

### Recommended local demo sequence

1. Start the local Wallet Guard Lite API.
2. Open the local UI.
3. Load the Dev API key.
4. Connect MetaMask on Sepolia.
5. Run:
   - Malicious Approval
   - Wrapped Permit Sign
   - First-time destination preview

### Expected proof points

#### Unlimited approval
Expected outcome:
- decision: BLOCK
- easonCode: UNLIMITED_APPROVAL
- visible impact explanation
- visible loss-scope estimate
- visible attack-pattern family

#### Unlimited permit-style signature
Expected outcome:
- decision: BLOCK
- easonCode: UNLIMITED_PERMIT_SIGNATURE
- Guardian Insight explains hidden spending authority risk
- attack pattern family should reflect permit phishing or equivalent permit-abuse posture

#### First-time destination value transfer
Expected outcome:
- decision: WARN
- easonCode: FIRST_TIME_DESTINATION or equivalent value-transfer warning posture
- Guardian Insight explains unknown destination significance

### Why this matters

Earlier phases proved decisioning.

V7 proves consequence translation.

That means Wallet Guard Lite now helps users and integrators understand why a dangerous request matters in real-world terms.

