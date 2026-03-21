# Security Policy

## Scope

Wallet Lite is a **source-closed governed execution backend/runtime** with a public-safe integration surface.

This repository is public-safe, not an open-source core release.

Security-sensitive areas include:

- governed decision behavior
- runtime packaging and launcher behavior
- request and response contract surfaces
- receipt generation and receipt exposure boundaries
- adapter mappings
- public-safe proof and evidence posture

## Responsible disclosure

Please do **not** open public issues for suspected vulnerabilities.

Use **GitHub Security Advisories** for responsible disclosure.

If GitHub Security Advisories are unavailable in your environment, contact the repository owner privately through the repository owner profile or another non-public channel already established for the project.

## What to include

Please include as much of the following as you can:

- affected file or area
- impact summary
- reproduction steps
- platform details
- whether the issue affects runtime behavior, receipt handling, adapter behavior, or packaging
- whether you believe the issue affects public-safe claims or evidence posture

## Please avoid

Please do not:

- publish exploit details before coordinated review
- post public proof-of-concept material for unresolved security issues
- assume public repo visibility means the core implementation is open-source

## Notes

Security reports related to private or source-closed components may still be valid even if every implementation detail is not exposed in this repository.