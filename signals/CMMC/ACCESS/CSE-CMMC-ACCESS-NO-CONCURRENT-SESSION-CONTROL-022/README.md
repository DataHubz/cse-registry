# CSE-CMMC-ACCESS-NO-CONCURRENT-SESSION-CONTROL-022

**Concurrent Session Control Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ACCESS-NO-CONCURRENT-SESSION-CONTROL-022` |
| Domain | CMMC |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The number of concurrent sessions for user accounts is not limited or monitored.

This signal indicates that users may establish multiple simultaneous sessions, which may indicate credential sharing or compromise.

## Applicability

- User authentication systems
- Remote access services
- Web applications
- VPN connections
- Terminal services

## Examples (Non-Normative)

### No Session Limit

```yaml
session_policy:
  max_concurrent_sessions: unlimited
  enforce_single_session: false
```

### Unrestricted RDP Sessions

```powershell
# Group Policy
# Computer Configuration > Administrative Templates > Windows Components > Remote Desktop Services
# Limit number of connections: Not configured
```

## CMMC Context (Informative)

- **AC.L2-3.1.11**: Authorize wireless access prior to allowing such connections

## Related Signals

- `CSE-CMMC-ACCESS-NO-SESSION-TERMINATION-021`
- `CSE-CMMC-ACCESS-NO-REMOTE-SESSION-CONTROL-003`
