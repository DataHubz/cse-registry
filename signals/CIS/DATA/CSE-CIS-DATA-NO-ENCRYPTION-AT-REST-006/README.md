# CSE-CIS-DATA-NO-ENCRYPTION-AT-REST-006

**Encryption at Rest Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|--------------------------------------------|
| Identifier      | `CSE-CIS-DATA-NO-ENCRYPTION-AT-REST-006`  |
| Domain          | CIS                                        |
| Category        | DATA                                       |
| Control         | 03 - Data Protection                       |
| Safeguard       | 3.6                                        |
| IG Level        | IG1                                        |
| Asset Type      | Data                                       |
| Security Function | Protect                                  |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                     |

## Description

Sensitive data stored on systems, storage devices, or in cloud services is not encrypted at rest, making it vulnerable to unauthorized access if the storage medium is compromised.

This signal indicates that data is stored in plaintext or without adequate encryption protection, allowing anyone with physical or logical access to the storage to read the data.

## Applicability

This signal applies to:

- Database systems (MySQL, PostgreSQL, MongoDB, etc.)
- Cloud storage (S3, Azure Blob Storage, GCS)
- Virtual machine disks and volumes
- File servers and network-attached storage
- Laptop and desktop hard drives
- Mobile device storage
- Backup systems and archives
- Container persistent volumes
- SaaS application data stores

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Unencrypted Database

```yaml
# MySQL configuration without encryption
[mysqld]
datadir=/var/lib/mysql
# No encryption settings configured
# Data files stored in plaintext
# Binlogs and redo logs unencrypted
```

### S3 Bucket Without Encryption

```hcl
# Terraform S3 bucket without encryption
resource "aws_s3_bucket" "customer_data" {
  bucket = "customer-data-prod"

  # No server_side_encryption_configuration block
  # Objects stored unencrypted by default
}
```

### Unencrypted EBS Volume

```json
{
  "BlockDeviceMappings": [
    {
      "DeviceName": "/dev/sda1",
      "Ebs": {
        "VolumeSize": 100,
        "VolumeType": "gp3",
        "Encrypted": false
      }
    }
  ]
}
```

### Database Connection Without Encryption

```python
# Application connecting to database without encryption
import psycopg2

conn = psycopg2.connect(
    host="db.example.com",
    database="customer_db",
    user="app_user",
    password="password123"
    # No sslmode parameter
    # Connection and data transfer unencrypted
)
```

## What This Signal Does NOT Assert

- The strength of encryption if present
- Whether encryption keys are properly managed
- The specific encryption algorithm required
- Whether compensating controls exist
- Compliance or non-compliance with CIS Controls or any framework
- Required remediation actions

## CIS Context (Informative)

This signal is relevant to CIS Control 3:

- **Safeguard 3.6**: Encrypt Data on End-User Devices

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-CIS-DATA-NO-ENCRYPTION-TRANSIT-010` — Encryption in Transit Missing
- `CSE-CIS-DATA-NO-ENCRYPTION-REMOVABLE-009` — Removable Media Encryption Missing
- `CSE-CMMC-COMMS-NO-ENCRYPTION-REST-002` — Encryption at Rest Missing (CMMC)

## Notes

Detection of this signal typically involves:

- Analysis of database encryption configurations
- Review of cloud storage encryption settings
- Examination of volume and disk encryption status
- Assessment of file system encryption
- Verification of backup encryption
- Review of encryption key management
- Analysis of application data storage
- Examination of mobile device encryption policies

The presence of this signal indicates a condition that warrants review in the context of data confidentiality and protection requirements.
