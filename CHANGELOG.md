# Changelog

All notable changes to AION Guard Lite are documented here.

## v0.1.0 - Initial Public Release Baseline

Initial public Wallet-Lite primitive:

- spending cap enforcement
- delay queue
- guardian pause
- allowlist bypass
- cancel queued transactions
- previewExecution() policy simulation
- executeQueuedEarly() guardian emergency execution
- deterministic Hardhat tests
- AION Proof Mode (evidence + receipts)

## Post-v0.1.0 Hardening and Intelligence Layers

### Phase 1.6
- SDK / CLI / Hardhat developer surface aligned with Wallet-Lite

### Phase 2A
- Decision API v1 introduced

### Phase 2B
- Destination Intelligence v1 added
- deterministic destination classifications:
  - burn
  - internal
  - trusted
  - protocol
  - exchange
  - unknown

### Phase 2C
- Transaction Narrative Verification v1 added
- narrative detection for:
  - native transfer
  - ERC20 approve
  - ERC20 transfer
  - unknown contract call

### Phase 2D
- Decision Receipts v1 added
- decision receipt writing with sha256 metadata

### Phase 2E
- Decision API hardening added
- integration-style selftests
- configurable decision receipt directory
- docs alignment

### Phase 2F
- Risk Scoring v1 added
- deterministic risk score, level, and reason codes