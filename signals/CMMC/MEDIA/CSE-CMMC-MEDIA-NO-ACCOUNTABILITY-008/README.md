# CSE-CMMC-MEDIA-NO-ACCOUNTABILITY-008

**Media Accountability Not Maintained**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-MEDIA-NO-ACCOUNTABILITY-008` |
| Domain | CMMC |
| Category | MEDIA |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

An inventory and tracking system for CUI-containing media is not maintained.

This signal indicates that media may be lost or misplaced without detection.

## Applicability

- Media inventory systems
- Chain of custody records
- Check-in/check-out logs
- Asset tracking
- Media lifecycle management

## Examples (Non-Normative)

### No Media Inventory

```yaml
media_tracking:
  inventory_system: none
  chain_of_custody: not_implemented
  periodic_reconciliation: never
```

### Untracked Media

```
Media Audit Results:
  Expected Media Items: Unknown
  Located Media Items: 47
  Discrepancy: Cannot determine
  Last Inventory: Never performed
```

## CMMC Context (Informative)

- **MP.L2-3.8.5**: Control access to media containing CUI and maintain accountability for media during transport outside of controlled areas

## Related Signals

- `CSE-CMMC-MEDIA-TRANSPORT-NOT-CONTROLLED-004`
- `CSE-CMMC-MEDIA-NO-DISPOSAL-TRACKING-009`
