# CSE-CMMC-CONFIG-UNNECESSARY-SERVICES-004

**Unnecessary Services or Functions Enabled**

## Signal Overview

| Field           | Value                                        |
|-----------------|----------------------------------------------|
| Identifier      | `CSE-CMMC-CONFIG-UNNECESSARY-SERVICES-004`   |
| Domain          | CMMC                                         |
| Category        | CONFIG                                       |
| Status          | Active                                       |
| Introduced In   | 1.0.0                                        |

## Description

Systems have services, ports, protocols, or functions enabled that are not required for the system's intended purpose.

This signal indicates that the attack surface includes components that could be removed or disabled to reduce risk.

## Applicability

This signal applies to:

- Network services and listening ports
- Installed software packages
- Operating system features and roles
- Cloud service features
- API endpoints
- Legacy protocols (Telnet, FTP, SMBv1)
- Debugging and development interfaces

## Examples (Non-Normative)

### Unnecessary Network Services

```bash
$ netstat -tlnp
tcp  0  0  0.0.0.0:21    0.0.0.0:*  LISTEN  ftp
tcp  0  0  0.0.0.0:23    0.0.0.0:*  LISTEN  telnet
tcp  0  0  0.0.0.0:111   0.0.0.0:*  LISTEN  rpcbind
```

### Legacy Protocols Enabled

```powershell
# SMBv1 still enabled on Windows
Get-WindowsOptionalFeature -Online -FeatureName SMB1Protocol
State : Enabled
```

### Unused Software Installed

```bash
# Development tools on production server
$ dpkg -l | grep -E "(gcc|make|gdb)"
ii  gcc   ...
ii  make  ...
ii  gdb   ...
```

### Cloud Services with Excess Features

```json
{
  "publicAccessBlockConfiguration": {
    "blockPublicAcls": false,
    "blockPublicPolicy": false
  }
}
```

## What This Signal Does NOT Assert

- Whether unnecessary services are being exploited
- The business justification for services
- Whether services are adequately protected
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **CM.L2-3.4.6**: Employ the principle of least functionality by configuring organizational systems to provide only essential capabilities
- **CM.L2-3.4.7**: Restrict, disable, or prevent the use of nonessential programs, functions, ports, protocols, and services
- **CM.L2-3.4.8**: Apply deny-by-exception (blacklisting) policy to prevent the use of unauthorized software or deny-all, permit-by-exception (whitelisting) policy to allow the execution of authorized software

## Related Signals

- `CSE-CMMC-CONFIG-NO-BASELINE-001` — Security Configuration Baseline Not Defined
- `CSE-CMMC-CONFIG-INSECURE-DEFAULTS-003` — Insecure Default Configuration
