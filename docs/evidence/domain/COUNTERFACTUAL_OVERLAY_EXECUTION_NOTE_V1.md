# Counterfactual Overlay Execution Note V1

## Purpose

This document explains the execution meaning of the Wallet Guard Lite counterfactual overlay.

---

## Core insight

A wallet action should not be judged only as a single isolated transaction.

It should also be tested against nearby alternative futures to measure fragility.

---

## Example nearby futures

- amount upshift
- repeat attempt
- destination drift
- stricter risk profile

These are not arbitrary simulations.

They are bounded neighboring futures intended to answer:

- how stable is the current allow decision?
- what danger family appears if the surrounding execution neighborhood shifts slightly?
- does the current request open a path that becomes dangerous under minimal variation?

---

## Wallet takeaway

The counterfactual overlay strengthens Wallet Guard Lite by showing not only the present request, but also the fragility of the surrounding execution neighborhood.

That makes the gate more robust without changing the external contract.
