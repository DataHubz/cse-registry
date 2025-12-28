# CSE-CIS-AUDIT-NO-REVIEW-008

**Audit Log Review Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-AUDIT-NO-REVIEW-008`      |
| Domain          | CIS                                |
| Category        | AUDIT                              |
| Control         | 08 - Audit Log Management          |
| Safeguard       | 8.8                                |
| IG Level        | IG2                                |
| Asset Type      | Network                            |
| Security Function | Detect                           |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

The organization lacks a process for regular review and analysis of audit logs to detect anomalies, security events, or policy violations.

This signal indicates that while logs may be collected, there is no systematic review process, automated alerting, or analytical capability to identify security incidents, suspicious activities, or compliance issues from the logged data.

## Applicability

This signal applies to:

- Security operations center (SOC) procedures
- SIEM alert and correlation rules
- Log analysis and review processes
- Automated security monitoring
- Incident detection capabilities
- Compliance audit procedures
- Security team responsibilities
- Threat hunting programs

## Examples (Non-Normative)

### No SIEM Correlation Rules

```json
{
  "siem_platform": "deployed",
  "log_ingestion": "active",
  "correlation_rules": [],
  "active_alerts": 0,
  "detection_coverage": "0%"
}
```

### Manual Log Review Not Performed

```
Security Operations Procedures:
- Last log review: Never
- Assigned responsibility: None
- Review frequency: Undefined
- Documentation: None
- Findings: No records
```

### Logs Collected But Unmonitored

```bash
# Logs exist but no one is looking at them
$ ls -lh /var/log/audit/
total 45G
-rw------- 1 root root 5.2G Jan 15 23:59 audit.log
-rw------- 1 root root 4.8G Jan 14 23:59 audit.log.1
-rw------- 1 root root 4.9G Jan 13 23:59 audit.log.2

# No evidence of analysis or review
$ last -f /var/log/wtmp | grep -i review
# No results
```

### Splunk Without Active Alerts

```spl
| rest /services/saved/searches
| search alert.track=1 disabled=0
| stats count

# Result: 0 enabled alerts configured
```

### CloudWatch Alarms Not Configured

```python
import boto3
cloudwatch = boto3.client('cloudwatch')

# Check for CloudWatch alarms
alarms = cloudwatch.describe_alarms()

print(f"Total alarms: {len(alarms['MetricAlarms'])}")
# Output: Total alarms: 0
```

### No Threat Detection Rules

```yaml
# SIEM configuration
logging:
  enabled: true
  sources: 150
  events_per_day: 500000

detection:
  rules_enabled: 0
  custom_rules: []
  threat_intelligence: disabled

monitoring:
  dashboards: 0
  scheduled_searches: 0
  analysts_assigned: 0
```

### Security Events Ignored

```
Event Log Summary (Last 30 Days):
- Failed login attempts: 45,234
- Privilege escalations: 892
- Suspicious network connections: 1,245
- File integrity violations: 567

Actions Taken: None
Investigations Opened: 0
Incidents Created: 0
```

### No Evidence of Log Analysis

```
Audit Trail:
- Log retention: 90 days
- Log volume: 2.5TB
- Queries executed: 0
- Reports generated: 0
- Security reviews: 0
- Mean time to detect (MTTD): Undefined
```

## What This Signal Does NOT Assert

- Whether logs are being collected
- Whether security incidents have occurred
- The quality or completeness of logs
- Compliance or non-compliance with any framework
- Required review frequency or methodology
- Staffing requirements for log review

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 8: Audit Log Management**
- **Safeguard 8.8**: Collect command-line audit logs. Collect command-line audit logging for sensitive accounts and activities

## Related Signals

- `CSE-CIS-AUDIT-NO-PROCESS-001` — Audit Log Management Process Missing
- `CSE-CIS-AUDIT-NO-CENTRALIZED-007` — Centralized Log Management Missing
- `CSE-CIS-AUDIT-NO-DETAILED-LOGGING-004` — Detailed Command Logging Missing
