# CSE-CIS-ACCESS-NO-MFA-ADMIN-005

**MFA for Admin Access Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-ACCESS-NO-MFA-ADMIN-005`        |
| Domain          | CIS                                      |
| Category        | ACCESS                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Multi-factor authentication (MFA) is not required for users with administrative or privileged access to enterprise assets, systems, or applications.

This signal indicates that administrative accounts can authenticate using only a password without requiring a second authentication factor, creating elevated risk if credentials are compromised.

## Applicability

This signal applies to:

- Domain administrator accounts
- Local administrator accounts
- Database administrator (DBA) accounts
- Cloud platform administrator roles (AWS root, Azure Global Admin, GCP Owner)
- Application administrator accounts
- Security administrator roles
- Network device administrative access
- Privileged Access Management (PAM) systems
- Break-glass/emergency access accounts

## Examples (Non-Normative)

### Active Directory Admin Without MFA

```yaml
findings:
  - Domain Admin accounts authenticate with password only
  - No smart card or MFA requirement for privileged logon
  - Administrative workstations don't enforce MFA
  - Schema Admins and Enterprise Admins exempt from MFA policy
```

### Cloud Administrator Single-Factor

```yaml
findings:
  - Azure Global Administrator role without MFA enforcement
  - AWS root account lacks MFA configuration
  - GCP Owner role can sign in with password only
  - Service provider admin portal accessible without MFA
```

### Database Admin Access

```yaml
findings:
  - DBA accounts use SQL authentication without MFA
  - Database management tools connect with username/password
  - No MFA integration for administrative database access
  - SA or root database accounts lack second factor requirement
```

### Network Device Admin Access

```yaml
findings:
  - Router and switch admin access via Telnet/SSH with password only
  - TACACS+ or RADIUS doesn't require MFA
  - Enable mode password without additional authentication
  - Console access lacks MFA enforcement
```

## What This Signal Does NOT Assert

- Whether administrative accounts are actively used
- The number of privileged users in the environment
- Whether privileged accounts are monitored or logged
- Whether MFA is available but not enforced
- Compliance or non-compliance with any framework
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 6.5**: Require MFA for Administrative Access (IG1)
- **Asset Type**: Users
- **Security Function**: Protect

**Control Description**: Require MFA for all administrative access accounts, where supported, on all enterprise assets, whether managed on-site or through a third-party provider.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-ACCESS-NO-MFA-EXTERNAL-003` - MFA for External Access Missing
- `CSE-CIS-ACCESS-NO-MFA-REMOTE-004` - MFA for Remote Network Access Missing
- `CSE-CIS-ACCESS-NO-MFA-ALL-007` - MFA for All Applications Missing
