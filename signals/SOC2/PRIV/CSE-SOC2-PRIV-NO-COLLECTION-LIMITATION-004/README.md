# CSE-SOC2-PRIV-NO-COLLECTION-LIMITATION-004

**No Collection Limitation**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-PRIV-NO-COLLECTION-LIMITATION-004` |
| Domain | SOC2 |
| Category | PRIV |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not limit the collection of personal information to that which is necessary to meet its objectives.

## Applicability

- Data collection forms and surveys
- User registration processes
- Mobile application permissions
- API data collection endpoints
- Third-party data acquisition
- Customer onboarding processes

## Examples (Non-Normative)

### Excessive Data Collection

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-COLLECTION-LIMITATION-004
  severity: medium
  context:
    issue: "Registration form collects unnecessary personal information"
    required_fields_for_purpose:
      - email
      - password
    actual_fields_collected:
      - email
      - password
      - date_of_birth
      - phone_number
      - home_address
      - social_security_number
  evidence:
    - "All fields marked as required"
    - "No business justification for collecting SSN"
    - "Address not needed for service provision"
  recommendation: "Limit collection to email and password only, or make additional fields optional with clear justification"
```

### Unnecessary Mobile Permissions

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-COLLECTION-LIMITATION-004
  severity: medium
  context:
    issue: "Mobile app requests unnecessary permissions"
    app_purpose: "Weather forecast application"
    permissions_requested:
      - location
      - contacts
      - camera
      - microphone
      - call_logs
  evidence:
    - "Only location needed for weather service"
    - "No feature requires contacts or call logs"
  recommendation: "Request only location permission necessary for weather functionality"
```

## SOC 2 Context (Informative)

- **P3.1**: The entity collects personal information only for the purposes identified in the notice. Personal information is collected to fulfill the purposes identified in the notice and only to the extent necessary to fulfill those purposes. Collection methods are appropriate for the purposes communicated in the notice.
- **GAPP Principle**: Collection - Personal information should be collected only for the purposes identified in the notice and only to the extent necessary to fulfill those purposes.

## Related Signals

- `CSE-SOC2-PRIV-NO-PRIVACY-NOTICE-001` - Related to notice of collection purposes
- `CSE-SOC2-PRIV-NO-USE-LIMITATION-006` - Related to purpose limitation
- `CSE-GDPR-MINIMIZATION-EXCESSIVE-DATA-001` - GDPR data minimization requirements
- `CSE-GDPR-PURPOSE-NO-SPECIFIED-PURPOSE-001` - GDPR purpose specification
