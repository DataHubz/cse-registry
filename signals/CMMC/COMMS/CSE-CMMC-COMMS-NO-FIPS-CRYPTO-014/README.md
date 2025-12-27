# CSE-CMMC-COMMS-NO-FIPS-CRYPTO-014

**FIPS-Validated Cryptography Not Used**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-COMMS-NO-FIPS-CRYPTO-014` |
| Domain | CMMC |
| Category | COMMS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Cryptographic modules are not FIPS 140-2/140-3 validated when protecting CUI.

This signal indicates that cryptographic implementations may not meet federal security standards.

## Applicability

- Encryption module validation
- FIPS mode configuration
- Cryptographic library selection
- Hardware security modules
- TLS implementations

## Examples (Non-Normative)

### Non-FIPS Cryptography

```yaml
crypto_config:
  fips_mode: disabled
  module_validation: not_verified
  approved_algorithms_only: false
```

### Unvalidated Module

```
Cryptographic Assessment:
  OpenSSL Version: 1.1.1
  FIPS Mode: Not enabled
  Module Validation: Not FIPS certified
```

## CMMC Context (Informative)

- **SC.L2-3.13.11**: Employ FIPS-validated cryptography when used to protect the confidentiality of CUI

## Related Signals

- `CSE-CMMC-COMMS-WEAK-CRYPTO-004`
- `CSE-CMMC-COMMS-NO-KEY-MANAGEMENT-007`
