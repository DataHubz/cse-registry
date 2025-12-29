# CSE-CMMC-AUDIT-NO-LOGGING-001

**Audit Logging Not Enabled**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CMMC-AUDIT-NO-LOGGING-001`    |
| Domain          | CMMC                               |
| Category        | AUDIT                              |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

Systems, applications, or infrastructure components are not configured to generate audit logs for security-relevant events.

This signal indicates that activities such as authentication attempts, access to sensitive resources, configuration changes, or administrative actions are not being recorded.

## Applicability

This signal applies to:

- Operating systems (Windows, Linux, macOS)
- Cloud service audit trails (CloudTrail, Azure Monitor, etc.)
- Application-level logging
- Database audit logging
- Network device logging
- Security tool logging (firewalls, IDS/IPS)
- Container and orchestration platforms

## Examples (Non-Normative)

### AWS CloudTrail Disabled

```json
{
  "trailList": []
}
```

### Windows Audit Policy Disabled

```
Audit logon events: No Auditing
Audit object access: No Auditing
Audit policy change: No Auditing
```

### Linux auditd Not Running

```bash
$ systemctl status auditd
● auditd.service - Security Auditing Service
   Active: inactive (dead)
```

### Application Without Logging

```python
# Logging disabled
logging.disable(logging.CRITICAL)
```

## What This Signal Does NOT Assert

- Whether security incidents have occurred undetected
- The completeness of existing logs
- Whether alternative monitoring exists
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **AU.L2-3.3.1**: Create and retain system audit logs and records to the extent needed to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity
- **AU.L2-3.3.2**: Ensure that the actions of individual system users can be uniquely traced to those users so they can be held accountable for their actions

## Related Signals

- `CSE-CMMC-AUDIT-NO-RETENTION-002` — Audit Log Retention Not Configured
- `CSE-CMMC-AUDIT-NO-PROTECTION-003` — Audit Logs Not Protected
