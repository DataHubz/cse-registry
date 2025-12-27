# CSE-CMMC-ACCESS-NO-UNSUCCESSFUL-LOGON-007

**Unsuccessful Logon Attempts Not Limited**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ACCESS-NO-UNSUCCESSFUL-LOGON-007` |
| Domain | CMMC |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Systems do not limit or respond to unsuccessful logon attempts.

This signal indicates that accounts may be vulnerable to brute force or password guessing attacks without lockout or delay mechanisms.

## Applicability

- Operating system login
- Application authentication
- VPN and remote access
- Cloud console access
- API authentication
- Database connections

## Examples (Non-Normative)

### No Account Lockout Policy

```powershell
# Windows without lockout
Account lockout threshold: 0 (disabled)
Account lockout duration: Not applicable
```

### No Rate Limiting

```python
# API without rate limiting
@app.route('/login', methods=['POST'])
def login():
    # No failed attempt tracking
    return authenticate(request)
```

## CMMC Context (Informative)

- **AC.L2-3.1.8**: Limit unsuccessful logon attempts

## Related Signals

- `CSE-CMMC-IDENTITY-WEAK-PASSWORD-002`
- `CSE-CMMC-IDENTITY-NO-MFA-001`
