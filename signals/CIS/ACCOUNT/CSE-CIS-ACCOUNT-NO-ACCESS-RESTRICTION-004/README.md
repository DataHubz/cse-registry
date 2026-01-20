# CSE-CIS-ACCOUNT-NO-ACCESS-RESTRICTION-004

**Admin Account Access Not Restricted**

## Signal Overview

| Field           | Value                                          |
|-----------------|------------------------------------------------|
| Identifier      | `CSE-CIS-ACCOUNT-NO-ACCESS-RESTRICTION-004`    |
| Domain          | CIS                                            |
| Category        | ACCOUNT                                        |
| Control         | 05 - Account Management                        |
| Safeguard       | 5.4                                            |
| IG Level        | IG1                                            |
| Asset Type      | Users                                          |
| Security Function | Protect                                      |
| Status          | Active                                         |
| Introduced In   | 1.0.0                                          |

## Description

Administrative or privileged accounts can be accessed from any device, network location, or system without restrictions based on specific dedicated devices, secure workstations, or controlled network segments.

This signal indicates that administrative access is not limited to hardened, monitored, or purpose-specific systems. Allowing administrative operations from arbitrary devices or networks increases the risk of credential compromise, malware infection, and unauthorized access, as administrative accounts have elevated privileges that can significantly impact system security.

## Applicability

This signal applies to:

- Domain administrator accounts in Active Directory
- Cloud platform administrative consoles (AWS, Azure, GCP)
- Database administrative accounts
- Network device management interfaces
- Hypervisor and virtualization platform administrators
- Privileged application accounts
- Root or superuser accounts on Unix/Linux systems
- Local administrator accounts on Windows systems
- Security tool and SIEM administrative access
- Backup system administrative accounts

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### AWS Root Account Accessible from Any IP

```json
{
  "AWSRootAccount": {
    "MFAEnabled": true,
    "ConditionalAccessPolicies": [],
    "IPRestrictions": "none",
    "AccessibleFrom": "0.0.0.0/0",
    "RequiresPAW": false
  }
}
```

### Domain Admin Login from Standard Workstation

```powershell
# Active Directory security log showing domain admin login
# from non-privileged workstation
Event ID: 4624
Account Name: DomainAdmin
Workstation Name: USER-LAPTOP-42
Logon Type: 2 (Interactive)
Source IP: 192.168.1.105
# No restriction to Privileged Access Workstation (PAW)
```

### Database Admin Access Without Source Restrictions

```sql
-- PostgreSQL pg_hba.conf allowing admin from any host
# TYPE  DATABASE    USER        ADDRESS         METHOD
host    all         postgres    0.0.0.0/0       md5
# Administrative account accessible from any network location
```

### SSH Root Access Without IP Restrictions

```bash
# /etc/ssh/sshd_config allowing root login from anywhere
PermitRootLogin yes
# No AllowUsers or Match Address restrictions configured
# Root can authenticate from any IP address
```

### Azure Global Admin Without Conditional Access

```yaml
# Azure AD Conditional Access Policy Status
ConditionalAccessPolicies:
  - Name: "Require Compliant Device for Admins"
    State: "disabled"
  - Name: "Require Specific IP Range for Global Admins"
    State: "reportOnly"

GlobalAdmins:
  - user@company.com
    AccessibleFrom: "Any device, any location"
    DeviceCompliance: "Not required"
```

### Kubernetes Cluster Admin Without Network Restrictions

```yaml
# Kubernetes API server configuration
apiVersion: v1
kind: Config
clusters:
- cluster:
    server: https://k8s-api.example.com:6443
    # No IP allowlist or source network restrictions
users:
- name: cluster-admin
  user:
    client-certificate: admin.crt
    client-key: admin.key
# Admin credentials can be used from any network location
```

## What This Signal Does NOT Assert

- Whether administrative access has been abused or compromised
- The specific restrictions that should be implemented
- Whether compensating detective controls are in place
- Compliance or non-compliance with CIS Controls or any framework
- The operational impact of implementing access restrictions
- Whether Privileged Access Workstations (PAWs) are required

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 5 (Account Management), specifically:

- **Safeguard 5.4**: Restrict Administrator Privileges to Dedicated Administrator Accounts - Restrict administrator privileges to dedicated administrator accounts on enterprise assets. Conduct general computing activities, such as internet browsing, email, and productivity suite use, from the user's primary, non-privileged account.

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-CIS-ACCOUNT-NO-UNIQUE-ADMIN-005` — Unique admin accounts missing
- `CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001` — Unrestricted administrative access
- `CSE-CMMC-IDENTITY-NO-MFA-001` — Missing multi-factor authentication
- `CSE-CIS-ACCOUNT-NO-CENTRALIZED-MGMT-006` — Centralized account management missing

## Notes

Detection of this signal typically involves:

- Analysis of authentication logs for administrative account source systems
- Review of network security policies and firewall rules
- Examination of conditional access and identity policies
- Assessment of Privileged Access Workstation (PAW) deployment
- Evaluation of jump host or bastion host configurations
- Review of SSH, RDP, and console access configurations
- Inspection of cloud provider IAM conditional policies
- Analysis of VPN and network segmentation for admin access

The presence of this signal indicates that administrative access controls may be insufficient to prevent compromise from less secure devices or network locations. Best practices include implementing dedicated privileged access workstations, requiring multi-factor authentication, restricting administrative access to specific IP ranges or VPN segments, and separating administrative credentials from standard user accounts.
