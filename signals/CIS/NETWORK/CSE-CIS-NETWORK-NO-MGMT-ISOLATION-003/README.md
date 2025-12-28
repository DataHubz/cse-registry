# CSE-CIS-NETWORK-NO-MGMT-ISOLATION-003

**Network Management Isolation Missing**

## Signal Overview

| Field           | Value                                          |
|-----------------|------------------------------------------------|
| Identifier      | `CSE-CIS-NETWORK-NO-MGMT-ISOLATION-003`        |
| Domain          | CIS                                            |
| Category        | NETWORK                                        |
| Status          | Active                                         |
| Introduced In   | 1.0.0                                          |

## Description

The organization lacks proper isolation of network infrastructure management interfaces from production networks and untrusted networks.

This signal indicates that network device management interfaces may be accessible from production networks or the internet, increasing the attack surface and risk of unauthorized access.

## Applicability

This signal applies to:

- Network device management interfaces
- Out-of-band management networks
- Jump servers and bastion hosts
- Administrative access controls
- Management VLAN configurations
- Remote access to network infrastructure
- Network segmentation policies
- Privileged access management systems

## Examples (Non-Normative)

### No Management Network Isolation

```yaml
findings:
  - Router and switch management accessible from production network
  - No dedicated management VLAN or out-of-band network
  - Administrative interfaces exposed to user networks
  - Management traffic mixed with production traffic
```

### Inadequate Access Controls

```yaml
findings:
  - Network device management accessible from internet
  - No jump server or bastion host for administrative access
  - Management interfaces reachable from workstation networks
  - Insufficient network-level access restrictions
```

### Missing Security Boundaries

```yaml
findings:
  - Firewall management on same network as protected systems
  - No separation between management and data planes
  - Administrative protocols not restricted to management subnet
  - Remote management without VPN or secure access gateway
```

## What This Signal Does NOT Assert

- Whether unauthorized access has occurred
- The security of specific network devices
- Compliance or non-compliance with any framework
- Required remediation actions
- The effectiveness of existing access controls

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 12.3**: Securely Manage Network Infrastructure (IG2)
- **Asset Type**: Network
- **Security Function**: Protect

**Control Description**: Securely manage network infrastructure. Example implementations include version-controlled-infrastructure-as-code, and the use of secure network protocols, such as SSH and HTTPS.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-NETWORK-NO-SECURE-CONFIG-002` - Secure Network Configuration Missing
- `CSE-CIS-NETWORK-NO-SEGMENTATION-005` - Network Segmentation Missing
- `CSE-CIS-ACCESS-NO-ROLE-BASED-006` - Role-Based Access Control Missing
