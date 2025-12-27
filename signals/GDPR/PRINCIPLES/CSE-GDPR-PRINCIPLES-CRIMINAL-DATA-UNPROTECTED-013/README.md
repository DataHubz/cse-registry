# CSE-GDPR-PRINCIPLES-CRIMINAL-DATA-UNPROTECTED-013

**Criminal Data Processing Without Authorization**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-PRINCIPLES-CRIMINAL-DATA-UNPROTECTED-013` |
| Domain | GDPR |
| Category | PRINCIPLES |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Personal data relating to criminal convictions and offences is processed without official authority or legal authorization.

Article 10 restricts such processing to control by official authority or when authorized by law.

## Applicability

- Employment background check systems
- Tenant screening services
- Volunteer vetting processes
- Professional licensing verification
- Security clearance systems

## Examples (Non-Normative)

### Unauthorized Criminal Records Processing

```yaml
criminal_data_processing:
  data_type: "criminal_convictions"
  official_authority: false
  legal_authorization: null
  safeguards: none
```

### Improper Background Checks

```
Processing Record:
  Activity: Employment screening
  Criminal Data: Collected
  Legal Basis: Not identified
  Authorization: None documented
```

## GDPR Context (Informative)

- **Art. 10**: Processing of personal data relating to criminal convictions and offences shall be carried out only under the control of official authority or when authorised by Union or Member State law

## Related Signals

- `CSE-GDPR-PRINCIPLES-SPECIAL-CATEGORY-UNPROTECTED-012`
- `CSE-GDPR-CONTROLLER-NO-PROCESSING-RECORDS-008`
