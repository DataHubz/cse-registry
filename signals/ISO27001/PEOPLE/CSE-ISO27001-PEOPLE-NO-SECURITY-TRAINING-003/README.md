# CSE-ISO27001-PEOPLE-NO-SECURITY-TRAINING-003

**No Security Awareness Training**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PEOPLE-NO-SECURITY-TRAINING-003` |
| Domain | ISO27001 |
| Category | PEOPLE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Personnel do not receive appropriate security awareness education, training, and updates. This represents a critical gap as human error is a leading cause of security incidents, and untrained personnel cannot be expected to follow security best practices or recognize threats.

## Applicability

- All employees (full-time, part-time, temporary)
- Contractors and third-party personnel
- New hire onboarding programs
- Annual security awareness refresher training
- Role-specific security training (e.g., developers, administrators)
- Emerging threat awareness updates

## Examples (Non-Normative)

### Missing Security Training Program

```yaml
hr_training_program:
  onboarding:
    - company_overview
    - benefits_enrollment
    - workplace_safety
    # No security awareness training

  annual_training:
    - compliance_basics
    - harassment_prevention
    # No security training or updates

  tracking:
    security_training_completion: null
    last_security_update: null
```

### Inadequate Training Coverage

```yaml
security_training:
  enabled: true
  last_delivered: "2021-03-15"  # Outdated

  coverage:
    employees:
      completed: 45
      total: 200  # Only 22.5% completion

    contractors:
      completed: 0
      total: 50  # No contractor training

  topics:
    - password_basics
    # Missing: phishing, social engineering, data classification,
    # incident reporting, remote work security, etc.
```

## ISO 27001:2022 Context (Informative)

- **A.6.3 Information security awareness, education and training**: Personnel of the organization and relevant interested parties should receive appropriate information security awareness education and training and regular updates of the organization's information security policy, topic-specific policies and procedures, as relevant for their job function.

## Related Signals

- `CSE-ISO27001-PEOPLE-NO-EMPLOYMENT-TERMS-002`
- `CSE-ISO27001-PEOPLE-NO-EVENT-REPORTING-008`
- `CSE-ISO27001-ORGANIZATIONAL-NO-SECURITY-POLICY`
