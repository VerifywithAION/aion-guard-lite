# Proof Mode

AION Proof Mode generates deterministic evidence for every test run.

Run:

 npm run proof:run

Verify:

 npm run proof:verify - ".\proof\evidence\proof_run_YYYYMMDD_HHMMSSZ"

Generate report:

 npm run proof:report - ".\proof\evidence\proof_run_YYYYMMDD_HHMMSSZ"

Outputs include:

- manifest.json
- receipt.json
- logs
- report.md

## Decision API Receipts

The Decision API also writes local decision receipts for evaluated requests.

Default output:

- `.aion/decision-receipts/`

Override with:

- `AION_DECISION_RECEIPTS_DIR`