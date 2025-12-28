# CSE-CIS-DATA-NO-REMOVAL-003

**Unnecessary Data Not Removed**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-DATA-NO-REMOVAL-003`     |
| Domain          | CIS                                |
| Category        | DATA                               |
| Control         | 03 - Data Protection               |
| Safeguard       | 3.3                                |
| IG Level        | IG1                                |
| Asset Type      | Data                               |
| Security Function | Protect                          |
| Status          | Active                             |
| Introduced In   | 1.0.0                             |

## Description

An organization retains data that is no longer required for business purposes, increasing the attack surface and compliance risks.

This signal indicates that data continues to exist beyond its useful lifecycle, including test data, deprecated datasets, obsolete backups, or data from completed projects.

## Applicability

This signal applies to:

- Development and testing environments
- Deprecated database systems
- Obsolete backup archives
- Completed project data
- Terminated customer accounts
- Legacy application data
- Decommissioned system data
- Temporary or staging data
- Log files beyond retention period

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Test Data in Production

```sql
-- Production database containing test data
SELECT * FROM customers WHERE email LIKE '%@test.com';
-- Returns thousands of test accounts from 2015
-- Data no longer needed but never removed
```

### Obsolete Backups Retained

```bash
# Backup retention without cleanup
$ ls -lh /backups/
-rw-r--r-- 1 backup backup 50G 2018-01-15 db_backup_2018.tar.gz
-rw-r--r-- 1 backup backup 55G 2019-03-22 db_backup_2019.tar.gz
-rw-r--r-- 1 backup backup 60G 2020-06-10 db_backup_2020.tar.gz
# Old backups retained indefinitely
# No automated cleanup process
```

### Decommissioned System Data

```yaml
# Legacy systems with data still accessible
legacy_systems:
  - old_crm_server:
      decommissioned: "2020-12-31"
      data_migrated: true
      original_data_deleted: false  # Still contains customer data
  - legacy_file_share:
      replaced_by: "SharePoint"
      original_files_removed: false  # Duplicate data exists
```

### Terminated User Data Not Removed

```python
# User account cleanup incomplete
def terminate_user(user_id):
    user.active = False
    user.save()
    # Account disabled but data retained:
    # - Personal files still in cloud storage
    # - Email mailbox not deleted
    # - Chat history preserved
    # - Project files ownership not transferred
```

## What This Signal Does NOT Assert

- Whether the data has legitimate archival value
- Whether legal holds prevent deletion
- The specific retention periods required
- Whether backups are appropriate to retain
- Compliance or non-compliance with CIS Controls or any framework
- Required remediation actions

## CIS Context (Informative)

This signal is relevant to CIS Control 3:

- **Safeguard 3.3**: Configure Data Access Control Lists

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-CIS-DATA-NO-RETENTION-POLICY-004` — Data Retention Policy Missing
- `CSE-CIS-DATA-NO-DISPOSAL-005` — Secure Data Disposal Missing
- `CSE-CIS-DATA-NO-INVENTORY-002` — Sensitive Data Inventory Missing

## Notes

Detection of this signal typically involves:

- Analysis of data age and last access times
- Review of decommissioned system inventories
- Examination of test and development environments
- Assessment of user termination procedures
- Review of backup retention practices
- Analysis of storage growth trends
- Verification of data cleanup processes

The presence of this signal indicates a condition that warrants review in the context of data minimization and risk reduction requirements.
