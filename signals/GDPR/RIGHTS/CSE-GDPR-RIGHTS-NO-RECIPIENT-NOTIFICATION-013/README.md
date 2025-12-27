# CSE-GDPR-RIGHTS-NO-RECIPIENT-NOTIFICATION-013

**Recipient Notification Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-RIGHTS-NO-RECIPIENT-NOTIFICATION-013` |
| Domain | GDPR |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Recipients to whom personal data has been disclosed are not notified of rectification, erasure, or restriction of processing.

Article 19 requires notification unless impossible or involving disproportionate effort.

## Applicability

- Data sharing agreements
- Third-party integrations
- Partner notifications
- Processor communications
- Data recipient management

## Examples (Non-Normative)

### No Notification Process

```yaml
recipient_notification:
  recipient_tracking: false
  notification_trigger: null
  communication_method: null
  response_tracking: false
```

### Untracked Recipients

```
Notification Assessment:
  Data Shared With: Unknown
  Recipient Register: None
  Notification Sent: Never
  Subject Informed: No
```

## GDPR Context (Informative)

- **Art. 19**: The controller shall communicate any rectification or erasure or restriction to each recipient, unless impossible or involving disproportionate effort

## Related Signals

- `CSE-GDPR-RIGHTS-NO-RECTIFICATION-MECHANISM-009`
- `CSE-GDPR-RIGHTS-NO-ERASURE-PROPAGATION-011`
