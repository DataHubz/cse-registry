# CSE-CMMC-IDENTITY-SHARED-ACCOUNT-003

**Shared Account Usage**

## Signal Overview

| Field           | Value                                   |
|-----------------|-----------------------------------------|
| Identifier      | `CSE-CMMC-IDENTITY-SHARED-ACCOUNT-003`  |
| Domain          | CMMC                                    |
| Category        | IDENTITY                                |
| Status          | Active                                  |
| Introduced In   | 1.0.0                                   |

## Description

Multiple users share a single account or credential set rather than using individually assigned identities.

This signal indicates that user actions cannot be uniquely attributed to individuals, reducing accountability and audit trail effectiveness.

## Applicability

This signal applies to:

- Shared administrative accounts
- Generic service accounts used interactively
- Shared application logins
- Team credentials stored in shared locations
- Root or built-in administrator accounts used by multiple people
- Shared API keys or tokens
- Common SSH keys used by multiple users

## Examples (Non-Normative)

### Shared Credentials in Code Repository

```yaml
# config.yml shared among team
admin_username: "team_admin"
admin_password: "SharedPassword123"
```

### Generic Admin Account

```
Username: admin
Password: [shared among IT staff]
```

### Shared SSH Key

```bash
# Same private key deployed to multiple developer workstations
~/.ssh/id_rsa  # Identical across team members
```

### Shared Service Account for Interactive Use

```powershell
# Multiple admins logging in as service account
runas /user:DOMAIN\svc_deploy cmd
```

## What This Signal Does NOT Assert

- Whether shared access is intentional or authorized
- The sensitivity of systems accessible via shared accounts
- Whether audit logging captures source information
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **IA.L2-3.5.1**: Identify system users, processes acting on behalf of users, and devices
- **IA.L2-3.5.2**: Authenticate (or verify) the identities of users, processes, or devices as a prerequisite to allowing access to organizational systems

## Related Signals

- `CSE-CMMC-AUDIT-NO-USER-ATTRIBUTION-001` — Audit Logs Lack User Attribution (if defined)
- `CSE-GEN-SECRETS-PLAINTEXT-001` — Plaintext Secret in Source Code
