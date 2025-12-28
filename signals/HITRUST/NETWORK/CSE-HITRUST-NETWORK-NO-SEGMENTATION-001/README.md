# CSE-HITRUST-NETWORK-NO-SEGMENTATION-001

**Network Segmentation Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-NETWORK-NO-SEGMENTATION-001` |
| Domain | HITRUST |
| Category | NETWORK |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Network segmentation controls have not been implemented to separate systems handling protected health information (PHI) or other sensitive data from less secure network zones.

This signal indicates the absence of network segmentation that isolates critical systems, databases, and applications processing sensitive health information from general-purpose networks, guest networks, or untrusted zones. Proper network segmentation reduces the attack surface and limits lateral movement in the event of a security breach.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Health information exchanges (HIEs)
- Medical device manufacturers
- Healthcare SaaS providers
- Cloud-based healthcare platforms

## Examples (Non-Normative)

### Flat Network Architecture

```yaml
# Network lacks segmentation between zones
network:
  architecture: "flat"
  segments:
    production:
      vlan: null
      isolation: false
    dmz: null
    management: null
  firewall_rules: []
```

### Missing VLAN Segmentation

```json
{
  "network_config": {
    "all_systems_same_subnet": true,
    "vlans_defined": false,
    "phi_systems": ["db-server", "app-server"],
    "guest_wifi": "same-network",
    "isolation": "none"
  }
}
```

### Cloud Environment Without Network Isolation

```terraform
# AWS VPC without proper subnet segmentation
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_subnet" "default" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.0.0/16"
  # All resources in single subnet - no segmentation
}
```

## What This Signal Does NOT Assert

- Whether firewalls or other security controls are in place
- The quality or effectiveness of existing network controls
- Whether the organization is compliant or non-compliant with HITRUST
- The specific segmentation architecture required
- Whether compensating controls exist

## HITRUST Context (Informative)

- **Control Domain**: 18 - Network Security
- **Control Reference**: 18.a
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for implementing network segmentation that:
- Separates systems based on data sensitivity and criticality
- Isolates PHI processing environments from general networks
- Implements defense-in-depth architecture
- Reduces attack surface and lateral movement risks
- Controls data flows between network segments

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-NETWORK-NO-PERIMETER-002` - Network perimeter controls missing
- `CSE-HITRUST-NETWORK-NO-MONITORING-004` - Network monitoring missing
- `CSE-HITRUST-ACCESS-NO-SEGREGATION-009` - Access segregation not implemented
- `CSE-HIPAA-TECH-NO-NETWORK-CONTROLS-001` - HIPAA network requirements (if defined)

## Notes

Detection of this signal typically involves:

- Review of network architecture diagrams and documentation
- Analysis of VLAN configurations and subnet designs
- Examination of firewall rules and access control lists
- Assessment of cloud network configurations (VPCs, security groups)
- Verification of micro-segmentation implementation
- Analysis of network zone definitions and boundaries

The presence of this signal indicates a critical gap in network security architecture that increases risk of unauthorized access to PHI and should be addressed as a priority for HITRUST compliance.
