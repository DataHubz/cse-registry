# CSE-CMMC-AUDIT-NO-RETENTION-002

**Audit Log Retention Not Configured**

## Signal Overview

| Field           | Value                                 |
|-----------------|---------------------------------------|
| Identifier      | `CSE-CMMC-AUDIT-NO-RETENTION-002`     |
| Domain          | CMMC                                  |
| Category        | AUDIT                                 |
| Status          | Active                                |
| Introduced In   | 1.0.0                                 |

## Description

Audit logs are not retained for an adequate period or are subject to automatic deletion without regard to retention requirements.

This signal indicates that historical audit data may not be available for incident investigation, compliance verification, or forensic analysis.

## Applicability

This signal applies to:

- Local system log storage
- Centralized logging platforms
- SIEM data retention policies
- Cloud logging service configurations
- Application log management
- Database audit log archives
- Backup and archive systems for logs

## Examples (Non-Normative)

### Linux Logrotate with Short Retention

```
/var/log/auth.log {
    rotate 4
    weekly
    # Only 4 weeks of retention
}
```

### AWS CloudWatch Logs Without Retention

```json
{
  "logGroupName": "/aws/application",
  "retentionInDays": null
}
```

### Elasticsearch Index Lifecycle with Quick Deletion

```json
{
  "policy": {
    "phases": {
      "delete": {
        "min_age": "7d",
        "actions": {
          "delete": {}
        }
      }
    }
  }
}
```

## What This Signal Does NOT Assert

- The appropriate retention period for specific contexts
- Whether logs have been lost
- Whether offline archives exist
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **AU.L2-3.3.1**: Create and retain system audit logs and records to the extent needed to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity

## Related Signals

- `CSE-CMMC-AUDIT-NO-LOGGING-001` — Audit Logging Not Enabled
- `CSE-CMMC-AUDIT-NO-PROTECTION-003` — Audit Logs Not Protected
