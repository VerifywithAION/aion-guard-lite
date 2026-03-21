# Solana Adapter MVP

## Purpose
This module adds the first Solana-native protection surface to AION Wallet-Lite.

## MVP goals
- accept Solana preview input
- classify instruction/program patterns
- infer narrative
- compute basic risk
- map to AION decision shape
- support fixture selftests

## Initial supported cases
- simple SOL transfer
- SPL token transfer
- unknown program instruction
- signer/writable-heavy review
- upgrade-authority / governance review

## Public positioning
This is the first Solana-native adapter scaffold for AION.
It extends Wallet-Lite beyond EVM and Bitcoin MVP toward broader digital asset protection.

## Response shape target
- version
- chainFamily
- policyDecision
- decision
- narrative
- risk
- recommendedAction
- receipt