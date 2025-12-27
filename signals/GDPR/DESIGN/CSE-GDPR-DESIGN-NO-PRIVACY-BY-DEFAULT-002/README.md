# CSE-GDPR-DESIGN-NO-PRIVACY-BY-DEFAULT-002

**Privacy by Default Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-DESIGN-NO-PRIVACY-BY-DEFAULT-002` |
| Domain | GDPR |
| Category | DESIGN |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The controller has not implemented data protection by default as required by Article 25.2.

By default, systems process more personal data than necessary, make data accessible to more individuals than necessary, or retain data longer than necessary without individual intervention.

## Applicability

- Default system configurations
- User account settings
- Access control defaults
- Data retention defaults
- Privacy settings in applications

## Examples (Non-Normative)

### Excessive Default Data Collection

```yaml
default_configuration:
  data_collection: "All available fields"
  user_consent: "Opt-out required"
  data_retention: "Indefinite"
  access_permissions: "All employees"
  privacy_settings: "Share with partners by default"
```

### Insecure Default Settings

```
New User Account Defaults:
  - Profile Visibility: Public
  - Data Sharing: Enabled for all partners
  - Marketing: Opted-in
  - Location Tracking: Always on
  - Data Retention: Never deleted
  - Required Action: User must manually opt-out of each
```

## GDPR Context (Informative)

- **Art. 25.2**: By default, only personal data necessary for each specific purpose should be processed
- **Art. 5.1(c)**: Personal data shall be adequate, relevant, and limited to what is necessary

## Related Signals

- `CSE-GDPR-DESIGN-NO-PRIVACY-BY-DESIGN-001`
- `CSE-GDPR-DESIGN-NO-DATA-MINIMIZATION-DEFAULT-003`
- `CSE-GDPR-PRINCIPLES-NO-DATA-MINIMIZATION-005`
