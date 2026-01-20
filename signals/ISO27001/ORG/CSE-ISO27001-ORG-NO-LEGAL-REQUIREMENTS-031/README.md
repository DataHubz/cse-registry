# CSE-ISO27001-ORG-NO-LEGAL-REQUIREMENTS-031

**No Identification of Legal and Regulatory Requirements**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-LEGAL-REQUIREMENTS-031` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Legal, regulatory, and contractual requirements relevant to security are not identified and documented. Organizations must maintain awareness of and document all applicable legal, statutory, regulatory, and contractual obligations related to information security to ensure compliance and avoid legal liability.

## Applicability

- All organizations subject to legal and regulatory requirements
- Entities operating in regulated industries (healthcare, finance, etc.)
- Organizations handling personal or sensitive data
- Businesses operating in multiple jurisdictions
- Organizations with contractual security obligations
- Entities subject to data protection laws (GDPR, CCPA, etc.)

## Examples (Non-Normative)

### No Compliance Requirements Register

```yaml
compliance_management:
  requirements_register: null         # Signal: No tracking of requirements

  legal_obligations:
    data_protection_laws: "unknown"   # Signal: Not identified
    breach_notification: "unknown"    # Signal: Requirements not known
    data_retention: "unknown"         # Signal: Legal retention not defined

  regulatory_requirements:
    industry_regulations: null        # Signal: Not identified
    security_standards: null          # Signal: Not documented
    reporting_obligations: null       # Signal: Not tracked

  contractual_obligations:
    customer_requirements: "informal" # Signal: Not formally tracked
    supplier_agreements: "varied"     # Signal: Inconsistent requirements
```

### Operating Without Requirements Awareness

```yaml
organization:
  operations:
    - country: "Germany"
    - country: "United States"
    - country: "Japan"

  compliance_tracking:
    gdpr_compliance: "not assessed"              # Signal: EU law not identified
    ccpa_compliance: "not assessed"              # Signal: CA law not identified
    japan_appi_compliance: "not assessed"        # Signal: JP law not identified

  data_handling:
    cross_border_transfers: true
    legal_basis: "undefined"                     # Signal: No legal assessment
    data_localization_requirements: "unknown"    # Signal: Requirements not known

  monitoring:
    regulatory_changes: null                     # Signal: No monitoring process
    requirements_updates: null                   # Signal: No update tracking
```

## ISO 27001:2022 Context (Informative)

- **A.5.31 Legal, statutory, regulatory and contractual requirements**: Requires organizations to identify, document, and keep up to date the legal, statutory, regulatory, and contractual requirements relevant to information security and the organization's approach to meeting these requirements. This includes maintaining a compliance register and ensuring requirements are communicated to relevant parties.

## Related Signals

- `CSE-ISO27001-ORG-NO-PII-PROTECTION-034` (Privacy and protection of PII)
- `CSE-ISO27001-ORG-NO-RECORDS-PROTECTION-033` (Protection of records)
- `CSE-ISO27001-ORG-NO-COMPLIANCE-REVIEW-036` (Compliance review)
