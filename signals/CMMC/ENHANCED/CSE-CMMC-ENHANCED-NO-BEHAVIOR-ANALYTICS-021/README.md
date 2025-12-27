# CSE-CMMC-ENHANCED-NO-BEHAVIOR-ANALYTICS-021

**User and Entity Behavior Analytics Not Deployed**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ENHANCED-NO-BEHAVIOR-ANALYTICS-021` |
| Domain | CMMC |
| Category | ENHANCED |
| Status | Active |
| Introduced In | 1.0.0 |
| CMMC Level | 3 |

## Description

User and Entity Behavior Analytics (UEBA) for detecting anomalous behavior is not deployed.

This signal indicates that unusual user or system behavior may not be detected.

## Applicability

- UEBA platforms
- Behavioral baseline establishment
- Anomaly detection
- Insider threat detection
- Compromised account detection

## Examples (Non-Normative)

### No UEBA Deployment

```yaml
behavior_analytics:
  ueba_deployed: false
  behavioral_baselines: none
  anomaly_detection: disabled
```

### No Behavioral Monitoring

```
UEBA Assessment:
  Platform: Not deployed
  User Baselines: Not established
  Entity Monitoring: None
```

## CMMC Level 3 Context (Informative)

- **L3-SI.3.14.6e**: Deploy user and entity behavior analytics

## Related Signals

- `CSE-CMMC-ENHANCED-NO-INSIDER-THREAT-PROGRAM-017`
- `CSE-CMMC-ENHANCED-NO-SIEM-012`
