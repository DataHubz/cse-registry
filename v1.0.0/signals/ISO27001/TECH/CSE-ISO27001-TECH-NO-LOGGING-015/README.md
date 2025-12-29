# CSE-ISO27001-TECH-NO-LOGGING-015

**No Logging**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-TECH-NO-LOGGING-015` |
| Domain | ISO27001 |
| Category | TECH |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Logs recording activities, exceptions, faults, and security events are not produced and retained. This signal indicates inadequate logging that impairs incident detection, forensic investigation, and compliance with audit requirements.

## Applicability

- Organizations without comprehensive logging enabled
- Systems that do not log user activities or administrative actions
- Environments lacking centralized log collection
- Organizations with inadequate log retention periods
- Systems where logs can be modified or deleted by users

## Examples (Non-Normative)

### Logging Disabled

```yaml
logging_configuration:
  application_logs: disabled
  system_logs: minimal
  security_logs: not_configured
  audit_logs: disabled
  log_aggregation: not_implemented
  retention_period: 7_days
  log_protection:
    integrity: not_protected
    encryption: disabled
    access_control: unrestricted
```

### Incomplete Log Coverage

```yaml
log_sources:
  authentication_events: not_logged
  privileged_actions: not_logged
  data_access: not_logged
  configuration_changes: not_logged
  security_events: partial
  network_traffic: not_logged
  log_management:
    centralization: none
    correlation: not_available
    alerting: disabled
```

## ISO 27001:2022 Context (Informative)

- **A.8.15 Logging**: Logs that record activities, exceptions, faults and other relevant events shall be produced, stored, protected and analysed.

## Related Signals

- `CSE-ISO27001-TECH-NO-MONITORING-016`
- `CSE-ISO27001-TECH-NO-PRIVILEGED-ACCESS-MGMT-002`
- `CSE-ISO27001-TECH-NO-ACCESS-RESTRICTION-003`
- `CSE-ISO27001-TECH-NO-SECURE-AUTH-005`
