# Multi-Chain Review Matrix

| Chain | Scenario | Expected Decision | Expected Narrative | Expected Risk |
| - -| - -| - -| - -| - -|
| Bitcoin | Unknown script output | QUEUED | btc_unknown_script | high |
| Bitcoin | PSBT/multisig | QUEUED | btc_psbt_or_multisig | medium |
| Bitcoin | High fee send | EXECUTE_NOW | btc_send_multi_output | medium |
| Solana | Unknown program | QUEUED | sol_unknown_program | high |
| Solana | Upgradeable loader | QUEUED | sol_upgrade_or_governance | high |
| Solana | SPL token transfer | EXECUTE_NOW | spl_token_transfer | medium |
| Cosmos | Governance vote | QUEUED | cosmos_governance | medium |
| Cosmos | Unknown wasm/module | QUEUED | cosmos_unknown_module | high |
| Cosmos | Bank send | EXECUTE_NOW | cosmos_bank_send | low |