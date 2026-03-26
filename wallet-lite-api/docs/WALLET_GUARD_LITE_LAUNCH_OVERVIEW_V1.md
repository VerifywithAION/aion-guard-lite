# Wallet Guard Lite — Launch Overview V1

## What it is

Wallet Guard Lite is a transaction execution guard.

It evaluates wallet actions before execution and returns a deterministic response such as:

- ALLOW
- WARN
- BLOCK

## What it is not

Wallet Guard Lite is not:

- a wallet UI
- a trading bot
- a prediction product

It is a protection layer that can be called by API and embedded into wallet flows.

## Current validated posture

Wallet Guard Lite now has public evidence for:

- API-backed preview behavior
- wallet-style demo UI
- attack-lab scenarios
- defensive hardening checks

## Chain posture

Current proof-backed chains:

- EVM
- Bitcoin
- Solana

Cosmos is not yet parity-complete in the same way.

## Why this matters

Wallet builders can use Wallet Guard Lite as a decision layer while keeping full control over their own UI, dashboard, and user experience.