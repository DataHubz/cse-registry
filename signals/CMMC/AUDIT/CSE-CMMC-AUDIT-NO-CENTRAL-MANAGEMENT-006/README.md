# CSE-CMMC-AUDIT-NO-CENTRAL-MANAGEMENT-006

**Centralized Audit Log Management Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-AUDIT-NO-CENTRAL-MANAGEMENT-006` |
| Domain | CMMC |
| Category | AUDIT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Audit logs are not centrally collected, managed, or analyzed.

This signal indicates that log data may be fragmented across systems, making correlation and incident detection difficult.

## Applicability

- Enterprise log management
- SIEM deployment
- Log aggregation systems
- Cloud logging services
- Multi-system environments

## Examples (Non-Normative)

### No Log Forwarding

```yaml
# rsyslog.conf
# No remote log destination configured
*.* /var/log/messages
# Missing: *.* @@siem.example.com:514
```

### Decentralized Logging

```
Log Management Assessment:
  SIEM Deployed: No
  Log Aggregation: None
  Systems Forwarding Logs: 0 of 50
```

## CMMC Context (Informative)

- **AU.L2-3.3.1**: Create and retain system audit logs and records to the extent needed to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity

## Related Signals

- `CSE-CMMC-AUDIT-NO-LOGGING-001`
- `CSE-CMMC-AUDIT-NO-CORRELATION-007`
