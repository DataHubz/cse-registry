# CSE-CMMC-PHYSICAL-NO-ACCESS-LOGS-003

**Physical Access Logs Not Maintained**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-PHYSICAL-NO-ACCESS-LOGS-003` |
| Domain | CMMC |
| Category | PHYSICAL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Audit logs of physical access to facilities are not maintained or reviewed.

This signal indicates that physical access events cannot be investigated or monitored.

## Applicability

- Badge reader logs
- Entry/exit records
- Secure area access logs
- Visitor access records
- Physical access audit trails

## Examples (Non-Normative)

### No Access Logging

```yaml
access_logging:
  badge_reader_logs: disabled
  log_retention: none
  log_review: never
```

### Insufficient Log Retention

```
Physical Access System:
  Log Storage: 7 days
  Required Retention: 1 year
  Log Backup: None
```

## CMMC Context (Informative)

- **PE.L2-3.10.4**: Maintain audit logs of physical access

## Related Signals

- `CSE-CMMC-PHYSICAL-NO-ACCESS-CONTROL-001`
- `CSE-CMMC-AUDIT-NO-LOGGING-001`
