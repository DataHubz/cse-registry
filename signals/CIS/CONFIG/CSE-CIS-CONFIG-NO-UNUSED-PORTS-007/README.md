# CSE-CIS-CONFIG-NO-UNUSED-PORTS-007

**Unused Ports Not Disabled**

## Signal Overview

| Field           | Value                                 |
|-----------------|---------------------------------------|
| Identifier      | `CSE-CIS-CONFIG-NO-UNUSED-PORTS-007`  |
| Domain          | CIS                                   |
| Category        | CONFIG                                |
| Status          | Active                                |
| Introduced In   | 1.0.0                                 |

## Description

Network infrastructure devices and enterprise assets have unused physical and logical ports that remain enabled, creating unnecessary attack surface and potential entry points.

This signal indicates that systems may have active ports, services, and interfaces that are not required for business operations.

## Applicability

This signal applies to:

- Network switches and unused switch ports
- Router interfaces
- Server network interfaces
- USB ports on workstations
- Wireless interfaces when not needed
- Serial/console ports
- Application listening ports

## Examples (Non-Normative)

### Switch With All Ports Enabled

```text
# Switch with unused ports in active state
Switch# show interface status
Port      Status       Vlan
Gi1/0/1   connected    10
Gi1/0/2   connected    10
Gi1/0/3   notconnect   1    # Unused but enabled
Gi1/0/4   notconnect   1    # Unused but enabled
...
Gi1/0/48  notconnect   1    # Unused but enabled
```

### Server With Unnecessary Services

```bash
# Server with multiple listening ports
$ netstat -tuln
Active Internet connections
Proto  Local Address    State
tcp    0.0.0.0:22       LISTEN   # SSH - needed
tcp    0.0.0.0:23       LISTEN   # Telnet - not needed
tcp    0.0.0.0:80       LISTEN   # HTTP - needed
tcp    0.0.0.0:21       LISTEN   # FTP - not needed
tcp    0.0.0.0:3306     LISTEN   # MySQL - not needed on web server
```

### Workstation With Enabled Ports

```powershell
# USB ports not disabled
PS> Get-PnpDevice -Class USB | Where-Object {$_.Status -eq "OK"}

# All USB ports enabled including unused ones
# No policy to disable unused ports
```

## What This Signal Does NOT Assert

- Which specific ports should be disabled
- Whether enabled ports pose a security risk
- Whether compensating controls exist
- Compliance or non-compliance with any framework
- Required remediation actions

## CIS Context (Informative)

This signal is relevant to:

- **CIS Control 04**: Secure Configuration of Enterprise Assets and Software
- **Safeguard 4.7**: Manage Default Accounts on Enterprise Assets and Software (IG1)
- **Asset Type**: Devices
- **Security Function**: Protect

## Related Signals

- `CSE-CIS-CONFIG-NO-NETWORK-SECURITY-002` — Network Infrastructure Security Configuration Missing
- `CSE-CIS-CONFIG-NO-FIREWALL-CONFIG-003` — Host-Based Firewall Configuration Missing
