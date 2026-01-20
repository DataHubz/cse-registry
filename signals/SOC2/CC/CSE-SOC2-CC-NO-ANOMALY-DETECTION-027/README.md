# CSE-SOC2-CC-NO-ANOMALY-DETECTION-027

**No Anomaly Detection and Analysis**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-ANOMALY-DETECTION-027` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not monitor system components and the operation of those components for anomalies that are indicative of malicious acts, natural disasters, and errors affecting the entity's ability to meet its objectives.

## Applicability

- Security information and event management (SIEM) systems
- Security monitoring and operations centers
- Log analysis and aggregation platforms
- Anomaly detection tools and processes

## Examples (Non-Normative)

### Missing Security Monitoring

```yaml
finding:
  type: CSE-SOC2-CC-NO-ANOMALY-DETECTION-027
  severity: high
  description: No security monitoring or SIEM implemented
  evidence:
    - System logs not collected or analyzed
    - No alerting for suspicious activities
    - Missing security operations capability
  remediation: Implement SIEM and continuous monitoring
```

### Inadequate Anomaly Detection

```yaml
finding:
  type: CSE-SOC2-CC-NO-ANOMALY-DETECTION-027
  severity: high
  description: System anomalies not detected or investigated
  evidence:
    - No baseline behavior established
    - Abnormal activities go unnoticed
    - Lack of correlation rules or detection logic
  remediation: Deploy anomaly detection and analysis capabilities
```

## SOC 2 Context (Informative)

- **CC7.2**: The entity monitors system components and the operation of those components for anomalies that are indicative of malicious acts, natural disasters, and errors affecting the entity's ability to meet its objectives; anomalies are analyzed to determine whether they represent security events.

## Related Signals

- `CSE-SOC2-CC-NO-VULN-DETECTION-026`
- `CSE-SOC2-CC-NO-EVENT-EVALUATION-028`
- `CSE-SOC2-CC-NO-INCIDENT-RESPONSE-029`
