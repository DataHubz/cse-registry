# CSE-CIS-ACCOUNT-NO-CENTRALIZED-MGMT-006

**Centralized Account Management Missing**

## Signal Overview

| Field           | Value                                       |
|-----------------|---------------------------------------------|
| Identifier      | `CSE-CIS-ACCOUNT-NO-CENTRALIZED-MGMT-006`   |
| Domain          | CIS                                         |
| Category        | ACCOUNT                                     |
| Control         | 05 - Account Management                     |
| Safeguard       | 5.6                                         |
| IG Level        | IG2                                         |
| Asset Type      | Users                                       |
| Security Function | Protect                                   |
| Status          | Active                                      |
| Introduced In   | 1.0.0                                       |

## Description

The organization does not use a centralized authentication and authorization system for managing user accounts across enterprise assets and applications.

This signal indicates that account management is performed using disparate, disconnected systems, local account databases, or manual processes across different platforms and services. Without centralized management, organizations face challenges in maintaining consistent access controls, enforcing uniform security policies, efficiently provisioning and deprovisioning users, and maintaining visibility into account status across the enterprise.

## Applicability

This signal applies to:

- Enterprise identity and access management (IAM) systems
- Active Directory or LDAP directory services
- Cloud identity providers (Azure AD, Okta, Google Workspace)
- Single Sign-On (SSO) solutions
- Privileged Access Management (PAM) platforms
- Application authentication systems
- Database user management
- Network device authentication (RADIUS, TACACS+)
- SaaS application user provisioning
- Multi-cloud account federation

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Disconnected Account Management Systems

```yaml
# Organization uses multiple isolated account systems
account_management:
  active_directory:
    users: 500
    managed_centrally: true
    scope: "Windows workstations and file servers only"

  aws_iam:
    users: 75
    managed_centrally: false
    provisioning: "manual, independent of AD"
    deprovisioning: "manual, no automated sync"

  salesforce:
    users: 150
    managed_centrally: false
    provisioning: "manual, separate from AD and AWS"

  local_linux_accounts:
    servers: 50
    users_per_server: 5-20
    managed_centrally: false
    provisioning: "manual SSH key deployment"

  # No centralized identity provider integrating these systems
  centralized_idp: none
  sso_enabled: false
```

### Manual Account Provisioning Across Systems

```plaintext
# New employee onboarding checklist (manual, disconnected process)
1. Create Active Directory account
2. Manually create AWS IAM user (separate process, 2-3 day delay)
3. Manually provision Salesforce account (separate form, different team)
4. Request GitHub organization membership (email to DevOps team)
5. Create local accounts on production servers (manual SSH)
6. Provision SaaS application accounts individually for each tool

# Employee termination (high risk of orphaned accounts)
1. Disable AD account
2. Remember to disable AWS account (often forgotten)
3. Remember to disable Salesforce (often delayed)
4. May or may not remember GitHub, local Linux accounts, SaaS tools
```

### No Single Source of Truth

```json
{
  "user": "jsmith@company.com",
  "accounts": [
    {
      "system": "Active Directory",
      "username": "jsmith",
      "status": "active",
      "managed_by": "IT Team"
    },
    {
      "system": "AWS IAM",
      "username": "john.smith",
      "status": "active",
      "managed_by": "DevOps Team",
      "linked_to_ad": false
    },
    {
      "system": "GitHub",
      "username": "jsmith-dev",
      "status": "active",
      "managed_by": "Engineering Manager",
      "linked_to_ad": false
    },
    {
      "system": "Production Database",
      "username": "jsmith_dba",
      "status": "active",
      "managed_by": "DBA Team",
      "linked_to_ad": false
    }
  ],
  "centralized_identity": false,
  "consistency": "low - username varies across systems",
  "termination_risk": "high - manual cleanup required across all systems"
}
```

### Local Account Management on Multiple Servers

```bash
# Each server maintains its own local user database
# No integration with central directory

# Server 1: /etc/passwd
alice:x:1001:1001:Alice Admin:/home/alice:/bin/bash
bob:x:1002:1002:Bob Developer:/home/bob:/bin/bash

# Server 2: /etc/passwd
alice:x:1003:1003:Alice Admin:/home/alice:/bin/bash
charlie:x:1004:1004:Charlie Ops:/home/charlie:/bin/bash

# Server 3: /etc/passwd
bob:x:1001:1001:Bob Developer:/home/bob:/bin/bash
dave:x:1002:1002:Dave Security:/home/dave:/bin/bash

# No centralized management - UIDs inconsistent, users created manually
# Employee termination requires manual removal from each server
```

### SaaS Applications Not Integrated with IdP

```yaml
# SaaS applications managed independently
saas_applications:
  - name: "Slack"
    user_count: 200
    authentication: "email/password (local to Slack)"
    sso_enabled: false
    scim_provisioning: false

  - name: "Zoom"
    user_count: 200
    authentication: "email/password (local to Zoom)"
    sso_enabled: false
    scim_provisioning: false

  - name: "Confluence"
    user_count: 150
    authentication: "email/password (local to Confluence)"
    sso_enabled: false
    scim_provisioning: false

# No integration with Azure AD or other IdP
# No automated provisioning/deprovisioning
# Employees use different passwords for each system
```

### No Federated Identity Across Cloud Providers

```hcl
# Multiple cloud providers, no identity federation
# Each cloud maintains separate user databases

# AWS - 50 IAM users
resource "aws_iam_user" "developers" {
  # Manually created, no federation
}

# Azure - 50 separate Azure AD users (not synced)
resource "azuread_user" "developers" {
  # Manually created, different from AWS
}

# GCP - 50 separate Google identities (not synced)
resource "google_project_iam_member" "developers" {
  # Manually created, different from AWS and Azure
}

# No centralized IdP federating access across clouds
```

## What This Signal Does NOT Assert

- Whether individual systems are properly configured
- The specific centralized solution that should be implemented
- Whether compensating manual processes provide adequate controls
- Compliance or non-compliance with CIS Controls or any framework
- The operational complexity or cost of implementing centralization
- Whether federated identity or single sign-on is required

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 5 (Account Management), specifically:

- **Safeguard 5.6**: Centralize Account Management - Centralize account management through a directory or identity service.

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-CIS-ACCOUNT-NO-INVENTORY-001` — Account inventory missing
- `CSE-CIS-ACCOUNT-NO-INACTIVE-DISABLE-003` — Inactive accounts not disabled
- `CSE-CIS-ACCOUNT-NO-UNIQUE-ADMIN-005` — Unique admin accounts missing
- `CSE-CMMC-IDENTITY-NO-MFA-001` — Missing multi-factor authentication

## Notes

Detection of this signal typically involves:

- Architectural review of identity and access management systems
- Inventory of authentication systems across the organization
- Assessment of SSO and federation implementations
- Evaluation of user provisioning and deprovisioning workflows
- Analysis of directory service integration with applications and systems
- Review of SCIM or automated provisioning capabilities
- Examination of identity lifecycle management processes
- Assessment of password synchronization or federation mechanisms

The presence of this signal indicates significant operational and security challenges, including:

- Increased risk of orphaned accounts after employee termination
- Difficulty enforcing consistent security policies
- Higher administrative overhead for account management
- Reduced visibility into user access across systems
- Inconsistent authentication requirements (e.g., MFA)
- Increased attack surface due to disconnected credential stores

Organizations should consider implementing centralized identity management through:

- Enterprise directory services (Active Directory, LDAP)
- Cloud identity providers (Azure AD, Okta, Google Workspace)
- Single Sign-On (SSO) solutions
- SCIM-based automated provisioning
- Identity federation across cloud providers
- Privileged Access Management (PAM) for administrative accounts
- Automated lifecycle management integrating with HR systems
