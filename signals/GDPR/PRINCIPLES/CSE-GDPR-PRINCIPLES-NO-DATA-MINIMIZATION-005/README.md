# CSE-GDPR-PRINCIPLES-NO-DATA-MINIMIZATION-005

**Data Minimization Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-PRINCIPLES-NO-DATA-MINIMIZATION-005` |
| Domain | GDPR |
| Category | PRINCIPLES |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

More personal data is collected or retained than is necessary for the specified processing purposes.

Data collection should be limited to what is adequate, relevant, and necessary.

## Applicability

- Registration and onboarding forms
- Database schema design
- Data import and integration
- Analytics data collection
- Marketing data requirements

## Examples (Non-Normative)

### Excessive Data Collection

```yaml
registration_form:
  required_fields:
    - email  # Necessary
    - password  # Necessary
    - date_of_birth  # Not necessary for service
    - gender  # Not necessary for service
    - income_range  # Not necessary for service
```

### Over-Retention

```
Data Retention:
  Transaction Data: Indefinite
  Customer Profiles: Never deleted
  Browsing History: 10 years
  Justification: None documented
```

## GDPR Context (Informative)

- **Art. 5.1(c)**: Personal data shall be adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed

## Related Signals

- `CSE-GDPR-PRINCIPLES-NO-STORAGE-LIMITATION-007`
- `CSE-GDPR-DESIGN-NO-DATA-MINIMIZATION-DEFAULT-003`
