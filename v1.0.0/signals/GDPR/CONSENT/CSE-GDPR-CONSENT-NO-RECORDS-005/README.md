# CSE-GDPR-CONSENT-NO-RECORDS-005

**Consent Records Not Maintained**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-CONSENT-NO-RECORDS-005` |
| Domain | GDPR |
| Category | CONSENT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Controller does not maintain records demonstrating that valid consent was obtained.

Article 7.1 requires controllers to be able to demonstrate that data subject has consented to processing.

## Applicability

- All consent-based processing
- Must maintain evidence of consent
- Records should include consent content, timestamp, method
- Should track withdrawals and changes
- Records needed for accountability and proof

## Examples (Non-Normative)

### No Consent Records

```yaml
consent_recordkeeping:
  consent_collected: true
  records_maintained: false
  timestamp_recorded: false
  consent_content_versioned: false
  withdrawal_tracked: false
  audit_trail: false
```

### Inadequate Consent Documentation

```
Consent Evidence Review:
  Processing Basis: Consent
  Consent Records:
    - Who consented: Not recorded
    - When consented: Not recorded
    - What they consented to: Privacy policy v? (unknown)
    - How consent obtained: Not documented
    - Withdrawals: Not tracked
  Issue: Cannot demonstrate valid consent
```

## GDPR Context (Informative)

- **Art. 7.1**: Where processing based on consent, controller shall be able to demonstrate data subject has consented
- **Art. 5.2**: Controller responsible for and able to demonstrate compliance (accountability)
- **Recital 42**: Should be possible to demonstrate consent

## Related Signals

- `CSE-GDPR-CONSENT-NO-WITHDRAWAL-MECHANISM-004`
- `CSE-GDPR-PRINCIPLES-NO-ACCOUNTABILITY-007`
