# CSE-CIS-NETWORK-NO-SEGMENTATION-005

**Network Segmentation Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|--------------------------------------------|
| Identifier      | `CSE-CIS-NETWORK-NO-SEGMENTATION-005`      |
| Domain          | CIS                                        |
| Category        | NETWORK                                    |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

The organization lacks proper network segmentation to isolate sensitive assets, critical systems, and different security zones from one another.

This signal indicates that a security breach in one part of the network could easily spread to other systems due to insufficient network boundaries and access controls.

## Applicability

This signal applies to:

- Network architecture and design
- VLAN configuration and management
- Firewall rules and access control lists
- Security zone definitions
- Micro-segmentation implementations
- Zero trust network architecture
- Cloud network security groups
- Industrial control system networks

## Examples (Non-Normative)

### Flat Network Architecture

```yaml
findings:
  - All systems on single network segment
  - No VLANs or security zones implemented
  - Workstations can directly access servers
  - No network-level access controls between systems
```

### Insufficient Segmentation

```yaml
findings:
  - Production and development environments on same network
  - Guest WiFi not isolated from corporate network
  - PCI systems accessible from general corporate network
  - Critical infrastructure mixed with general business systems
```

### Missing Security Boundaries

```yaml
findings:
  - No firewall rules between network segments
  - VLANs exist but traffic not filtered at boundaries
  - Cloud security groups allow unrestricted communication
  - IoT devices on same network as business systems
```

## What This Signal Does NOT Assert

- Whether a security breach has occurred
- The effectiveness of other security controls
- Compliance or non-compliance with any framework
- Required remediation actions
- The optimal network architecture design

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 12.5**: Centralize Network Authentication, Authorization, and Auditing (AAA) (IG2)
- **Asset Type**: Network
- **Security Function**: Protect

**Control Description**: Centralize network AAA. Example implementations include IEEE 802.1X, RADIUS, and TACACS+.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-NETWORK-NO-ARCHITECTURE-DIAGRAMS-004` - Network Architecture Diagrams Missing
- `CSE-CIS-NETWORK-NO-MGMT-ISOLATION-003` - Network Management Isolation Missing
- `CSE-CIS-DATA-NO-CLASSIFICATION-001` - Data Classification Missing
