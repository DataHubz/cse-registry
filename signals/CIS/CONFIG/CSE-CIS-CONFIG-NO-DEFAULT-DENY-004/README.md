# CSE-CIS-CONFIG-NO-DEFAULT-DENY-004

**Default Deny Firewall Rule Missing**

## Signal Overview

| Field           | Value                                  |
|-----------------|----------------------------------------|
| Identifier      | `CSE-CIS-CONFIG-NO-DEFAULT-DENY-004`   |
| Domain          | CIS                                    |
| Category        | CONFIG                                 |
| Status          | Active                                 |
| Introduced In   | 1.0.0                                  |

## Description

Firewalls and filtering systems do not implement a default deny rule, allowing traffic that is not explicitly permitted rather than blocking all traffic except what is specifically allowed.

This signal indicates that network traffic control follows a permissive rather than restrictive security model.

## Applicability

This signal applies to:

- Host-based firewalls
- Network firewalls and ACLs
- Security groups (cloud environments)
- Web application firewalls
- Packet filtering systems
- Network access control lists
- Endpoint protection platforms

## Examples (Non-Normative)

### Firewall With Default Allow

```bash
# iptables with ACCEPT policy
$ sudo iptables -L -n
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
ACCEPT     tcp  --  0.0.0.0/0           0.0.0.0/0           tcp dpt:22
ACCEPT     tcp  --  0.0.0.0/0           0.0.0.0/0           tcp dpt:80
# No explicit DROP rule at end
```

### Security Group Without Deny

```hcl
# AWS security group without default deny (implicit)
resource "aws_security_group" "example" {
  name = "example"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Missing explicit egress rules - defaults to allow all
}
```

### Windows Firewall Default Allow

```powershell
# Windows Firewall with permissive default
PS> Get-NetFirewallProfile | Select-Object Name, DefaultInboundAction

Name      DefaultInboundAction
----      --------------------
Domain    Allow
Private   Allow
Public    Allow
```

## What This Signal Does NOT Assert

- Whether current allow rules are appropriate
- The specific deny rules that should be implemented
- Whether compensating controls exist
- Compliance or non-compliance with any framework
- Required remediation actions

## CIS Context (Informative)

This signal is relevant to:

- **CIS Control 04**: Secure Configuration of Enterprise Assets and Software
- **Safeguard 4.4**: Implement and Manage a Firewall on Servers (IG1)
- **Asset Type**: Devices
- **Security Function**: Protect

## Related Signals

- `CSE-CIS-CONFIG-NO-FIREWALL-CONFIG-003` — Host-Based Firewall Configuration Missing
- `CSE-CIS-CONFIG-NO-NETWORK-SECURITY-002` — Network Infrastructure Security Configuration Missing
