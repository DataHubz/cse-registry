# CSE-CMMC-ASSESSMENT-NO-CONTINUOUS-MONITORING-004

**Continuous Security Monitoring Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ASSESSMENT-NO-CONTINUOUS-MONITORING-004` |
| Domain | CMMC |
| Category | ASSESSMENT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Continuous monitoring of security controls and system security status is not implemented.

This signal indicates that security changes and threats may not be detected in real-time.

## Applicability

- Automated security monitoring
- Real-time threat detection
- Security status dashboards
- Continuous control validation
- Automated compliance checking

## Examples (Non-Normative)

### No Continuous Monitoring

```yaml
security_monitoring:
  continuous_monitoring: not_implemented
  real_time_alerts: none
  automated_scanning: disabled
```

### Point-in-Time Only

```
Monitoring Assessment:
  SIEM: Not deployed
  Continuous Scanning: None
  Security Dashboard: None
  Monitoring Type: Annual assessment only
```

## CMMC Context (Informative)

- **CA.L2-3.12.3**: Monitor security controls on an ongoing basis to ensure the continued effectiveness of the controls

## Related Signals

- `CSE-CMMC-ASSESSMENT-NO-PERIODIC-REVIEW-002`
- `CSE-CMMC-AUDIT-NO-CORRELATION-007`
