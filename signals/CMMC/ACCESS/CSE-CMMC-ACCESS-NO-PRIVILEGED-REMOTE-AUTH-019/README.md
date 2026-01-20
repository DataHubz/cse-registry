# CSE-CMMC-ACCESS-NO-PRIVILEGED-REMOTE-AUTH-019

**Privileged Remote Access Not Separately Authenticated**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ACCESS-NO-PRIVILEGED-REMOTE-AUTH-019` |
| Domain | CMMC |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Privileged commands executed via remote access are not authenticated separately from initial session authentication.

This signal indicates that elevated privileges may be exercised without additional verification.

## Applicability

- Remote administrative sessions
- Privileged access management (PAM)
- Remote sudo/elevation
- Just-in-time privileged access
- Remote command execution

## Examples (Non-Normative)

### No Step-Up Authentication

```yaml
pam_config:
  remote_privilege_elevation:
    require_reauthentication: false
    step_up_auth: disabled
```

### Passwordless Sudo Over SSH

```
# /etc/sudoers
remote_admin ALL=(ALL) NOPASSWD: ALL
```

## CMMC Context (Informative)

- **AC.L2-3.1.15**: Authorize remote execution of privileged commands and remote access to security-relevant information

## Related Signals

- `CSE-CMMC-ACCESS-NO-REMOTE-SESSION-CONTROL-003`
- `CSE-CMMC-IDENTITY-NO-MFA-001`
