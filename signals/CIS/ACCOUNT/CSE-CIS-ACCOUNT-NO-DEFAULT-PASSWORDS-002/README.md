# CSE-CIS-ACCOUNT-NO-DEFAULT-PASSWORDS-002

**Default Passwords Not Changed**

## Signal Overview

| Field           | Value                                       |
|-----------------|---------------------------------------------|
| Identifier      | `CSE-CIS-ACCOUNT-NO-DEFAULT-PASSWORDS-002`  |
| Domain          | CIS                                         |
| Category        | ACCOUNT                                     |
| Control         | 05 - Account Management                     |
| Safeguard       | 5.2                                         |
| IG Level        | IG1                                         |
| Asset Type      | Users                                       |
| Security Function | Protect                                   |
| Status          | Active                                      |
| Introduced In   | 1.0.0                                       |

## Description

Default passwords for systems, applications, devices, or services have not been changed from their factory or vendor-supplied values.

This signal indicates that accounts retain manufacturer or vendor default credentials, creating a well-known vulnerability that can be easily exploited by attackers. Default passwords are publicly documented and commonly used in automated attack tools, making systems with unchanged defaults highly susceptible to unauthorized access.

## Applicability

This signal applies to:

- Network devices (routers, switches, firewalls, access points)
- IoT devices and embedded systems
- Database management systems (MySQL, PostgreSQL, Oracle)
- Application servers and middleware
- Operating system default accounts (admin, root, administrator)
- Web application administrative interfaces
- Security appliances and monitoring tools
- Cloud service initial configurations
- Container images and base configurations
- Industrial control systems and SCADA devices

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Router with Default Credentials

```plaintext
# Network device accessible with factory defaults
Device: Cisco Router
Username: admin
Password: admin
Status: UNCHANGED - using factory default credentials
```

### Database Default Account

```sql
-- MySQL installation with default root password
-- Default password is empty or 'root'
mysql -u root -p
Enter password: [blank or 'root']
# Successfully authenticated with default credentials
```

### IoT Device Default Password

```yaml
# Smart camera configuration
device:
  model: "IP-CAM-5000"
  default_credentials:
    username: "admin"
    password: "12345"
  password_changed: false
  web_interface: "http://192.168.1.100:8080"
```

### Application Server Default Admin

```properties
# Tomcat default configuration
tomcat.manager.username=admin
tomcat.manager.password=admin
# Default credentials not changed during deployment
```

### Docker Container Default Credentials

```dockerfile
# Container image with hardcoded default password
FROM postgres:latest
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
# Default credentials exposed in production deployment
```

## What This Signal Does NOT Assert

- Whether the default credentials are currently being used or exploited
- The complexity or strength of the default password
- Whether the service is accessible from untrusted networks
- Compliance or non-compliance with CIS Controls or any framework
- Required password complexity or rotation policies
- Whether compensating controls such as network segmentation exist

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 5 (Account Management), specifically:

- **Safeguard 5.2**: Use Unique Passwords - Use unique passwords for all enterprise assets. Best practice implementation includes, at a minimum, an 8-character password for accounts using MFA and a 14-character password for accounts not using MFA.

While this safeguard focuses on password uniqueness, changing default passwords is a fundamental prerequisite to establishing unique credentials.

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-CIS-ACCOUNT-NO-ACCESS-RESTRICTION-004` — Admin account access not restricted
- `CSE-CMMC-IDENTITY-WEAK-PASSWORD-002` — Weak password policy
- `CSE-CIS-ACCOUNT-NO-INVENTORY-001` — Account inventory missing

## Notes

Detection of this signal typically involves:

- Automated credential scanning against known default password databases
- Configuration audits of network devices and systems
- Review of deployment and hardening procedures
- Testing authentication with common default credentials
- Examining vendor documentation for default account information
- Analyzing system logs for successful authentication with default accounts

The presence of this signal represents a critical security vulnerability that should be remediated immediately, as default credentials are among the most commonly exploited attack vectors in both targeted and automated attacks.
