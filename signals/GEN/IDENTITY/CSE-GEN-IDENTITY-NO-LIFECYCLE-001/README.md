# CSE-GEN-IDENTITY-NO-LIFECYCLE-001

**Identity Lifecycle Management Missing**

## Signal Overview

| Field           | Value                                  |
|-----------------|----------------------------------------|
| Identifier      | `CSE-GEN-IDENTITY-NO-LIFECYCLE-001`    |
| Domain          | GEN (General)                          |
| Category        | IDENTITY                               |
| Status          | Active                                 |
| Introduced In   | 1.0.0                                  |

## Description

No documented or implemented process exists for managing user identities throughout their complete lifecycle from creation through modification to deletion.

This signal indicates that there is no systematic approach to identity management, which can lead to orphaned accounts, inconsistent provisioning, and security gaps.

## Applicability

This signal applies to:

- Identity and access management (IAM) systems
- Cloud service provider accounts (AWS, Azure, GCP)
- Active Directory and LDAP directories
- Application user databases
- SaaS platform user management
- Privileged access management systems
- Service account management
- Contractor and third-party identity management

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Absence of Identity Lifecycle Documentation

```
No documented policy or procedure exists that defines:
- How user accounts are requested and approved
- When accounts are created and provisioned
- How identity changes are processed
- When and how accounts are disabled or deleted
- Roles and responsibilities for identity management
```

### No Identity Lifecycle Process

```
Organization lacks:
- Formal onboarding process for new users
- Change management process for role changes
- Offboarding process for departing users
- Regular account cleanup procedures
- Identity attribute management process
```

### Indicators in IAM Systems

```
Evidence such as:
- Accounts created without approval workflow
- No standardized naming conventions
- Inactive accounts remaining active indefinitely
- No correlation between HR records and active accounts
- Service accounts without ownership documentation
```

## What This Signal Does NOT Assert

- Whether individual accounts are properly configured
- The technical implementation of identity systems
- Whether authentication mechanisms are adequate
- Compliance or non-compliance with any framework
- Required remediation actions
- The effectiveness of existing ad-hoc processes

## Related Framework Signals

This signal may be relevant to controls in various frameworks:

- **ISO 27001**: A.9.2.1 (User registration and de-registration), A.9.2.5 (Review of user access rights)
- **CIS Controls**: 5.1 (Establish and maintain an inventory of accounts), 5.3 (Disable dormant accounts)
- **HITRUST**: 01.c (User registration)

## Related Signals

- `CSE-GEN-IDENTITY-NO-PROVISIONING-002` — Access Provisioning Process Missing
- `CSE-GEN-IDENTITY-NO-DEPROVISIONING-003` — Access Deprovisioning Missing
- `CSE-GEN-IDENTITY-NO-ACCESS-REVIEW-004` — Access Review Missing

## Cross-References (Informative)

This signal supports identity governance objectives including:

- Ensuring all identities have proper authorization
- Maintaining accurate inventory of active accounts
- Preventing accumulation of unused credentials
- Supporting audit and compliance requirements
- Reducing attack surface through account hygiene

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Review of identity management documentation
- Assessment of IAM process maturity
- Interviews with IT and security personnel
- Analysis of account creation and deletion patterns
- Examination of orphaned or dormant accounts
- Review of audit logs for identity changes

The presence of this signal indicates a foundational gap in identity governance that should be addressed through policy, process, and potentially technology improvements.
