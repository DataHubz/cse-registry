# CSE-CMMC-COMMS-NO-BOUNDARY-PROTECTION-003

**Network Boundary Protection Not Implemented**

## Signal Overview

| Field           | Value                                          |
|-----------------|------------------------------------------------|
| Identifier      | `CSE-CMMC-COMMS-NO-BOUNDARY-PROTECTION-003`    |
| Domain          | CMMC                                           |
| Category        | COMMS                                          |
| Status          | Active                                         |
| Introduced In   | 1.0.0                                          |

## Description

Communications at system and network boundaries are not monitored or controlled.

This signal indicates that traffic entering or leaving security domains is not subject to inspection, filtering, or access controls.

## Applicability

This signal applies to:

- Network perimeter firewalls
- Cloud VPC and security groups
- Network ACLs
- Web application firewalls
- API gateways
- Egress filtering
- Network segmentation boundaries
- Zero trust network architectures

## Examples (Non-Normative)

### Security Group Allowing All Traffic

```hcl
resource "aws_security_group" "open" {
  ingress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
```

### VPC Without Network ACLs

```json
{
  "NetworkAcls": [{
    "Entries": [{
      "RuleAction": "allow",
      "CidrBlock": "0.0.0.0/0",
      "Protocol": "-1"
    }]
  }]
}
```

### No Egress Filtering

```
# Firewall with no outbound restrictions
iptables -P OUTPUT ACCEPT
# No egress rules defined
```

### Flat Network Without Segmentation

```
# All systems on same network segment
# No VLANs, no microsegmentation
# Internal traffic not filtered
```

## What This Signal Does NOT Assert

- Whether attacks have traversed boundaries
- Whether internal threats exist
- The sensitivity of exposed systems
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **SC.L2-3.13.1**: Monitor, control, and protect communications (i.e., information transmitted or received by organizational systems) at the external boundaries and key internal boundaries of organizational systems
- **SC.L2-3.13.5**: Implement subnetworks for publicly accessible system components that are physically or logically separated from internal networks
- **SC.L2-3.13.6**: Deny network communications traffic by default and allow network communications traffic by exception (i.e., deny all, permit by exception)

## Related Signals

- `CSE-CMMC-ACCESS-REMOTE-NO-CONTROL-004` — Remote Access Without Monitoring or Control
- `CSE-CMMC-COMMS-NO-ENCRYPTION-TRANSIT-001` — Data Not Encrypted in Transit
