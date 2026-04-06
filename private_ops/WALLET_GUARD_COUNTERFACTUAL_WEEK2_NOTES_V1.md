# Wallet Guard Counterfactual Week 2 Notes V1

Private-ops note only.

## Ogie-facing integration principle

The runtime should keep the same core decision / receipt shape.

Counterfactual preview should be:

- additive
- optional
- non-breaking
- clean for Week 2 live passes

## Nearby futures to test

- amount upshift
- repeat attempt
- destination drift
- stricter profile

## Goal

Strengthen the wallet execution gate by showing not only the current request but the danger or fragility of the surrounding execution neighborhood.

Do not expose:

- internal counterfactual heuristics
- private scoring logic
- sensitive runtime internals
- internal orchestration details
