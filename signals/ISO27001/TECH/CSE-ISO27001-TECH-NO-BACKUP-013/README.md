# CSE-ISO27001-TECH-NO-BACKUP-013

**No Information Backup**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-TECH-NO-BACKUP-013` |
| Domain | ISO27001 |
| Category | TECH |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Backup copies of information, software, and systems are not maintained and tested regularly. This signal indicates inadequate backup processes that could result in permanent data loss or extended recovery times during incidents.

## Applicability

- Organizations without regular backup schedules
- Environments where backups are not tested for restoration
- Systems with critical data that is not backed up
- Organizations lacking offsite or cloud backup storage
- Environments without defined RPO (Recovery Point Objective) or RTO (Recovery Time Objective)

## Examples (Non-Normative)

### No Backup Process

```yaml
backup_configuration:
  schedule:
    frequency: never
    automated: false
  coverage:
    databases: not_backed_up
    file_systems: not_backed_up
    configurations: not_backed_up
  storage:
    offsite_backup: none
    encryption: not_applied
  testing:
    restoration_tests: never_performed
    rto_defined: false
    rpo_defined: false
```

### Untested Backup System

```yaml
backup_system:
  solution: legacy_tape
  schedule: weekly
  last_backup: 30_days_ago
  testing:
    last_restoration_test: never
    success_rate: unknown
  storage:
    location: onsite_only
    retention: 30_days
    encryption: disabled
  monitoring:
    backup_alerts: disabled
    failure_notification: none
```

## ISO 27001:2022 Context (Informative)

- **A.8.13 Information backup**: Backup copies of information, software and systems shall be maintained and regularly tested in accordance with the agreed topic-specific policy on backup.

## Related Signals

- `CSE-ISO27001-TECH-NO-REDUNDANCY-014`
- `CSE-ISO27001-TECH-NO-INFO-DELETION-010`
- `CSE-ISO27001-TECH-NO-MONITORING-016`
- `CSE-ISO27001-TECH-NO-LOGGING-015`
