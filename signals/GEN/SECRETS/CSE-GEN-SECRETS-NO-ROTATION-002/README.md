# CSE-GEN-SECRETS-NO-ROTATION-002

**Secret Rotation Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-GEN-SECRETS-NO-ROTATION-002`  |
| Domain          | GEN (General)                      |
| Category        | SECRETS                            |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

Secrets, credentials, API keys, and passwords are not regularly rotated according to a defined schedule.

This signal indicates that sensitive authentication material remains static over extended periods, increasing the risk of unauthorized access if credentials are compromised. Regular rotation limits the window of opportunity for attackers using stolen or leaked credentials.

## Applicability

This signal applies to:

- API keys and tokens (cloud providers, SaaS platforms, third-party services)
- Database passwords and connection strings
- Service account credentials
- Application secrets and encryption keys
- OAuth client secrets and refresh tokens
- SSH keys and TLS/SSL certificates
- Webhook signing secrets
- Integration credentials (CI/CD, monitoring, logging)
- Administrative and privileged account passwords

## Examples (Non-Normative)

The following are illustrative examples of patterns that may trigger this signal:

```yaml
# AWS credentials not rotated in 180+ days
aws_access_key:
  created_date: "2023-01-15"
  last_rotated: "2023-01-15"
  age_days: 347
```

```json
// API key with no rotation policy
{
  "service": "datadog",
  "api_key_id": "dd_abc123",
  "created": "2022-08-01T00:00:00Z",
  "rotation_policy": null,
  "last_rotated": null
}
```

```python
# Database password unchanged for extended period
# Detected through credential age tracking
db_credentials = {
    "host": "prod-db.example.com",
    "username": "app_user",
    "password_last_changed": "2023-03-10",
    "days_since_rotation": 292
}
```

```terraform
# Service account key with no rotation configuration
resource "google_service_account_key" "mykey" {
  service_account_id = google_service_account.myaccount.name
  # No rotation policy or lifecycle management
}
```

## What This Signal Does NOT Assert

- The specific rotation frequency required for compliance
- Whether credentials have been compromised
- The current validity or expiration state of credentials
- Compliance or non-compliance with any framework
- Required remediation actions or rotation schedules
- Whether compensating controls are in place

## Related Signals

- `CSE-GEN-SECRETS-PLAINTEXT-001` — Plaintext secret in source code
- `CSE-GEN-SECRETS-COMMITTED-HISTORY-003` — Secret in version control history
- `CSE-GEN-ACCESS-EXPIRED-CREDENTIALS-001` — Expired credentials still in use (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **PCI DSS**: Requirement 8.3.9 (Change user passwords at least every 90 days)
- **CIS Controls**: Control 5.3 (Disable dormant accounts)
- **NIST CSF**: PR.AC-1 (Identities and credentials are issued, managed, verified, revoked, and audited)
- **ISO 27001**: A.9.3.1 (Use of secret authentication information)
- **SOC 2**: CC6.1 (Logical and physical access controls)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Monitoring credential creation and last-modified timestamps
- Tracking time elapsed since last rotation
- Auditing rotation policies and schedules in identity management systems
- Analyzing credential metadata from cloud provider APIs
- Reviewing certificate and key expiration dates
- Examining password age in directory services

The presence of this signal indicates a potential gap in credential lifecycle management practices. Many frameworks require rotation at specific intervals (e.g., 90 days for PCI DSS), while best practices suggest rotation based on risk assessment and the sensitivity of protected resources.
