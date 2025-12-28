# CSE-CIS-RECOVERY-NO-AUTOMATED-BACKUP-002

**Automated Backups Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-RECOVERY-NO-AUTOMATED-BACKUP-002` |
| Domain          | CIS                                      |
| Category        | RECOVERY                                 |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

The organization lacks automated backups of enterprise assets, relying on manual processes or having no systematic backup approach for critical data.

This signal indicates that backup operations may be inconsistent, unreliable, or dependent on individual actions, increasing the risk of data loss.

## Applicability

This signal applies to:

- Backup automation systems and tools
- Data protection infrastructure
- Scheduled backup jobs and tasks
- Backup management platforms
- Cloud backup services
- Database backup automation
- File server backup systems
- Virtual machine backup solutions

## Examples (Non-Normative)

### Manual Backup Processes

```yaml
findings:
  - Backups performed manually by IT staff
  - No scheduled automated backup jobs configured
  - Backup execution dependent on individual action
  - Inconsistent backup frequency across systems
```

### Missing Backup Automation

```yaml
findings:
  - Critical systems without automated backup configured
  - Backup tools installed but not scheduled
  - No centralized backup management system
  - Reliance on manual scripts without scheduling
```

### Incomplete Backup Coverage

```yaml
findings:
  - Some enterprise assets backed up manually, others not at all
  - No automated verification of backup completion
  - Missing automated alerts for backup failures
  - No automated inventory of backup jobs
```

## What This Signal Does NOT Assert

- Whether manual backups are being performed successfully
- The quality or reliability of existing backups
- The competence of individuals managing backups
- Compliance or non-compliance with any framework
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 11.2**: Perform Automated Backups (IG1)
- **Asset Type**: Data
- **Security Function**: Recover

**Control Description**: Perform automated backups of in-scope enterprise assets. Run backups weekly, or more frequently, based on the sensitivity of the data.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-RECOVERY-NO-PROCESS-001` - Data Recovery Process Missing
- `CSE-CIS-RECOVERY-NO-PROTECTED-BACKUP-003` - Backup Data Protection Missing
- `CSE-CIS-RECOVERY-NO-ISOLATED-BACKUP-004` - Isolated Backup Copies Missing
- `CSE-CIS-RECOVERY-NO-TESTING-005` - Backup Recovery Testing Missing
