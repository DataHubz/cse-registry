# CSE-GDPR-RIGHTS-NO-PRIVACY-POLICY-006

**Privacy Policy Not Accessible**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-RIGHTS-NO-PRIVACY-POLICY-006` |
| Domain | GDPR |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A comprehensive privacy policy is not accessible to data subjects.

The policy should consolidate all required transparency information in an easily accessible location.

## Applicability

- Website footer links
- Mobile application settings
- Registration and checkout flows
- Customer portals
- Marketing communications

## Examples (Non-Normative)

### Missing Privacy Policy

```yaml
privacy_policy:
  exists: false
  location: null
  last_updated: null
  accessible: false
```

### Hidden Policy

```
Accessibility Assessment:
  Homepage Link: No
  Footer Link: Buried
  Mobile App: Not available
  Clicks to Access: 5+
```

## GDPR Context (Informative)

- **Art. 12.1**: Information shall be provided in an easily accessible form
- **Art. 13-14**: Specify required content for privacy notices

## Related Signals

- `CSE-GDPR-RIGHTS-NO-TRANSPARENT-COMMUNICATION-001`
- `CSE-GDPR-RIGHTS-NO-COLLECTION-NOTICE-004`
