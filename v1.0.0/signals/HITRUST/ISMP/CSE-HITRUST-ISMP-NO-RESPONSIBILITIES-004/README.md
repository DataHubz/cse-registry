# CSE-HITRUST-ISMP-NO-RESPONSIBILITIES-004

**Security Responsibilities Not Assigned**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ISMP-NO-RESPONSIBILITIES-004` |
| Domain | HITRUST |
| Category | ISMP |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Detects the absence of clearly assigned information security responsibilities to specific roles within the organization. Security responsibilities must be formally documented, assigned to qualified personnel, and include accountability mechanisms. This includes CISO or equivalent role, security team members, system owners, and business unit responsibilities.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Technology vendors in healthcare sector

## Examples (Non-Normative)

### Missing Role Assignments

```yaml
# Example: No evidence of assigned responsibilities
security_responsibilities:
  roles_defined: false
  ciso_appointed: false
  security_officer: null
  documented_assignments: false
  accountability_matrix: null
  job_descriptions_updated: false
```

## HITRUST Context (Informative)

- **Control Domain**: 00 - Information Security Management Program
- **Control Reference**: 00.b
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5 (Policy through Managed)

## Related Signals

- CSE-HITRUST-ISMP-NO-PROGRAM-001
- CSE-HITRUST-ISMP-NO-COORDINATION-003
- CSE-HITRUST-ISMP-NO-MANAGEMENT-COMMITMENT-002
- CSE-HIPAA-ADMIN-NO-SECURITY-OFFICIAL-001
- CSE-ISO27001-ORG-NO-ROLES-004
