# CSE-CMMC-AUDIT-NO-REVIEW-004

**Audit Log Review Not Configured**

## Signal Overview

| Field           | Value                               |
|-----------------|-------------------------------------|
| Identifier      | `CSE-CMMC-AUDIT-NO-REVIEW-004`      |
| Domain          | CMMC                                |
| Category        | AUDIT                               |
| Status          | Active                              |
| Introduced In   | 1.0.0                               |

## Description

No automated or manual process exists to review audit logs for security-relevant events or anomalies.

This signal indicates that collected audit data is not being analyzed, reducing the ability to detect unauthorized activities or security incidents.

## Applicability

This signal applies to:

- SIEM platforms and alerting configurations
- Log analysis and correlation rules
- Security monitoring dashboards
- Automated threat detection systems
- Manual log review procedures
- Anomaly detection configurations

## Examples (Non-Normative)

### SIEM Without Active Rules

```yaml
# Splunk savedsearches.conf with no enabled alerts
[security_alerts]
disabled = 1
```

### No Log Forwarding to Monitoring

```yaml
# Fluentd config without SIEM destination
<match security.**>
  @type null
</match>
```

### CloudWatch Without Alarms

```json
{
  "metricAlarms": [],
  "compositeAlarms": []
}
```

## What This Signal Does NOT Assert

- Whether security incidents are occurring
- The adequacy of existing review processes
- Whether alerts would be acted upon
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **AU.L2-3.3.5**: Correlate audit record review, analysis, and reporting processes for investigation and response to indications of unlawful, unauthorized, suspicious, or unusual activity

## Related Signals

- `CSE-CMMC-AUDIT-NO-LOGGING-001` — Audit Logging Not Enabled
- `CSE-CMMC-INCIDENT-NO-DETECTION-001` — Incident Detection Not Configured (if defined)
