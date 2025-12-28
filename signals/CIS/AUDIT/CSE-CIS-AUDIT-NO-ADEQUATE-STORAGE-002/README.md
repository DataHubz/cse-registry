# CSE-CIS-AUDIT-NO-ADEQUATE-STORAGE-002

**Audit Log Storage Inadequate**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-AUDIT-NO-ADEQUATE-STORAGE-002` |
| Domain          | CIS                                |
| Category        | AUDIT                              |
| Control         | 08 - Audit Log Management          |
| Safeguard       | 8.2                                |
| IG Level        | IG1                                |
| Asset Type      | Network                            |
| Security Function | Detect                           |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

Audit log storage capacity is inadequate to meet the organization's retention requirements.

This signal indicates that log storage infrastructure cannot accommodate the volume of logs being generated, risking premature deletion, log rotation before retention requirements are met, or complete loss of audit data due to storage exhaustion.

## Applicability

This signal applies to:

- Log storage systems and infrastructure
- SIEM platforms and log aggregators
- Cloud-based logging services
- On-premises log storage arrays
- Database audit log storage
- Application log repositories
- Network device log storage
- Security tool log retention

## Examples (Non-Normative)

### Insufficient Disk Space

```bash
$ df -h /var/log
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1        10G  9.8G  200M  98% /var/log

# Storage at 98% capacity, logs being rotated prematurely
```

### Log Rotation Too Aggressive

```conf
# /etc/logrotate.d/syslog
/var/log/syslog {
    daily
    rotate 3
    # Only keeping 3 days of logs when policy requires 90 days
}
```

### SIEM Storage Alert

```json
{
  "alert": "storage_critical",
  "current_usage": "95%",
  "days_until_full": 2,
  "retention_policy_days": 365,
  "actual_retention_days": 45
}
```

### CloudWatch Logs Approaching Limits

```python
# AWS CloudWatch storage quota exceeded
{
  "error": "LimitExceededException",
  "message": "The specified log group reached storage quota",
  "log_group": "/aws/lambda/production"
}
```

### Elasticsearch Cluster Full

```
[WARN] disk usage exceeded flood-stage watermark
[WARN] indices will be marked read-only
cluster.routing.allocation.disk.watermark.flood_stage: 95%
```

## What This Signal Does NOT Assert

- Whether logs are being generated correctly
- The quality or completeness of log content
- Whether security incidents have been logged
- Compliance or non-compliance with any framework
- Required storage capacity calculations
- Cost implications of storage expansion

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 8: Audit Log Management**
- **Safeguard 8.2**: Collect audit logs and ensure that logging, per the enterprise's audit log management process, has been enabled across enterprise assets

## Related Signals

- `CSE-CIS-AUDIT-NO-PROCESS-001` — Audit Log Management Process Missing
- `CSE-CIS-AUDIT-NO-CENTRALIZED-007` — Centralized Log Management Missing
