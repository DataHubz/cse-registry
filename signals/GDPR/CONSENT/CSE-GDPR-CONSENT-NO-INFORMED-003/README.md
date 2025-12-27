# CSE-GDPR-CONSENT-NO-INFORMED-003

**Consent Not Informed**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-CONSENT-NO-INFORMED-003` |
| Domain | GDPR |
| Category | CONSENT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Consent is obtained without providing data subjects with adequate information about the processing.

Article 7 requires informed consent, meaning data subjects must know identity of controller, purposes, and other Article 13/14 information.

## Applicability

- All consent-based processing
- Information must be provided before or at time of consent
- Must include controller identity, purposes, data categories, recipients
- Withdrawal rights must be communicated
- Special category processing requires explicit information

## Examples (Non-Normative)

### Uninformed Consent

```yaml
consent_collection:
  information_provided:
    controller_identity: false
    processing_purposes: "Vague"
    data_categories: false
    recipients: false
    retention_period: false
    withdrawal_rights: false
  consent_valid: false
```

### Insufficient Information at Consent

```
Newsletter Signup Form:
  Request: "Subscribe to our newsletter"
  Information Provided:
    - Email will be used (purpose vague)
  Missing Information:
    - Controller identity
    - Specific purposes
    - Recipients (email service provider)
    - Retention period
    - Right to withdraw
    - Privacy notice link
  Issue: Consent not informed
```

## GDPR Context (Informative)

- **Art. 4.11**: Consent must be informed
- **Art. 7.2**: Request for consent must be clearly distinguishable and in intelligible form
- **Recital 42**: For consent to be informed, data subject should know at least controller identity and purposes

## Related Signals

- `CSE-GDPR-CONSENT-NO-SPECIFIC-002`
- `CSE-GDPR-RIGHTS-NO-COLLECTION-NOTICE-004`
