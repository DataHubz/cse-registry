# CSE-CIS-SOFTWARE-NO-ALLOWLISTING-005

**Software Allowlisting Not Implemented**

## Signal Overview

| Field           | Value                                      |
|-----------------|--------------------------------------------|
| Identifier      | `CSE-CIS-SOFTWARE-NO-ALLOWLISTING-005`     |
| Domain          | CIS                                        |
| Category        | SOFTWARE                                   |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

An organization does not use application allowlisting technology to prevent the execution of unauthorized software on enterprise assets.

This signal indicates that while authorized software lists may exist, there are no technical controls enforcing those policies at the execution level, allowing any software to run regardless of authorization status.

## Applicability

This signal applies to:

- Enterprise workstations and laptops
- Servers (physical and virtual)
- Privileged access workstations
- Critical infrastructure systems
- Point-of-sale systems
- Industrial control systems
- Medical devices with computing capabilities
- Kiosks and dedicated-purpose devices

## Examples (Non-Normative)

### No AppLocker Configuration

```powershell
# Windows system without AppLocker policies
Get-AppLockerPolicy -Effective
# No policies returned

# Application control not enabled
Get-Service -Name AppIDSvc
# Status: Stopped
```

### Missing Linux Application Control

```bash
# No SELinux application control
$ getenforce
Disabled

# No AppArmor profiles enforced
$ aa-status
0 profiles are loaded.
0 profiles are in enforce mode.
```

### No macOS Gatekeeper Enforcement

```bash
# Gatekeeper disabled
$ spctl --status
assessments disabled

# No application restrictions
$ defaults read /Library/Preferences/com.apple.security.GKE
# Domain com.apple.security.GKE does not exist
```

## What This Signal Does NOT Assert

- Whether unauthorized software is currently running
- The specific allowlisting technology to be used
- Compliance or non-compliance with any framework
- Exceptions or exclusions from allowlisting
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 2 - Inventory and Control of Software Assets**
- **Safeguard 2.5**: Use technical controls, such as application allowlisting, to ensure that only authorized software can execute or be accessed. Reassess bi-annually, or more frequently.
- **Implementation Group**: IG2
- **Asset Type**: Applications
- **Security Function**: Identify

## Related Signals

- `CSE-CIS-SOFTWARE-NO-AUTHORIZED-LIST-002` — Authorized Software List Missing
- `CSE-CIS-SOFTWARE-NO-UNAUTHORIZED-DETECTION-003` — Unauthorized Software Detection Missing
- `CSE-CIS-SOFTWARE-NO-ALLOWLISTING-LIBRARIES-006` — Library Allowlisting Not Implemented
- `CSE-CIS-SOFTWARE-NO-ALLOWLISTING-SCRIPTS-007` — Script Allowlisting Not Implemented
