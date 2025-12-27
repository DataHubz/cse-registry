# CSE-ISO27001-TECH-NO-NETWORK-SECURITY-020

**Inadequate Networks Security**

## Signal Overview

| Field           | Value                                           |
|-----------------|-------------------------------------------------|
| Identifier      | `CSE-ISO27001-TECH-NO-NETWORK-SECURITY-020`     |
| Domain          | ISO27001                                        |
| Category        | TECH                                            |
| Status          | Active                                          |
| Introduced In   | 1.0.0                                           |

## Description

Networks and network devices are not secured, managed, and controlled to protect information.

This signal indicates that network infrastructure lacks appropriate security controls such as firewalls, intrusion detection/prevention, network access controls, secure configurations, or monitoring capabilities.

## Applicability

This signal applies to:

- Physical network infrastructure (routers, switches, firewalls)
- Virtual networks and software-defined networking (SDN)
- Cloud network configurations (VPCs, subnets, security groups)
- Wireless networks (Wi-Fi, Bluetooth, cellular)
- Network security appliances (IDS/IPS, firewalls, proxies)
- Load balancers and application delivery controllers
- VPN and remote access gateways
- Network segmentation and isolation controls
- DNS and DHCP infrastructure

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Default Firewall Configuration

```bash
# Firewall with permissive default rules
iptables -L
Chain INPUT (policy ACCEPT)
Chain FORWARD (policy ACCEPT)
Chain OUTPUT (policy ACCEPT)
# No filtering rules defined
```

### Cloud Security Group Allowing All Traffic

```hcl
# AWS security group with overly permissive rules
resource "aws_security_group" "default" {
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

### No Network Monitoring

```yaml
# Network without IDS/IPS or traffic monitoring
# No NetFlow, sFlow, or packet capture
# No SIEM integration for network events
network_monitoring:
  enabled: false
  ids_ips: none
  traffic_analysis: none
```

### Unsecured Network Device

```text
# Router/switch with default credentials
Router(config)# show running-config | include enable
enable password cisco123
# No encrypted management protocols (SSH disabled, Telnet enabled)
# No access control lists (ACLs) on management interfaces
```

### Wireless Network Without Security

```yaml
# Wi-Fi configuration without encryption
ssid: "CorporateNetwork"
security: "Open"
encryption: "None"
authentication: "None"
# No 802.1X, WPA3, or client isolation
```

## What This Signal Does NOT Assert

- Whether the configuration is intentional or accidental
- Whether compensating controls exist elsewhere
- The likelihood or impact of network-based attacks
- Compliance or non-compliance with ISO 27001 or any framework
- Required remediation actions

## ISO 27001:2022 Context (Informative)

This signal is relevant to:

- **A.8.20**: Networks security - Networks and network devices should be secured, managed and controlled to protect information in systems and applications

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-ISO27001-TECH-NO-NETWORK-SEGREGATION-022` — Lack of network segregation
- `CSE-ISO27001-TECH-NO-NETWORK-SERVICE-SECURITY-021` — Insecure network services
- `CSE-ISO27001-TECH-NO-LOGGING-MONITORING-015` — Insufficient logging and monitoring

## Notes

Detection of this signal typically involves:

- Review of firewall configurations and rule sets
- Analysis of cloud security groups and network ACLs
- Inspection of network device configurations
- Assessment of network monitoring and IDS/IPS deployment
- Examination of network segmentation architecture
- Review of wireless network security configurations
- Evaluation of network access control mechanisms

The presence of this signal indicates a condition that warrants review in the context of network security requirements.
