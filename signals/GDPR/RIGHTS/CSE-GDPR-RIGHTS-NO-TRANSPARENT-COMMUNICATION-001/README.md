# CSE-GDPR-RIGHTS-NO-TRANSPARENT-COMMUNICATION-001

**Transparent Communication Not Provided**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-RIGHTS-NO-TRANSPARENT-COMMUNICATION-001` |
| Domain | GDPR |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Information about data processing is not provided in a concise, transparent, intelligible, and easily accessible form using clear and plain language.

Special care must be taken when addressing children.

## Applicability

- Privacy policies and notices
- Consent collection interfaces
- Data subject request responses
- Cookie notices
- Terms of service

## Examples (Non-Normative)

### Inaccessible Privacy Notice

```yaml
privacy_notice:
  format: "Dense legal text"
  reading_level: "Graduate degree required"
  accessibility: "Not screen-reader friendly"
  languages: ["English only"]
```

### Poor Communication

```
Privacy Notice Assessment:
  Word Count: 15,000
  Sections: None
  Plain Language: No
  Mobile Friendly: No
```

## GDPR Context (Informative)

- **Art. 12.1**: The controller shall take appropriate measures to provide any information in a concise, transparent, intelligible and easily accessible form, using clear and plain language

## Related Signals

- `CSE-GDPR-RIGHTS-NO-PRIVACY-POLICY-006`
- `CSE-GDPR-PRINCIPLES-NO-TRANSPARENCY-003`
