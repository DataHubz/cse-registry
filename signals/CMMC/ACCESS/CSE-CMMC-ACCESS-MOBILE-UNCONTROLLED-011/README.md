# CSE-CMMC-ACCESS-MOBILE-UNCONTROLLED-011

**Mobile Device Connection Not Controlled**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ACCESS-MOBILE-UNCONTROLLED-011` |
| Domain | CMMC |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Mobile device connections to organizational systems are not restricted or monitored.

This signal indicates that mobile devices may connect to systems without appropriate authorization, security verification, or connection controls.

## Applicability

- Mobile Device Management (MDM) configurations
- BYOD policies and enforcement
- Corporate mobile device fleet
- Mobile access to organizational resources
- ActiveSync and mobile email access

## Examples (Non-Normative)

### No MDM Enrollment Required

```
Mobile Access Policy:
  Enrollment Required: false
  Device Compliance: not checked
```

### Unrestricted Mobile Connection

```json
{
  "exchange_activesync": {
    "allow_non_managed_devices": true,
    "require_device_encryption": false
  }
}
```

## CMMC Context (Informative)

- **AC.L2-3.1.18**: Control connection of mobile devices

## Related Signals

- `CSE-CMMC-ACCESS-PORTABLE-CUI-UNENCRYPTED-012`
- `CSE-CMMC-ACCESS-NO-PORTABLE-USE-CONTROL-014`
