# CSE-GDPR-PRINCIPLES-NO-LAWFULNESS-001

**Processing Without Lawful Basis**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-PRINCIPLES-NO-LAWFULNESS-001` |
| Domain | GDPR |
| Category | PRINCIPLES |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Personal data is processed without a valid lawful basis as defined in GDPR Article 6.

Processing must be justified by one of six lawful bases: consent, contract performance, legal obligation, vital interests, public task, or legitimate interests.

## Applicability

- Data collection and ingestion systems
- Analytics and profiling activities
- Marketing and communications
- Third-party data sharing
- Automated decision-making systems

## Examples (Non-Normative)

### Processing Without Documented Basis

```yaml
data_processing:
  activity: "Customer profiling"
  lawful_basis: null
  documentation: "Not documented"
```

### Relying on Invalid Consent

```
Processing Record:
  Activity: Email marketing
  Lawful Basis: Consent
  Consent Status: Pre-ticked checkbox (invalid)
```

## GDPR Context (Informative)

- **Art. 5.1(a)**: Personal data shall be processed lawfully, fairly and in a transparent manner
- **Art. 6**: Processing shall be lawful only if at least one of the specified conditions applies

## Related Signals

- `CSE-GDPR-PRINCIPLES-NO-LAWFUL-BASIS-DOCUMENTED-010`
- `CSE-GDPR-CONSENT-NO-FREELY-GIVEN-001`
