# CSE-CIS-RECOVERY-NO-PROTECTED-BACKUP-003

**Backup Data Protection Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-RECOVERY-NO-PROTECTED-BACKUP-003` |
| Domain          | CIS                                      |
| Category        | RECOVERY                                 |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

The organization lacks adequate protection for backup data, including encryption and access controls, making backup data vulnerable to unauthorized access, theft, or tampering.

This signal indicates that backup data may be stored unencrypted, accessible to unauthorized users, or insufficiently protected from security threats.

## Applicability

This signal applies to:

- Backup data encryption at rest
- Backup data encryption in transit
- Backup storage access controls
- Backup media security
- Backup encryption key management
- Backup repository authentication
- Off-site backup protection
- Cloud backup security

## Examples (Non-Normative)

### Unencrypted Backup Data

```yaml
findings:
  - Backup data stored without encryption
  - Backup tapes not encrypted before off-site storage
  - Cloud backups stored in unencrypted buckets
  - Database backups saved as clear-text files
```

### Insufficient Access Controls

```yaml
findings:
  - Backup storage accessible to all IT staff
  - No authentication required for backup repository access
  - Backup network shares with overly permissive permissions
  - Missing role-based access control for backup systems
```

### Weak Backup Security

```yaml
findings:
  - Backup encryption keys stored with backup data
  - No integrity verification for backup data
  - Backup storage systems not monitored for unauthorized access
  - Missing multi-factor authentication for backup management
```

## What This Signal Does NOT Assert

- Whether backup data has been compromised
- The effectiveness of existing security controls
- The competence of individuals managing backups
- Compliance or non-compliance with any framework
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 11.3**: Protect Recovery Data (IG1)
- **Asset Type**: Data
- **Security Function**: Recover

**Control Description**: Protect recovery data with equivalent controls to those protecting the original data. Reference encryption or data separation, based on requirements.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-RECOVERY-NO-PROCESS-001` - Data Recovery Process Missing
- `CSE-CIS-RECOVERY-NO-AUTOMATED-BACKUP-002` - Automated Backups Missing
- `CSE-CIS-RECOVERY-NO-ISOLATED-BACKUP-004` - Isolated Backup Copies Missing
- `CSE-CIS-RECOVERY-NO-TESTING-005` - Backup Recovery Testing Missing
