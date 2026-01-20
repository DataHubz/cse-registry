# CSE-GEN-AUDIT-NO-LOG-RETENTION-003

**Audit Log Retention Missing**

## Signal Overview

| Field           | Value                                  |
|-----------------|----------------------------------------|
| Identifier      | `CSE-GEN-AUDIT-NO-LOG-RETENTION-003`   |
| Domain          | GEN (General)                          |
| Category        | AUDIT                                  |
| Status          | Active                                 |
| Introduced In   | 1.0.0                                  |

## Description

No defined retention period for audit logs; logs may be deleted before needed for investigation or compliance.

This signal indicates that audit logs are subject to automatic deletion, rotation, or purging without consideration for retention requirements, potentially resulting in loss of historical audit data needed for incident investigation, forensic analysis, or regulatory compliance.

## Applicability

This signal applies to:

- Local log rotation configurations
- Centralized logging platforms and SIEM retention policies
- Cloud logging service retention settings
- Database audit log lifecycle management
- Syslog server storage policies
- Application log management systems
- Backup and archive retention policies
- Container and orchestration platform log retention
- Log aggregation and forwarding services

## Examples (Non-Normative)

The following are illustrative examples of patterns that may trigger this signal:

### Linux Logrotate with Minimal Retention

```conf
# /etc/logrotate.d/application
/var/log/application/*.log {
    daily
    rotate 7
    compress
    delaycompress
    missingok
    notifempty
}
# Only 7 days retention - may be insufficient
```

### AWS CloudWatch Logs Without Retention Policy

```json
{
  "logGroupName": "/aws/application/audit",
  "retentionInDays": null,
  "storedBytes": 524288000
}
```

### Azure Log Analytics Default Retention

```json
{
  "workspaceName": "company-logs",
  "retentionInDays": 30
}
```

### Elasticsearch ILM with Quick Deletion

```json
{
  "policy": {
    "phases": {
      "hot": {
        "min_age": "0ms",
        "actions": {
          "rollover": {
            "max_age": "1d"
          }
        }
      },
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

### Splunk Index Without Retention Enforcement

```conf
[audit_index]
homePath = $SPLUNK_DB/audit_index/db
coldPath = $SPLUNK_DB/audit_index/colddb
thawedPath = $SPLUNK_DB/audit_index/thaweddb
# No frozenTimePeriodInSecs defined - unlimited or undefined retention
```

### Docker Container Logs Without Retention

```json
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  }
}
```

### Database Audit Table Without Partitioning/Archival

```sql
-- Audit table with no retention policy
CREATE TABLE audit_events (
    event_id BIGINT PRIMARY KEY,
    event_time TIMESTAMP,
    user_id INT,
    action VARCHAR(255),
    details TEXT
);
-- No partitioning, archival, or deletion policy defined
```

### GCP Cloud Logging Default Settings

```json
{
  "name": "projects/my-project/logs/audit",
  "retentionDays": 30
}
```

## What This Signal Does NOT Assert

- The appropriate retention period for specific regulatory requirements
- Whether logs have already been lost due to insufficient retention
- Whether offline archives or backups exist
- The storage capacity required for longer retention
- Compliance or non-compliance with any specific framework
- Required remediation actions or specific retention periods
- Whether retention requirements vary by log type or sensitivity

## Related Framework Signals

This signal may be related to framework-specific retention signals:

- `CSE-CMMC-AUDIT-NO-RETENTION-002` — CMMC audit retention requirements
- `CSE-PCIDSS-AUDIT-NO-RETENTION-*` — PCI DSS retention requirements (if defined)
- `CSE-GDPR-AUDIT-NO-RETENTION-*` — GDPR retention requirements (if defined)
- `CSE-ISO27001-AUDIT-NO-RETENTION-*` — ISO 27001 retention requirements (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **CMMC**: AU.L2-3.3.1 (Retain audit logs)
- **PCI DSS**: Requirement 10.7 (Retain audit trail for at least one year)
- **GDPR**: Article 5(1)(e) (Storage limitation), Article 32 (Security of processing)
- **ISO 27001**: A.12.4.1 (Event logging), A.18.1.3 (Protection of records)
- **CIS Controls**: Control 8.2 (Collect audit logs)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Reviewing log rotation configurations and policies
- Examining cloud platform retention settings
- Checking SIEM and log aggregation retention policies
- Analyzing storage lifecycle management policies
- Verifying database partitioning and archival strategies
- Testing whether logs are purged after a short period
- Comparing retention periods against regulatory requirements

Common retention requirements by framework:

- **PCI DSS**: Minimum 1 year, with at least 3 months immediately available
- **HIPAA**: Minimum 6 years
- **SOX**: Minimum 7 years
- **GDPR**: As needed for purposes, with consideration for storage limitation
- **CMMC**: As required to support monitoring and investigation

The presence of this signal indicates that historical audit data may not be available when needed for security investigations, compliance audits, or legal proceedings.
