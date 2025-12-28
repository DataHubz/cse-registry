# CSE-GEN-AUDIT-NO-LOG-PROTECTION-002

**Audit Log Protection Missing**

## Signal Overview

| Field           | Value                                   |
|-----------------|---------------------------------------- |
| Identifier      | `CSE-GEN-AUDIT-NO-LOG-PROTECTION-002`   |
| Domain          | GEN (General)                           |
| Category        | AUDIT                                   |
| Status          | Active                                  |
| Introduced In   | 1.0.0                                   |

## Description

Audit logs are not protected from unauthorized modification, deletion, or tampering.

This signal indicates that audit logs lack integrity protection mechanisms such as write-once storage, cryptographic signing, access controls, or immutable retention, potentially allowing attackers to cover their tracks by altering or deleting evidence of malicious activity.

## Applicability

This signal applies to:

- Local log file systems and directories
- Centralized logging platforms and SIEM systems
- Cloud-based logging services
- Database audit log storage
- Syslog servers and collectors
- Log forwarding and aggregation systems
- Backup and archive systems for logs
- Container and orchestration platform logs
- Application log files and directories

## Examples (Non-Normative)

The following are illustrative examples of patterns that may trigger this signal:

### Log Files with Weak Permissions

```bash
# Log files writable by application user
$ ls -la /var/log/application.log
-rw-rw-r-- 1 appuser appuser 1048576 Dec 27 12:00 /var/log/application.log
# Application user can modify or delete logs
```

### S3 Bucket Without Object Lock

```json
{
  "Bucket": "company-audit-logs",
  "ObjectLockConfiguration": null,
  "VersioningConfiguration": {
    "Status": "Disabled"
  }
}
```

### CloudWatch Logs Without Protection

```json
{
  "logGroupName": "/aws/application/audit",
  "kmsKeyId": null,
  "retentionInDays": 30
}
```

### Syslog Without TLS or Authentication

```conf
# rsyslog.conf - no encryption or authentication
*.* @logserver:514
# Logs can be spoofed or intercepted
```

### Database Logs in Standard Table

```sql
-- Audit logs stored in regular table without protection
CREATE TABLE audit_log (
    id SERIAL PRIMARY KEY,
    event_time TIMESTAMP,
    user_id INT,
    action VARCHAR(255)
);
-- Any user with DELETE permission can remove entries
```

### Application Logs Without Integrity Checks

```python
# Logging without integrity protection
import logging

logging.basicConfig(
    filename='/var/log/app.log',
    level=logging.INFO
)
# Log file can be modified after writing
```

### Azure Storage Without Immutability

```json
{
  "accountName": "companyauditlogs",
  "immutabilityPolicy": null,
  "allowBlobPublicAccess": false
}
```

## What This Signal Does NOT Assert

- Whether logs have actually been tampered with
- The specific protection mechanisms required for a given context
- Whether logs are being monitored for tampering attempts
- Compliance or non-compliance with any specific framework
- Required remediation actions or implementation details
- The effectiveness of any existing protection mechanisms
- Whether alternative integrity verification methods are in place

## Related Framework Signals

This signal may be related to framework-specific audit protection signals:

- `CSE-CMMC-AUDIT-NO-PROTECTION-003` — CMMC audit log protection requirements
- `CSE-PCIDSS-AUDIT-NO-PROTECTION-*` — PCI DSS log protection requirements (if defined)
- `CSE-ISO27001-AUDIT-NO-PROTECTION-*` — ISO 27001 log protection requirements (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **CMMC**: AU.L2-3.3.8 (Protect audit information and tools)
- **PCI DSS**: Requirement 10.5 (Secure audit trails)
- **ISO 27001**: A.12.4.2 (Protection of log information), A.12.4.3 (Administrator and operator logs)
- **CIS Controls**: Control 8.3 (Protect audit log storage)
- **NIST CSF**: PR.PT-1 (Audit/log records are determined and documented)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Reviewing file system permissions on log files and directories
- Checking for immutability settings on cloud storage
- Verifying encryption and access controls on log repositories
- Examining SIEM and log aggregation platform security settings
- Testing whether logs can be modified or deleted by unauthorized users
- Validating cryptographic signing or hashing mechanisms
- Reviewing access control lists and IAM policies for log storage

Protection mechanisms may include:

- Write-once-read-many (WORM) storage
- Object lock and immutability policies
- Cryptographic signing and verification
- Strict file system permissions (append-only)
- Centralized logging with role-based access control
- Encryption at rest with separate key management
- Regular integrity verification and checksums

The presence of this signal indicates a critical gap in audit integrity that could allow attackers to erase evidence of compromise.
