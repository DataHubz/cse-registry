# CSE-ISO27001-PEOPLE-NO-SCREENING-001

**No Personnel Screening**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PEOPLE-NO-SCREENING-001` |
| Domain | ISO27001 |
| Category | PEOPLE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Background verification checks on candidates are not carried out prior to joining and on an ongoing basis. This creates significant risk as personnel with access to sensitive information or systems may have undisclosed backgrounds that pose security threats.

## Applicability

- HR recruitment and onboarding processes
- Contractor and third-party personnel onboarding
- Roles with privileged system access
- Positions handling sensitive or confidential information
- Periodic re-verification programs for existing personnel

## Examples (Non-Normative)

### Missing Background Check Policy

```yaml
hr_policy:
  onboarding:
    steps:
      - collect_documents
      - setup_workstation
      - orientation_training
    # No background verification step defined

  background_checks:
    enabled: false
    # No screening process configured
```

### Incomplete Screening for Privileged Roles

```yaml
employee_profile:
  role: "Database Administrator"
  access_level: "privileged"
  screening:
    identity_verification: true
    background_check: false  # Critical role without proper screening
    reference_checks: false
    ongoing_verification: false
```

## ISO 27001:2022 Context (Informative)

- **A.6.1 Screening**: Background verification checks on all candidates for employment should be carried out prior to joining and on an ongoing basis taking into consideration applicable laws, regulations and ethics and be proportional to the business requirements, the classification of the information to be accessed and the perceived risks.

## Related Signals

- `CSE-ISO27001-PEOPLE-NO-EMPLOYMENT-TERMS-002`
- `CSE-ISO27001-ORGANIZATIONAL-NO-ACCESS-CONTROL-POLICY`
