# CSE-CCPA-SECURITY-NO-ENCRYPTION-002

**PI Not Encrypted (§1798.150(a)(1))**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-SECURITY-NO-ENCRYPTION-002` |
| Domain | CCPA |
| Category | SECURITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal detects when personal information is stored or transmitted without encryption. Unencrypted personal information is specifically called out in CCPA §1798.150(a)(1) as a condition that, when combined with unauthorized access, triggers the private right of action for statutory damages.

## Applicability

- Databases, data stores, or file systems containing personal information without encryption at rest
- Network transmissions of personal information without TLS/SSL or other encryption in transit
- Backup systems, archives, or log files containing unencrypted personal information
- Mobile applications or devices storing personal information in plaintext

## Examples (Non-Normative)

### Database Without Encryption

```yaml
database_config:
  type: "postgresql"
  encryption_at_rest: false
  contains_personal_info: true
  data_types:
    - email_addresses
    - social_security_numbers
    - financial_account_numbers
  signal: CSE-CCPA-SECURITY-NO-ENCRYPTION-002
  remediation_required: true
```

### Unencrypted Data Transmission

```yaml
api_endpoint:
  url: "http://example.com/api/users"
  protocol: "HTTP"
  encryption_in_transit: false
  transmits_personal_info: true
  fields_transmitted:
    - name
    - email
    - phone_number
    - date_of_birth
  signal: CSE-CCPA-SECURITY-NO-ENCRYPTION-002
  severity: high
```

### Plaintext File Storage

```yaml
file_storage:
  location: "/var/data/customer_records.csv"
  format: "plaintext"
  encryption: false
  contains:
    - customer_names
    - addresses
    - credit_card_numbers
    - drivers_license_numbers
  signal: CSE-CCPA-SECURITY-NO-ENCRYPTION-002
  risk_assessment: critical
```

## CCPA Context (Informative)

- **Section**: §1798.150(a)(1)
- **Requirement**: Private right of action applies when "nonencrypted and nonredacted personal information" is subject to unauthorized access and exfiltration, theft, or disclosure as a result of the business's violation of the duty to implement and maintain reasonable security procedures.
- **Added by**: CCPA

## Related Signals

- `CSE-CCPA-SECURITY-NO-REASONABLE-MEASURES-001`
- `CSE-CCPA-SECURITY-UNREDACTED-EXPOSURE-004`
- `CSE-CCPA-SECURITY-NO-RISK-ASSESSMENT-005`
