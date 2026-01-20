# CSE-CMMC-IDENTITY-NO-DEVICE-AUTH-004

**Device Authentication Not Required**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CMMC-IDENTITY-NO-DEVICE-AUTH-004`   |
| Domain          | CMMC                                     |
| Category        | IDENTITY                                 |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Devices connecting to the network or systems are not required to authenticate or prove their identity before being granted access.

This signal indicates that network access decisions are not based on verified device identity.

## Applicability

This signal applies to:

- Network access control (NAC) systems
- Wireless network authentication (802.1X)
- VPN and remote access gateways
- Conditional access policies
- Zero trust network architectures
- IoT device onboarding
- Certificate-based device authentication

## Examples (Non-Normative)

### Wireless Network Without 802.1X

```
# Open or PSK-only wireless configuration
security-mode: wpa2-psk
authentication: none
```

### VPN Without Device Certificate

```
# OpenVPN client config without certificate requirement
auth-user-pass
# Missing: cert client.crt / key client.key
```

### Conditional Access Without Device Compliance

```json
{
  "conditions": {
    "deviceStates": {
      "deviceComplianceState": "notConfigured"
    }
  },
  "grantControls": {
    "builtInControls": ["block"]
  }
}
```

### Network Switch Without Port Security

```
interface GigabitEthernet0/1
  ! No 802.1X or MAC authentication
  switchport mode access
  switchport access vlan 10
```

## What This Signal Does NOT Assert

- Whether unmanaged devices are actively connecting
- The sensitivity of accessible network resources
- Whether network segmentation provides compensation
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **IA.L2-3.5.1**: Identify system users, processes acting on behalf of users, and devices
- **IA.L2-3.5.2**: Authenticate (or verify) the identities of users, processes, or devices as a prerequisite to allowing access to organizational systems

## Related Signals

- `CSE-CMMC-IDENTITY-NO-MFA-001` — Multi-Factor Authentication Not Enabled
- `CSE-CMMC-ACCESS-REMOTE-NO-CONTROL-004` — Remote Access Without Monitoring or Control
