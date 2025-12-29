# CSE-CIS-ACCOUNT-NO-UNIQUE-ADMIN-005

**Unique Admin Accounts Missing**

## Signal Overview

| Field           | Value                                  |
|-----------------|----------------------------------------|
| Identifier      | `CSE-CIS-ACCOUNT-NO-UNIQUE-ADMIN-005`  |
| Domain          | CIS                                    |
| Category        | ACCOUNT                                |
| Control         | 05 - Account Management                |
| Safeguard       | 5.5                                    |
| IG Level        | IG2                                    |
| Asset Type      | Users                                  |
| Security Function | Protect                              |
| Status          | Active                                 |
| Introduced In   | 1.0.0                                  |

## Description

Administrative or privileged accounts are not uniquely assigned to individual users, resulting in shared administrative credentials or the use of generic administrative accounts.

This signal indicates that multiple individuals share the same administrative account credentials, or that users perform administrative tasks using their standard user accounts that have been granted elevated privileges. Without unique administrative accounts, organizations cannot maintain proper accountability, audit trails, or attribution of administrative actions to specific individuals.

## Applicability

This signal applies to:

- Windows domain administrator accounts
- Unix/Linux root or sudo-enabled accounts
- Cloud platform IAM administrative users (AWS, Azure, GCP)
- Database administrative accounts (sa, root, postgres, admin)
- Network device administrative accounts
- Application administrative accounts
- Hypervisor and virtualization platform administrators
- Container orchestration platform administrators
- Security tool administrative access
- Shared service accounts used for privileged operations

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Shared Domain Administrator Account

```powershell
# Active Directory showing multiple users logging in with shared admin account
Get-WinEvent -LogName Security -FilterHashtable @{ID=4624} |
  Where-Object {$_.Properties[5].Value -eq "Administrator"} |
  Select-Object TimeCreated, @{N='SourceIP';E={$_.Properties[18].Value}}

# Results show same "Administrator" account used from multiple workstations:
# 2024-12-27 09:15:22 - Source: 192.168.1.50 (IT-WS-01)
# 2024-12-27 10:42:18 - Source: 192.168.1.75 (IT-WS-05)
# 2024-12-27 14:23:45 - Source: 192.168.1.92 (IT-WS-12)
# Cannot determine which individual IT staff member performed actions
```

### Shared Database SA Account

```sql
-- SQL Server showing shared 'sa' account usage
-- Multiple connections from different applications/users
SELECT
  login_name,
  host_name,
  program_name,
  login_time,
  COUNT(*) as connection_count
FROM sys.dm_exec_sessions
WHERE login_name = 'sa'
GROUP BY login_name, host_name, program_name, login_time;

-- All DBAs use 'sa' instead of individual admin accounts
-- No accountability for schema changes or data modifications
```

### Generic "admin" Account Shared Across Team

```yaml
# Application configuration using shared admin credentials
application:
  admin_accounts:
    - username: "admin"
      password: "stored_in_team_password_manager"
      shared_by: ["alice@company.com", "bob@company.com", "charlie@company.com"]
      individual_accounts: false
```

### Root Account Shared via Known Password

```bash
# /etc/shadow showing root account with known shared password
# Multiple administrators know root password
# No sudo configuration for individual accountability

# Audit log showing root actions without individual attribution:
Dec 27 10:15:32 server1 su: root logged in
# Who actually performed this action? Unknown.
```

### AWS IAM User Used by Multiple People

```json
{
  "IAMUser": "AdminUser",
  "AccessKeyId": "AKIA...",
  "SharedWith": [
    "engineering-team-lead@company.com",
    "devops-manager@company.com",
    "senior-engineer@company.com"
  ],
  "AccessKeyRotation": "Manual, shared via encrypted message",
  "CloudTrailAttribution": "Single IAM user, cannot determine actual person"
}
```

### Elevated Standard User Accounts Instead of Separate Admin Accounts

```powershell
# Users granted admin rights on their standard accounts
# instead of having separate admin accounts
Get-ADUser -Filter * -Properties MemberOf |
  Where-Object {
    $_.MemberOf -like "*Domain Admins*" -and
    $_.SamAccountName -notlike "*-admin"
  }

# Results:
# jsmith (standard account with admin rights - no separate admin account)
# bwilliams (standard account with admin rights - no separate admin account)
# Should be: jsmith + jsmith-admin (separate accounts)
```

## What This Signal Does NOT Assert

- Whether shared accounts have been misused or compromised
- The specific naming convention for administrative accounts
- Whether technical limitations prevent individual account creation
- Compliance or non-compliance with CIS Controls or any framework
- The operational impact of implementing individual admin accounts
- Whether audit logging of administrative actions exists

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 5 (Account Management), specifically:

- **Safeguard 5.5**: Establish and Maintain an Inventory of Service Accounts - Establish and maintain an inventory of service accounts. The inventory, at a minimum, must contain department owner, review date, and purpose. Perform service account reviews to validate that all active accounts are authorized, on a recurring schedule at a minimum quarterly, or more frequently.

While this safeguard focuses on service accounts, it reinforces the broader principle that accounts should be inventoried, assigned to specific owners, and reviewed regularly—a practice that applies to administrative accounts as well.

Additional CIS guidance emphasizes that administrative privileges should be tied to individual accounts for proper accountability and auditability.

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-CIS-ACCOUNT-NO-INVENTORY-001` — Account inventory missing
- `CSE-CIS-ACCOUNT-NO-ACCESS-RESTRICTION-004` — Admin account access not restricted
- `CSE-CIS-ACCOUNT-NO-CENTRALIZED-MGMT-006` — Centralized account management missing
- `CSE-CMMC-IDENTITY-SHARED-ACCOUNT-003` — Shared account usage

## Notes

Detection of this signal typically involves:

- Analysis of administrative account naming conventions
- Review of authentication logs for concurrent or distributed administrative sessions
- Examination of privileged access management (PAM) system configurations
- Assessment of account creation and provisioning processes
- Correlation of administrative accounts with employee records
- Review of sudo configuration and group memberships
- Analysis of service account usage patterns
- Evaluation of just-in-time (JIT) privileged access implementations

The presence of this signal indicates a critical gap in accountability and auditability of privileged operations. Best practices include:

- Creating uniquely named administrative accounts for each user (e.g., jsmith-admin)
- Implementing separate accounts for administrative tasks vs. standard user activities
- Deploying Privileged Access Management (PAM) solutions for credential management
- Enforcing just-in-time (JIT) privilege elevation where possible
- Maintaining detailed audit logs tied to individual administrative accounts
- Prohibiting shared passwords or credentials for privileged accounts
