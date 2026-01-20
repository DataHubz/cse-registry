# CSE-CMMC-AUDIT-NO-PROTECTION-003

**Audit Logs Not Protected**

## Signal Overview

| Field           | Value                                 |
|-----------------|---------------------------------------|
| Identifier      | `CSE-CMMC-AUDIT-NO-PROTECTION-003`    |
| Domain          | CMMC                                  |
| Category        | AUDIT                                 |
| Status          | Active                                |
| Introduced In   | 1.0.0                                 |

## Description

Audit logs are stored without adequate protection against unauthorized access, modification, or deletion.

This signal indicates that the integrity and confidentiality of audit records may be compromised, reducing their value for security monitoring and forensic purposes.

## Applicability

This signal applies to:

- Local log file permissions
- Centralized log server access controls
- Cloud logging service IAM policies
- SIEM platform security settings
- Log backup and archive protection
- Log transport encryption
- Write-once or immutable storage configurations

## Examples (Non-Normative)

### World-Readable Log Files

```bash
$ ls -la /var/log/auth.log
-rw-r--r-- 1 root root 524288 Dec 27 10:00 /var/log/auth.log
# Should be restricted: -rw-r----- 1 root adm
```

### Cloud Logs Without Access Restriction

```json
{
  "logGroupName": "/security/audit",
  "accessPolicy": {
    "Effect": "Allow",
    "Principal": "*",
    "Action": "logs:*"
  }
}
```

### Log Storage Without Encryption

```yaml
# S3 bucket for logs without encryption
bucket:
  name: audit-logs
  encryption: none
  versioning: disabled
```

### Non-Immutable Log Storage

```hcl
resource "aws_s3_bucket" "logs" {
  bucket = "audit-logs"
  # Missing: object_lock_configuration
}
```

## What This Signal Does NOT Assert

- Whether logs have been tampered with
- Whether attackers have accessed log data
- The sensitivity of information in logs
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **AU.L2-3.3.8**: Protect audit information and audit logging tools from unauthorized access, modification, and deletion
- **AU.L2-3.3.9**: Limit management of audit logging functionality to a subset of privileged users

## Related Signals

- `CSE-CMMC-AUDIT-NO-LOGGING-001` — Audit Logging Not Enabled
- `CSE-CMMC-AUDIT-NO-RETENTION-002` — Audit Log Retention Not Configured
