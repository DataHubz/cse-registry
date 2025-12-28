# CSE-HITRUST-NETWORK-NO-PERIMETER-002

**Network Perimeter Controls Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-NETWORK-NO-PERIMETER-002` |
| Domain | HITRUST |
| Category | NETWORK |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Network perimeter security controls have not been implemented to protect systems handling protected health information (PHI) or other sensitive data from external threats.

This signal indicates the absence of security controls at network boundaries, including firewalls, intrusion prevention systems, or other perimeter defense mechanisms. Network perimeter controls are essential for preventing unauthorized access from external networks and the internet to systems processing sensitive health information.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Health information exchanges (HIEs)
- Medical device manufacturers
- Healthcare SaaS providers
- On-premises and hybrid cloud deployments

## Examples (Non-Normative)

### Missing Firewall Configuration

```yaml
# Network without perimeter firewall
network:
  perimeter:
    firewall: null
    ips: null
    waf: null
  internet_facing: true
  default_action: "allow"
```

### Direct Internet Exposure

```json
{
  "network_security": {
    "database_servers": {
      "internet_accessible": true,
      "firewall_protection": false,
      "public_ip": "203.0.113.45"
    },
    "perimeter_controls": "none"
  }
}
```

### Cloud Security Group Misconfiguration

```terraform
# AWS security group allowing all inbound traffic
resource "aws_security_group" "database" {
  name = "database-sg"

  ingress {
    from_port   = 0
    to_port     = 65535
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]  # No perimeter control
  }
}
```

## What This Signal Does NOT Assert

- Whether internal network controls are in place
- The quality or effectiveness of existing security measures
- Whether the organization is compliant or non-compliant with HITRUST
- The specific perimeter security technologies required
- Whether compensating controls exist

## HITRUST Context (Informative)

- **Control Domain**: 18 - Network Security
- **Control Reference**: 18.b
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for implementing network perimeter controls that:
- Establish security boundaries between trusted and untrusted networks
- Filter and inspect traffic at network entry/exit points
- Implement stateful packet inspection and deep packet inspection
- Prevent unauthorized access from external networks
- Log and monitor perimeter security events

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-NETWORK-NO-SEGMENTATION-001` - Network segmentation missing
- `CSE-HITRUST-NETWORK-NO-MONITORING-004` - Network monitoring missing
- `CSE-HITRUST-ACCESS-NO-REMOTE-ACCESS-CONTROL-008` - Remote access controls missing
- `CSE-HIPAA-TECH-NO-FIREWALL-001` - HIPAA firewall requirements (if defined)

## Notes

Detection of this signal typically involves:

- Review of firewall configurations and rule sets
- Analysis of network topology and perimeter defenses
- Examination of intrusion prevention/detection systems
- Assessment of cloud security group configurations
- Verification of web application firewall deployment
- Analysis of DMZ and screened subnet implementations

The presence of this signal indicates a critical gap in network perimeter security that exposes PHI systems to external threats and should be addressed immediately for HITRUST compliance.
