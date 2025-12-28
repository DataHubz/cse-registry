# CSE-CCPA-SECURITY-UNREDACTED-EXPOSURE-004

**Nonencrypted/Nonredacted PI Exposed (§1798.150(a)(1))**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-SECURITY-UNREDACTED-EXPOSURE-004` |
| Domain | CCPA |
| Category | SECURITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal detects when personal information is exposed in systems, logs, or outputs without proper redaction or encryption. CCPA §1798.150(a)(1) specifically identifies "nonencrypted and nonredacted" personal information as triggering the private right of action when subject to unauthorized access, making proper redaction a critical security control.

## Applicability

- Application logs, error messages, or debug outputs containing unredacted personal information
- User interfaces, reports, or dashboards displaying full personal information to unauthorized users
- API responses or data exports that include unredacted sensitive data
- Development, testing, or staging environments using unredacted production data

## Examples (Non-Normative)

### Unredacted Logging

```yaml
application_logs:
  log_level: "DEBUG"
  contains_personal_info: true
  redaction_enabled: false
  exposed_fields:
    - full_credit_card_numbers
    - social_security_numbers
    - email_addresses
    - phone_numbers
  log_retention: "90 days"
  access_controls: "minimal"
  signal: CSE-CCPA-SECURITY-UNREDACTED-EXPOSURE-004
  severity: critical
```

### API Response Exposure

```yaml
api_endpoint:
  path: "/api/v1/users/{id}"
  response_includes:
    - ssn: "123-45-6789"
    - credit_card: "4532-1234-5678-9010"
    - drivers_license: "D1234567"
  redaction: false
  encryption: false
  authorization_check: "insufficient"
  signal: CSE-CCPA-SECURITY-UNREDACTED-EXPOSURE-004
  risk: high
```

### Production Data in Test Environment

```yaml
test_environment:
  name: "staging"
  data_source: "production database clone"
  data_masking: false
  sensitive_data_present:
    - customer_names: true
    - email_addresses: true
    - payment_information: true
    - health_records: true
  access_controls: "development team"
  encryption: false
  signal: CSE-CCPA-SECURITY-UNREDACTED-EXPOSURE-004
  compliance_violation: true
```

### Error Message Disclosure

```yaml
error_handling:
  verbose_errors: true
  includes_stack_traces: true
  exposes_personal_info: true
  example_error: "User john.doe@example.com failed authentication with password: ****"
  redaction_policy: false
  displayed_to: "end users"
  signal: CSE-CCPA-SECURITY-UNREDACTED-EXPOSURE-004
  remediation_needed: true
```

## CCPA Context (Informative)

- **Section**: §1798.150(a)(1)
- **Requirement**: Private right of action is triggered when "nonencrypted and nonredacted personal information" is subject to unauthorized access and exfiltration, theft, or disclosure. Businesses must either encrypt or redact personal information to mitigate liability exposure under this section.
- **Added by**: CCPA

## Related Signals

- `CSE-CCPA-SECURITY-NO-ENCRYPTION-002`
- `CSE-CCPA-SECURITY-NO-REASONABLE-MEASURES-001`
- `CSE-CCPA-SECURITY-NO-RISK-ASSESSMENT-005`
