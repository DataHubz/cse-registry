# CSE-CIS-NETWORK-NO-INFRASTRUCTURE-INVENTORY-001

**Network Infrastructure Inventory Missing**

## Signal Overview

| Field           | Value                                                |
|-----------------|------------------------------------------------------|
| Identifier      | `CSE-CIS-NETWORK-NO-INFRASTRUCTURE-INVENTORY-001`    |
| Domain          | CIS                                                  |
| Category        | NETWORK                                              |
| Status          | Active                                               |
| Introduced In   | 1.0.0                                                |

## Description

The organization lacks a comprehensive inventory of network infrastructure devices including routers, switches, firewalls, and other network equipment.

This signal indicates that the organization cannot maintain visibility into all network devices, their configurations, or their security posture without a complete and accurate inventory.

## Applicability

This signal applies to:

- Network routers and switches
- Firewalls and security appliances
- Load balancers
- Network access points
- VPN concentrators
- Network management systems
- Infrastructure monitoring tools
- Asset management databases

## Examples (Non-Normative)

### No Network Device Inventory

```yaml
findings:
  - No centralized database of network infrastructure devices
  - Unknown number of switches and routers deployed
  - Missing documentation of firewall appliances
  - Network devices discovered during incident response
```

### Incomplete Infrastructure Documentation

```yaml
findings:
  - Inventory only covers primary data center equipment
  - Remote office network devices not tracked
  - Legacy equipment not documented
  - No inventory of wireless access points
```

### Missing Device Attributes

```yaml
findings:
  - Device inventory lacks firmware versions
  - No tracking of device IP addresses or locations
  - Missing information on device owners or administrators
  - Configuration baseline information not maintained
```

## What This Signal Does NOT Assert

- Whether network devices are secure or compromised
- The quality or capabilities of network infrastructure
- Compliance or non-compliance with any framework
- Required remediation actions
- The effectiveness of network monitoring

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 12.1**: Ensure Network Infrastructure is Up-to-Date (IG1)
- **Asset Type**: Network
- **Security Function**: Protect

**Control Description**: Maintain an up-to-date inventory of network infrastructure to identify devices that should be removed, replaced, or updated.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-NETWORK-NO-SECURE-CONFIG-002` - Secure Network Configuration Missing
- `CSE-CIS-NETWORK-NO-ARCHITECTURE-DIAGRAMS-004` - Network Architecture Diagrams Missing
- `CSE-CIS-ASSET-NO-INVENTORY-001` - Asset Inventory Missing
