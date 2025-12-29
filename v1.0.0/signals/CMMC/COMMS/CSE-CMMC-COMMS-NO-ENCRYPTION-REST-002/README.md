# CSE-CMMC-COMMS-NO-ENCRYPTION-REST-002

**Data Not Encrypted at Rest**

## Signal Overview

| Field           | Value                                      |
|-----------------|--------------------------------------------|
| Identifier      | `CSE-CMMC-COMMS-NO-ENCRYPTION-REST-002`    |
| Domain          | CMMC                                       |
| Category        | COMMS                                      |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

Sensitive data stored in databases, file systems, backups, or other storage media is not encrypted.

This signal indicates that data may be exposed if storage media is accessed by unauthorized parties or improperly disposed of.

## Applicability

This signal applies to:

- Database storage (RDS, SQL Server, PostgreSQL)
- File system encryption (BitLocker, LUKS, FileVault)
- Object storage (S3, Azure Blob, GCS)
- Backup and archive storage
- Removable media
- Mobile device storage
- Container and volume storage

## Examples (Non-Normative)

### S3 Bucket Without Encryption

```json
{
  "ServerSideEncryptionConfiguration": null
}
```

### RDS Without Encryption

```hcl
resource "aws_db_instance" "main" {
  storage_encrypted = false  # No encryption
}
```

### Unencrypted EBS Volume

```json
{
  "VolumeId": "vol-12345",
  "Encrypted": false
}
```

### Database Without TDE

```sql
-- SQL Server without Transparent Data Encryption
SELECT name, is_encrypted FROM sys.databases;
-- is_encrypted = 0
```

## What This Signal Does NOT Assert

- Whether sensitive data is actually stored
- Whether physical security compensates
- The likelihood of physical access
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **SC.L2-3.13.16**: Protect the confidentiality of CUI at rest

## Related Signals

- `CSE-CMMC-COMMS-NO-ENCRYPTION-TRANSIT-001` — Data Not Encrypted in Transit
- `CSE-CMMC-COMMS-WEAK-CRYPTO-004` — Weak Cryptographic Configuration
