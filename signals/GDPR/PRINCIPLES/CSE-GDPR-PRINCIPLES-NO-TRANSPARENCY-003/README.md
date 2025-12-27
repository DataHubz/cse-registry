# CSE-GDPR-PRINCIPLES-NO-TRANSPARENCY-003

**Lack of Processing Transparency**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-PRINCIPLES-NO-TRANSPARENCY-003` |
| Domain | GDPR |
| Category | PRINCIPLES |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Data subjects are not adequately informed about how their personal data is collected, used, or processed.

Transparency requires clear, accessible, and comprehensive information about processing activities.

## Applicability

- Privacy notices and policies
- Consent collection interfaces
- Data subject communications
- Terms of service disclosures
- Cookie and tracking notices

## Examples (Non-Normative)

### Missing Privacy Information

```yaml
data_collection:
  privacy_notice: null
  processing_purposes: "Not disclosed"
  data_recipients: "Not disclosed"
```

### Inaccessible Privacy Policy

```
Privacy Information:
  Location: Buried in legal terms
  Language: Technical jargon
  Format: Wall of text, no sections
  Accessibility: Not suitable for average reader
```

## GDPR Context (Informative)

- **Art. 5.1(a)**: Personal data shall be processed in a transparent manner in relation to the data subject
- **Art. 12**: The controller shall take appropriate measures to provide information in a concise, transparent, intelligible and easily accessible form

## Related Signals

- `CSE-GDPR-RIGHTS-NO-TRANSPARENT-COMMUNICATION-001`
- `CSE-GDPR-RIGHTS-NO-PRIVACY-POLICY-006`
