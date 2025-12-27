# CSE-CMMC-ACCESS-NO-AUTHORIZED-ACCESS-CONTROL-020

**Authorized Access Enforcement Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ACCESS-NO-AUTHORIZED-ACCESS-CONTROL-020` |
| Domain | CMMC |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Systems do not enforce access decisions based on user authorization status.

This signal indicates that access may be granted without verifying that users are authorized for the requested resources or operations.

## Applicability

- System login mechanisms
- Application authentication
- Network access control
- Resource authorization
- API access control

## Examples (Non-Normative)

### No Authorization Check

```python
# Missing authorization verification
@app.route('/api/data')
def get_data():
    # No check if user is authorized
    return jsonify(sensitive_data)
```

### Disabled Access Control

```yaml
access_control:
  enabled: false
  default_action: allow
  authorization_required: false
```

## CMMC Context (Informative)

- **AC.L1-3.1.1**: Limit information system access to authorized users, processes acting on behalf of authorized users, or devices

## Related Signals

- `CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001`
- `CSE-CMMC-IDENTITY-NO-MFA-001`
