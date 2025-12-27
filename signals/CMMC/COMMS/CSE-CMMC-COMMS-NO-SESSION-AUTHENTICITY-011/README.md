# CSE-CMMC-COMMS-NO-SESSION-AUTHENTICITY-011

**Communication Session Authenticity Not Ensured**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-COMMS-NO-SESSION-AUTHENTICITY-011` |
| Domain | CMMC |
| Category | COMMS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Authenticity of communication sessions is not verified through cryptographic mechanisms.

This signal indicates that session hijacking or man-in-the-middle attacks may be possible.

## Applicability

- TLS certificate validation
- Session token protection
- Mutual authentication
- Message authentication codes
- Session binding

## Examples (Non-Normative)

### No Certificate Validation

```yaml
tls_config:
  certificate_validation: disabled
  hostname_verification: false
  self_signed_allowed: true
```

### Weak Session Authentication

```python
# Session without binding
session = create_session()
# Missing: session.bind_to_client_cert()
# Missing: session.verify_authenticity()
```

## CMMC Context (Informative)

- **SC.L2-3.13.15**: Protect the authenticity of communications sessions

## Related Signals

- `CSE-CMMC-COMMS-WEAK-CRYPTO-004`
- `CSE-CMMC-IDENTITY-NO-REPLAY-RESISTANCE-009`
