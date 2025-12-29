# CSE-ISO27001-PHYSICAL-NO-EQUIPMENT-PROTECTION-008

**No Equipment Siting and Protection**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PHYSICAL-NO-EQUIPMENT-PROTECTION-008` |
| Domain | ISO27001 |
| Category | PHYSICAL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Equipment is not sited securely and protected against environmental threats and unauthorized access. This indicates inadequate consideration of equipment placement and protection from both environmental hazards and physical security risks.

## Applicability

- Servers and networking equipment
- Desktop computers and workstations
- Printers and multifunction devices
- Storage systems and backup equipment
- Communications equipment
- Mobile devices and laptops
- Critical infrastructure equipment

## Examples (Non-Normative)

### Poorly Sited Equipment

```yaml
equipment_placement:
  server_rack:
    location: "Open hallway"
    environmental_protection:
      away_from_water_sources: false
      climate_controlled: false
      dust_protection: false
    physical_security:
      locked_enclosure: false
      secured_to_floor: false
      access_controlled: false
```

### Unprotected Information Processing Equipment

```yaml
workstation_protection:
  location: "Public area"
  siting_considerations:
    minimize_unauthorized_viewing: false
    protect_from_environmental_damage: false
    cable_management: false
  security_measures:
    cable_locks: false
    secure_mounting: false
    port_locks: false
    screen_privacy_filters: false
```

## ISO 27001:2022 Context (Informative)

- **A.7.8**: Equipment should be sited securely and protected. This includes protecting equipment from environmental threats, unauthorized access, and accidental damage. Consideration should be given to the risks from co-location with other equipment and the proximity to environmental hazards.

## Related Signals

- `CSE-ISO27001-PHYSICAL-NO-THREAT-PROTECTION-005`
- `CSE-ISO27001-PHYSICAL-NO-UTILITY-PROTECTION-011`
- `CSE-ISO27001-PHYSICAL-NO-CABLING-SECURITY-012`
