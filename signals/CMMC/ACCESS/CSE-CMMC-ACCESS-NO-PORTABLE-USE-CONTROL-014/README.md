# CSE-CMMC-ACCESS-NO-PORTABLE-USE-CONTROL-014

**Portable Storage Device Use Not Controlled**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ACCESS-NO-PORTABLE-USE-CONTROL-014` |
| Domain | CMMC |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The use of portable storage devices on organizational systems is not restricted or monitored.

This signal indicates that removable media may be used without authorization, increasing risk of data exfiltration or malware introduction.

## Applicability

- USB device policies
- Removable media controls
- Endpoint device control software
- Data loss prevention configurations
- Workstation and server USB access

## Examples (Non-Normative)

### No USB Device Restrictions

```powershell
# Group Policy not configured
# HKLM\SYSTEM\CurrentControlSet\Services\USBSTOR
Start = 3  # Enabled (should be 4 for disabled)
```

### Unrestricted Removable Media

```xml
<DeviceControlPolicy>
  <RemovableStorage>
    <Enabled>false</Enabled>
    <AllowAll>true</AllowAll>
  </RemovableStorage>
</DeviceControlPolicy>
```

## CMMC Context (Informative)

- **AC.L2-3.1.21**: Limit use of portable storage devices on external systems

## Related Signals

- `CSE-CMMC-ACCESS-PORTABLE-CUI-UNENCRYPTED-012`
- `CSE-CMMC-MEDIA-NO-SANITIZATION-001`
