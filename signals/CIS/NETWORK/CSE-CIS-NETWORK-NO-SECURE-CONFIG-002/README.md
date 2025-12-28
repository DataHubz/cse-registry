# CSE-CIS-NETWORK-NO-SECURE-CONFIG-002

**Secure Network Configuration Missing**

## Signal Overview

| Field           | Value                                           |
|-----------------|-------------------------------------------------|
| Identifier      | `CSE-CIS-NETWORK-NO-SECURE-CONFIG-002`          |
| Domain          | CIS                                             |
| Category        | NETWORK                                         |
| Status          | Active                                          |
| Introduced In   | 1.0.0                                           |

## Description

The organization lacks established secure baseline configurations for network infrastructure devices or does not consistently apply these configurations across the network environment.

This signal indicates that network devices may be deployed with default settings, inconsistent security configurations, or without adherence to security hardening standards.

## Applicability

This signal applies to:

- Network infrastructure configuration standards
- Router and switch security settings
- Firewall rule sets and policies
- Network device hardening procedures
- Configuration management systems
- Change control processes
- Security baseline documentation
- Infrastructure as Code (IaC) templates

## Examples (Non-Normative)

### No Configuration Standards

```yaml
findings:
  - Network devices configured inconsistently across environment
  - No documented security baseline for routers and switches
  - Default configurations not modified from vendor settings
  - Security features disabled or not configured
```

### Missing Hardening Controls

```yaml
findings:
  - Default administrative credentials still in use
  - Unnecessary network services enabled on devices
  - SNMP community strings using default values
  - No encryption for management protocols
```

### Inconsistent Security Settings

```yaml
findings:
  - Some firewalls using secure configurations, others not
  - Security policies vary between different network segments
  - No standardized logging or monitoring configurations
  - Password policies differ across network devices
```

## What This Signal Does NOT Assert

- Whether network devices have been compromised
- The effectiveness of existing security controls
- Compliance or non-compliance with any framework
- Required remediation actions
- The competence of network administrators

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 12.2**: Establish and Maintain a Secure Network Infrastructure Configuration (IG2)
- **Asset Type**: Network
- **Security Function**: Protect

**Control Description**: Establish and maintain a secure network infrastructure. A secure network infrastructure must address network segmentation, least functionality, and secure network management.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-NETWORK-NO-INFRASTRUCTURE-INVENTORY-001` - Network Infrastructure Inventory Missing
- `CSE-CIS-NETWORK-NO-MGMT-ISOLATION-003` - Network Management Isolation Missing
- `CSE-CIS-CONFIG-NO-SECURE-PROCESS-001` - Secure Configuration Process Missing
