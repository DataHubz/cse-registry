# CSE-CMMC-MEDIA-TRANSPORT-NOT-CONTROLLED-004

**Media Transport Not Controlled**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-MEDIA-TRANSPORT-NOT-CONTROLLED-004` |
| Domain | CMMC |
| Category | MEDIA |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Transportation of media containing CUI is not protected through approved custodians, secure packaging, or tracking mechanisms.

This signal indicates media may be lost, stolen, or compromised during transport.

## Applicability

- Courier services for media
- Internal media transport
- Backup tape shipping
- Hard drive transport
- Document delivery

## Examples (Non-Normative)

### Uncontrolled Media Shipping

```yaml
media_transport:
  approved_couriers: not_defined
  tamper_evident_packaging: not_used
  tracking: none
```

### No Chain of Custody

```
Transport Record:
  Media ID: Backup-2024-01
  Sent By: Unknown
  Received By: Unknown
  Tracking Number: None
```

## CMMC Context (Informative)

- **MP.L2-3.8.5**: Control access to media containing CUI and maintain accountability for media during transport outside of controlled areas

## Related Signals

- `CSE-CMMC-MEDIA-ACCESS-NOT-CONTROLLED-003`
- `CSE-CMMC-MEDIA-NO-ACCOUNTABILITY-008`
