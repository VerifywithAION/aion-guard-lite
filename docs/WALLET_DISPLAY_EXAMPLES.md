# Wallet-Lite Multi-Chain Display Examples

This document explains how Wallet-Lite decisions should be displayed across currently supported runtime families.

## EVM example
Scenario: unknown contract call

Typical result:
- decision: QUEUED
- narrative.kind: contract_call_unknown
- risk.level: medium or high

Display meaning:
Unknown contract interaction detected. Review required before execution.

## Bitcoin example
Scenario: unknown script output

Typical result:
- decision: QUEUED
- narrative.kind: btc_unknown_script
- risk.level: high

Display meaning:
Unknown or nonstandard Bitcoin output detected. Review required before execution.

## Solana example
Scenario: unknown program instruction

Typical result:
- decision: QUEUED
- narrative.kind: sol_unknown_program
- risk.level: high

Display meaning:
Unknown Solana program instruction detected. Review required before execution.

## Cosmos example
Scenario: governance-sensitive action

Typical result:
- decision: QUEUED
- narrative.kind: cosmos_governance
- risk.level: medium or high

Display meaning:
Governance-sensitive Cosmos action detected. Review required before execution.

## Rendering guidance
- EXECUTE_NOW -> standard confirm path
- QUEUED -> review-required path
- BLOCKED -> deny/stop path
- PAUSED -> pause/unpause-or-abort path

## Current live support
- EVM
- Bitcoin MVP
- Solana MVP
- Cosmos MVP