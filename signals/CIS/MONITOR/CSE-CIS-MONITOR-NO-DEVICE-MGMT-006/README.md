# CSE-CIS-MONITOR-NO-DEVICE-MGMT-006

**Remote Device Management Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-MONITOR-NO-DEVICE-MGMT-006` |
| Domain          | CIS                                |
| Category        | MONITOR                            |
| Control         | 13 - Network Monitoring and Defense|
| Safeguard       | 13.6                               |
| IG Level        | IG2                                |
| Asset Type      | Network                            |
| Security Function | Detect                           |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

The organization lacks centralized management capabilities for remote and mobile devices accessing the network.

This signal indicates that there is no systematic approach to monitor, manage, and enforce security policies on devices that connect remotely or from untrusted networks, potentially creating security gaps in endpoint protection and compliance.

## Applicability

This signal applies to:

- Remote workforce devices (laptops, workstations)
- Mobile devices (smartphones, tablets)
- Mobile device management (MDM) platforms
- Endpoint management systems
- Remote access security
- BYOD (Bring Your Own Device) programs
- Telecommuter security controls

## Examples (Non-Normative)

### No Remote Device Management

```
Organization with:
- No mobile device management (MDM)
- No endpoint management platform
- No remote policy enforcement
- Unmanaged remote devices
```

### Missing MDM Infrastructure

```yaml
# No device management configured
device_management:
  mdm_deployed: false
  endpoint_management: none
  remote_monitoring: disabled
  policy_enforcement: absent
  device_inventory: incomplete
```

### Unmanaged Remote Access

```
Organization allows:
- Personal devices without controls
- No security baseline enforcement
- No remote device visibility
- No compliance verification
- Self-managed security configurations
```

### Device Management Not Implemented

```
Remote security lacks:
- Centralized device registration
- Configuration management
- Security policy distribution
- Remote wipe capabilities
- Device compliance monitoring
- Application control
```

## What This Signal Does NOT Assert

- Whether remote access is permitted
- The effectiveness of existing endpoint security
- Whether security incidents have occurred
- Compliance or non-compliance with any framework
- Required remediation actions
- The specific MDM platform required

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 13: Network Monitoring and Defense**
- **Safeguard 13.6**: Collect network traffic flow logs

## Related Signals

- `CSE-CIS-MONITOR-NO-ACCESS-CONTROL-005` — Network Access Control Missing
- `CSE-CIS-CONFIG-NO-REMOTE-WIPE-006` — Remote Wipe Capability Missing
- `CSE-CIS-ASSET-NO-MOBILE-INVENTORY-004` — Mobile Device Inventory Missing
