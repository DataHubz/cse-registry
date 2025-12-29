# CSE-HITRUST-ISMP-NO-MANAGEMENT-COMMITMENT-002

**Management Commitment Not Demonstrated**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ISMP-NO-MANAGEMENT-COMMITMENT-002` |
| Domain | HITRUST |
| Category | ISMP |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Detects the absence of formal senior management endorsement and commitment to the information security program. Management commitment must include formal approval of security policies, allocation of adequate resources (budget, personnel, tools), and active participation in security governance activities.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Technology vendors in healthcare sector

## Examples (Non-Normative)

### Missing Management Commitment

```yaml
# Example: No evidence of management endorsement
management_commitment:
  formal_endorsement: false
  resource_allocation: false
  budget_approved: false
  executive_sponsor: null
  board_approval: false
```

## HITRUST Context (Informative)

- **Control Domain**: 00 - Information Security Management Program
- **Control Reference**: 00.a
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5 (Policy through Managed)

## Related Signals

- CSE-HITRUST-ISMP-NO-PROGRAM-001
- CSE-HITRUST-ISMP-NO-COORDINATION-003
- CSE-HITRUST-ISMP-NO-REVIEW-006
- CSE-ISO27001-ORG-NO-MANAGEMENT-COMMITMENT-002
