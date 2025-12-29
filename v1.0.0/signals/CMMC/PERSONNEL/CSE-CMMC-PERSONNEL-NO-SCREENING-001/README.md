# CSE-CMMC-PERSONNEL-NO-SCREENING-001

**Personnel Screening Not Performed**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-PERSONNEL-NO-SCREENING-001` |
| Domain | CMMC |
| Category | PERSONNEL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Background screening is not performed on individuals prior to granting access to CUI systems.

This signal indicates that personnel with unknown or risky backgrounds may have access to sensitive information.

## Applicability

- Pre-employment background checks
- Contractor screening
- Periodic re-investigation
- Third-party personnel verification
- Privileged access screening

## Examples (Non-Normative)

### No Background Check Required

```yaml
hiring_process:
  background_check_required: false
  screening_before_access: false
  reinvestigation_period: never
```

### Incomplete Screening

```
Personnel Record Review:
  Employee: John Doe
  Hire Date: 2024-01-15
  CUI Access Granted: 2024-01-16
  Background Check Completed: Never
```

## CMMC Context (Informative)

- **PS.L2-3.9.1**: Screen individuals prior to authorizing access to organizational systems containing CUI

## Related Signals

- `CSE-CMMC-PERSONNEL-NO-TERMINATION-PROCESS-002`
- `CSE-CMMC-AWARENESS-NO-SECURITY-TRAINING-001`
