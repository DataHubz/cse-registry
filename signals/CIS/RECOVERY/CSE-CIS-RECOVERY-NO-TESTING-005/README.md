# CSE-CIS-RECOVERY-NO-TESTING-005

**Backup Recovery Testing Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-RECOVERY-NO-TESTING-005`        |
| Domain          | CIS                                      |
| Category        | RECOVERY                                 |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

The organization lacks regular testing of backup recovery capabilities to validate that backups can be successfully restored and meet recovery time and recovery point objectives.

This signal indicates that the organization may be unable to verify backup integrity, restore functionality, or recovery procedures until an actual disaster occurs.

## Applicability

This signal applies to:

- Backup recovery testing programs
- Disaster recovery exercises
- Backup validation procedures
- Recovery time objective (RTO) testing
- Recovery point objective (RPO) verification
- Restore operation drills
- Business continuity testing
- Backup integrity verification

## Examples (Non-Normative)

### No Recovery Testing

```yaml
findings:
  - Backups never tested for successful restoration
  - No documented recovery testing schedule
  - Recovery procedures untested and unvalidated
  - Missing evidence of restore capability
```

### Insufficient Testing Frequency

```yaml
findings:
  - Recovery testing performed irregularly or only once
  - No periodic validation of backup integrity
  - Testing limited to non-critical systems only
  - Years since last successful recovery test
```

### Incomplete Testing Scope

```yaml
findings:
  - Only backup completion tested, not restore capability
  - Recovery testing skipped for complex applications
  - No end-to-end recovery validation
  - Missing verification of recovered data integrity
```

## What This Signal Does NOT Assert

- Whether backups would fail if tested
- The actual recoverability of backup data
- The competence of individuals managing backups
- Compliance or non-compliance with any framework
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 11.5**: Test Data Recovery (IG2)
- **Asset Type**: Data
- **Security Function**: Recover

**Control Description**: Test backup recovery quarterly, or more frequently, for a sampling of in-scope enterprise assets.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-RECOVERY-NO-PROCESS-001` - Data Recovery Process Missing
- `CSE-CIS-RECOVERY-NO-AUTOMATED-BACKUP-002` - Automated Backups Missing
- `CSE-CIS-RECOVERY-NO-PROTECTED-BACKUP-003` - Backup Data Protection Missing
- `CSE-CIS-RECOVERY-NO-ISOLATED-BACKUP-004` - Isolated Backup Copies Missing
