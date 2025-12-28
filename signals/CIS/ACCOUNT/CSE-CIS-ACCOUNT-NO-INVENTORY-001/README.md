# CSE-CIS-ACCOUNT-NO-INVENTORY-001

**Account Inventory Missing**

## Signal Overview

| Field           | Value                                  |
|-----------------|----------------------------------------|
| Identifier      | `CSE-CIS-ACCOUNT-NO-INVENTORY-001`     |
| Domain          | CIS                                    |
| Category        | ACCOUNT                                |
| Control         | 05 - Account Management                |
| Safeguard       | 5.1                                    |
| IG Level        | IG1                                    |
| Asset Type      | Users                                  |
| Security Function | Protect                              |
| Status          | Active                                 |
| Introduced In   | 1.0.0                                  |

## Description

An organization does not maintain a complete and accurate inventory of all accounts across its enterprise systems and services.

This signal indicates that there is no centralized repository, documentation, or automated tracking system that comprehensively lists all user accounts, service accounts, administrative accounts, and system accounts. Without a complete inventory, organizations cannot effectively manage account lifecycles, detect unauthorized accounts, or ensure proper access controls.

## Applicability

This signal applies to:

- Enterprise identity and access management systems
- Cloud service provider accounts (AWS, Azure, GCP)
- Active Directory and LDAP services
- Application-specific user accounts
- Database user accounts
- Service accounts and API credentials
- Local system accounts on servers and workstations
- SaaS application user accounts
- Privileged and administrative accounts
- Third-party vendor and contractor accounts

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Centralized Account Repository

```plaintext
# Organization has accounts across multiple systems with no inventory:
- AWS: 50+ IAM users, no documented inventory
- Azure AD: 200+ users, no export or tracking
- GitHub: 30+ organization members, no formal record
- Local Windows Servers: Unknown number of local accounts
- MySQL Databases: Multiple admin accounts, undocumented
```

### Undocumented Service Accounts

```yaml
# Application configuration with service accounts but no inventory
database:
  username: app_service_user
  # No record of who created this account, when, or why

api:
  credentials: legacy_api_key
  # Service account exists but not tracked in any inventory system
```

### Missing Account Metadata

```json
{
  "account_inventory": {
    "total_accounts": "unknown",
    "last_updated": "never",
    "source_systems": [],
    "documentation": "none"
  }
}
```

### Decentralized Account Management

```bash
# Multiple teams creating accounts without coordination
# Marketing team creates accounts in Salesforce
# Engineering creates AWS IAM users
# IT creates Active Directory accounts
# No central inventory or cross-system visibility
```

## What This Signal Does NOT Assert

- Whether individual accounts are properly configured
- The specific number of untracked accounts
- Whether unauthorized accounts exist
- Compliance or non-compliance with CIS Controls or any framework
- Required remediation actions or specific inventory tools to use
- Whether compensating controls exist elsewhere

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 5 (Account Management), specifically:

- **Safeguard 5.1**: Establish and Maintain an Inventory of Accounts - Establish and maintain an inventory of all accounts managed in the enterprise. The inventory must include both user and administrator accounts. The inventory, at a minimum, should contain the person's name, username, start/stop dates, and department. Validate that all active accounts are authorized, on a recurring schedule at a minimum quarterly, or more frequently.

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-CIS-ACCOUNT-NO-INACTIVE-DISABLE-003` — Inactive accounts not disabled
- `CSE-CIS-ACCOUNT-NO-UNIQUE-ADMIN-005` — Unique admin accounts missing
- `CSE-CIS-ACCOUNT-NO-CENTRALIZED-MGMT-006` — Centralized account management missing

## Notes

Detection of this signal typically involves:

- Reviewing identity management documentation and procedures
- Checking for centralized account inventory systems or databases
- Examining account creation and deprovisioning workflows
- Analyzing whether automated account discovery tools are deployed
- Assessing cross-system account visibility and reporting capabilities
- Verifying the existence of periodic account reconciliation processes

The presence of this signal indicates a foundational gap in account management that warrants immediate attention, as it affects the organization's ability to implement many other security controls effectively.
