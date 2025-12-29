# CSE-HITRUST-ISMP-NO-REVIEW-006

**Program Review Not Conducted**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ISMP-NO-REVIEW-006` |
| Domain | HITRUST |
| Category | ISMP |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Detects the absence of periodic reviews of the information security program for effectiveness. The security program must be reviewed at planned intervals (at minimum annually) or when significant changes occur. Reviews should assess policy effectiveness, control implementation, compliance status, incident trends, and alignment with business objectives.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Technology vendors in healthcare sector

## Examples (Non-Normative)

### Missing Program Reviews

```yaml
# Example: No evidence of program reviews
program_review:
  review_conducted: false
  review_frequency: null
  last_review_date: null
  review_findings: []
  corrective_actions: []
  management_approval: false
  metrics_tracked: false
```

## HITRUST Context (Informative)

- **Control Domain**: 00 - Information Security Management Program
- **Control Reference**: 00.d
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5 (Policy through Managed)

## Related Signals

- CSE-HITRUST-ISMP-NO-PROGRAM-001
- CSE-HITRUST-ISMP-NO-MANAGEMENT-COMMITMENT-002
- CSE-HITRUST-ISMP-NO-AUTHORIZATION-PROCESS-005
- CSE-HIPAA-ADMIN-NO-PERIODIC-EVALUATION-003
- CSE-ISO27001-ORG-NO-MANAGEMENT-REVIEW-006
