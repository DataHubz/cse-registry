# CSE-CMMC-IDENTITY-NO-AUTHENTICATOR-MANAGEMENT-007

**Authenticator Lifecycle Not Managed**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-IDENTITY-NO-AUTHENTICATOR-MANAGEMENT-007` |
| Domain | CMMC |
| Category | IDENTITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Authenticators such as passwords, tokens, and certificates are not properly managed throughout their lifecycle.

This signal indicates that authenticators may not be issued, rotated, or revoked according to security requirements.

## Applicability

- Password management policies
- Certificate lifecycle management
- Hardware token issuance
- Authenticator recovery processes
- Credential rotation requirements

## Examples (Non-Normative)

### No Password Expiration

```yaml
password_policy:
  max_age: 0  # Never expires
  rotation_required: false
  history_enforcement: disabled
```

### Unmanaged Certificates

```
Certificate Management:
  Expiration Tracking: None
  Rotation Schedule: Not defined
  Revocation Process: Manual/ad-hoc
```

## CMMC Context (Informative)

- **IA.L2-3.5.6**: Manage information system authenticators by verifying, as part of the initial authenticator distribution, the identity of the individual, group, role, or device receiving the authenticator

## Related Signals

- `CSE-CMMC-IDENTITY-WEAK-PASSWORD-002`
- `CSE-CMMC-IDENTITY-NO-IDENTIFIER-MANAGEMENT-006`
