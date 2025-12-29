# CSE-GDPR-RIGHTS-NO-ERASURE-PROPAGATION-011

**Erasure Not Propagated to Recipients**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-RIGHTS-NO-ERASURE-PROPAGATION-011` |
| Domain | GDPR |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

When personal data has been made public or disclosed to recipients, erasure requests are not communicated to those recipients.

Controllers must take reasonable steps to inform processors of erasure.

## Applicability

- Third-party data sharing
- Public profile data
- Search engine indexed content
- Partner integrations
- Data processor relationships

## Examples (Non-Normative)

### No Propagation Mechanism

```yaml
erasure_propagation:
  recipient_tracking: false
  notification_process: null
  public_data_handling: null
  search_engine_removal: false
```

### Incomplete Propagation

```
Propagation Assessment:
  Data Shared With: 5 partners
  Notified on Erasure: 0
  Public Data Removed: No
  Tracking: None
```

## GDPR Context (Informative)

- **Art. 17.2**: The controller shall take reasonable steps to inform controllers processing the data that the data subject has requested erasure

## Related Signals

- `CSE-GDPR-RIGHTS-NO-ERASURE-MECHANISM-010`
- `CSE-GDPR-RIGHTS-NO-RECIPIENT-NOTIFICATION-013`
