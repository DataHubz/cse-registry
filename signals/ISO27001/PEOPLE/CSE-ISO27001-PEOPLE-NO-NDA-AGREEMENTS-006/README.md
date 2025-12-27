# CSE-ISO27001-PEOPLE-NO-NDA-AGREEMENTS-006

**No Confidentiality Agreements**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PEOPLE-NO-NDA-AGREEMENTS-006` |
| Domain | ISO27001 |
| Category | PEOPLE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Confidentiality or NDA requirements are not identified, documented, and regularly reviewed. Without proper confidentiality agreements, organizations cannot legally enforce protection of sensitive information or hold parties accountable for unauthorized disclosure.

## Applicability

- New employee onboarding
- Contractor and consultant engagements
- Third-party vendor relationships
- Partner and collaboration agreements
- Visitors and temporary personnel with information access
- Periodic review of existing NDAs

## Examples (Non-Normative)

### Missing NDA Requirements

```yaml
onboarding_process:
  new_employee:
    documents_required:
      - tax_forms
      - direct_deposit
      - emergency_contact
      # No confidentiality agreement or NDA

  information_access:
    - customer_data: "granted"
    - proprietary_code: "granted"
    - business_strategy: "granted"
    # Sensitive access without confidentiality protection
```

### Third-Party Without Confidentiality Terms

```yaml
vendor_agreement:
  vendor: "External IT Consulting"
  services: "Application Development"

  access_granted:
    - source_code_repository
    - production_database
    - customer_records

  confidentiality:
    nda_signed: false
    confidentiality_clause: false
    data_protection_terms: false

  review_schedule: null
  # No protection for sensitive information exposure
```

### Expired or Unreviewed NDAs

```yaml
nda_tracking:
  employee_ndas:
    total: 150
    current: 85
    expired: 65  # 43% expired without review

  vendor_ndas:
    total: 40
    reviewed_last_12_months: 5  # Only 12.5% reviewed
    average_age: "4.5 years"

  review_process:
    enabled: false
    schedule: null
```

## ISO 27001:2022 Context (Informative)

- **A.6.6 Confidentiality or non-disclosure agreements**: Confidentiality or non-disclosure agreements reflecting the organization's needs for the protection of information should be identified, documented, regularly reviewed and signed by personnel and other relevant interested parties.

## Related Signals

- `CSE-ISO27001-PEOPLE-NO-EMPLOYMENT-TERMS-002`
- `CSE-ISO27001-PEOPLE-NO-TERMINATION-PROCESS-005`
- `CSE-ISO27001-ORGANIZATIONAL-NO-THIRD-PARTY-AGREEMENTS`
