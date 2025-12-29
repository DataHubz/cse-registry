# CSE-CIS-CONFIG-NO-REMOTE-WIPE-006

**Remote Wipe Capability Missing**

## Signal Overview

| Field           | Value                                 |
|-----------------|---------------------------------------|
| Identifier      | `CSE-CIS-CONFIG-NO-REMOTE-WIPE-006`   |
| Domain          | CIS                                   |
| Category        | CONFIG                                |
| Status          | Active                                |
| Introduced In   | 1.0.0                                 |

## Description

Mobile devices and portable enterprise assets lack remote wipe capabilities, preventing the organization from remotely erasing data in case of device loss, theft, or compromise.

This signal indicates that sensitive data on lost or stolen devices cannot be remotely removed to prevent unauthorized access.

## Applicability

This signal applies to:

- Corporate mobile phones
- Tablets and portable devices
- Laptops with mobile connectivity
- Wearable devices
- IoT devices with data storage
- Removable storage devices
- BYOD (Bring Your Own Device) assets

## Examples (Non-Normative)

### Device Without MDM Enrollment

```json
{
  "device": {
    "type": "iPhone",
    "serial": "XXXXX",
    "mdm_enrolled": false,
    "remote_wipe_enabled": false,
    "last_checkin": null
  }
}
```

### MDM Without Remote Wipe Feature

```yaml
# Mobile device management without remote wipe
mdm_configuration:
  enrolled_devices: 150
  capabilities:
    - inventory_tracking
    - app_deployment
    - policy_enforcement
  missing_capabilities:
    - remote_wipe
    - remote_lock
```

### Laptop Without Remote Management

```bash
# Corporate laptop without remote management agent
$ systemctl status remote-mgmt-agent
Unit remote-mgmt-agent.service could not be found.

# No remote wipe capability installed
```

## What This Signal Does NOT Assert

- Whether devices contain sensitive data
- The likelihood of device loss or theft
- Whether compensating controls exist (e.g., full disk encryption)
- Compliance or non-compliance with any framework
- Required remediation actions

## CIS Context (Informative)

This signal is relevant to:

- **CIS Control 04**: Secure Configuration of Enterprise Assets and Software
- **Safeguard 4.6**: Securely Manage Enterprise Assets and Software (IG1)
- **Asset Type**: Devices
- **Security Function**: Protect

## Related Signals

- `CSE-CIS-CONFIG-NO-LOCKOUT-005` — Automatic Lockout Not Configured
- `CSE-CIS-CONFIG-NO-SECURE-PROCESS-001` — Secure Configuration Process Missing
