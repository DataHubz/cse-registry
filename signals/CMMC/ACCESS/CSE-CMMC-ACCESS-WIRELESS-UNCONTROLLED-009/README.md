# CSE-CMMC-ACCESS-WIRELESS-UNCONTROLLED-009

**Wireless Access Not Controlled**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ACCESS-WIRELESS-UNCONTROLLED-009` |
| Domain | CMMC |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Wireless network access is not managed, monitored, or restricted according to security policies.

This signal indicates that wireless connections may be established without appropriate authorization or security controls.

## Applicability

- Corporate Wi-Fi networks
- Guest wireless networks
- Wireless access points and controllers
- BYOD wireless access
- Wireless intrusion detection

## Examples (Non-Normative)

### Open Wireless Network

```
SSID: Corporate-WiFi
Security: Open
Authentication: None
```

### No Wireless Monitoring

```
Rogue AP detection: Disabled
Wireless IDS: Not deployed
```

## CMMC Context (Informative)

- **AC.L2-3.1.16**: Authorize wireless access prior to allowing such connections

## Related Signals

- `CSE-CMMC-ACCESS-WIRELESS-NO-AUTH-010`
- `CSE-CMMC-COMMS-WEAK-CRYPTO-004`
