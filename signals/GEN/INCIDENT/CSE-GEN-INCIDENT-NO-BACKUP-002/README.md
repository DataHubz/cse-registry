# CSE-GEN-INCIDENT-NO-BACKUP-002

**Data Backup Missing**

## Signal Overview

| Field           | Value                                  |
|-----------------|----------------------------------------|
| Identifier      | `CSE-GEN-INCIDENT-NO-BACKUP-002`       |
| Domain          | GEN (General)                          |
| Category        | INCIDENT                               |
| Status          | Active                                 |
| Introduced In   | 1.0.0                                  |

## Description

Critical data and systems are not backed up regularly, risking permanent data loss in the event of system failure, ransomware attack, or other destructive incidents.

This signal indicates that the organization may be unable to recover essential data and resume operations following data loss events.

## Applicability

This signal applies to:

- Database systems containing critical business data
- File servers and shared storage systems
- Application data and configurations
- System state and configuration backups
- Cloud storage and SaaS data
- Email and communication systems
- Customer and transaction records
- Source code repositories

## Examples (Non-Normative)

### Missing Backup Configuration

```yaml
# Database configuration
database:
  host: prod-db.example.com
  port: 5432
  name: production_db
  # No backup configuration defined
```

### Backup Jobs Disabled

```bash
# Cron jobs
0 2 * * * /usr/local/bin/cleanup-logs.sh
# 0 3 * * * /usr/local/bin/backup-db.sh  # COMMENTED OUT
```

### Backup Script Without Execution

```python
# backup.py - Created but never scheduled
import subprocess
import datetime

def backup_database():
    """Backup production database"""
    timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    # Script exists but shows no evidence of execution
    # No backup files in target directory
```

### No Backup Policy Documentation

```
/documentation/
├── deployment-guide.md
├── monitoring-setup.md
└── # No backup policy or procedures
```

## What This Signal Does NOT Assert

- Whether backups have been tested for recoverability
- The frequency or retention period of backups
- Whether backup storage is secure or geographically distributed
- Compliance or non-compliance with any specific framework
- Required backup methods or technologies
- Whether ad-hoc backups have been performed

## Related Signals

- `CSE-GEN-INCIDENT-NO-RECOVERY-PLAN-003` — Disaster Recovery Plan Missing
- `CSE-GEN-INCIDENT-NO-TESTING-004` — Incident Response Testing Missing

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **HIPAA**: 45 CFR 164.308(a)(7)(ii)(A) — Data backup plan
- **ISO 27001**: A.12.3.1 — Information backup
- **CIS Controls**: Control 11 — Data Recovery
- **NIST CSF**: PR.IP-4 — Backups are conducted

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Scanning for backup configuration files and schedules
- Checking backup job execution logs and history
- Verifying presence of backup data in storage locations
- Reviewing backup policy documentation
- Monitoring backup software installation and configuration
- Analyzing cron jobs, scheduled tasks, and automation scripts

The presence of this signal indicates a critical gap in data protection that may prevent recovery from data loss events.
