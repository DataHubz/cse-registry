# CSE-CIS-ACCESS-NO-REVOCATION-002

**Access Revocation Process Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-ACCESS-NO-REVOCATION-002`       |
| Domain          | CIS                                      |
| Category        | ACCESS                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

The organization lacks a documented and established process for revoking access to enterprise assets in a timely manner upon termination, role change, or when access is no longer required.

This signal indicates that user accounts, credentials, and permissions may remain active after they should have been removed, creating security risks from orphaned or unnecessary access.

## Applicability

This signal applies to:

- User account deprovisioning processes
- HR offboarding workflows
- Access revocation procedures
- Identity lifecycle management
- Account termination processes
- Role change management
- Periodic access reviews
- Automated deprovisioning systems

## Examples (Non-Normative)

### No Termination Process

```yaml
findings:
  - Terminated employees retain active accounts for weeks
  - No automated notification from HR to IT for terminations
  - Account deactivation performed manually without checklist
  - Contractor access not removed after contract end date
```

### Missing Role Change Procedures

```yaml
findings:
  - Employees changing roles retain previous access rights
  - No process to review and remove unnecessary permissions
  - Access accumulates over time without cleanup
  - Department transfers don't trigger access review
```

### Delayed Revocation

```yaml
findings:
  - Average account deactivation takes 5-7 business days
  - No SLA defined for access revocation timelines
  - Manual process dependent on email notifications
  - No validation that access was successfully removed
```

## What This Signal Does NOT Assert

- Whether unauthorized access has occurred via orphaned accounts
- The number of active orphaned accounts in the environment
- The sensitivity of systems with stale access
- Compliance or non-compliance with any framework
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 6.2**: Establish an Access Revoking Process (IG1)
- **Asset Type**: Users
- **Security Function**: Protect

**Control Description**: Establish and follow a process, preferably automated, for revoking access to enterprise assets, through disabling accounts immediately upon termination, rights revocation, or role change of a user. Disabling accounts, instead of deleting accounts, may be necessary to preserve audit trails.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-ACCESS-NO-PROCESS-001` - Access Granting Process Missing
- `CSE-CIS-ACCESS-NO-ROLE-BASED-006` - Role-Based Access Control Missing
