# CSE-CMMC-MAINTENANCE-REMOTE-NOT-MONITORED-004

**Remote Maintenance Not Monitored**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-MAINTENANCE-REMOTE-NOT-MONITORED-004` |
| Domain | CMMC |
| Category | MAINTENANCE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Remote maintenance sessions are not monitored or recorded.

This signal indicates that remote maintenance activities may occur without oversight, increasing risk of unauthorized changes.

## Applicability

- Vendor remote support
- Remote desktop maintenance
- SSH maintenance sessions
- Out-of-band management
- Third-party support access

## Examples (Non-Normative)

### Unmonitored Remote Sessions

```yaml
remote_maintenance:
  session_recording: disabled
  real_time_monitoring: false
  activity_logging: minimal
```

### No Session Oversight

```
Remote Access Configuration:
  Tool: TeamViewer
  Session Recording: Not enabled
  Activity Alerts: Not configured
  Staff Supervision: Not required
```

## CMMC Context (Informative)

- **MA.L2-3.7.5**: Require multifactor authentication to establish nonlocal maintenance sessions via external network connections and terminate such connections when nonlocal maintenance is complete

## Related Signals

- `CSE-CMMC-MAINTENANCE-REMOTE-NOT-AUTHORIZED-005`
- `CSE-CMMC-ACCESS-NO-REMOTE-SESSION-CONTROL-003`
