# CSE-GDPR-TRANSFER-NO-DEROGATION-DOCUMENTATION-006

**Derogation Not Documented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-TRANSFER-NO-DEROGATION-DOCUMENTATION-006` |
| Domain | GDPR |
| Category | TRANSFER |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Transfer to third country relies on Article 49 derogation but specific situation and necessity are not documented.

Derogations are limited to specific situations and must be documented with justification.

## Applicability

- Transfers without adequacy or safeguards
- Must be occasional and not systematic
- Not for repetitive transfers
- Specific derogation grounds must apply
- Data subjects must be informed when relying on legitimate interests

## Examples (Non-Normative)

### Undocumented Derogation

```yaml
derogation_reliance:
  transfer_frequency: "Occasional"
  derogation_ground: "Legitimate interests (Art. 49.1.2)"
  documentation_exists: false
  necessity_assessed: false
  data_subject_informed: false
  compelling_legitimate_interest: "Not documented"
```

### Misuse of Derogation

```
Transfer Pattern Analysis:
  Destination: China
  Frequency: Weekly (systematic)
  Volume: 10,000 records per transfer
  Derogation Claimed: Performance of contract
  Documentation: None
  Necessity Assessment: Not conducted
  Issue: Systematic transfer cannot rely on derogation
```

## GDPR Context (Informative)

- **Art. 49.1**: Derogations for specific situations (consent, contract performance, legal claims, vital interests, public register, legitimate interests)
- **Art. 49.4**: Public interest or official authority transfers require Union or Member State law
- **Recital 111**: Derogations should be interpreted restrictively

## Related Signals

- `CSE-GDPR-TRANSFER-NO-TRANSFER-ASSESSMENT-001`
- `CSE-GDPR-TRANSFER-NO-SAFEGUARDS-003`
