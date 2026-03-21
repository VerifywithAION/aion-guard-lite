# Bitcoin Adapter MVP

## Purpose
This module adds the first Bitcoin-native protection surface to AION Wallet-Lite.

## MVP goals
- accept Bitcoin preview input
- classify transaction type
- infer narrative
- compute basic risk
- map to AION decision shape
- support selftest fixtures

## Initial supported cases
- simple send
- send with change
- high-fee warning
- nonstandard/unknown script review
- multisig/PSBT review

## Public positioning
This is the first Bitcoin-native adapter scaffold for AION.
It extends the EVM-first Wallet-Lite runtime toward broader digital asset protection.

## Response shape target
- version
- policyDecision
- decision
- narrative
- risk
- recommendedAction
- receipt

## Next implementation steps
1. wire fixture-based adapter selftest
2. connect adapter into runtime dispatch model
3. add receipt writer integration
4. add localhost preview endpoint for bitcoin family
5. add trader-facing examples