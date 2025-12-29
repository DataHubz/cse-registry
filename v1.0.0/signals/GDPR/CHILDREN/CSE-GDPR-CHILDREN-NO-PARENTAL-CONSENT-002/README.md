# CSE-GDPR-CHILDREN-NO-PARENTAL-CONSENT-002

**Parental Consent Not Obtained**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-CHILDREN-NO-PARENTAL-CONSENT-002` |
| Domain | GDPR |
| Category | CHILDREN |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Parental consent has not been obtained or verified for processing personal data of children below the age of digital consent.

Article 8.1 requires consent to be given or authorized by holder of parental responsibility for children.

## Applicability

- Information society services offered to children
- Children below age of digital consent (16 or Member State threshold)
- Consent-based processing only
- Parent/guardian must provide or authorize consent
- Must verify parental authority

## Examples (Non-Normative)

### No Parental Consent Process

```yaml
parental_consent:
  user_age: 12
  service_type: "Educational app"
  consent_required: true
  parental_consent_obtained: false
  parental_verification: null
  processing_lawful: false
```

### Inadequate Parental Authorization

```
Children's Video Platform:
  User Registration:
    - Child Age: 10 years old
    - Consent Obtained: Child clicked "I agree"
    - Parental Contact: Email requested but not verified
    - Parental Authorization: Not obtained
    - Parental Verification: None
  Processing: Profile creation, content recommendations
  Issue: Parental consent not obtained or verified
```

## GDPR Context (Informative)

- **Art. 8.1**: Consent given or authorized by holder of parental responsibility over child
- **Art. 8.2**: Controller shall make reasonable efforts to verify consent given or authorized by holder of parental responsibility
- **Recital 38**: Parental consent should not be necessary for preventive or counseling services offered directly to child

## Related Signals

- `CSE-GDPR-CHILDREN-NO-AGE-VERIFICATION-001`
- `CSE-GDPR-CONSENT-NO-RECORDS-005`
