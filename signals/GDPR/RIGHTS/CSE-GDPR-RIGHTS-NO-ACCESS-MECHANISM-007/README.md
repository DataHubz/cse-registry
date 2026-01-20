# CSE-GDPR-RIGHTS-NO-ACCESS-MECHANISM-007

**Subject Access Request Mechanism Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-RIGHTS-NO-ACCESS-MECHANISM-007` |
| Domain | GDPR |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No mechanism exists for data subjects to obtain confirmation of whether their personal data is being processed and to access that data.

The right of access is a fundamental data subject right.

## Applicability

- Customer data platforms
- HR and employee systems
- Marketing databases
- CRM systems
- Analytics platforms

## Examples (Non-Normative)

### No Access Mechanism

```yaml
access_request:
  submission_channel: null
  data_discovery: "Manual only"
  compilation_process: null
  delivery_method: null
```

### Incomplete Access

```
SAR Capability Assessment:
  Data Locations Mapped: No
  Automated Discovery: No
  Response Template: None
  Export Format: Not defined
```

## GDPR Context (Informative)

- **Art. 15.1**: The data subject shall have the right to obtain from the controller confirmation as to whether personal data are being processed
- **Art. 15.3**: The controller shall provide a copy of the personal data

## Related Signals

- `CSE-GDPR-RIGHTS-NO-DATA-COPY-PROVISION-008`
- `CSE-GDPR-RIGHTS-NO-RESPONSE-MECHANISM-002`
