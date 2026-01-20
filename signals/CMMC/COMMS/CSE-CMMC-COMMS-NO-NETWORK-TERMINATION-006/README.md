# CSE-CMMC-COMMS-NO-NETWORK-TERMINATION-006

**Network Connection Termination Not Controlled**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-COMMS-NO-NETWORK-TERMINATION-006` |
| Domain | CMMC |
| Category | COMMS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Network connections are not terminated at the end of sessions or after periods of inactivity.

This signal indicates that stale network connections may remain available for exploitation.

## Applicability

- Network session management
- VPN connection timeouts
- Application session termination
- Idle connection handling
- Keep-alive policies

## Examples (Non-Normative)

### No Connection Timeout

```yaml
network_session:
  idle_timeout: 0  # Never expires
  session_max_duration: unlimited
  force_termination: disabled
```

### Persistent Connections

```
VPN Configuration:
  Idle Timeout: Not configured
  Max Session: Unlimited
  Re-authentication: Never required
```

## CMMC Context (Informative)

- **SC.L2-3.13.9**: Terminate network connections associated with communications sessions at the end of the sessions or after a defined period of inactivity

## Related Signals

- `CSE-CMMC-ACCESS-NO-SESSION-TERMINATION-021`
- `CSE-CMMC-ACCESS-NO-REMOTE-SESSION-CONTROL-003`
