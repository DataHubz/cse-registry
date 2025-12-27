# CSE-GDPR-CONSENT-NO-FREELY-GIVEN-001

**Consent Not Freely Given**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-CONSENT-NO-FREELY-GIVEN-001` |
| Domain | GDPR |
| Category | CONSENT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Consent is not freely given due to conditioning of service on consent, clear imbalance between controller and data subject, or inability to refuse without detriment.

Article 7.4 addresses conditioning of contracts on consent.

## Applicability

- All consent-based processing
- Service provision cannot be conditional on unnecessary processing consent
- Employment contexts require particular scrutiny
- Public authority consent generally invalid due to imbalance

## Examples (Non-Normative)

### Bundled Consent

```yaml
consent_mechanism:
  service_access_requires_consent: true
  processing_necessary_for_service: false
  separate_consent_options: false
  refusal_impact: "Service denied"
  freely_given: false
```

### Conditional Service

```
Mobile App Terms:
  Required Consent:
    - Service provision (necessary)
    - Marketing communications (not necessary)
    - Data sharing with partners (not necessary)
  Granular Options: No (all-or-nothing)
  Service Access if Refuse Marketing: Denied
  Issue: Consent not freely given
```

## GDPR Context (Informative)

- **Art. 4.11**: Consent must be freely given, specific, informed, and unambiguous
- **Art. 7.4**: Shall take into account whether performance of contract conditional on consent for unnecessary processing
- **Recital 42**: Consent not freely given if data subject has no genuine choice or cannot refuse without detriment
- **Recital 43**: Consent presumed not freely given if separate consent cannot be given to different processing operations

## Related Signals

- `CSE-GDPR-CONSENT-NO-SPECIFIC-002`
- `CSE-GDPR-CONSENT-NO-INFORMED-003`
- `CSE-GDPR-CONSENT-NO-WITHDRAWAL-MECHANISM-004`
