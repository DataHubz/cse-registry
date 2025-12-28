# CSE-CIS-RECOVERY-NO-ISOLATED-BACKUP-004

**Isolated Backup Copies Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-RECOVERY-NO-ISOLATED-BACKUP-004` |
| Domain          | CIS                                      |
| Category        | RECOVERY                                 |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

The organization lacks isolated copies of backup data that are segmented from enterprise networks and protected from unauthorized access, making backups vulnerable to ransomware and other widespread attacks.

This signal indicates that backup data may be continuously accessible from production systems, increasing the risk that attacks affecting production systems can also compromise or destroy backup data.

## Applicability

This signal applies to:

- Air-gapped backup systems
- Off-network backup storage
- Immutable backup copies
- Offline backup media
- Network segmentation for backup infrastructure
- Write-once-read-many (WORM) storage
- Cloud backup isolation configurations
- Backup vault security

## Examples (Non-Normative)

### No Network Isolation

```yaml
findings:
  - Backup storage accessible from production network
  - Backup servers on same network segment as production
  - No network segmentation between backup and enterprise systems
  - Backup repositories continuously mounted to production servers
```

### Missing Air-Gap Protection

```yaml
findings:
  - All backup copies stored on network-attached storage
  - No offline or disconnected backup copies
  - Backup media not physically isolated
  - Missing implementation of 3-2-1 backup strategy
```

### Insufficient Logical Isolation

```yaml
findings:
  - Backup data modifiable from production systems
  - No immutable backup copies configured
  - Backup deletion possible from compromised accounts
  - Missing time-delayed delete protection
```

## What This Signal Does NOT Assert

- Whether backup data has been compromised or deleted
- The effectiveness of existing backup systems
- The competence of individuals managing backups
- Compliance or non-compliance with any framework
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 11.4**: Establish and Maintain an Isolated Instance of Recovery Data (IG1)
- **Asset Type**: Data
- **Security Function**: Recover

**Control Description**: Establish and maintain an isolated instance of recovery data. Example implementations include version controlling backup destinations through offline, cloud, or off-site systems or services.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-RECOVERY-NO-PROCESS-001` - Data Recovery Process Missing
- `CSE-CIS-RECOVERY-NO-AUTOMATED-BACKUP-002` - Automated Backups Missing
- `CSE-CIS-RECOVERY-NO-PROTECTED-BACKUP-003` - Backup Data Protection Missing
- `CSE-CIS-RECOVERY-NO-TESTING-005` - Backup Recovery Testing Missing
