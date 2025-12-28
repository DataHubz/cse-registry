# CSE-CIS-DATA-NO-DISPOSAL-005

**Secure Data Disposal Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-DATA-NO-DISPOSAL-005`    |
| Domain          | CIS                                |
| Category        | DATA                               |
| Control         | 03 - Data Protection               |
| Safeguard       | 3.5                                |
| IG Level        | IG1                                |
| Asset Type      | Data                               |
| Security Function | Protect                          |
| Status          | Active                             |
| Introduced In   | 1.0.0                             |

## Description

An organization lacks secure data disposal procedures to ensure that data is irretrievably destroyed when it reaches the end of its retention period.

This signal indicates that data deletion may not be permanent, leaving sensitive information recoverable through forensic techniques or accessible in backups, snapshots, or replicas.

## Applicability

This signal applies to:

- Decommissioned servers and workstations
- Replaced hard drives and storage media
- Cloud storage and virtual machine disks
- Database records and tables
- Backup tapes and archives
- Mobile devices and removable media
- SaaS application data
- Container and ephemeral storage
- Log files and temporary data

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Simple DELETE Without Sanitization

```sql
-- Soft delete that doesn't remove data
UPDATE customer_records
SET deleted = TRUE, deleted_date = NOW()
WHERE retention_date < NOW();
-- Data still exists in database and backups
-- Can be recovered with simple query
```

### Cloud Storage Deletion Without Verification

```python
# S3 object deletion without verification
import boto3

def delete_old_data(bucket, prefix):
    s3 = boto3.client('s3')
    s3.delete_object(Bucket=bucket, Key=prefix)
    # No verification that:
    # - Versioned objects are deleted
    # - Snapshots are removed
    # - Backup copies are destroyed
    # - Replication targets are cleaned
```

### VM Decommissioning Without Disk Wiping

```bash
# Virtual machine deletion without secure disposal
$ aws ec2 terminate-instances --instance-ids i-1234567890abcdef0
# Instance terminated but:
# - EBS snapshots still exist
# - Volumes may not be wiped
# - Backups still contain data
# - No cryptographic erasure performed
```

### Hardware Disposal Without Sanitization

```text
# IT asset disposal process gaps:
- Old servers sent to recycler
- Hard drives not wiped or destroyed
- No certificate of destruction obtained
- No verification of data removal
- Backup tapes in offsite storage not recalled
```

## What This Signal Does NOT Assert

- Whether standard deletion is sufficient for the data type
- The specific sanitization method required
- Whether data is actually recoverable
- Whether physical destruction is necessary
- Compliance or non-compliance with CIS Controls or any framework
- Required remediation actions

## CIS Context (Informative)

This signal is relevant to CIS Control 3:

- **Safeguard 3.5**: Securely Dispose of Data

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-CIS-DATA-NO-RETENTION-POLICY-004` — Data Retention Policy Missing
- `CSE-CIS-DATA-NO-REMOVAL-003` — Unnecessary Data Not Removed
- `CSE-CMMC-MEDIA-NO-SANITIZATION-001` — Media Sanitization Missing

## Notes

Detection of this signal typically involves:

- Review of data disposal procedures
- Assessment of deletion verification methods
- Examination of cryptographic erasure capabilities
- Analysis of backup and snapshot cleanup
- Verification of physical media destruction
- Review of decommissioning checklists
- Assessment of certificate of destruction processes
- Examination of cloud storage deletion policies

The presence of this signal indicates a condition that warrants review in the context of data protection and privacy requirements.
