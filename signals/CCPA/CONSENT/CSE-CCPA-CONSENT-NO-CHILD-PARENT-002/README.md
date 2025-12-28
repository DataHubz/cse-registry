# CSE-CCPA-CONSENT-NO-CHILD-PARENT-002

**Parental Consent Missing (Under 13)**

## Signal Overview

| Field           | Value                                      |
|-----------------|--------------------------------------------|
| Identifier      | `CSE-CCPA-CONSENT-NO-CHILD-PARENT-002`     |
| Domain          | CCPA                                       |
| Category        | CONSENT                                    |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

A business sells personal information of a consumer under the age of 13 without obtaining affirmative opt-in consent from the child's parent or guardian. This signal indicates that the system permits the sale of personal information for children under 13 without verifying that a parent or legal guardian has authorized the sale.

## Applicability

This signal applies to:

- Children's applications and educational platforms
- Gaming platforms and virtual worlds for children
- Toy manufacturer websites and smart toy systems
- Child-directed content streaming services
- School and educational technology platforms
- Family management and parental control systems
- Any service with actual knowledge of users under 13

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Child User Record Without Parental Consent

```json
{
  "userId": "child_98765",
  "dateOfBirth": "2016-08-22",
  "age": 8,
  "parentEmail": "parent@example.com",
  "parentalConsentForSale": null,
  "parentVerified": false,
  "consentTimestamp": null,
  "verificationMethod": null
}
```

### Consent Management System Missing Parental Flow

```yaml
# Consent configuration lacking parental authorization
consent_workflows:
  adult_consent:
    enabled: true
    method: "self_service"
  minor_13_to_16:
    enabled: true
    method: "self_opt_in"
  child_under_13:
    enabled: false  # Missing parental consent workflow
    # Should have: method: "parental_authorization"
```

### Database Schema Without Parental Verification

```sql
-- Children's table missing parental consent tracking
CREATE TABLE child_users (
  id INT PRIMARY KEY,
  child_email VARCHAR(255),
  date_of_birth DATE,
  parent_email VARCHAR(255),
  -- Missing: parent_consent_for_sale BOOLEAN
  -- Missing: parent_verified_timestamp TIMESTAMP
  -- Missing: parent_verification_method VARCHAR(50)
  created_at TIMESTAMP
);
```

### Data Sale Process Without Age-Based Protection

```python
# Data sharing function missing child protection
def process_data_sale(user_id, third_party_id):
    user = get_user(user_id)

    # Missing: age verification and parental consent check
    # if user.age < 13 and not user.has_parental_sale_consent():
    #     raise ConsentRequired("Parental consent required")

    share_data_with_third_party(user, third_party_id)
    log_data_sale(user_id, third_party_id)
```

## What This Signal Does NOT Assert

- Whether COPPA (Children's Online Privacy Protection Act) compliance measures exist
- The accuracy of age determination or verification methods
- Whether parental consent exists in non-technical business processes
- The validity of any parental verification performed
- Compliance or non-compliance with CCPA, COPPA, or any regulation
- Required remediation actions or specific technical implementations

## CCPA Context (Informative)

This signal is relevant to CCPA requirements:

- **Section**: §1798.120(c)
- **Requirement**: A business shall not sell the personal information of consumers if the business has actual knowledge that the consumer is less than 16 years of age, unless [...] in the case of consumers who are less than 13 years of age, the consumer's parent or guardian has affirmatively authorized the sale of the consumer's personal information.
- **Added by**: CCPA (2018)

The CCPA provides heightened protection for children under 13 by requiring parental or guardian authorization before their personal information can be sold. This aligns with and complements COPPA requirements.

These references are informative and do not constitute legal or compliance guidance.

## Related Signals

- `CSE-CCPA-CONSENT-NO-MINOR-OPTIN-001` — Minor opt-in consent missing (13-16)
- `CSE-CCPA-RIGHTS-NO-DNSMPI-001` — Do Not Sell My Personal Information mechanism missing (if defined)
- `CSE-GDPR-CHILDREN-NO-PARENTAL-CONSENT-001` — GDPR child consent requirements (if defined)
- `CSE-COPPA-NO-PARENTAL-CONSENT-001` — COPPA parental consent missing (if defined)

## Notes

Detection of this signal typically involves:

- Analysis of user database schemas for child protection fields
- Review of age verification and parental consent workflows
- Inspection of data sale processes for age-based restrictions
- Examination of parental verification and authorization mechanisms
- Audit of consent management systems for child-specific flows

The presence of this signal indicates a condition that warrants review in the context of CCPA requirements for the sale of children's personal information.
