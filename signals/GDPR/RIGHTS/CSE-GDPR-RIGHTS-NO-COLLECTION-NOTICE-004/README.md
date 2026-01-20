# CSE-GDPR-RIGHTS-NO-COLLECTION-NOTICE-004

**Privacy Notice at Collection Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-RIGHTS-NO-COLLECTION-NOTICE-004` |
| Domain | GDPR |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

When personal data is collected directly from data subjects, required information is not provided at the time of collection.

Article 13 specifies mandatory information elements that must be disclosed.

## Applicability

- Registration and signup forms
- Contact forms and inquiries
- Survey and feedback collection
- Customer onboarding
- Mobile app data collection

## Examples (Non-Normative)

### Missing Collection Notice

```yaml
data_collection_point:
  type: "Registration form"
  privacy_notice: null
  controller_identity: "Not disclosed"
  processing_purposes: "Not disclosed"
  retention_period: "Not disclosed"
```

### Incomplete Notice

```
Collection Point Assessment:
  Controller Identified: Yes
  Purposes Stated: Partial
  Legal Basis: Not specified
  Retention Period: Not stated
  Rights Information: Missing
```

## GDPR Context (Informative)

- **Art. 13.1-2**: Specifies 12+ information elements required when collecting personal data from the data subject

## Related Signals

- `CSE-GDPR-RIGHTS-NO-PRIVACY-POLICY-006`
- `CSE-GDPR-PRINCIPLES-NO-TRANSPARENCY-003`
