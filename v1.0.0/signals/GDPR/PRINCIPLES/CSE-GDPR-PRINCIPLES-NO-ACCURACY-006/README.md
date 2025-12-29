# CSE-GDPR-PRINCIPLES-NO-ACCURACY-006

**Data Accuracy Not Maintained**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-PRINCIPLES-NO-ACCURACY-006` |
| Domain | GDPR |
| Category | PRINCIPLES |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Personal data is not kept accurate and up to date.

Controllers must take reasonable steps to ensure inaccurate data is erased or rectified without delay.

## Applicability

- Customer relationship management systems
- Human resources databases
- Marketing contact lists
- User profile systems
- Third-party data integrations

## Examples (Non-Normative)

### No Data Validation

```yaml
data_quality:
  validation_on_entry: false
  periodic_review: none
  duplicate_detection: not_implemented
  update_mechanism: none
```

### Stale Data

```
Data Quality Assessment:
  Last Verified: Never
  Known Duplicates: 15%
  Outdated Records: Unknown
  Rectification Process: None
```

## GDPR Context (Informative)

- **Art. 5.1(d)**: Personal data shall be accurate and, where necessary, kept up to date; every reasonable step must be taken to ensure that personal data that are inaccurate are erased or rectified without delay

## Related Signals

- `CSE-GDPR-RIGHTS-NO-RECTIFICATION-MECHANISM-009`
