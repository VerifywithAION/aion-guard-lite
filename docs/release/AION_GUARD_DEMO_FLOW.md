# AION Guard Demo Flow

## Purpose
This document explains how to demo AION Guard Lite quickly and clearly.

The goal is to show:
1. routine actions remain executable
2. suspicious actions are moved into review-oriented posture
3. proof and receipt surfaces exist
4. the architecture is multi-chain, not single-chain only

## Demo framing
Use this sentence first:

AION Guard Lite turns wallet activity from blind execution into governed execution.

Then show the difference between:
- routine action
- suspicious action
- proof report
- architecture / positioning docs

## Recommended demo order

### Step 1 " show the README
Open the repository homepage and show:
- what AION Guard Lite is
- current live support
- proof tiers
- architecture and commercial positioning links

### Step 2 " show a routine action
Good examples:
- EVM routine native transfer
- Bitcoin routine send with change
- Solana routine SOL transfer
- Cosmos routine bank send

What to emphasize:
- the runtime does not over-block everything
- routine activity can remain executable

### Step 3 " show a suspicious action
Good examples:
- EVM approve to unknown destination
- EVM unknown contract interaction
- Bitcoin unknown output review
- Bitcoin PSBT multisig review
- Solana unknown program review
- Cosmos governance-sensitive action

What to emphasize:
- suspicious activity is not blindly executed
- the runtime upgrades execution posture into review

### Step 4 " show proof reports
Open:
- `docs\proofs\PUBLIC_CAPABILITY_PROOF_REPORT.md`
- `docs\proofs\EVM_KINE_PROOF_REPORT.md`
- `docs\proofs\REAL_DATA_REPLAY_PROOF_REPORT.md`
- `docs\proofs\PROOF_INDEX.md`

What to emphasize:
- this is not only a concept
- the runtime was exercised
- the outputs are documented
- behavior is repeatable and inspectable

### Step 5 " show strategic docs
Open:
- `docs\release\WHY_AION_IS_A_NEW_EXECUTION_PARADIGM.md`
- `docs\release\AION_GUARD_ARCHITECTURE_OVERVIEW.md`
- `docs\release\AION_GUARD_PRO_COMMERCIAL_PREVIEW.md`
- `docs\release\AION_GUARD_FOUNDER_BRIEF.md`

What to emphasize:
- category shift
- architecture coherence
- Lite vs Pro separation
- commercialization path

## Best one-line explanations during demo

### Routine example
This shows Wallet-Lite can allow lower-risk activity to remain executable.

### Suspicious example
This shows Wallet-Lite can downgrade risky activity from immediate execution into review posture.

### KINE example
This shows that possession of a key is not treated as enough authority for unrestricted immediate execution.

### Replay proof example
This shows that AION can evaluate normalized public-chain transaction archetypes through the same governance model.

## Suggested terminal demo commands

### Public capability proof
`powershell -NoProfile -ExecutionPolicy Bypass -File .\runtime\proofs\run_public_capability_proofs.ps1`

### Real data replay proof
`powershell -NoProfile -ExecutionPolicy Bypass -File .\runtime\proofs\run_real_data_replay_proofs.ps1`

### EVM KINE proof
`powershell -NoProfile -ExecutionPolicy Bypass -File .\runtime\proofs\run_evm_kine_proof.ps1 -RefreshDemo`

## Demo close
End with this message:

AION Guard Lite is not just detecting risky actions. It is establishing execution governance as a new primitive for crypto systems.