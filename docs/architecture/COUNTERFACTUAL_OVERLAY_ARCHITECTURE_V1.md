# Counterfactual Overlay Architecture V1

## Purpose

This document explains the additive counterfactual overlay for AION Wallet Guard Lite.

The goal is to strengthen the execution gate without breaking the existing contract.

---

## Non-breaking design rule

Wallet Guard Lite keeps the same:

- core decision shape
- receipt shape
- allow / warn / block contract

The counterfactual layer is optional and additive.

It enriches the current request with a bounded summary of nearby futures.

---

## Why this matters

A wallet request may look acceptable at the current surface and still be dangerous in its surrounding execution neighborhood.

Examples:

- amount upshift
- repeat attempt
- destination drift
- stricter profile
- nearby escalation into a more dangerous path

---

## Example optional overlay output

Example:

{
  "decision": "WARN",
  "reason": "current action admissible but surrounding neighborhood is fragile",
  "counterfactual_summary": {
    "fragility": "HIGH",
    "dominant_risk": "repeat_attempt_to_new_destination",
    "tested_variants": [
      "amount_upshift",
      "repeat_attempt",
      "destination_drift",
      "stricter_profile"
    ]
  }
}

This preserves the core Week 2 contract while making the gate stronger.

---

## Architectural role

Wallet Guard Lite remains the execution gate.

The counterfactual engine enriches preview by testing nearby alternative futures before the final decision.
