# CSE-GDPR-RIGHTS-NO-PORTABILITY-MECHANISM-014

**Data Portability Mechanism Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-RIGHTS-NO-PORTABILITY-MECHANISM-014` |
| Domain | GDPR |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No mechanism exists to provide personal data in a structured, commonly used, machine-readable format.

Where technically feasible, direct transmission to another controller should be supported.

## Applicability

- Data export features
- API-based data transfer
- Account migration tools
- Self-service download
- Controller-to-controller transfer

## Examples (Non-Normative)

### No Portability Support

```yaml
portability:
  export_available: false
  formats: null
  machine_readable: false
  direct_transfer: false
```

### Limited Export

```
Portability Assessment:
  Export Format: PDF only
  Machine Readable: No
  Interoperable: No
  Direct Transfer: Not supported
```

## GDPR Context (Informative)

- **Art. 20.1**: The data subject shall have the right to receive personal data in a structured, commonly used and machine-readable format
- **Art. 20.2**: The data subject shall have the right to have the data transmitted directly to another controller, where technically feasible

## Related Signals

- `CSE-GDPR-RIGHTS-NO-DATA-COPY-PROVISION-008`
- `CSE-GDPR-RIGHTS-NO-ACCESS-MECHANISM-007`
