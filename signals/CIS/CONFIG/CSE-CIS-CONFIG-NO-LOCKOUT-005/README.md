# CSE-CIS-CONFIG-NO-LOCKOUT-005

**Automatic Lockout Not Configured**

## Signal Overview

| Field           | Value                               |
|-----------------|-------------------------------------|
| Identifier      | `CSE-CIS-CONFIG-NO-LOCKOUT-005`     |
| Domain          | CIS                                 |
| Category        | CONFIG                              |
| Status          | Active                              |
| Introduced In   | 1.0.0                               |

## Description

Systems and applications do not have automatic lockout mechanisms configured for mobile devices, workstations, or sessions after a period of inactivity.

This signal indicates that unattended devices and sessions remain accessible, creating opportunities for unauthorized access.

## Applicability

This signal applies to:

- Workstation and desktop systems
- Mobile devices (phones, tablets)
- Server console sessions
- Web application sessions
- Remote desktop sessions
- Kiosk systems
- Physical access terminals

## Examples (Non-Normative)

### Windows Without Screen Lock

```powershell
# Windows system without automatic lock
PS> Get-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System"

InactivityTimeoutSecs : 0
ScreenSaverGracePeriod : 0
# No automatic lock configured
```

### Linux Without Screen Lock

```bash
# GNOME desktop without automatic lock
$ gsettings get org.gnome.desktop.session idle-delay
uint32 0

$ gsettings get org.gnome.desktop.screensaver lock-enabled
false
```

### Mobile Device Without Auto-Lock

```json
{
  "device_policy": {
    "platform": "iOS",
    "auto_lock_timeout": "never",
    "require_passcode": false,
    "max_inactivity_lock": null
  }
}
```

## What This Signal Does NOT Assert

- The appropriate timeout duration
- Whether users manually lock their devices
- Whether physical security controls exist
- Compliance or non-compliance with any framework
- Required remediation actions

## CIS Context (Informative)

This signal is relevant to:

- **CIS Control 04**: Secure Configuration of Enterprise Assets and Software
- **Safeguard 4.5**: Implement and Manage a Firewall on End-User Devices (IG1)
- **Asset Type**: Devices
- **Security Function**: Protect

## Related Signals

- `CSE-CIS-CONFIG-NO-REMOTE-WIPE-006` — Remote Wipe Capability Missing
- `CSE-CIS-CONFIG-NO-SECURE-PROCESS-001` — Secure Configuration Process Missing
