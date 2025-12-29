# CSE-CMMC-COMMS-NO-VOIP-PROTECTION-010

**VoIP Communications Not Protected**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-COMMS-NO-VOIP-PROTECTION-010` |
| Domain | CMMC |
| Category | COMMS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Voice over IP communications are not protected against eavesdropping or manipulation.

This signal indicates that voice communications may be intercepted or modified in transit.

## Applicability

- SIP signaling protection
- SRTP media encryption
- VoIP network segmentation
- Voice traffic protection
- Unified communications security

## Examples (Non-Normative)

### Unencrypted VoIP

```yaml
voip_config:
  sip_tls: disabled
  srtp_enabled: false
  media_encryption: none
```

### No Voice Network Segmentation

```
VoIP Assessment:
  Voice VLAN: Not configured
  Encryption: RTP only (no SRTP)
  Authentication: None
```

## CMMC Context (Informative)

- **SC.L2-3.13.14**: Control and monitor the use of Voice over Internet Protocol (VoIP) technologies

## Related Signals

- `CSE-CMMC-COMMS-WEAK-CRYPTO-004`
- `CSE-CMMC-COMMS-NO-BOUNDARY-PROTECTION-002`
