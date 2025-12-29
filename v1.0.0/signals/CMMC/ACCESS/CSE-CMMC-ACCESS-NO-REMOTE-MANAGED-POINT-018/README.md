# CSE-CMMC-ACCESS-NO-REMOTE-MANAGED-POINT-018

**Remote Access Not Through Managed Access Points**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ACCESS-NO-REMOTE-MANAGED-POINT-018` |
| Domain | CMMC |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Remote access to organizational systems does not route through managed network access control points.

This signal indicates that remote connections may bypass security monitoring, filtering, and access controls.

## Applicability

- VPN gateway configurations
- Remote desktop services
- Jump server/bastion host setup
- Cloud access security brokers
- Remote access architecture

## Examples (Non-Normative)

### Direct Remote Access Without VPN

```
Remote Desktop:
  Direct Internet Exposure: true
  VPN Required: false
  Jump Server: not used
```

### Bypassed Access Point

```hcl
# Direct SSH access without bastion
resource "aws_security_group_rule" "ssh" {
  type        = "ingress"
  from_port   = 22
  to_port     = 22
  cidr_blocks = ["0.0.0.0/0"]  # Should require VPN
}
```

## CMMC Context (Informative)

- **AC.L2-3.1.14**: Route remote access via managed access control points

## Related Signals

- `CSE-CMMC-ACCESS-NO-REMOTE-SESSION-CONTROL-003`
- `CSE-CMMC-COMMS-NO-BOUNDARY-PROTECTION-002`
