# CSE-ISO27001-PEOPLE-NO-EMPLOYMENT-TERMS-002

**No Security Terms in Employment Contracts**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PEOPLE-NO-EMPLOYMENT-TERMS-002` |
| Domain | ISO27001 |
| Category | PEOPLE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Employment contracts do not state personnel and organization responsibilities for information security. Without clearly defined security obligations in contractual terms, organizations cannot effectively enforce security requirements or hold personnel accountable for security violations.

## Applicability

- Employment contract templates
- Contractor and consultant agreements
- Third-party service provider agreements
- Security responsibility acknowledgment forms
- Role-specific security addendums

## Examples (Non-Normative)

### Employment Contract Without Security Terms

```yaml
employment_contract:
  employee: "John Doe"
  position: "Software Engineer"
  start_date: "2024-01-15"

  responsibilities:
    - develop_software
    - participate_in_meetings
    - maintain_documentation
    # No information security responsibilities defined

  obligations:
    confidentiality: false  # Missing
    acceptable_use: false   # Missing
    security_compliance: false  # Missing
```

### Contractor Agreement Missing Security Clauses

```yaml
contractor_agreement:
  contractor: "External IT Services LLC"
  service: "Network Infrastructure Support"
  access_granted: "Full network access"

  terms:
    duration: "12 months"
    payment: "monthly"
    # No security responsibilities clause
    # No data protection obligations
    # No incident reporting requirements
```

## ISO 27001:2022 Context (Informative)

- **A.6.2 Terms and conditions of employment**: The employment contractual agreements should state the personnel's and the organization's responsibilities for information security.

## Related Signals

- `CSE-ISO27001-PEOPLE-NO-SCREENING-001`
- `CSE-ISO27001-PEOPLE-NO-NDA-AGREEMENTS-006`
- `CSE-ISO27001-PEOPLE-NO-SECURITY-TRAINING-003`
