# CSE-CMMC-ACCESS-NO-SESSION-TERMINATION-021

**Session Termination Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ACCESS-NO-SESSION-TERMINATION-021` |
| Domain | CMMC |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

User sessions are not automatically terminated after a period of inactivity or when no longer needed.

This signal indicates that stale sessions may remain active, creating opportunities for unauthorized access.

## Applicability

- Web application sessions
- Remote desktop sessions
- SSH sessions
- Administrative console access
- VPN connections

## Examples (Non-Normative)

### No Session Timeout

```xml
<session-config>
  <session-timeout>0</session-timeout> <!-- Never expires -->
</session-config>
```

### Infinite SSH Session

```
# /etc/ssh/sshd_config
ClientAliveInterval 0
ClientAliveCountMax 0
# Sessions never timeout
```

## CMMC Context (Informative)

- **AC.L2-3.1.10**: Terminate (automatically) a user session after a defined condition

## Related Signals

- `CSE-CMMC-ACCESS-NO-REMOTE-SESSION-CONTROL-003`
- `CSE-CMMC-ACCESS-NO-CONCURRENT-SESSION-CONTROL-022`
