# CSE-CCPA-RETENTION-EXCESSIVE-COLLECTION-002

**PI Collected Beyond Disclosed Purposes**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-RETENTION-EXCESSIVE-COLLECTION-002` |
| Domain | CCPA |
| Category | RETENTION |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal detects when a business collects personal information that exceeds what is reasonably necessary for the disclosed purposes at collection. The business gathers more PI categories, fields, or data points than required to fulfill the stated business purposes communicated to consumers.

## Applicability

- Businesses collecting PI beyond disclosed purposes in privacy notices
- Data collection forms requesting information unrelated to the stated purpose
- Analytics or tracking systems capturing excessive user data
- Third-party integrations sharing more PI than necessary for the service

## Examples (Non-Normative)

### Newsletter Signup Over-Collection

```yaml
# Example: Newsletter signup collecting excessive data
disclosed_purpose: "Send monthly product updates via email"

collection_form:
  required_fields:
    - email  # Necessary for purpose
    - first_name  # Reasonable for personalization
    - last_name  # Excessive - not necessary for newsletter
    - phone_number  # Excessive - beyond disclosed purpose
    - date_of_birth  # Excessive - beyond disclosed purpose
    - home_address  # Excessive - beyond disclosed purpose
    - browsing_history  # Excessive - beyond disclosed purpose

purpose_alignment: false  # Collection exceeds purpose
```

### Mobile App Permissions

```yaml
# Example: Weather app requesting excessive permissions
disclosed_purposes:
  - "Provide local weather forecasts"
  - "Send severe weather alerts"

permissions_requested:
  - location: "coarse"  # Necessary for local weather
  - contacts: "read"  # EXCESSIVE - beyond disclosed purpose
  - camera: "full"  # EXCESSIVE - beyond disclosed purpose
  - microphone: "record"  # EXCESSIVE - beyond disclosed purpose
  - call_logs: "read"  # EXCESSIVE - beyond disclosed purpose

justification_provided: false
```

## CCPA Context (Informative)

- **Section**: §1798.100(c)
- **Requirement**: "A business' collection, use, retention, and sharing of a consumer's personal information shall be reasonably necessary and proportionate to achieve the purposes for which the personal information was collected or processed, or for another disclosed purpose that is compatible with the context in which the personal information was collected."
- **Added by**: CPRA (California Privacy Rights Act)

## Related Signals

- `CSE-CCPA-RETENTION-NO-MINIMIZATION-001`
- `CSE-CCPA-NOTICE-PURPOSE-MISSING-003`
- `CSE-CCPA-NOTICE-PURPOSE-CREEP-006`
- `CSE-CCPA-CONSENT-NO-SEPARATE-CONSENT-003`
