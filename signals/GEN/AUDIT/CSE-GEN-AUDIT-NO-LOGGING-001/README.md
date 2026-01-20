# CSE-GEN-AUDIT-NO-LOGGING-001

**Audit Logging Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-GEN-AUDIT-NO-LOGGING-001`     |
| Domain          | GEN (General)                      |
| Category        | AUDIT                              |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

System does not generate audit logs for security-relevant events such as authentication attempts, access to sensitive data, or configuration changes.

This signal indicates that critical security events are not being recorded, preventing visibility into system activity, security incident detection, and forensic investigation capabilities.

## Applicability

This signal applies to:

- Operating systems (Windows, Linux, macOS, Unix)
- Cloud platforms and services (AWS, Azure, GCP)
- Application servers and web applications
- Database management systems
- Network devices (routers, switches, firewalls)
- Security appliances (IDS/IPS, WAF)
- Container platforms and orchestration systems
- Authentication and identity management systems
- API gateways and middleware
- CI/CD pipelines and build systems

## Examples (Non-Normative)

The following are illustrative examples of patterns that may trigger this signal:

### AWS CloudTrail Not Enabled

```json
{
  "trailList": []
}
```

### Linux auditd Service Inactive

```bash
$ systemctl status auditd
● auditd.service - Security Auditing Service
   Loaded: loaded (/usr/lib/systemd/system/auditd.service; disabled)
   Active: inactive (dead)
```

### Database Audit Logging Disabled

```sql
-- PostgreSQL audit logging not configured
SHOW log_connections;
-- Result: off

SHOW log_disconnections;
-- Result: off
```

### Application Logging Disabled

```python
# Python application with logging disabled
import logging
logging.disable(logging.CRITICAL)

# No authentication events logged
def login(username, password):
    if authenticate(username, password):
        return True  # Success not logged
    return False  # Failure not logged
```

### Windows Event Audit Policy Not Configured

```powershell
# Audit policy showing no auditing enabled
AuditPol /get /category:*
# Result: No Auditing for all categories
```

### Nginx Without Access Logging

```nginx
server {
    listen 80;
    server_name example.com;

    # Access logging disabled
    access_log off;
}
```

## What This Signal Does NOT Assert

- Severity of the missing logging in a specific context
- Whether security incidents have occurred undetected
- The completeness or adequacy of any existing logs
- Whether alternative monitoring mechanisms are in place
- Compliance or non-compliance with any specific framework
- Required remediation actions or implementation details
- The appropriate retention period for logs

## Related Framework Signals

This signal may be related to framework-specific audit signals:

- `CSE-CMMC-AUDIT-NO-LOGGING-001` — CMMC audit logging requirements
- `CSE-PCIDSS-AUDIT-NO-LOGGING-*` — PCI DSS logging requirements (if defined)
- `CSE-SOC2-AUDIT-NO-LOGGING-*` — SOC 2 logging requirements (if defined)
- `CSE-ISO27001-AUDIT-NO-LOGGING-*` — ISO 27001 logging requirements (if defined)
- `CSE-HIPAA-AUDIT-NO-LOGGING-*` — HIPAA logging requirements (if defined)
- `CSE-GDPR-AUDIT-NO-LOGGING-*` — GDPR logging requirements (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **CMMC**: AU.L2-3.3.1, AU.L2-3.3.2
- **PCI DSS**: Requirement 10.1, 10.2, 10.3
- **SOC 2**: CC7.2 (System monitoring controls)
- **ISO 27001**: A.12.4.1 (Event logging)
- **NIST CSF**: DE.AE-3, DE.CM-1, DE.CM-6, PR.PT-1
- **CIS Controls**: Control 8 (Audit Log Management)
- **HIPAA**: 164.312(b) (Audit controls)
- **GDPR**: Article 32 (Security of processing)
- **HITRUST**: 09.j (Audit Logging)
- **FedRAMP**: AU-2, AU-3, AU-12

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Checking system configuration files for audit settings
- Querying service status for audit daemons and logging services
- Reviewing cloud platform audit trail configurations
- Examining application logging frameworks and configurations
- Testing whether security events generate corresponding log entries
- Verifying log output destinations are configured

The presence of this signal indicates a fundamental gap in security visibility that should be addressed across all compliance frameworks and security best practices.
