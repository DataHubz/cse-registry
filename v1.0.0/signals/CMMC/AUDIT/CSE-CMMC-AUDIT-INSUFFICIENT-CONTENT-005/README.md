# CSE-CMMC-AUDIT-INSUFFICIENT-CONTENT-005

**Audit Record Content Insufficient**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-AUDIT-INSUFFICIENT-CONTENT-005` |
| Domain | CMMC |
| Category | AUDIT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Audit records do not contain sufficient information to establish what events occurred, when they occurred, where they occurred, and who was involved.

This signal indicates that audit logs may lack critical details needed for incident investigation.

## Applicability

- System event logs
- Application audit logs
- Security event records
- Access logs
- Transaction logs

## Examples (Non-Normative)

### Minimal Log Entry

```
# Insufficient: Missing user, source, outcome
2024-01-15 Login attempted
```

### Missing Required Fields

```json
{
  "event": "file_access",
  "timestamp": "2024-01-15T10:30:00Z"
  // Missing: user, source_ip, resource, outcome
}
```

## CMMC Context (Informative)

- **AU.L2-3.3.1**: Create and retain system audit logs and records to the extent needed to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity

## Related Signals

- `CSE-CMMC-AUDIT-NO-LOGGING-001`
- `CSE-CMMC-AUDIT-NO-USER-ACCOUNTABILITY-002`
