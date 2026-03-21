# Cosmos Preview Payload Schema Notes

## Expected fields
- chainFamily: "cosmos"
- network: string
- messages: array

## Minimum reliable preview shape
Each message should ideally include:
- module
- action
- typeUrl

## Hardening recommendation
When message fields are sparse or conflicting, degrade confidence and prefer review-required outcomes.