# CSE-SOC2-PRIV-NO-DATA-RELEVANCE-017

**No Data Relevance**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-SOC2-PRIV-NO-DATA-RELEVANCE-017`    |
| Domain          | SOC2                                     |
| Category        | PRIV                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

The entity does not verify that personal information is relevant for the purposes for which it is collected and used.

This signal indicates that the organization may be collecting excessive or unnecessary data, violating data minimization principles and increasing privacy risks.

## Applicability

This signal applies to:

- Data collection forms and interfaces
- Privacy impact assessments (PIAs)
- Data mapping and inventory processes
- System design and development
- Data governance reviews
- Privacy policy development
- Data field justification documentation
- Data minimization assessments

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Excessive Data Collection

```javascript
// Registration form collecting unnecessary data
const registrationForm = {
  required_fields: [
    'email',           // Relevant
    'password',        // Relevant
    'name',            // Relevant
    'date_of_birth',   // Questionable relevance
    'social_security', // Excessive for basic registration
    'income_level',    // Not relevant to service
    'race',            // Not relevant to service
    'religion'         // Not relevant to service
  ]
};
```

### No Purpose-Data Mapping

```yaml
# Data collection without purpose justification
data_collection:
  fields_collected:
    - email
    - phone
    - address
    - emergency_contact
    - blood_type
    - political_affiliation
  purpose_mapping: none  # No verification of relevance
  minimization_review: never
```

### Missing Data Minimization Review

```json
{
  "privacy_controls": {
    "consent_management": true,
    "data_encryption": true,
    "access_controls": true,
    "data_minimization_review": false,
    "purpose_limitation_check": false,
    "relevance_verification": false
  }
}
```

### Privacy Policy Without Purpose Specification

```text
Privacy Policy:
"We collect personal information including name, email, phone, address,
 date of birth, employment history, credit information, and other data
 to provide our services."

Missing: Specific purpose for each data element
Missing: Justification for collection
Missing: Data minimization commitment
```

## What This Signal Does NOT Assert

- Whether specific data fields are relevant or irrelevant
- The minimum data set required
- Whether data collection is harmful
- Compliance or non-compliance with SOC 2 or any framework
- Required data minimization approach

## SOC 2 Context (Informative)

This signal is relevant to SOC 2 Privacy criteria:

- **P7.2**: The entity verifies that personal information is relevant to the purposes for which it is to be used.
- **GAPP Principle**: Quality

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-SOC2-PRIV-NO-DATA-QUALITY-016` — Missing data quality controls
- `CSE-GDPR-MINIMIZATION-001` — GDPR data minimization violation (if defined)

## Notes

Detection of this signal typically involves:

- Review of data collection forms
- Examination of privacy impact assessments
- Analysis of data inventory documentation
- Assessment of purpose specifications
- Inspection of data governance policies
- Review of system design documentation

Data minimization principles:
- **Adequacy**: Data is sufficient for the purpose
- **Relevance**: Data is pertinent to the purpose
- **Limited to necessary**: Only essential data is collected
- **Purpose-driven**: Collection aligned with stated purposes

Questions to verify data relevance:
- What is the specific purpose for collecting this data?
- Can the purpose be achieved without this data element?
- Is there a less privacy-invasive alternative?
- Is the data field actually used in operations?
- Does the privacy notice justify this collection?
- Is there a legal or contractual obligation?

Common examples of potentially irrelevant data:
- Demographic data unrelated to service delivery
- Excessive identity verification information
- Historical data no longer needed
- Optional fields defaulted to required
- Marketing preferences for non-marketing services

The presence of this signal indicates a condition that warrants review in the context of data minimization and privacy quality requirements.
