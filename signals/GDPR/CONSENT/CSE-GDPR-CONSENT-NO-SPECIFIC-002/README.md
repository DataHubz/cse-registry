# CSE-GDPR-CONSENT-NO-SPECIFIC-002

**Consent Not Specific**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-CONSENT-NO-SPECIFIC-002` |
| Domain | GDPR |
| Category | CONSENT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Consent is not specific to particular processing purposes or covers multiple purposes without granular options.

Article 7 requires consent to be specific, and separate consent should be obtained for different processing operations.

## Applicability

- All consent-based processing
- Each distinct purpose requires separate consent
- Cannot bundle unrelated purposes
- Data subjects must be able to choose per purpose
- Particularly important for sensitive data processing

## Examples (Non-Normative)

### Non-Specific Consent

```yaml
consent_request:
  text: "I agree to the processing of my personal data"
  purposes_listed: false
  granular_options: false
  specific_purposes: []
  bundled_consent: true
```

### Bundled Purposes Without Granularity

```
Consent Form:
  Single Checkbox:
    "I consent to marketing, analytics, and sharing
     data with partners for various purposes"
  Separate Options: No
  Specific Purposes: Vague
  Data Subject Control: None (accept all or nothing)
  Issue: Consent not specific to purposes
```

## GDPR Context (Informative)

- **Art. 4.11**: Consent must be specific
- **Recital 32**: Consent should cover all processing activities carried out for same purpose
- **Recital 43**: Separate consent should be obtained for different processing operations to allow choice

## Related Signals

- `CSE-GDPR-CONSENT-NO-FREELY-GIVEN-001`
- `CSE-GDPR-CONSENT-NO-INFORMED-003`
