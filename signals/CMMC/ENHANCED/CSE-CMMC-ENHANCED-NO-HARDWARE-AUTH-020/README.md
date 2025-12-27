# CSE-CMMC-ENHANCED-NO-HARDWARE-AUTH-020

**Hardware-Based Authentication Not Used**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ENHANCED-NO-HARDWARE-AUTH-020` |
| Domain | CMMC |
| Category | ENHANCED |
| Status | Active |
| Introduced In | 1.0.0 |
| CMMC Level | 3 |

## Description

Hardware-based authentication mechanisms such as hardware tokens or smart cards are not used for privileged access.

This signal indicates that authentication may rely solely on software-based factors.

## Applicability

- Hardware security keys (FIDO2)
- Smart card authentication
- TPM-based authentication
- Hardware tokens
- PIV/CAC cards

## Examples (Non-Normative)

### Software-Only Authentication

```yaml
privileged_auth:
  hardware_tokens: not_deployed
  smart_cards: not_used
  fido2_keys: none
```

### No Hardware Factor

```
Authentication Assessment:
  Privileged Access: Software MFA only
  Hardware Tokens: Not deployed
  Smart Cards: Not implemented
```

## CMMC Level 3 Context (Informative)

- **L3-IA.3.5.1e**: Use hardware-based authentication for privileged access

## Related Signals

- `CSE-CMMC-IDENTITY-NO-MFA-001`
- `CSE-CMMC-IDENTITY-WEAK-AUTHENTICATOR-008`
