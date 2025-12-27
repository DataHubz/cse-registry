# CSE-ISO27001-ORG-NO-PII-PROTECTION-034

**No Privacy and Protection of PII**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-PII-PROTECTION-034` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Privacy and protection of personally identifiable information is not ensured as required. Organizations must identify and comply with privacy and PII protection requirements, including data protection laws, privacy principles, data subject rights, consent management, and appropriate technical and organizational measures.

## Applicability

- Organizations processing personal data or PII
- Entities subject to GDPR, CCPA, or similar privacy laws
- Businesses collecting customer information
- Organizations with international data transfers
- HR departments handling employee data
- Healthcare providers with patient information
- Financial institutions with customer data

## Examples (Non-Normative)

### No Privacy Compliance Program

```yaml
privacy_management:
  privacy_policy: null                  # Signal: No privacy policy
  pii_inventory: null                   # Signal: PII not identified

  legal_compliance:
    gdpr_compliance: "not assessed"     # Signal: GDPR not addressed
    ccpa_compliance: "not assessed"     # Signal: CCPA not addressed
    privacy_laws: "unknown"             # Signal: Requirements not known

  data_subject_rights:
    access_requests: "no process"       # Signal: Cannot fulfill requests
    deletion_requests: "no process"     # Signal: Cannot delete data
    portability: "not supported"        # Signal: Cannot export data
    objection_rights: "not implemented" # Signal: No opt-out process

  consent_management:
    consent_collection: "informal"      # Signal: No consent mechanism
    consent_tracking: null              # Signal: No consent records
    withdrawal_process: null            # Signal: Cannot withdraw consent
```

### Inadequate PII Protection Measures

```yaml
data_processing:
  customer_data:
    pii_types:
      - names
      - email_addresses
      - phone_numbers
      - payment_information
      - location_data

  protection_measures:
    data_minimization: false            # Signal: Collecting excess data
    purpose_limitation: "undefined"     # Signal: No defined purposes
    retention_limits: null              # Signal: No retention policy
    encryption: "inconsistent"          # Signal: Not always encrypted

  third_party_sharing:
    data_processors: "multiple"
    processor_agreements: "missing"     # Signal: No DPAs in place
    adequacy_assessment: null           # Signal: Transfer risks not assessed

  privacy_impact:
    dpia_process: null                  # Signal: No DPIA procedures
    risk_assessments: null              # Signal: Privacy risks not assessed
    privacy_by_design: "not implemented" # Signal: No privacy integration

  breach_response:
    notification_procedures: null       # Signal: No breach notification
    authority_reporting: "undefined"    # Signal: No regulatory reporting
    individual_notification: null       # Signal: No data subject notification
```

## ISO 27001:2022 Context (Informative)

- **A.5.34 Privacy and protection of PII**: Requires organizations to identify and meet requirements regarding the preservation of privacy and protection of personally identifiable information according to applicable laws and regulations. This includes implementing privacy principles, ensuring data subject rights, managing consent, and establishing appropriate technical and organizational measures.

## Related Signals

- `CSE-ISO27001-ORG-NO-LEGAL-REQUIREMENTS-031` (Legal and regulatory requirements)
- `CSE-ISO27001-ORG-NO-RECORDS-PROTECTION-033` (Protection of records)
- `CSE-ISO27001-TECH-NO-ENCRYPTION` (If applicable for PII encryption)
