# CSE-CMMC-AUDIT-INSUFFICIENT-CAPACITY-008

**Audit Storage Capacity Insufficient**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-AUDIT-INSUFFICIENT-CAPACITY-008` |
| Domain | CMMC |
| Category | AUDIT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Insufficient storage capacity is allocated for audit log retention, risking loss of audit data.

This signal indicates that audit records may be overwritten or deleted before required retention periods are met.

## Applicability

- Log storage sizing
- Retention policy implementation
- Archive storage capacity
- Real-time log storage
- Long-term audit preservation

## Examples (Non-Normative)

### Aggressive Log Rotation

```yaml
logrotate_config:
  rotate: 3
  maxsize: 10M
  # Retention: ~3 days instead of required 90 days
```

### Insufficient Storage Allocation

```
Log Storage Assessment:
  Allocated: 50GB
  Daily Volume: 5GB
  Retention Requirement: 90 days
  Capacity Gap: 400GB needed
```

## CMMC Context (Informative)

- **AU.L2-3.3.4**: Alert in the event of an audit logging process failure

## Related Signals

- `CSE-CMMC-AUDIT-NO-RETENTION-004`
- `CSE-CMMC-AUDIT-NO-LOGGING-001`
