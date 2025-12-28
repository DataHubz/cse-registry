# CSE-GEN-AUDIT-NO-LOG-REVIEW-004

**Audit Log Review Missing**

## Signal Overview

| Field           | Value                                |
|-----------------|--------------------------------------|
| Identifier      | `CSE-GEN-AUDIT-NO-LOG-REVIEW-004`    |
| Domain          | GEN (General)                        |
| Category        | AUDIT                                |
| Status          | Active                               |
| Introduced In   | 1.0.0                                |

## Description

Audit logs are not regularly reviewed for suspicious activity or security incidents.

This signal indicates that while logs may be collected, there is no evidence of systematic review, analysis, or monitoring of audit logs to detect security events, anomalies, or potential breaches. This represents a gap in security operations that can allow incidents to go undetected for extended periods.

## Applicability

This signal applies to:

- Security operations centers (SOC)
- System administrator activities
- Application security monitoring
- Database access review processes
- Cloud platform audit log analysis
- SIEM alert and correlation review
- Automated monitoring and alerting systems
- Compliance audit log review procedures
- Incident detection and response processes

## Examples (Non-Normative)

The following are illustrative examples of patterns that may trigger this signal:

### No SIEM Alerting Rules Configured

```yaml
# SIEM configuration with no alert rules
alerts:
  enabled: false
  rules: []
```

### Unmonitored Cloud Audit Logs

```bash
# AWS CloudTrail enabled but no CloudWatch alarms
$ aws cloudwatch describe-alarms --alarm-name-prefix cloudtrail
{
    "MetricAlarms": []
}
```

### Application Logs Not Integrated with Monitoring

```python
# Application logging to file without monitoring
import logging

logging.basicConfig(
    filename='/var/log/application.log',
    level=logging.INFO
)

# Authentication failures logged but never reviewed
def login(username, password):
    if not authenticate(username, password):
        logging.warning(f"Failed login attempt for {username}")
        # No alerting or automated review
```

### No Log Review Schedule Documented

```text
Security Policy Document:
- Audit logs are collected and retained for 1 year
- [No section on log review frequency or procedures]
```

### Database Audit Logs Enabled But Not Monitored

```sql
-- PostgreSQL audit logging enabled
SHOW pgaudit.log;
-- Result: all

-- But no queries or scripts to review the logs
-- No scheduled jobs to analyze pg_log entries
```

### Log Management Without Analytics

```conf
# Splunk receiving logs but no saved searches or alerts
[audit_index]
homePath = $SPLUNK_DB/audit_index/db
# No scheduled searches defined
# No correlation rules configured
```

### No Security Monitoring Team or Process

```yaml
# Organization structure
IT_Department:
  - System_Administrators
  - Network_Engineers
  - Developers
# No Security Operations or Log Review function defined
```

## What This Signal Does NOT Assert

- Whether security incidents have occurred and been missed
- The frequency or depth of review required for specific contexts
- Whether automated monitoring compensates for manual review
- The effectiveness of any existing review processes
- Compliance or non-compliance with any specific framework
- Required remediation actions or review procedures
- Whether logs are being reviewed informally or ad-hoc

## Related Framework Signals

This signal may be related to framework-specific log review signals:

- `CSE-CMMC-AUDIT-NO-REVIEW-004` — CMMC audit review requirements
- `CSE-PCIDSS-AUDIT-NO-REVIEW-*` — PCI DSS log review requirements (if defined)
- `CSE-SOC2-AUDIT-NO-REVIEW-*` — SOC 2 log review requirements (if defined)
- `CSE-HIPAA-AUDIT-NO-REVIEW-*` — HIPAA log review requirements (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **CMMC**: AU.L2-3.3.4 (Alert on audit processing failures), AU.L2-3.3.5 (Correlate audit records)
- **PCI DSS**: Requirement 10.6 (Review logs and security events)
- **SOC 2**: CC7.2 (System monitoring controls), CC7.3 (Evaluation of security events)
- **CIS Controls**: Control 8.5 (Collect detailed audit logs), Control 8.11 (Conduct audit log reviews)
- **HIPAA**: 164.308(a)(1)(ii)(D) (Information system activity review)
- **NIST CSF**: DE.AE-3 (Event data are collected and correlated), DE.CM-7 (Monitoring for unauthorized activity)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Reviewing SIEM configurations for alert rules and dashboards
- Examining evidence of log review activities (tickets, reports, etc.)
- Checking for automated monitoring and correlation rules
- Verifying existence of security operations procedures
- Testing whether security events trigger alerts
- Reviewing incident response records for log-based detections
- Examining staffing and responsibilities for log review

Effective log review practices may include:

- Automated alerting on critical security events
- Daily review of high-priority alerts and anomalies
- Weekly review of aggregated security events
- Regular correlation analysis across multiple log sources
- Trend analysis and baseline deviation detection
- Integration with incident response processes
- Use of machine learning or behavioral analytics
- Defined escalation procedures for suspicious activities

The presence of this signal indicates that logs are being collected but not leveraged for security monitoring, significantly reducing the organization's ability to detect and respond to security incidents in a timely manner.
