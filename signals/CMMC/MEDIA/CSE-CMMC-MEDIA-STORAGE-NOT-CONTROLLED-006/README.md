# CSE-CMMC-MEDIA-STORAGE-NOT-CONTROLLED-006

**Media Storage Not Controlled**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-MEDIA-STORAGE-NOT-CONTROLLED-006` |
| Domain | CMMC |
| Category | MEDIA |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Physical storage locations for CUI-containing media are not secured or access-controlled.

This signal indicates that media storage areas may allow unauthorized physical access.

## Applicability

- Server room media storage
- Tape library security
- Document storage areas
- Archive facilities
- Off-site storage locations

## Examples (Non-Normative)

### Unsecured Storage Area

```yaml
media_storage_facility:
  location: Building B, Room 101
  access_control: none
  lock_type: none
  surveillance: disabled
```

### Open Access Storage

```
Storage Assessment:
  Tape Library Location: Open data center floor
  Physical Barrier: None
  Badge Access: Not required
  Visitor Escort: Not enforced
```

## CMMC Context (Informative)

- **MP.L2-3.8.1**: Protect (i.e., physically control and securely store) system media containing CUI, both paper and digital

## Related Signals

- `CSE-CMMC-MEDIA-ACCESS-NOT-CONTROLLED-003`
- `CSE-CMMC-CONFIG-NO-PHYSICAL-ACCESS-CONTROL-009`
