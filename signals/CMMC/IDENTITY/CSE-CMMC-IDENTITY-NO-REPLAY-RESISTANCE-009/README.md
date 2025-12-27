# CSE-CMMC-IDENTITY-NO-REPLAY-RESISTANCE-009

**Replay-Resistant Authentication Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-IDENTITY-NO-REPLAY-RESISTANCE-009` |
| Domain | CMMC |
| Category | IDENTITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Authentication mechanisms do not prevent replay attacks where captured credentials are reused.

This signal indicates that intercepted authentication data may be replayed to gain unauthorized access.

## Applicability

- Network authentication protocols
- Privileged access systems
- Remote access authentication
- API authentication
- Service-to-service authentication

## Examples (Non-Normative)

### Static Token Authentication

```python
# Vulnerable: Static bearer token
headers = {
    "Authorization": "Bearer static_api_key_12345"
}
# Can be replayed indefinitely if captured
```

### No Nonce in Authentication

```yaml
auth_protocol:
  nonce_required: false
  timestamp_validation: disabled
  replay_detection: none
```

## CMMC Context (Informative)

- **IA.L2-3.5.8**: Implement replay-resistant authentication mechanisms for network access to privileged accounts

## Related Signals

- `CSE-CMMC-IDENTITY-NO-MFA-001`
- `CSE-CMMC-COMMS-WEAK-CRYPTO-004`
