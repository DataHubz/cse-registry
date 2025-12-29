# CSE-GDPR-RIGHTS-NO-DATA-COPY-PROVISION-008

**Data Copy Provision Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-RIGHTS-NO-DATA-COPY-PROVISION-008` |
| Domain | GDPR |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The controller cannot provide a copy of personal data undergoing processing in a commonly used electronic format when requested electronically.

## Applicability

- Data export functionality
- Subject access request fulfillment
- Self-service data download
- API-based data retrieval
- Bulk data extraction

## Examples (Non-Normative)

### No Export Capability

```yaml
data_export:
  electronic_format: false
  export_formats: null
  self_service: false
  api_available: false
```

### Unusable Format

```
Export Assessment:
  Format: Proprietary database dump
  Machine Readable: No
  Commonly Used: No
  Accessible to Subject: No
```

## GDPR Context (Informative)

- **Art. 15.3**: Where the data subject makes the request by electronic means, the information shall be provided in a commonly used electronic form

## Related Signals

- `CSE-GDPR-RIGHTS-NO-ACCESS-MECHANISM-007`
- `CSE-GDPR-RIGHTS-NO-PORTABILITY-MECHANISM-014`
