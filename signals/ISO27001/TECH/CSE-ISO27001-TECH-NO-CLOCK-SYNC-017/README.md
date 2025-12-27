# CSE-ISO27001-TECH-NO-CLOCK-SYNC-017

**No Clock Synchronization**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-TECH-NO-CLOCK-SYNC-017` |
| Domain | ISO27001 |
| Category | TECH |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Clocks of information processing systems are not synchronized to approved time sources. This signal indicates a lack of centralized time synchronization that impairs accurate log correlation, forensic analysis, and audit trail reliability.

## Applicability

- Organizations without NTP (Network Time Protocol) configuration
- Systems with significant clock drift or inaccurate timestamps
- Environments lacking centralized time sources
- Systems where log timestamps cannot be reliably correlated
- Organizations unable to establish accurate timelines during investigations

## Examples (Non-Normative)

### No Time Synchronization

```yaml
time_configuration:
  ntp_enabled: false
  time_source: local_hardware_clock
  synchronization: manual
  monitoring:
    clock_drift_detection: disabled
    sync_status_alerts: none
  time_accuracy:
    variance: unknown
    last_sync: never
```

### Inconsistent Time Sources

```yaml
infrastructure:
  servers:
    ntp_configured: mixed
    time_sources: inconsistent
  network_devices:
    ntp: not_configured
    clock_drift: significant
  applications:
    timestamp_source: system_local_time
  log_correlation:
    accuracy: unreliable
    timezone_handling: inconsistent
```

## ISO 27001:2022 Context (Informative)

- **A.8.17 Clock synchronization**: The clocks of information processing systems used by the organization shall be synchronised to approved time sources.

## Related Signals

- `CSE-ISO27001-TECH-NO-LOGGING-015`
- `CSE-ISO27001-TECH-NO-MONITORING-016`
- `CSE-ISO27001-TECH-NO-CONFIG-MANAGEMENT-009`
