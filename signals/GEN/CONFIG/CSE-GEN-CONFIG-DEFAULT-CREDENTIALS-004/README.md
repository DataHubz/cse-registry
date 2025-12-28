# CSE-GEN-CONFIG-DEFAULT-CREDENTIALS-004

**Default Credentials Not Changed**

## Signal Overview

| Field           | Value                                      |
|-----------------|--------------------------------------------|
| Identifier      | `CSE-GEN-CONFIG-DEFAULT-CREDENTIALS-004`   |
| Domain          | GEN (General)                              |
| Category        | CONFIG                                     |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

Default passwords, API keys, or credentials from vendors remain unchanged on systems, applications, or devices.

This signal indicates that systems may be vulnerable to unauthorized access using publicly known or easily guessable default credentials, which are commonly targeted by automated attacks and readily available in vendor documentation and public databases.

## Applicability

This signal applies to:

- Network devices (routers, switches, access points)
- Database management systems
- Application servers and web servers
- IoT devices and embedded systems
- Security cameras and physical security systems
- Remote access systems (VPN, remote desktop)
- Cloud service accounts
- Administrative consoles and web interfaces
- Container orchestration platforms
- Monitoring and logging systems

## Examples (Non-Normative)

### Database Default Credentials

```sql
-- PostgreSQL default postgres user with no password
psql -U postgres -h localhost
-- Connects without password prompt

-- MySQL default root account
mysql -u root
-- No password required on fresh installation
```

### Router/Network Device Defaults

```bash
# Common default credentials still active
# Username: admin
# Password: admin

# Or vendor-specific defaults:
# Cisco: admin/cisco
# Netgear: admin/password
# TP-Link: admin/admin
```

### Application Default Accounts

```python
# Django application with default admin
# Username: admin
# Password: admin

# Jenkins default admin
# Username: admin
# Password: password from /var/lib/jenkins/secrets/initialAdminPassword
# Never changed from initial setup
```

### IoT Device Defaults

```bash
# IP camera with factory defaults
# Username: admin
# Password: 12345

# Or embedded device
# telnet 192.168.1.100
# Username: root
# Password: root
```

### Container Orchestration Defaults

```yaml
# Kubernetes dashboard with default token
apiVersion: v1
kind: Secret
metadata:
  name: admin-user-token
data:
  token: ZGVmYXVsdC10b2tlbg==  # "default-token" base64 encoded
```

### Monitoring System Defaults

```yaml
# Grafana default credentials
username: admin
password: admin
# Warning message shown but not enforced to change
```

### Cloud Service Defaults

```python
# AWS account with default IAM user
# Username: Administrator
# Password: Provided during setup, never rotated

# MinIO (S3-compatible storage) defaults
MINIO_ROOT_USER=minioadmin
MINIO_ROOT_PASSWORD=minioadmin
```

## What This Signal Does NOT Assert

- Whether default credentials are currently being exploited
- Whether the system is accessible from untrusted networks
- Whether multi-factor authentication is enabled
- Compliance or non-compliance with any framework
- The risk level of the specific system
- Required remediation actions or password complexity requirements

## Related Framework Signals

This signal may be relevant to signals in various frameworks:

- `CSE-PCIDSS-CONFIG-DEFAULT-CREDENTIALS-*` — PCI DSS default credential requirements
- `CSE-CIS-CONFIG-DEFAULT-PASSWORDS-*` — CIS Controls for default passwords
- `CSE-CMMC-CONFIG-INSECURE-DEFAULTS-003` — CMMC insecure defaults
- `CSE-GEN-AUTH-WEAK-PASSWORD-*` — Weak password signals

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **PCI DSS**: Requirement 2.1 (Always change vendor-supplied defaults and remove or disable unnecessary default accounts)
- **CIS Controls**: Control 4.1 (Establish and Maintain a Secure Configuration Process)
- **CMMC**: CM.L2-3.4.2 (Establish and enforce security configuration settings), IA.L2-3.5.7 (Prevent reuse of identifiers for a defined period)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Scanning for known default credential combinations
- Testing authentication with vendor-documented default passwords
- Checking for unchanged default API keys and tokens
- Reviewing system documentation for initial setup credentials
- Automated vulnerability scanning for default credentials
- Penetration testing and credential audits
- Comparing against databases of known defaults (e.g., CIRT.net Default Passwords Database)

The presence of this signal represents a critical security risk that should be addressed immediately, as default credentials are often the first vector attempted by attackers.
