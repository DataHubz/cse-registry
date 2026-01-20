# CSE-HITRUST-OPS-NO-BACKUP-006

**Backup Procedures Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|------------------------------------------- |
| Identifier      | `CSE-HITRUST-OPS-NO-BACKUP-006`            |
| Domain          | HITRUST                                    |
| Category        | OPS                                        |
| Control Domain  | 09 - Communications and Operations Management |
| Control Ref     | 09.f                                       |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

Backup copies of information and software are not taken and tested regularly in accordance with an agreed backup policy.

This signal indicates that an organization lacks adequate backup procedures, which may result in data loss, inability to recover from failures, or extended service disruptions.

## Applicability

This signal applies to:

- Database backups and point-in-time recovery
- File system and storage backups
- Configuration and infrastructure-as-code backups
- Application state and user data backups
- System images and snapshots
- Cloud resource backups
- Version control and source code repositories
- Backup verification and restoration testing

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Database Without Backup Configuration

```sql
-- Production database without automated backups
-- No backup schedule configured
-- No point-in-time recovery enabled
-- No backup retention policy
```

### Cloud Resources Without Backup Policy

```terraform
# RDS instance without backup configuration
resource "aws_db_instance" "production" {
  identifier = "prod-db"

  backup_retention_period = 0  # No backups
  skip_final_snapshot    = true
  # No automated backup window
  # No backup testing procedures
}
```

### Storage Without Snapshot Policy

```yaml
# Volume without backup protection
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: app-data
spec:
  storageClassName: standard
  # No snapshot policy
  # No backup schedule
  # No retention configuration
```

### Missing Backup Verification

```bash
# Backup script without verification
#!/bin/bash
tar -czf /backups/data-$(date +%Y%m%d).tar.gz /var/data
# No verification of backup integrity
# No restoration testing
# No alerting on backup failures
```

## What This Signal Does NOT Assert

- Whether any informal backup processes exist
- Whether data recovery is currently possible
- The specific backup frequency or retention required
- Compliance or non-compliance with HITRUST CSF or any framework
- Required remediation actions

## HITRUST CSF Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **09.f - Back-up**: Back-up copies of information and software shall be taken and tested regularly in accordance with the agreed back-up policy

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-OPS-NO-PROCEDURES-001` - Operating Procedures Not Documented
- `CSE-HITRUST-OPS-NO-MEDIA-MANAGEMENT-011` - Media Management Missing

## Notes

Detection of this signal typically involves:

- Review of backup policy documentation
- Assessment of backup schedule configurations
- Examination of backup retention settings
- Verification of backup completion and success rates
- Review of restoration testing procedures
- Analysis of backup monitoring and alerting
- Inspection of off-site or geo-redundant backup storage
- Verification of backup encryption and security

The presence of this signal indicates a condition that warrants review in the context of data protection and business continuity requirements.
