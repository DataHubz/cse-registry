# CSE-HITRUST-ISMP-NO-PROGRAM-001

**Information Security Program Not Established**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ISMP-NO-PROGRAM-001` |
| Domain | HITRUST |
| Category | ISMP |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Detects the absence of a formal information security program with documented objectives, scope, and governance structure. Organizations must establish a comprehensive security program that defines the organization's approach to protecting information assets, including clear objectives, defined scope, governance mechanisms, and resource allocation.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Technology vendors in healthcare sector

## Examples (Non-Normative)

### Missing Program Documentation

```yaml
# Example: No evidence of security program
security_program:
  documented: false
  management_approved: false
  objectives_defined: false
  scope_defined: false
  governance_structure: null
```

## HITRUST Context (Informative)

- **Control Domain**: 00 - Information Security Management Program
- **Control Reference**: 00.a
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5 (Policy through Managed)

## Related Signals

- CSE-HITRUST-ISMP-NO-MANAGEMENT-COMMITMENT-002
- CSE-HITRUST-ISMP-NO-COORDINATION-003
- CSE-HITRUST-ISMP-NO-RESPONSIBILITIES-004
- CSE-HITRUST-ISMP-NO-REVIEW-006
- CSE-ISO27001-ORG-NO-ISMS-001
