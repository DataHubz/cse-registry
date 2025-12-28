# CSE-CCPA-CONSENT-NO-MINOR-OPTIN-001

**Minor Opt-In Consent Missing (13-16)**

## Signal Overview

| Field           | Value                                      |
|-----------------|--------------------------------------------|
| Identifier      | `CSE-CCPA-CONSENT-NO-MINOR-OPTIN-001`      |
| Domain          | CCPA                                       |
| Category        | CONSENT                                    |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

A business sells personal information of a consumer between the ages of 13 and 16 without obtaining affirmative opt-in consent directly from the minor. This signal indicates that the system permits the sale of personal information for consumers in this age range without verifying that the minor themselves has affirmatively authorized the sale.

## Applicability

This signal applies to:

- Consumer databases and user management systems storing age information
- Data broker and third-party data sharing platforms
- Marketing and advertising consent management systems
- E-commerce platforms processing transactions for minors
- Social media and gaming platforms with users aged 13-16
- Mobile applications collecting data from teenage users
- Analytics and tracking systems that process minor's data for sale

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### User Record Without Minor Opt-In Flag

```json
{
  "userId": "user_12345",
  "dateOfBirth": "2010-03-15",
  "age": 14,
  "personalInfoSaleConsent": null,
  "consentProvidedBy": null,
  "consentTimestamp": null
}
```

### Data Processing Configuration Missing Age Check

```yaml
# Data sharing pipeline configuration
data_sharing:
  enabled: true
  consent_required: true
  age_verification:
    enabled: false  # No age-based consent checking
  consent_types:
    - general_marketing
    # Missing: minor_opt_in
```

### Database Schema Without Minor Consent Tracking

```sql
-- Users table missing minor-specific consent fields
CREATE TABLE users (
  id INT PRIMARY KEY,
  email VARCHAR(255),
  date_of_birth DATE,
  marketing_consent BOOLEAN,
  -- Missing: minor_opt_in_consent BOOLEAN
  -- Missing: consent_provided_by ENUM('self', 'parent')
  consent_timestamp TIMESTAMP
);
```

### API Consent Endpoint Without Age-Based Logic

```javascript
// Consent API missing minor-specific validation
app.post('/api/consent/sale', async (req, res) => {
  const { userId, consent } = req.body;

  // Missing: age verification and minor opt-in logic
  await updateUserConsent(userId, consent);

  res.json({ success: true });
});
```

## What This Signal Does NOT Assert

- Whether the business has other methods of age verification in place
- Whether the consumer's actual age has been accurately determined
- The validity or authenticity of any consent obtained
- Compliance or non-compliance with CCPA or any regulation
- Whether compensating controls exist in the business process
- Required remediation actions or technical implementations

## CCPA Context (Informative)

This signal is relevant to CCPA requirements:

- **Section**: §1798.120(c)
- **Requirement**: A business shall not sell the personal information of consumers if the business has actual knowledge that the consumer is less than 16 years of age, unless the consumer, in the case of consumers at least 13 years of age and less than 16 years of age, has affirmatively authorized the sale of the consumer's personal information.
- **Added by**: CCPA (2018)

The CCPA creates a "opt-in" requirement for the sale of minors' personal information, shifting from the general "opt-out" framework that applies to adults. For consumers aged 13-16, the minor themselves must provide affirmative authorization.

These references are informative and do not constitute legal or compliance guidance.

## Related Signals

- `CSE-CCPA-CONSENT-NO-CHILD-PARENT-002` — Parental consent missing for children under 13
- `CSE-CCPA-RIGHTS-NO-DNSMPI-001` — Do Not Sell My Personal Information mechanism missing (if defined)
- `CSE-GDPR-CHILDREN-NO-PARENTAL-CONSENT-001` — GDPR child consent requirements (if defined)

## Notes

Detection of this signal typically involves:

- Analysis of user database schemas and age-related fields
- Review of consent management system configurations
- Inspection of data sharing and sale processing logic
- Examination of age verification and consent validation workflows
- Audit of API endpoints handling consent for data sales

The presence of this signal indicates a condition that warrants review in the context of CCPA minor consent requirements for the sale of personal information.
