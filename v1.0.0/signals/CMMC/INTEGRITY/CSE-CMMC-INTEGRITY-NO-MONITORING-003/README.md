# CSE-CMMC-INTEGRITY-NO-MONITORING-003

**Security Monitoring Not Implemented**

## Signal Overview

| Field           | Value                                     |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-CMMC-INTEGRITY-NO-MONITORING-003`    |
| Domain          | CMMC                                      |
| Category        | INTEGRITY                                 |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

Systems are not configured to detect or alert on security-relevant events such as attacks, unauthorized access attempts, or anomalous behavior.

This signal indicates that security incidents may occur without detection.

## Applicability

This signal applies to:

- Intrusion detection/prevention systems (IDS/IPS)
- Security information and event management (SIEM)
- Endpoint detection and response (EDR)
- Network traffic analysis
- Cloud security monitoring
- Application security monitoring
- User behavior analytics

## Examples (Non-Normative)

### No IDS/IPS Deployed

```
# Network without intrusion detection
# No Suricata, Snort, or commercial IDS
```

### SIEM Without Security Rules

```yaml
# Splunk with no security alerts
[security_detection]
disabled = 1
```

### Cloud Without Security Monitoring

```json
{
  "GuardDuty": {
    "Enabled": false
  }
}
```

### No EDR on Endpoints

```powershell
# No EDR agent installed
Get-Process | Where-Object { $_.Name -like "*falcon*" -or $_.Name -like "*defender*" }
# No results
```

## What This Signal Does NOT Assert

- Whether security incidents have occurred
- The effectiveness of existing monitoring
- Whether alerts are being investigated
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **SI.L2-3.14.6**: Monitor organizational systems, including inbound and outbound communications traffic, to detect attacks and indicators of potential attacks
- **SI.L2-3.14.7**: Identify unauthorized use of organizational systems

## Related Signals

- `CSE-CMMC-AUDIT-NO-LOGGING-001` — Audit Logging Not Enabled
- `CSE-CMMC-AUDIT-NO-REVIEW-004` — Audit Log Review Not Configured
