# CSE-CIS-ACCOUNT-NO-INACTIVE-DISABLE-003

**Inactive Accounts Not Disabled**

## Signal Overview

| Field           | Value                                      |
|-----------------|--------------------------------------------|
| Identifier      | `CSE-CIS-ACCOUNT-NO-INACTIVE-DISABLE-003`  |
| Domain          | CIS                                        |
| Category        | ACCOUNT                                    |
| Control         | 05 - Account Management                    |
| Safeguard       | 5.3                                        |
| IG Level        | IG1                                        |
| Asset Type      | Users                                      |
| Security Function | Protect                                  |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

User accounts that have been inactive for an extended period remain enabled and are not disabled or removed from the system.

This signal indicates that accounts with no recent authentication activity, no resource access, or no operational use continue to have active access rights. Inactive accounts represent unnecessary security risks, as they may belong to former employees, unused service accounts, or forgotten test accounts that could be compromised without detection.

## Applicability

This signal applies to:

- User accounts in Active Directory or LDAP
- Cloud IAM users and service accounts (AWS, Azure, GCP)
- Application-specific user accounts
- Database user accounts
- VPN and remote access accounts
- SaaS application user accounts
- Administrative and privileged accounts
- Service accounts and API credentials
- Shared or generic accounts
- Contractor and temporary worker accounts

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Active Directory Account Inactive for 120+ Days

```powershell
# PowerShell query showing inactive accounts still enabled
Get-ADUser -Filter * -Properties LastLogonDate |
  Where-Object {
    $_.Enabled -eq $true -and
    $_.LastLogonDate -lt (Get-Date).AddDays(-120)
  }

# Results:
# jsmith - Last login: 150 days ago - Status: Enabled
# atest - Last login: 365 days ago - Status: Enabled
# contractor1 - Last login: 200 days ago - Status: Enabled
```

### AWS IAM User Never Used

```json
{
  "User": "legacy-deployment-user",
  "CreateDate": "2022-03-15T10:30:00Z",
  "PasswordLastUsed": null,
  "AccessKeyLastUsed": null,
  "UserStatus": "Active",
  "DaysInactive": 450
}
```

### Service Account with No Recent Activity

```yaml
# Application service account analysis
service_account:
  name: "svc_legacy_integration"
  created: "2020-06-01"
  last_authentication: "2023-01-15"
  days_inactive: 345
  status: "active"
  permissions: "read-write to production database"
```

### Database Account Unused

```sql
-- MySQL user account activity audit
SELECT
  user,
  host,
  account_locked,
  password_last_changed,
  DATEDIFF(NOW(), password_last_changed) as days_inactive
FROM mysql.user
WHERE
  account_locked = 'N'
  AND DATEDIFF(NOW(), password_last_changed) > 90;

-- Results show active accounts with no recent password changes
-- indicating potential inactivity
```

### SaaS Application Dormant User

```json
{
  "user_email": "former.employee@company.com",
  "account_status": "active",
  "last_login": "2023-08-20T14:22:00Z",
  "days_since_login": 129,
  "license_assigned": true,
  "data_access": "full",
  "termination_date_in_hr_system": "2023-09-01"
}
```

## What This Signal Does NOT Assert

- The specific threshold for defining "inactive" (e.g., 30, 60, 90 days)
- Whether the account belongs to a current or former employee
- Whether the account has been compromised or misused
- Compliance or non-compliance with CIS Controls or any framework
- Whether the account should be disabled, deleted, or retained
- Whether compensating monitoring controls are in place

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 5 (Account Management), specifically:

- **Safeguard 5.3**: Disable Dormant Accounts - Delete or disable any dormant accounts after a period of 45 days of inactivity, where supported.

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-CIS-ACCOUNT-NO-INVENTORY-001` — Account inventory missing
- `CSE-CIS-ACCOUNT-NO-CENTRALIZED-MGMT-006` — Centralized account management missing
- `CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001` — Unrestricted administrative access

## Notes

Detection of this signal typically involves:

- Automated analysis of authentication logs and last login timestamps
- Correlation of account status with HR termination records
- Review of access key usage and API credential activity
- Periodic account recertification and access reviews
- Monitoring service account usage patterns
- Cross-referencing active accounts with current employee rosters
- Examining password age as a proxy for account activity

The presence of this signal indicates a need for improved account lifecycle management processes, including automated detection and disablement of dormant accounts. Organizations should establish clear policies defining inactivity thresholds and implement automated workflows for account deactivation.
