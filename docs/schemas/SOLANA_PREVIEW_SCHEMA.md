# Solana Preview Payload Schema Notes

## Expected fields
- chainFamily: "solana"
- network: string
- accounts: array
- instructions: array

## Minimum reliable preview shape
Each instruction should ideally include:
- programId
- programLabel
- name

Each account should ideally include:
- pubkey
- isSigner
- isWritable

## Hardening recommendation
When instruction or account structure is incomplete, prefer review-required outcomes rather than low-friction execute outcomes.