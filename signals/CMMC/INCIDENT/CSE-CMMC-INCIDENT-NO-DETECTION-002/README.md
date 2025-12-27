# CSE-CMMC-INCIDENT-NO-DETECTION-002

**Incident Detection Capability Not Implemented**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CMMC-INCIDENT-NO-DETECTION-002`     |
| Domain          | CMMC                                     |
| Category        | INCIDENT                                 |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Technical mechanisms for detecting security incidents are not deployed or configured.

This signal indicates that attacks, breaches, or unauthorized activities may occur without being identified in a timely manner.

## Applicability

This signal applies to:

- SIEM and log analysis platforms
- Intrusion detection systems (IDS/IPS)
- Endpoint detection and response (EDR)
- Network traffic analysis
- User behavior analytics
- Alert correlation and triage
- Threat intelligence integration

## Examples (Non-Normative)

### No Detection Rules Configured

```yaml
# SIEM with no active detection rules
alerts:
  enabled: false
correlation_rules: []
```

### Missing EDR Coverage

```
Endpoint Coverage Report:
- Total endpoints: 500
- EDR installed: 0
- Coverage: 0%
```

### No Alert Destinations

```json
{
  "alerting": {
    "destinations": []
  }
}
```

## What This Signal Does NOT Assert

- Whether incidents are occurring undetected
- The quality of detection coverage
- Whether manual detection processes exist
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **IR.L2-3.6.1**: Establish an operational incident-handling capability for organizational systems that includes preparation, detection, analysis, containment, recovery, and user response activities

## Related Signals

- `CSE-CMMC-INTEGRITY-NO-MONITORING-003` — Security Monitoring Not Implemented
- `CSE-CMMC-AUDIT-NO-REVIEW-004` — Audit Log Review Not Configured
