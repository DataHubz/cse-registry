# CSE-CIS-CONFIG-NO-NETWORK-SECURITY-002

**Network Infrastructure Security Configuration Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|--------------------------------------------|
| Identifier      | `CSE-CIS-CONFIG-NO-NETWORK-SECURITY-002`   |
| Domain          | CIS                                        |
| Category        | CONFIG                                     |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

Network infrastructure devices lack documented secure configurations or are not configured according to established security baselines and industry best practices.

This signal indicates that routers, switches, firewalls, and other network devices may have insecure default settings or inconsistent security configurations.

## Applicability

This signal applies to:

- Network routers and switches
- Firewalls and security appliances
- Wireless access points
- Load balancers
- VPN concentrators
- Network management systems
- SDN controllers

## Examples (Non-Normative)

### Router Without Secure Configuration

```text
# Cisco router with default settings
Router# show running-config
! No secure management configured
enable password cisco123
no service password-encryption
! SNMP with default community strings
snmp-server community public RO
```

### Switch Without Hardening

```text
# Switch without port security
Switch# show running-config
! No port security configured
! No DHCP snooping
! No dynamic ARP inspection
! Default VLAN in use
```

### Firewall Without Standard Configuration

```json
{
  "firewall_config": {
    "management_interface": "any",
    "admin_access": "0.0.0.0/0",
    "logging": "disabled",
    "firmware_version": "outdated",
    "baseline_reference": "none"
  }
}
```

## What This Signal Does NOT Assert

- Whether the configuration is exploitable
- The risk level of current settings
- Whether compensating controls exist
- Compliance or non-compliance with any framework
- Required remediation actions

## CIS Context (Informative)

This signal is relevant to:

- **CIS Control 04**: Secure Configuration of Enterprise Assets and Software
- **Safeguard 4.2**: Establish and Maintain a Secure Configuration Process for Network Infrastructure (IG1)
- **Asset Type**: Devices
- **Security Function**: Protect

## Related Signals

- `CSE-CIS-CONFIG-NO-SECURE-PROCESS-001` — Secure Configuration Process Missing
- `CSE-CIS-CONFIG-NO-DEFAULT-DENY-004` — Default Deny Firewall Rule Missing
