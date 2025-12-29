# CSE-HITRUST-COMPLY-NO-PRIVACY-COMPLIANCE-004

**Privacy Compliance Not Verified**

## Signal Overview

| Field           | Value                                             |
|-----------------|---------------------------------------------------|
| Identifier      | `CSE-HITRUST-COMPLY-NO-PRIVACY-COMPLIANCE-004`    |
| Domain          | HITRUST                                           |
| Category        | COMPLY                                            |
| Control Domain  | 06 - Compliance                                   |
| Reference       | 06.d                                              |
| Status          | Active                                            |
| Introduced In   | 1.0.0                                             |

## Description

Privacy and protection of personally identifiable information (PII) has not been ensured as required by relevant legislation, regulations, and contractual clauses.

This signal indicates that an organization has not implemented adequate processes to verify compliance with privacy laws, protect personal data throughout its lifecycle, and ensure that data processing activities meet applicable privacy requirements.

## Applicability

This signal applies to:

- Healthcare organizations processing protected health information (PHI) under HIPAA
- Organizations processing EU personal data under GDPR
- Companies subject to CCPA, CPRA, or other state privacy laws
- Financial services handling consumer financial information under GLBA
- Organizations with privacy notice and consent requirements
- Data processors and controllers under privacy frameworks
- Companies conducting cross-border data transfers
- Organizations collecting or processing children's data (COPPA)

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Privacy Impact Assessment

```yaml
# New system processing PII without privacy review
system: "customer-analytics-platform"
data_processed:
  - personal_identifiers
  - health_information
  - financial_data
privacy_assessment:
  conducted: false
  date: null
  reviewer: "none"
  findings: []
  mitigation_plan: "not_created"
```

### Undocumented Data Processing Activities

```json
{
  "processing_activity": "marketing_campaigns",
  "legal_basis": "not_documented",
  "purpose_limitation": "not_specified",
  "data_minimization": "not_verified",
  "consent_mechanism": "undefined",
  "retention_period": "not_established",
  "third_party_sharing": "not_tracked"
}
```

### No Privacy Controls Verification

```markdown
# Missing verification of:
- Privacy notice provision and acknowledgment
- Consent collection and management
- Data subject access request (DSAR) procedures
- Right to erasure/deletion capabilities
- Data portability mechanisms
- Privacy breach notification process
- Vendor privacy compliance assessments
- Cross-border data transfer safeguards
```

### Inadequate Privacy by Design

```python
# User registration without privacy controls
class UserRegistration:
    def create_user(self, data):
        # No consent validation
        # No purpose limitation
        # No data minimization
        # No retention policy
        # No privacy notice
        self.db.insert(data)  # Stores all provided data indefinitely
```

## What This Signal Does NOT Assert

- Whether privacy violations have occurred
- The existence of privacy policies or notices
- Whether data breaches have happened
- Compliance or non-compliance with specific privacy regulations
- The adequacy of existing privacy controls
- Required remediation actions

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **06.d Privacy and Protection of Personally Identifiable Information**: Privacy and protection of personally identifiable information shall be ensured as required in relevant legislation, regulations, and, where applicable, contractual clauses

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-COMPLY-NO-LEGAL-IDENTIFICATION-001` — Legal requirements not identified
- `CSE-HITRUST-COMPLY-NO-RECORDS-PROTECTION-003` — Records not protected
- `CSE-CMMC-ACCESS-NO-PRIVACY-NOTICE-008` — Privacy notice not provided (if defined)
- `CSE-HITRUST-COMPLY-NO-AUDIT-006` — Compliance audit not conducted

## Notes

Detection of this signal typically involves:

- Review of privacy impact assessments (PIAs) and data protection impact assessments (DPIAs)
- Analysis of data processing inventories and records
- Examination of consent management systems
- Assessment of privacy notice delivery mechanisms
- Review of data subject rights fulfillment procedures
- Inspection of vendor and third-party data sharing agreements
- Evaluation of privacy-enhancing technologies and controls
- Assessment of privacy training and awareness programs

The presence of this signal indicates a condition that warrants review in the context of privacy and personal data protection compliance requirements.
