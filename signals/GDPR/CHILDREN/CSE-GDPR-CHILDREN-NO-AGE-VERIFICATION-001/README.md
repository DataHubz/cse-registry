# CSE-GDPR-CHILDREN-NO-AGE-VERIFICATION-001

**Age Verification Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-CHILDREN-NO-AGE-VERIFICATION-001` |
| Domain | GDPR |
| Category | CHILDREN |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No age verification mechanism exists for information society services offered directly to children.

Article 8.1 requires reasonable efforts to verify age when relying on consent for processing children's data.

## Applicability

- Information society services (online services, apps, platforms)
- Services offered directly to children
- Age threshold: 16 years (or lower as set by Member State, minimum 13)
- Reasonable efforts required considering available technology
- Not applicable if processing based on legal basis other than consent

## Examples (Non-Normative)

### No Age Verification

```yaml
age_verification:
  service_type: "Social media platform"
  target_audience_includes_children: true
  age_gate: false
  age_verification_method: null
  reasonable_efforts: false
  parental_consent_process: null
```

### Inadequate Age Check

```
Children's Gaming Platform:
  Service: Online multiplayer game
  Target Age: 8-14 years
  Registration:
    - Age verification: Self-declaration only
    - Method: User enters birthdate
    - Validation: None
    - Reasonable Efforts: No
  Issue: Insufficient age verification
```

## GDPR Context (Informative)

- **Art. 8.1**: Processing of child's data lawful where child is at least 16 years old (Member States may provide lower age, not below 13)
- **Art. 8.2**: Controller shall make reasonable efforts to verify parental consent, considering available technology
- **Recital 38**: Special protection for children's personal data, particularly for marketing and profiling

## Related Signals

- `CSE-GDPR-CHILDREN-NO-PARENTAL-CONSENT-002`
- `CSE-GDPR-CONSENT-NO-FREELY-GIVEN-001`
