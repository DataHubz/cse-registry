# CSE-CMMC-PHYSICAL-NO-ACCESS-CONTROL-001

**Physical Access Control Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-PHYSICAL-NO-ACCESS-CONTROL-001` |
| Domain | CMMC |
| Category | PHYSICAL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Physical access to facilities housing CUI systems is not controlled or restricted.

This signal indicates that unauthorized individuals may gain physical access to sensitive areas.

## Applicability

- Building entry points
- Data center access
- Server room doors
- Secure work areas
- Network closets

## Examples (Non-Normative)

### Unrestricted Facility Access

```yaml
facility_access:
  entry_control: none
  badge_required: false
  key_card_system: not_installed
```

### Open Access Area

```
Physical Security Assessment:
  Location: Data Center
  Door Lock: Mechanical only
  Badge Reader: None
  Mantrap: None
```

## CMMC Context (Informative)

- **PE.L1-3.10.1**: Limit physical access to organizational information systems, equipment, and the respective operating environments to authorized individuals

## Related Signals

- `CSE-CMMC-PHYSICAL-NO-VISITOR-CONTROL-002`
- `CSE-CMMC-CONFIG-NO-PHYSICAL-ACCESS-CONTROL-009`
