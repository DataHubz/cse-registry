# CSE-CIS-CONFIG-NO-FIREWALL-CONFIG-003

**Host-Based Firewall Configuration Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-CONFIG-NO-FIREWALL-CONFIG-003`  |
| Domain          | CIS                                      |
| Category        | CONFIG                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Enterprise assets do not have host-based firewalls configured or enabled, or firewall configurations are not standardized across the organization.

This signal indicates that individual systems may lack endpoint-level network protection and traffic filtering capabilities.

## Applicability

This signal applies to:

- Windows workstations and servers
- Linux/Unix systems
- macOS endpoints
- Virtual machines
- Cloud instances
- Container hosts
- Mobile devices with firewall capabilities

## Examples (Non-Normative)

### Windows Firewall Disabled

```powershell
# Windows Firewall status check
PS> Get-NetFirewallProfile | Select-Object Name, Enabled

Name      Enabled
----      -------
Domain    False
Private   False
Public    False
```

### Linux Without Firewall Rules

```bash
# iptables not configured
$ sudo iptables -L -n
Chain INPUT (policy ACCEPT)
target     prot opt source               destination

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
```

### Cloud Instance Without Security Groups

```hcl
# EC2 instance without firewall configuration
resource "aws_instance" "web" {
  ami           = "ami-12345678"
  instance_type = "t3.micro"
  # No security group specified
  # No host-based firewall configured
}
```

## What This Signal Does NOT Assert

- Whether network-level firewalls provide protection
- The appropriate firewall rules for the environment
- Whether compensating controls exist
- Compliance or non-compliance with any framework
- Required remediation actions

## CIS Context (Informative)

This signal is relevant to:

- **CIS Control 04**: Secure Configuration of Enterprise Assets and Software
- **Safeguard 4.3**: Configure Automatic Session Locking on Enterprise Assets (IG1)
- **Asset Type**: Devices
- **Security Function**: Protect

## Related Signals

- `CSE-CIS-CONFIG-NO-DEFAULT-DENY-004` — Default Deny Firewall Rule Missing
- `CSE-CIS-CONFIG-NO-UNUSED-PORTS-007` — Unused Ports Not Disabled
