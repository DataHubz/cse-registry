# CSE-CMMC-IDENTITY-NO-DEVICE-AUTH-005

**Device Authentication Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-IDENTITY-NO-DEVICE-AUTH-005` |
| Domain | CMMC |
| Category | IDENTITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Devices connecting to organizational systems are not authenticated before establishing connections.

This signal indicates that unauthorized or rogue devices may access the network without verification.

## Applicability

- 802.1X network authentication
- Device certificate authentication
- MAC authentication bypass
- Network Access Control (NAC)
- Wireless device authentication

## Examples (Non-Normative)

### No 802.1X Enforcement

```
Network Switch Configuration:
  Port Security: Disabled
  802.1X: Not configured
  MAC Authentication: Disabled
```

### No NAC Deployment

```yaml
network_access_control:
  nac_solution: none
  device_authentication: not_required
  posture_assessment: disabled
```

## CMMC Context (Informative)

- **IA.L2-3.5.1**: Authenticate (or verify) the identities of those users, processes, or devices, as a prerequisite to allowing access to organizational information systems

## Related Signals

- `CSE-CMMC-IDENTITY-NO-MFA-001`
- `CSE-CMMC-ACCESS-MOBILE-UNCONTROLLED-011`
