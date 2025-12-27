# CSE-CMMC-CONFIG-INSECURE-DEFAULTS-003

**Insecure Default Configuration**

## Signal Overview

| Field           | Value                                     |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-CMMC-CONFIG-INSECURE-DEFAULTS-003`   |
| Domain          | CMMC                                      |
| Category        | CONFIG                                    |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

Systems or applications are deployed with vendor default configurations that do not meet security requirements.

This signal indicates that default passwords, sample accounts, unnecessary features, or insecure default settings remain active in the environment.

## Applicability

This signal applies to:

- Default administrative credentials
- Sample or demo accounts
- Vendor default configurations
- Debug and development modes in production
- Unnecessary default services
- Default TLS/SSL configurations
- Default API keys or tokens

## Examples (Non-Normative)

### Default Database Credentials

```sql
-- MySQL with default root password
mysql -u root -p''
-- Default password not changed
```

### Default Admin Account

```
Username: admin
Password: admin
```

### Debug Mode Enabled in Production

```python
# Django settings.py
DEBUG = True  # Default, not changed for production
```

### Default SNMP Community String

```
# Network device with default community
snmp-server community public RO
```

### Insecure Default TLS Configuration

```nginx
# Default weak ciphers enabled
ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
ssl_ciphers ALL:!aNULL:!eNULL;
```

## What This Signal Does NOT Assert

- Whether default configurations have been exploited
- The criticality of affected systems
- Whether defaults are appropriate for the use case
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **CM.L2-3.4.2**: Establish and enforce security configuration settings for information technology products employed in organizational systems
- **CM.L2-3.4.6**: Employ the principle of least functionality by configuring organizational systems to provide only essential capabilities

## Related Signals

- `CSE-CMMC-CONFIG-NO-BASELINE-001` — Security Configuration Baseline Not Defined
- `CSE-GEN-SECRETS-PLAINTEXT-001` — Plaintext Secret in Source Code
