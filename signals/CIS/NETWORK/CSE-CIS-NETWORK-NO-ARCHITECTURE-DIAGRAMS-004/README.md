# CSE-CIS-NETWORK-NO-ARCHITECTURE-DIAGRAMS-004

**Network Architecture Diagrams Missing**

## Signal Overview

| Field           | Value                                              |
|-----------------|----------------------------------------------------|
| Identifier      | `CSE-CIS-NETWORK-NO-ARCHITECTURE-DIAGRAMS-004`     |
| Domain          | CIS                                                |
| Category        | NETWORK                                            |
| Status          | Active                                             |
| Introduced In   | 1.0.0                                              |

## Description

The organization lacks current and accurate network architecture diagrams that document the logical and physical topology of the network infrastructure.

This signal indicates that understanding network data flows, security boundaries, and infrastructure dependencies may be difficult without proper documentation.

## Applicability

This signal applies to:

- Network topology documentation
- Network architecture diagrams
- Data flow diagrams
- Security zone mappings
- VLAN and subnet documentation
- Network infrastructure documentation
- Disaster recovery planning
- Security architecture reviews

## Examples (Non-Normative)

### No Network Diagrams

```yaml
findings:
  - No documented network topology or architecture
  - Network design exists only in institutional knowledge
  - Infrastructure changes not reflected in documentation
  - Diagrams created for specific projects but not maintained
```

### Outdated Documentation

```yaml
findings:
  - Network diagrams last updated over two years ago
  - Recent infrastructure changes not documented
  - Cloud environments not included in architecture diagrams
  - Remote office networks missing from documentation
```

### Incomplete Architecture Information

```yaml
findings:
  - Physical topology documented but logical segmentation missing
  - Security zones not clearly defined in diagrams
  - Data flow paths not documented
  - Critical infrastructure dependencies not mapped
```

## What This Signal Does NOT Assert

- Whether the network architecture is secure
- The quality of network design decisions
- Compliance or non-compliance with any framework
- Required remediation actions
- The effectiveness of network security controls

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 12.4**: Establish and Maintain Architecture Diagram(s) (IG2)
- **Asset Type**: Network
- **Security Function**: Protect

**Control Description**: Establish and maintain architecture diagram(s) and/or other network system documentation. Review and update documentation annually, or when significant enterprise changes occur that could impact this Safeguard.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-NETWORK-NO-INFRASTRUCTURE-INVENTORY-001` - Network Infrastructure Inventory Missing
- `CSE-CIS-NETWORK-NO-SEGMENTATION-005` - Network Segmentation Missing
- `CSE-CIS-ASSET-NO-INVENTORY-001` - Asset Inventory Missing
