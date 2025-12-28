# CSE-GEN-IDENTITY-NO-DEPROVISIONING-003

**Access Deprovisioning Missing**

## Signal Overview

| Field           | Value                                     |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-GEN-IDENTITY-NO-DEPROVISIONING-003`  |
| Domain          | GEN (General)                             |
| Category        | IDENTITY                                  |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

No process exists for promptly revoking user access when individuals leave the organization or change roles.

This signal indicates that accounts remain active after employment termination or role changes, creating security risks from orphaned credentials and excessive permissions.

## Applicability

This signal applies to:

- Employee termination procedures
- Role change and transfer processes
- Cloud platform accounts (AWS, Azure, GCP)
- Application and system access
- VPN and remote access credentials
- Email and collaboration platform accounts
- Privileged access removal
- Contractor and vendor access termination
- Service account lifecycle management

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Termination Workflow

```
Deprovisioning gaps:
- No automated notification to IT when employees leave
- No checklist of systems requiring access removal
- HR termination process not integrated with IT systems
- Delayed account deactivation (days or weeks after departure)
```

### Active Accounts for Departed Users

```bash
# Example: User accounts remaining active post-termination
$ aws iam list-users | jq '.Users[] | select(.CreateDate < "2023-01-01")'
{
  "UserName": "john.smith",
  "CreateDate": "2022-05-15T10:30:00Z",
  "PasswordLastUsed": "2023-06-30T14:22:00Z"
}
# Employee departed July 2023, account still active in December
```

### No Role Change Process

```
Indicators such as:
- Users retain previous role permissions after transfer
- No access review triggered by role changes
- Permissions accumulate over time across multiple roles
- Former administrators retain elevated privileges
```

### Delayed or Incomplete Deprovisioning

```
Evidence such as:
- Active directory accounts disabled but cloud accounts remain
- Email access removed but application access persists
- VPN credentials not revoked
- API keys and tokens not rotated
- Shared credentials not changed after departures
```

## What This Signal Does NOT Assert

- Whether orphaned accounts have been exploited
- The number of inactive accounts present
- Whether individual access removals were timely
- Compliance or non-compliance with any framework
- Required remediation actions
- The risk level of specific orphaned accounts

## Related Framework Signals

This signal may be relevant to controls in various frameworks:

- **CIS Controls**: 5.3 (Disable dormant accounts), 5.5 (Establish and maintain an inventory of service accounts)
- **ISO 27001**: A.9.2.1 (User registration and de-registration), A.9.2.6 (Removal or adjustment of access rights)
- **PCI DSS**: 8.1.4 (Remove/disable inactive user accounts within 90 days)

## Related Signals

- `CSE-GEN-IDENTITY-NO-LIFECYCLE-001` — Identity Lifecycle Management Missing
- `CSE-GEN-IDENTITY-NO-PROVISIONING-002` — Access Provisioning Process Missing
- `CSE-GEN-IDENTITY-NO-ACCESS-REVIEW-004` — Access Review Missing

## Cross-References (Informative)

This signal supports access control objectives including:

- Preventing unauthorized access via orphaned credentials
- Reducing attack surface by eliminating unused accounts
- Ensuring timely removal of access for terminated users
- Supporting audit requirements for access revocation
- Maintaining principle of least privilege
- Protecting against insider threats from departed employees

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Review of termination and offboarding procedures
- Assessment of HR-to-IT notification mechanisms
- Analysis of account activity vs. employment status
- Examination of dormant account policies
- Comparison of active accounts against HR records
- Review of role change procedures
- Analysis of time between termination and access removal
- Audit of accounts with no recent authentication

The presence of this signal indicates a critical gap in identity lifecycle management that can lead to unauthorized access, data breaches, and compliance violations.
