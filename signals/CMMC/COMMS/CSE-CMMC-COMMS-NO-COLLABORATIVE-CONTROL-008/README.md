# CSE-CMMC-COMMS-NO-COLLABORATIVE-CONTROL-008

**Collaborative Computing Device Control Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-COMMS-NO-COLLABORATIVE-CONTROL-008` |
| Domain | CMMC |
| Category | COMMS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Collaborative computing devices such as cameras, microphones, and screen sharing are not controlled against unauthorized activation.

This signal indicates that eavesdropping or surveillance may be possible.

## Applicability

- Webcam controls
- Microphone policies
- Screen sharing restrictions
- Remote desktop controls
- Video conferencing security

## Examples (Non-Normative)

### No Device Restrictions

```yaml
collaboration_devices:
  camera_control: not_managed
  microphone_control: not_managed
  activation_indicators: not_required
```

### Unrestricted Screen Sharing

```
Collaboration Policy:
  Remote Viewing: Always enabled
  User Notification: Not required
  Admin Override: Possible without notice
```

## CMMC Context (Informative)

- **SC.L2-3.13.12**: Prohibit remote activation of collaborative computing devices and provide indication of devices in use to users present at the device

## Related Signals

- `CSE-CMMC-ACCESS-MOBILE-UNCONTROLLED-011`
- `CSE-CMMC-PHYSICAL-NO-MONITORING-006`
