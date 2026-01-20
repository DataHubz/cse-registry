# CSE-CMMC-ENHANCED-NO-SIEM-012

**SIEM with Advanced Analytics Not Deployed**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ENHANCED-NO-SIEM-012` |
| Domain | CMMC |
| Category | ENHANCED |
| Status | Active |
| Introduced In | 1.0.0 |
| CMMC Level | 3 |

## Description

Security Information and Event Management with advanced analytics is not deployed.

This signal indicates that security events may not be correlated or analyzed for complex attack patterns.

## Applicability

- SIEM deployment
- Advanced correlation rules
- Machine learning detection
- Behavioral analytics
- UEBA integration

## Examples (Non-Normative)

### No Advanced SIEM

```yaml
siem_capabilities:
  deployed: false
  advanced_analytics: none
  ml_detection: disabled
```

### Basic Logging Only

```
SIEM Assessment:
  Platform: None deployed
  Analytics: N/A
  Correlation Rules: None
  ML/AI Detection: Not available
```

## CMMC Level 3 Context (Informative)

- **L3-AU.3.3.1e**: Deploy advanced SIEM with machine learning and behavioral analytics

## Related Signals

- `CSE-CMMC-ENHANCED-NO-SOC-010`
- `CSE-CMMC-AUDIT-NO-CORRELATION-007`
