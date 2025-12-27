# CSE-GDPR-RIGHTS-NO-INDIRECT-COLLECTION-NOTICE-005

**Indirect Collection Notice Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-RIGHTS-NO-INDIRECT-COLLECTION-NOTICE-005` |
| Domain | GDPR |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

When personal data is obtained from sources other than the data subject, required information is not provided within a reasonable period.

Article 14 specifies mandatory information and timing requirements.

## Applicability

- Third-party data purchases
- Data broker relationships
- Public source data collection
- Partner data sharing
- Lead generation services

## Examples (Non-Normative)

### No Indirect Collection Notice

```yaml
indirect_collection:
  data_source: "Third-party data broker"
  notice_provided: false
  timing: null
  source_disclosed: false
```

### Late Notification

```
Indirect Collection Assessment:
  Data Obtained: 6 months ago
  Notice Sent: Never
  Source Disclosed: No
  Data Categories: Not communicated
```

## GDPR Context (Informative)

- **Art. 14.3**: Information shall be provided within a reasonable period after obtaining the data, but at the latest within one month

## Related Signals

- `CSE-GDPR-RIGHTS-NO-COLLECTION-NOTICE-004`
- `CSE-GDPR-PRINCIPLES-NO-TRANSPARENCY-003`
