# CSE-CMMC-ASSESSMENT-NO-PERIODIC-REVIEW-002

**Periodic Security Review Not Conducted**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ASSESSMENT-NO-PERIODIC-REVIEW-002` |
| Domain | CMMC |
| Category | ASSESSMENT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Security controls are not periodically reviewed to ensure ongoing effectiveness.

This signal indicates that control degradation or security drift may go undetected.

## Applicability

- Annual security assessments
- Quarterly control reviews
- Change-triggered assessments
- Third-party audits
- Internal control testing

## Examples (Non-Normative)

### Overdue Assessment

```yaml
assessment_schedule:
  required_frequency: annual
  last_assessment: 2 years ago
  next_scheduled: not_planned
```

### No Review Cadence

```
Security Review Records:
  Annual Assessment: Never performed
  Control Testing: Ad-hoc only
  Third-Party Audit: None scheduled
```

## CMMC Context (Informative)

- **CA.L2-3.12.1**: Periodically assess the security controls in organizational systems to determine if the controls are effective in their application

## Related Signals

- `CSE-CMMC-ASSESSMENT-NO-PLAN-001`
- `CSE-CMMC-ASSESSMENT-NO-CONTINUOUS-MONITORING-004`
