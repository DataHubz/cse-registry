# CSE-ISO27001-TECH-NO-DATA-MASKING-011

**No Data Masking**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-TECH-NO-DATA-MASKING-011` |
| Domain | ISO27001 |
| Category | TECH |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Data masking is not used according to access control policy and business requirements. This signal indicates that sensitive data is exposed in full to users or environments that do not require access to the complete information. This is a new control in ISO 27001:2022.

## Applicability

- Organizations using production data in test/development environments
- Applications displaying full credit card numbers or social security numbers
- Database systems without column-level masking for sensitive fields
- Reporting systems exposing complete PII to unauthorized viewers
- Environments lacking dynamic or static data masking capabilities

## Examples (Non-Normative)

### No Masking in Test Environment

```yaml
test_environment:
  data_source: production_copy
  data_masking:
    applied: false
    pii_protection: none
    credit_card_masking: disabled
  developer_access:
    full_data_visibility: true
    sensitive_fields: unmasked
```

### Unmasked Application Display

```yaml
application:
  customer_interface:
    credit_card_display: full_number
    ssn_display: complete
    email_address: unhidden
  reporting:
    data_masking: not_implemented
    export_controls: none
  database:
    column_masking: disabled
    row_level_security: not_configured
```

## ISO 27001:2022 Context (Informative)

- **A.8.11 Data masking**: Data masking shall be used in accordance with the organization's topic-specific policy on access control and other related topic-specific policies, and business requirements, taking applicable legislation into consideration. This is a NEW control in ISO 27001:2022.

## Related Signals

- `CSE-ISO27001-TECH-NO-ACCESS-RESTRICTION-003`
- `CSE-ISO27001-TECH-NO-DLP-012`
- `CSE-ISO27001-TECH-NO-INFO-DELETION-010`
- `CSE-GDPR-PRIVACY-NO-DATA-MINIMIZATION` (if applicable)
