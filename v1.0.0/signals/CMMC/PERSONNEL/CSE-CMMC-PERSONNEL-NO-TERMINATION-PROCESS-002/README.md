# CSE-CMMC-PERSONNEL-NO-TERMINATION-PROCESS-002

**Personnel Termination Process Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-PERSONNEL-NO-TERMINATION-PROCESS-002` |
| Domain | CMMC |
| Category | PERSONNEL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Procedures for revoking access upon personnel termination are not defined or followed.

This signal indicates that former employees or contractors may retain access to systems after separation.

## Applicability

- Employee termination process
- Contractor separation procedures
- Access revocation timelines
- Property and credential retrieval
- Exit interview security debriefing

## Examples (Non-Normative)

### No Termination Checklist

```yaml
offboarding_process:
  termination_checklist: not_defined
  access_revocation_sla: none
  property_retrieval: informal
```

### Delayed Access Revocation

```
Terminated Employee Audit:
  Termination Date: 2024-01-01
  AD Account Disabled: Still active
  VPN Access Revoked: Still active
  Badge Deactivated: Still active
```

## CMMC Context (Informative)

- **PS.L2-3.9.2**: Ensure that CUI and organizational systems containing CUI are protected during and after personnel actions such as terminations and transfers

## Related Signals

- `CSE-CMMC-PERSONNEL-NO-SCREENING-001`
- `CSE-CMMC-IDENTITY-NO-IDENTIFIER-MANAGEMENT-006`
