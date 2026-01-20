# CSE-ISO27001-PHYSICAL-NO-ENTRY-CONTROLS-002

**No Physical Entry Controls**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PHYSICAL-NO-ENTRY-CONTROLS-002` |
| Domain | ISO27001 |
| Category | PHYSICAL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Secure areas are not protected by appropriate entry controls and access points. This indicates a lack of mechanisms to restrict and monitor physical access to sensitive locations, increasing the risk of unauthorized entry and potential security breaches.

## Applicability

- Data centers and server rooms
- Network infrastructure rooms
- Areas containing confidential information
- Executive offices and secure meeting rooms
- Storage areas for sensitive media
- Research and development facilities
- Facilities processing regulated data (PII, PHI, financial data)

## Examples (Non-Normative)

### Uncontrolled Server Room Access

```yaml
server_room:
  location: "Building B, Floor 2"
  entry_controls:
    badge_reader: false
    biometric_authentication: false
    security_guards: false
    manual_locks: false
  access_logging:
    enabled: false
  visitor_management:
    implemented: false
```

### Missing Access Control Systems

```yaml
secure_area:
  name: "Executive Suite"
  access_points:
    - door: "Main Entrance"
      control_type: "none"
      authentication_required: false
    - door: "Side Entrance"
      control_type: "none"
      authentication_required: false
  authorization_list: null
```

## ISO 27001:2022 Context (Informative)

- **A.7.2**: Secure areas should be protected by appropriate entry controls to ensure that only authorized personnel are allowed access. Entry controls should be in place to restrict access and maintain records of entry and exit.

## Related Signals

- `CSE-ISO27001-PHYSICAL-NO-SECURITY-PERIMETER-001`
- `CSE-ISO27001-PHYSICAL-NO-SECURITY-MONITORING-004`
- `CSE-ISO27001-PHYSICAL-NO-SECURE-AREA-RULES-006`
