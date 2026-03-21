# Contributing

Thank you for your interest in Wallet Lite.

This repository is a **public-safe, source-closed integration and documentation surface** for Wallet Lite. It is not a public declassification of the core implementation.

## What contributions are most useful

The most useful public contributions are:

- documentation corrections
- schema clarity improvements
- typo fixes
- public-safe example improvements
- integrator guidance improvements
- evidence-index clarity improvements

## What is not generally accepted through public PRs

Because Wallet Lite is source-closed at the core, this repository is **not** the place for public pull requests that attempt to change or recreate private implementation internals.

Examples of changes that are generally out of scope for public PRs:

- private runtime internals
- proprietary orchestration logic
- premium heuristics
- classified harness logic
- changes that imply open-source declassification of the core

## Public contribution rules

If you open a public PR, keep it:

- small
- explicit
- easy to review
- aligned with the current product boundary
- aligned with public-safe claim discipline

Please also ensure that your change does not:

- introduce language that suggests Wallet Lite is open-source at the core
- weaken the source-closed posture
- overclaim platform maturity or proof posture
- expose private machine paths, confidential details, or internal-only artifacts

## Issues

Public issues are appropriate for:

- documentation clarity
- schema clarification
- integrator-facing confusion
- public-safe repo wording problems
- broken public-safe links or docs structure

Do **not** use public issues for sensitive vulnerabilities.
Use the process in `SECURITY.md`.

## Pull request expectations

A good public PR should:

- explain the problem clearly
- keep the scope narrow
- preserve the Path B product boundary
- preserve truth-first wording
- avoid semantic drift in the public contract

## Final note

Wallet Lite is designed so others can build on top of a stable governed core without requiring public exposure of the private implementation. Contributions should reinforce that model, not blur it.