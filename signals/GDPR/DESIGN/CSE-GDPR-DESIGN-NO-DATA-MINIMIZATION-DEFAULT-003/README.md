# CSE-GDPR-DESIGN-NO-DATA-MINIMIZATION-DEFAULT-003

**Data Minimization Not Default**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-DESIGN-NO-DATA-MINIMIZATION-DEFAULT-003` |
| Domain | GDPR |
| Category | DESIGN |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Default system configurations do not limit the amount of personal data collected, the extent of processing, the period of storage, or accessibility as required by Article 25.2.

Systems collect or retain more data than necessary for specified purposes without user action to enable such collection.

## Applicability

- Data collection forms and interfaces
- Database schema and storage design
- Retention policy defaults
- Access control configurations
- API data request scopes

## Examples (Non-Normative)

### Excessive Default Collection

```yaml
registration_form_defaults:
  required_fields:
    - email
    - full_name
    - phone_number
    - date_of_birth
    - address
    - social_security_number
  optional_fields: []
  purpose: "Newsletter subscription"
```

### Unlimited Default Retention

```
Storage Configuration:
  - User Data: No expiration
  - Log Files: Retained indefinitely
  - Session Data: Never purged
  - Analytics: Permanent storage
  - Backups: No deletion policy
  - Minimal Requirements: Email and consent only
```

## GDPR Context (Informative)

- **Art. 25.2**: Appropriate measures shall ensure that by default only necessary personal data is processed
- **Art. 5.1(c)**: Data must be adequate, relevant, and limited to what is necessary
- **Art. 5.1(e)**: Data must be kept only as long as necessary

## Related Signals

- `CSE-GDPR-DESIGN-NO-PRIVACY-BY-DEFAULT-002`
- `CSE-GDPR-PRINCIPLES-NO-DATA-MINIMIZATION-005`
- `CSE-GDPR-PRINCIPLES-NO-STORAGE-LIMITATION-007`
