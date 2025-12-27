# CSE-ISO27001-PEOPLE-NO-DISCIPLINARY-PROCESS-004

**No Security Violation Disciplinary Process**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PEOPLE-NO-DISCIPLINARY-PROCESS-004` |
| Domain | ISO27001 |
| Category | PEOPLE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No formal disciplinary process exists for personnel who commit information security policy violations. Without clear consequences for security policy breaches, organizations cannot effectively enforce security requirements or deter future violations.

## Applicability

- HR disciplinary procedures
- Security policy enforcement mechanisms
- Incident response and investigation processes
- Security violation tracking and reporting
- Progressive disciplinary action frameworks

## Examples (Non-Normative)

### Missing Disciplinary Framework

```yaml
hr_policy:
  disciplinary_process:
    general_misconduct: "documented"
    attendance_issues: "documented"
    performance_issues: "documented"
    security_violations: null  # No process defined

  escalation_path:
    - verbal_warning
    - written_warning
    - final_warning
    - termination
    # No specific guidance for security incidents
```

### Security Incident Without Consequences

```yaml
security_incident:
  id: "INC-2024-0123"
  type: "policy_violation"
  description: "Employee shared credentials with contractor"
  severity: "high"

  investigation:
    completed: true
    violation_confirmed: true

  disciplinary_action:
    taken: false  # No action despite confirmed violation
    reason: "no_process_defined"

  outcome: "incident_closed"
  # Lack of consequences undermines security culture
```

## ISO 27001:2022 Context (Informative)

- **A.6.4 Disciplinary process**: A disciplinary process should be formalized and communicated to take actions against personnel and other relevant interested parties who have committed an information security policy violation.

## Related Signals

- `CSE-ISO27001-PEOPLE-NO-EMPLOYMENT-TERMS-002`
- `CSE-ISO27001-PEOPLE-NO-SECURITY-TRAINING-003`
- `CSE-ISO27001-ORGANIZATIONAL-NO-SECURITY-POLICY`
