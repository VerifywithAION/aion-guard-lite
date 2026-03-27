# Wallet Guard Lite — Public API Surface

Wallet Guard Lite is an API-first execution firewall for Web3.

It evaluates transaction intent before irreversible execution and returns structured decisions, receipts, and forensic evidence.

## Public-safe posture

This package exposes only:

- API-facing contracts
- request/response semantics
- reason codes
- receipt schema
- integrator examples
- public-safe usage patterns

This package does NOT expose:

- engine internals
- private rule composition logic
- classified heuristics
- source-closed runtime implementation
- internal research artifacts

## Core product model

Wallet Guard Lite should be understood as a headless decision layer.

Builders can place their own experiences on top, including:

- wallet dashboards
- security consoles
- visual indicators
- approval review modals
- browser extensions
- mobile wallet screens
- treasury control panels
- embedded finance frontends

In other words:

Wallet Guard Lite decides. Builders design.

## Current API surface

Health
- GET /health

Developer utilities
- GET /v1/dev/key
- GET /v1/dev/usage

Core evaluation
- POST /v1/preview

Forensic memory
- GET /v1/history
- POST /v1/history/clear
- GET /v1/export

## Current decision classes

- ALLOW
- WARN
- BLOCK

## Current proof-backed capabilities

- semantic transaction classification
- unlimited approval blocking
- warning/override routing
- policy versioning
- tx fingerprinting
- simulated impact rendering
- append-only forensic logging
- history retrieval
- export bundle generation

## Public builder principle

The API is intentionally UI-agnostic.

Any builder may implement their own:

- red/yellow/green indicators
- badge systems
- fraud ribbons
- callout panels
- review queues
- wallet overlays
- institutional governance dashboards

while preserving Wallet Guard Lite as the decision engine.

See:
- docs/API_SPEC.md
- docs/INTEGRATOR_GUIDE.md
- docs/REASON_CODES.md
- schemas/RECEIPT_SCHEMA_V1.json
- examples/curl_examples.md
- examples/javascript_fetch_example.js
- examples/python_requests_example.py