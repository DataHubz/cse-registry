# CSE-ISO27001-PHYSICAL-NO-SECURITY-PERIMETER-001

**No Physical Security Perimeters**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PHYSICAL-NO-SECURITY-PERIMETER-001` |
| Domain | ISO27001 |
| Category | PHYSICAL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Security perimeters are not defined and used to protect areas containing information and assets. This indicates a lack of physical boundaries to control access to sensitive areas and protect critical information processing facilities.

## Applicability

- Data centers and server rooms
- Offices containing sensitive information
- Facilities with information processing equipment
- Areas where confidential data is stored or processed
- Buildings housing critical business operations
- Premises containing valuable or sensitive assets

## Examples (Non-Normative)

### Missing Physical Barriers

```yaml
facility:
  name: "Corporate Office"
  security_perimeter: null
  physical_barriers:
    walls: false
    fences: false
    controlled_entry_points: false
  access_control:
    defined_security_zones: false
```

### Undefined Security Zones

```yaml
data_center:
  location: "Building A, Floor 3"
  perimeter_definition:
    documented: false
    physical_markers: none
    access_points: uncontrolled
  protection_level: none
```

## ISO 27001:2022 Context (Informative)

- **A.7.1**: Physical security perimeters should be defined and used to protect areas that contain information and other associated assets. The perimeter of a building or site containing information processing facilities should be physically sound.

## Related Signals

- `CSE-ISO27001-PHYSICAL-NO-ENTRY-CONTROLS-002`
- `CSE-ISO27001-PHYSICAL-NO-SECURITY-MONITORING-004`
- `CSE-ISO27001-PHYSICAL-NO-FACILITY-SECURITY-003`
