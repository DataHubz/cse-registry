# CSE-GDPR-PRINCIPLES-SPECIAL-CATEGORY-UNPROTECTED-012

**Special Category Data Not Protected**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-PRINCIPLES-SPECIAL-CATEGORY-UNPROTECTED-012` |
| Domain | GDPR |
| Category | PRINCIPLES |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Special category personal data (sensitive data) is processed without meeting the additional requirements of Article 9.

This includes data revealing racial origin, political opinions, religious beliefs, health data, biometric data, and data concerning sex life or sexual orientation.

## Applicability

- Health and medical records systems
- HR systems with diversity data
- Biometric access control systems
- Research databases with sensitive data
- Insurance and financial services

## Examples (Non-Normative)

### Unprotected Health Data

```yaml
special_category_processing:
  data_type: "health_records"
  article_9_exemption: null
  explicit_consent: false
  additional_safeguards: none
```

### Missing Explicit Consent

```
Processing Record:
  Data: Biometric facial recognition
  Article 6 Basis: Legitimate interest
  Article 9 Exemption: Not identified
  Status: Non-compliant
```

## GDPR Context (Informative)

- **Art. 9.1**: Processing of special categories is prohibited unless an exemption applies
- **Art. 9.2**: Lists 10 exemptions allowing special category processing

## Related Signals

- `CSE-GDPR-PRINCIPLES-NO-LAWFULNESS-001`
- `CSE-GDPR-IMPACT-NO-DPIA-PROCESS-001`
