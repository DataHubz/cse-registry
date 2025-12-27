# CSE-CMMC-CONFIG-NO-PHYSICAL-ACCESS-CONTROL-009

**Physical Access to System Components Not Controlled**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-CONFIG-NO-PHYSICAL-ACCESS-CONTROL-009` |
| Domain | CMMC |
| Category | CONFIG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Physical access to system hardware and components is not restricted to authorized personnel.

This signal indicates that unauthorized individuals may gain physical access to equipment, enabling tampering or theft.

## Applicability

- Server room access
- Network closet security
- Workstation physical security
- Portable device controls
- Data center access

## Examples (Non-Normative)

### Unsecured Server Room

```
Physical Security Assessment:
  Server Room Lock: None
  Access Control System: Not installed
  Visitor Logs: Not maintained
```

### Open Network Equipment

```yaml
network_closet:
  location: Building A, Floor 2
  lock_type: none
  access_control: unrestricted
  monitoring: none
```

## CMMC Context (Informative)

- **PE.L1-3.10.1**: Limit physical access to organizational information systems, equipment, and the respective operating environments to authorized individuals

## Related Signals

- `CSE-CMMC-CONFIG-INSECURE-DEFAULT-001`
- `CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001`
