# CSE-CMMC-ACCESS-REMOTE-NO-CONTROL-004

**Remote Access Without Monitoring or Control**

## Signal Overview

| Field           | Value                                      |
|-----------------|--------------------------------------------|
| Identifier      | `CSE-CMMC-ACCESS-REMOTE-NO-CONTROL-004`    |
| Domain          | CMMC                                       |
| Category        | ACCESS                                     |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

Remote access to systems is permitted without mechanisms for monitoring, controlling, or restricting such connections.

This signal indicates that remote access pathways exist without visibility into connection activity or the ability to enforce access policies.

## Applicability

This signal applies to:

- VPN gateways and concentrators
- Remote Desktop Protocol (RDP) services
- SSH access to servers and infrastructure
- Cloud management consoles and APIs
- Remote administration tools (TeamViewer, AnyDesk, etc.)
- Bastion hosts and jump servers
- API endpoints accessible from external networks

## Examples (Non-Normative)

### SSH Without Logging Enabled

```
# /etc/ssh/sshd_config
LogLevel QUIET
```

### VPN Without Session Logging

```
# OpenVPN configuration without status logging
; status openvpn-status.log
; log-append /var/log/openvpn.log
```

### Cloud API Access Without Audit Trail

```json
{
  "cloudtrail": {
    "enabled": false
  }
}
```

### Firewall Allowing RDP from Any Source

```hcl
resource "aws_security_group_rule" "rdp" {
  type        = "ingress"
  from_port   = 3389
  to_port     = 3389
  protocol    = "tcp"
  cidr_blocks = ["0.0.0.0/0"]
}
```

## What This Signal Does NOT Assert

- Whether remote access is actively being abused
- Whether network segmentation provides isolation
- The volume or sensitivity of data accessible remotely
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **AC.L2-3.1.12**: Monitor and control remote access sessions
- **AC.L2-3.1.14**: Route remote access via managed access control points
- **AC.L2-3.1.15**: Authorize remote execution of privileged commands and remote access to security-relevant information

## Related Signals

- `CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001` — Unrestricted Administrative Access
- `CSE-CMMC-AUDIT-NO-LOGGING-001` — Audit Logging Not Enabled (if defined)
