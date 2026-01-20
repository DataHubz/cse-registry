# CSE-CMMC-ACCESS-WIRELESS-NO-AUTH-010

**Wireless Authentication Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ACCESS-WIRELESS-NO-AUTH-010` |
| Domain | CMMC |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Wireless networks do not require authentication using strong cryptographic mechanisms.

This signal indicates that wireless access may be granted without verifying user or device identity through secure authentication protocols.

## Applicability

- 802.1X/EAP configuration
- WPA2/WPA3-Enterprise settings
- Certificate-based wireless auth
- RADIUS server integration
- PSK vs Enterprise authentication

## Examples (Non-Normative)

### PSK Instead of Enterprise

```
SSID: Corporate-WiFi
Security: WPA2-PSK
# Should be WPA2-Enterprise with 802.1X
```

### Weak Authentication Protocol

```
EAP Type: LEAP
# Should be EAP-TLS or PEAP
```

## CMMC Context (Informative)

- **AC.L2-3.1.17**: Protect wireless access using authentication and encryption

## Related Signals

- `CSE-CMMC-ACCESS-WIRELESS-UNCONTROLLED-009`
- `CSE-CMMC-IDENTITY-NO-MFA-001`
