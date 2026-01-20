# CSE-HITRUST-HR-NO-DISCIPLINARY-004

**Disciplinary Process Not Defined**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-HR-NO-DISCIPLINARY-004` |
| Domain | HITRUST |
| Category | HR |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No formal disciplinary process exists for addressing security policy violations and non-compliance by workforce members. This creates significant accountability gaps and reduces the effectiveness of security controls, as personnel may face no consequences for security breaches, policy violations, or negligent behavior.

This signal indicates the absence of documented procedures, sanctions, or enforcement mechanisms to ensure workforce accountability for information security responsibilities and regulatory compliance obligations.

## Applicability

- Security policy enforcement programs
- HR disciplinary procedures and employee handbooks
- Contractor and vendor agreement enforcement
- Incident response and investigation processes
- HIPAA sanction policy requirements
- Regulatory compliance programs
- Code of conduct enforcement
- Access control violation responses
- Data breach accountability measures
- Insider threat prevention programs

## Examples (Non-Normative)

### No Disciplinary Policy Defined

```yaml
security_governance:
  policies:
    acceptable_use_policy: exists
    data_protection_policy: exists
    access_control_policy: exists
  enforcement:
    disciplinary_process: null
    sanction_policy: not_defined
    violation_tracking: none
    investigation_procedures: missing
    escalation_path: undefined
```

### Policy Violation Without Consequence

```yaml
security_incident:
  incident_id: "SEC-2024-0156"
  type: "policy_violation"
  description: "Employee shared login credentials with coworker"
  severity: "high"
  employee: "John Doe"
  date: "2024-03-15"
  investigation:
    completed: true
    violation_confirmed: true
    policy_violated: "Access Control Policy Section 4.2"
  resolution:
    disciplinary_action: none  # No consequences applied
    corrective_measures: none
    follow_up: none
    documentation: incomplete
  # Pattern of non-enforcement undermines policy effectiveness
```

### Inconsistent Enforcement

```
Policy Violation Review (2024):

Total Violations Identified: 47
  - Access control violations: 18
  - Data handling violations: 15
  - Acceptable use violations: 14

Disciplinary Actions Taken: 3 (6%)
  - Written warnings: 2
  - Terminations: 1 (unrelated to security)
  - Suspensions: 0
  - Training required: 0

Violations with No Action: 44 (94%)

Finding: No consistent disciplinary process or enforcement
```

### Missing Sanction Framework

```yaml
hr_policy:
  employee_handbook:
    security_section: present
    responsibilities_defined: true
    policies_referenced: true
  disciplinary_framework:
    # Critical gaps in enforcement structure:
    security_violations_covered: false
    sanction_levels: not_defined  # No progressive discipline
    investigation_process: missing
    appeal_procedures: undefined
    documentation_requirements: none
    management_accountability: not_addressed
```

## HITRUST CSF Context (Informative)

**Control Reference:** 02.d - Human Resources Security - Disciplinary Process

**Control Requirement:** There shall be a formal disciplinary process for employees who have committed a security breach. The disciplinary process shall not commence without prior verification that a security breach has been committed.

**Key Requirements:**
- Formal documented disciplinary process
- Clear definition of security breaches and violations
- Investigation and verification procedures before sanctions
- Progressive discipline framework (warnings, suspension, termination)
- Consistent application across all workforce members
- Documentation and tracking of violations and sanctions
- Appeal or review mechanisms
- Management and HR coordination
- Alignment with employment law and regulations

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-HR-NO-TERMS-002` - Employment terms not defining consequences
- `CSE-HITRUST-HR-NO-AWARENESS-003` - Security awareness training missing
- `CSE-HITRUST-HR-NO-TERMINATION-005` - Termination process not implemented
- `CSE-ISO27001-PEOPLE-NO-DISCIPLINARY-PROCESS-004` - ISO 27001 disciplinary control
- `CSE-HIPAA-ADMIN-NO-SANCTION-POLICY-003` - HIPAA sanction policy requirement

## Notes

Detection of this signal typically involves:

- Review of HR policies and employee handbooks for disciplinary procedures
- Examination of security policy documents for enforcement provisions
- Analysis of security incident records and resolutions
- Verification of sanction application and tracking mechanisms
- Assessment of consistency in policy enforcement
- Review of investigation procedures before disciplinary action
- Evaluation of progressive discipline frameworks
- Analysis of workforce awareness of consequences
- Review of management training on enforcement procedures

The presence of this signal indicates that security policies may lack credibility and effectiveness, as workforce members face no meaningful consequences for violations. This can lead to repeated violations, insider threats, and regulatory non-compliance.
