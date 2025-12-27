# CSE-ISO27001-TECH-NO-NETWORK-SEGREGATION-022

**Lack of Network Segregation**

## Signal Overview

| Field           | Value                                               |
|-----------------|-----------------------------------------------------|
| Identifier      | `CSE-ISO27001-TECH-NO-NETWORK-SEGREGATION-022`      |
| Domain          | ISO27001                                            |
| Category        | TECH                                                |
| Status          | Active                                              |
| Introduced In   | 1.0.0                                               |

## Description

Groups of information services, users, and systems are not segregated in networks.

This signal indicates that network segmentation is not implemented to separate different security zones, business functions, or trust levels, potentially allowing unrestricted lateral movement and access.

## Applicability

This signal applies to:

- Physical network VLANs and subnets
- Virtual networks and software-defined networks
- Cloud VPCs, subnets, and security groups
- Production, development, and test environment networks
- User workstation and server networks
- DMZ and internal network zones
- IoT and operational technology networks
- Wireless and guest networks
- Multi-tenant environments

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Flat Network Architecture

```text
# Single subnet for all systems
Network: 10.0.0.0/16
- Workstations: 10.0.1.0/24
- Servers: 10.0.2.0/24
- Databases: 10.0.3.0/24
- Development: 10.0.4.0/24

# No firewall rules between subnets
# All systems can communicate freely
```

### Cloud VPC Without Segmentation

```hcl
# AWS VPC with single security group
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_security_group" "allow_all" {
  vpc_id = aws_vpc.main.id

  ingress {
    from_port   = 0
    to_port     = 65535
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/16"]
  }
}
```

### No Environment Separation

```yaml
# Kubernetes cluster mixing environments
apiVersion: v1
kind: Namespace
metadata:
  name: default
# Production, staging, and dev in same namespace
# No NetworkPolicies enforcing isolation
```

### Production and Development on Same Network

```text
# Network diagram showing:
Production Database Server: 192.168.1.10
Development Database Server: 192.168.1.11
Production Web Server: 192.168.1.20
Developer Workstations: 192.168.1.50-100

# All on same /24 subnet with no VLAN separation
# No access controls between production and development
```

### Missing DMZ Segregation

```text
# Internet-facing services in internal network
Internet -> Router -> Internal Network
  - Web Servers: 10.0.1.0/24
  - Application Servers: 10.0.1.0/24
  - Database Servers: 10.0.1.0/24
  - User Workstations: 10.0.1.0/24

# No DMZ, all systems accessible from same network
```

## What This Signal Does NOT Assert

- Whether the configuration is intentional or accidental
- Whether compensating controls exist elsewhere
- The likelihood or impact of lateral movement attacks
- Compliance or non-compliance with ISO 27001 or any framework
- Required remediation actions

## ISO 27001:2022 Context (Informative)

This signal is relevant to:

- **A.8.22**: Segregation of networks - Groups of information services, users and information systems should be segregated in the organization's networks

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-ISO27001-TECH-NO-NETWORK-SECURITY-020` — Inadequate network security
- `CSE-ISO27001-TECH-NO-ENV-SEPARATION-031` — Lack of environment separation
- `CSE-ISO27001-TECH-NO-ACCESS-CONTROL-008` — Missing access controls

## Notes

Detection of this signal typically involves:

- Review of network architecture and topology diagrams
- Analysis of VLAN and subnet configurations
- Inspection of firewall rules and security group policies
- Assessment of network access control lists (ACLs)
- Examination of micro-segmentation implementations
- Review of cloud network isolation mechanisms
- Evaluation of inter-zone communication policies

The presence of this signal indicates a condition that warrants review in the context of network segregation requirements.
