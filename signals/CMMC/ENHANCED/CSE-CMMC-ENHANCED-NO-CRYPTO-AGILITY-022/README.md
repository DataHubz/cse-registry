# CSE-CMMC-ENHANCED-NO-CRYPTO-AGILITY-022

**Cryptographic Agility Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ENHANCED-NO-CRYPTO-AGILITY-022` |
| Domain | CMMC |
| Category | ENHANCED |
| Status | Active |
| Introduced In | 1.0.0 |
| CMMC Level | 3 |

## Description

Cryptographic agility to rapidly change algorithms in response to vulnerabilities is not implemented.

This signal indicates that transitioning to new cryptographic standards may be difficult.

## Applicability

- Algorithm-agnostic designs
- Crypto library abstraction
- Post-quantum readiness
- Algorithm inventory
- Transition planning

## Examples (Non-Normative)

### Hardcoded Cryptography

```yaml
crypto_architecture:
  algorithm_agility: false
  abstraction_layer: none
  pqc_readiness: not_assessed
```

### Fixed Algorithms

```
Crypto Assessment:
  Algorithm Flexibility: Hardcoded
  Library Abstraction: None
  Transition Plan: Not developed
```

## CMMC Level 3 Context (Informative)

- **L3-SC.3.13.6e**: Implement cryptographic agility

## Related Signals

- `CSE-CMMC-COMMS-WEAK-CRYPTO-004`
- `CSE-CMMC-COMMS-NO-KEY-MANAGEMENT-007`
