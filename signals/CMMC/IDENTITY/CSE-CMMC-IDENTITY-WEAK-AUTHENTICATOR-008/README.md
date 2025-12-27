# CSE-CMMC-IDENTITY-WEAK-AUTHENTICATOR-008

**Authenticator Strength Insufficient**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-IDENTITY-WEAK-AUTHENTICATOR-008` |
| Domain | CMMC |
| Category | IDENTITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Authenticators do not meet minimum strength requirements for the security level of the systems they protect.

This signal indicates that weak authentication mechanisms may be in use for sensitive systems.

## Applicability

- Password complexity requirements
- Cryptographic key lengths
- Certificate algorithm strength
- Token entropy requirements
- Biometric accuracy thresholds

## Examples (Non-Normative)

### Weak Password Requirements

```yaml
password_policy:
  min_length: 6  # Should be 12+
  complexity_required: false
  dictionary_check: disabled
```

### Weak Certificate Algorithm

```
Certificate Analysis:
  Signature Algorithm: SHA-1 (Deprecated)
  Key Size: 1024-bit RSA (Insufficient)
```

## CMMC Context (Informative)

- **IA.L2-3.5.7**: Enforce a minimum password complexity and change of characters when new passwords are created

## Related Signals

- `CSE-CMMC-IDENTITY-WEAK-PASSWORD-002`
- `CSE-CMMC-COMMS-WEAK-CRYPTO-004`
