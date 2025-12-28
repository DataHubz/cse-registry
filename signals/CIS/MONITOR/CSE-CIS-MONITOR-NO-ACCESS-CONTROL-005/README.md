# CSE-CIS-MONITOR-NO-ACCESS-CONTROL-005

**Network Access Control Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-MONITOR-NO-ACCESS-CONTROL-005` |
| Domain          | CIS                                |
| Category        | MONITOR                            |
| Control         | 13 - Network Monitoring and Defense|
| Safeguard       | 13.5                               |
| IG Level        | IG2                                |
| Asset Type      | Network                            |
| Security Function | Detect                           |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

The organization lacks network access control (NAC) capabilities to manage and enforce device authentication and authorization before granting network access.

This signal indicates that there is no systematic method to verify device compliance, identity, or security posture before allowing network connectivity, potentially exposing the network to unauthorized or compromised devices.

## Applicability

This signal applies to:

- Wired and wireless network access points
- Enterprise network infrastructure
- Device authentication and authorization
- Network segmentation enforcement
- BYOD (Bring Your Own Device) policies
- Guest network access management
- IoT device network connectivity

## Examples (Non-Normative)

### No NAC Deployment

```
Network environment with:
- No 802.1X authentication
- No device posture assessment
- No pre-admission controls
- Open network access
```

### Missing NAC Infrastructure

```yaml
# No NAC configuration present
network_security:
  nac_enabled: false
  device_authentication: none
  posture_assessment: disabled
  admission_control: absent
  compliance_checking: false
```

### Unrestricted Network Access

```
Organization allows:
- Any device to connect
- No identity verification
- No security compliance checks
- No quarantine capabilities
- Flat network architecture
```

### Access Control Not Implemented

```
Network infrastructure lacks:
- Device registration processes
- Authentication mechanisms
- Authorization policies
- Post-admission monitoring
- Dynamic VLAN assignment
- Remediation workflows
```

## What This Signal Does NOT Assert

- Whether firewalls or other security controls exist
- The effectiveness of existing access controls
- Whether unauthorized access has occurred
- Compliance or non-compliance with any framework
- Required remediation actions
- The specific NAC technology required

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 13: Network Monitoring and Defense**
- **Safeguard 13.5**: Manage access control for remote assets

## Related Signals

- `CSE-CIS-MONITOR-NO-DEVICE-MGMT-006` — Remote Device Management Missing
- `CSE-CIS-ACCESS-NO-MFA-EXTERNAL-003` — Multi-Factor Authentication Missing for External Access
- `CSE-CIS-CONFIG-NO-NETWORK-SECURITY-002` — Network Security Configuration Missing
