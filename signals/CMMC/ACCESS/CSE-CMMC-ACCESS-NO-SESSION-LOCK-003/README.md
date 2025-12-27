# CSE-CMMC-ACCESS-NO-SESSION-LOCK-003

**Session Lock Not Configured**

## Signal Overview

| Field           | Value                                  |
|-----------------|----------------------------------------|
| Identifier      | `CSE-CMMC-ACCESS-NO-SESSION-LOCK-003`  |
| Domain          | CMMC                                   |
| Category        | ACCESS                                 |
| Status          | Active                                 |
| Introduced In   | 1.0.0                                  |

## Description

System sessions are not configured to lock or terminate after a period of inactivity.

This signal indicates that idle sessions remain active indefinitely without requiring re-authentication, potentially allowing unauthorized access to unattended systems.

## Applicability

This signal applies to:

- Workstation and laptop operating systems
- Server remote access sessions (SSH, RDP)
- Cloud management consoles
- Web applications with user sessions
- Database management interfaces
- VPN and remote access connections
- Mobile device management configurations

## Examples (Non-Normative)

### Windows Group Policy Missing Screen Lock

```
Computer Configuration > Policies > Windows Settings > Security Settings > Local Policies > Security Options
  Interactive logon: Machine inactivity limit = 0 (disabled)
```

### SSH Configuration Without Timeout

```
# /etc/ssh/sshd_config
ClientAliveInterval 0
ClientAliveCountMax 0
```

### Web Application Without Session Timeout

```javascript
// Session configuration with no expiration
app.use(session({
  secret: 'key',
  cookie: { maxAge: null }  // Never expires
}));
```

## What This Signal Does NOT Assert

- Whether physical security controls compensate
- The sensitivity of data accessible via the session
- Whether users manually lock their sessions
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **AC.L2-3.1.10**: Use session lock with pattern-hiding displays to prevent access and viewing of data after a period of inactivity
- **AC.L2-3.1.11**: Terminate (automatically) user sessions after a defined condition

## Related Signals

- `CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001` — Unrestricted Administrative Access
- `CSE-CMMC-IDENTITY-NO-REAUTH-001` — No Re-authentication Required (if defined)
