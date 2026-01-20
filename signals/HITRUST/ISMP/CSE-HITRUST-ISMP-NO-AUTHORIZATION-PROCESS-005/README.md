# CSE-HITRUST-ISMP-NO-AUTHORIZATION-PROCESS-005

**System Authorization Process Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ISMP-NO-AUTHORIZATION-PROCESS-005` |
| Domain | HITRUST |
| Category | ISMP |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Detects the absence of a formal process to authorize information systems before they are placed into operation. The authorization process must include security assessment, risk acceptance, and formal approval by designated authority. Systems processing PHI require authorization based on documented security controls and residual risk determination.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Technology vendors in healthcare sector

## Examples (Non-Normative)

### Missing Authorization Process

```yaml
# Example: No evidence of system authorization
system_authorization:
  process_documented: false
  security_assessment_required: false
  risk_acceptance: null
  authorization_authority: null
  reauthorization_period: null
  systems_authorized: []
```

## HITRUST Context (Informative)

- **Control Domain**: 00 - Information Security Management Program
- **Control Reference**: 00.c
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5 (Policy through Managed)

## Related Signals

- CSE-HITRUST-ISMP-NO-PROGRAM-001
- CSE-HITRUST-ISMP-NO-RESPONSIBILITIES-004
- CSE-HITRUST-ISMP-NO-REVIEW-006
- CSE-HIPAA-ADMIN-NO-RISK-ANALYSIS-002
- CSE-ISO27001-ORG-NO-AUTHORIZATION-005
