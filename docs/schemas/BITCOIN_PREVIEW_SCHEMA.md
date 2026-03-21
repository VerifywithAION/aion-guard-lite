# Bitcoin Preview Payload Schema Notes

## Expected fields
- chainFamily: "bitcoin"
- network: string
- inputs: array
- outputs: array
- feeSats: number
- psbtBase64: optional string
- multisig: optional boolean

## Minimum reliable preview shape
- outputs must exist
- each output should ideally include:
 - address
 - valueSats
 - scriptType
- feeSats should be numeric

## Hardening recommendation
When critical fields are missing, degrade confidence and prefer review-required behavior rather than silent execute behavior.