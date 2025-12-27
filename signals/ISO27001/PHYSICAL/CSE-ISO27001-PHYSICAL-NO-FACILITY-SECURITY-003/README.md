# CSE-ISO27001-PHYSICAL-NO-FACILITY-SECURITY-003

**No Facility Security Measures**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PHYSICAL-NO-FACILITY-SECURITY-003` |
| Domain | ISO27001 |
| Category | PHYSICAL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Physical security for offices, rooms, and facilities is not designed and implemented. This indicates a lack of comprehensive security measures to protect physical spaces from unauthorized access, theft, or damage.

## Applicability

- Office buildings and workspaces
- Conference and meeting rooms
- Storage facilities
- Equipment rooms
- Reception and common areas
- Remote offices and branch locations
- Co-working spaces used by the organization

## Examples (Non-Normative)

### Office Without Security Measures

```yaml
office_facility:
  location: "Main Office Building"
  security_design:
    documented: false
    implemented: false
  physical_controls:
    door_locks: standard_only
    window_protection: none
    alarm_system: false
    security_lighting: false
  after_hours_security:
    enabled: false
```

### Unsecured Meeting Rooms

```yaml
meeting_rooms:
  - name: "Conference Room A"
    contains_sensitive_equipment: true
    security_measures:
      access_control: false
      lockable_doors: false
      surveillance: false
      equipment_securing: false
```

## ISO 27001:2022 Context (Informative)

- **A.7.3**: Physical security for offices, rooms and facilities should be designed and implemented. Security should be applied to offices, rooms and facilities, taking into account the specific security perimeter and entry controls already in place.

## Related Signals

- `CSE-ISO27001-PHYSICAL-NO-SECURITY-PERIMETER-001`
- `CSE-ISO27001-PHYSICAL-NO-ENTRY-CONTROLS-002`
- `CSE-ISO27001-PHYSICAL-NO-SECURE-AREA-RULES-006`
