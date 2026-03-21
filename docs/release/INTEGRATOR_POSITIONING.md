# INTEGRATOR POSITIONING

## What AION Guard Lite currently is
AION Guard Lite is best understood as:
- a local governance runtime
- a wallet preview decision engine
- a structured risk and narrative layer
- a receipt-emitting local control plane

## What integrators should expect
Integrators should send preview payloads to the local runtime and consume responses like:
- decision
- narrative.kind
- narrative.summary
- risk.level
- risk.reasons
- recommendedAction

## What wallets should render
Wallets integrating this runtime should be able to render:
- standard confirmation for `EXECUTE_NOW`
- review-required UI for `QUEUED`
- explicit deny state for `BLOCKED`
- pause state for `PAUSED`

## Current maturity
- EVM: functional local preview flow
- Bitcoin: hardened MVP
- Solana: hardened MVP
- Cosmos: hardened MVP

## Honest public statement
This project is already meaningful as a local wallet governance primitive, even before a full polished wallet UI layer exists.