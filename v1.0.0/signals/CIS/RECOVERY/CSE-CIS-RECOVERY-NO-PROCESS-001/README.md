# CSE-CIS-RECOVERY-NO-PROCESS-001

**Data Recovery Process Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-RECOVERY-NO-PROCESS-001`        |
| Domain          | CIS                                      |
| Category        | RECOVERY                                 |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

The organization lacks a documented and established process for recovering data from backups to ensure business continuity and data availability after incidents.

This signal indicates that data recovery may be performed in an ad-hoc manner without documented procedures, testing protocols, or clear roles and responsibilities.

## Applicability

This signal applies to:

- Data recovery procedures and runbooks
- Disaster recovery plans
- Business continuity management systems
- Backup and restore operations
- Incident response processes
- Data restoration workflows
- Recovery time objective (RTO) requirements
- Recovery point objective (RPO) requirements

## Examples (Non-Normative)

### No Documented Recovery Procedures

```yaml
findings:
  - Recovery performed without documented step-by-step procedures
  - No standardized recovery workflows or runbooks
  - Missing documentation of recovery time objectives
  - Inconsistent recovery processes across different systems
```

### Missing Recovery Roles

```yaml
findings:
  - Unclear responsibility assignments for data recovery
  - No designated recovery team or point of contact
  - Recovery decisions made without proper authority
  - No escalation path for recovery failures
```

### Ad-Hoc Recovery Operations

```yaml
findings:
  - Data restored based on informal requests
  - No verification process for recovery completeness
  - Missing approval workflow for restore operations
  - No post-recovery validation procedures
```

## What This Signal Does NOT Assert

- Whether data loss has occurred
- The effectiveness of existing backup systems
- The competence of individuals performing recovery
- Compliance or non-compliance with any framework
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 11.1**: Establish and Maintain a Data Recovery Process (IG1)
- **Asset Type**: Data
- **Security Function**: Recover

**Control Description**: Establish and maintain a data recovery process. In the process, address the scope of data recovery activities, recovery prioritization, and the security of backup data. Review and update documentation annually, or when significant enterprise changes occur that could impact this Safeguard.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-RECOVERY-NO-AUTOMATED-BACKUP-002` - Automated Backups Missing
- `CSE-CIS-RECOVERY-NO-PROTECTED-BACKUP-003` - Backup Data Protection Missing
- `CSE-CIS-RECOVERY-NO-ISOLATED-BACKUP-004` - Isolated Backup Copies Missing
- `CSE-CIS-RECOVERY-NO-TESTING-005` - Backup Recovery Testing Missing
