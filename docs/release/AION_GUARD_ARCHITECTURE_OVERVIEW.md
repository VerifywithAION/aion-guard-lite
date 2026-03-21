# AION Guard Architecture Overview

## Executive view
AION Guard Lite is a local execution-governance runtime for wallet action preview and transaction discipline.

Its purpose is not only to label transactions, but to influence whether an action should:
- execute immediately
- enter review
- be blocked
- remain paused

## Core model
Traditional wallet model:

**key -> sign -> execute**

AION model:

**intent -> preview -> classify -> govern -> execute**

This changes the wallet from a raw authorization surface into a governed execution surface.

## High-level flow

### 1. Wallet intent
A wallet, script, or local integrator prepares an action.
Examples:
- EVM transfer
- ERC20 approve
- Bitcoin send
- Solana instruction bundle
- Cosmos governance message

### 2. Preview payload
That action is converted into a normalized preview payload and sent to the local Wallet-Lite runtime.

### 3. Classification
The runtime analyzes the action and returns:
- narrative classification
- risk level
- recommended action
- decision posture

### 4. Governance decision
The runtime produces structured execution posture such as:
- `EXECUTE_NOW`
- `QUEUED`
- `BLOCKED`
- `PAUSED`

### 5. Receipt evidence
The runtime emits receipt metadata so that decision behavior can be reviewed and evidenced later.

## Runtime families
Current live support:
- EVM
- Bitcoin hardened MVP
- Solana hardened MVP
- Cosmos hardened MVP

## Why the architecture matters
This structure means suspicious actions can be downgraded from blind immediate execution into governed review flows.

That is the architectural difference:
AION is not only observing execution.
It is shaping execution posture.

## Lite boundary
The Lite edition currently provides:
- local runtime
- preview-oriented governance
- multi-chain classification
- proof reports
- integrator-facing surfaces

It is intentionally lightweight and public-facing.

## Pro boundary
The Pro direction extends the same architecture toward:
- stronger operator controls
- richer orchestration
- premium governance surfaces
- enterprise-grade operational workflows

The public repo demonstrates the primitive.
The Pro edition is the commercial expansion of that primitive.

## Simplified system view

1. User or wallet creates intent
2. Intent becomes preview payload
3. AION runtime evaluates the payload
4. AION returns decision + risk + narrative + receipt
5. Integrator decides how to render execution or review flow

## What this repo proves
This repo now demonstrates:
- the primitive works
- the runtime works
- the proof layers work
- the multi-chain model is coherent
- the execution-governance concept is commercially expandable

## Bottom line
AION Guard Lite is best understood as an execution-governance architecture for crypto systems, not merely a transaction warning tool.