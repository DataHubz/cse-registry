# CSE-ISO27001-PHYSICAL-NO-THREAT-PROTECTION-005

**No Physical and Environmental Threat Protection**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PHYSICAL-NO-THREAT-PROTECTION-005` |
| Domain | ISO27001 |
| Category | PHYSICAL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Protection against physical and environmental threats is not designed and implemented. This indicates a lack of safeguards against natural disasters, environmental hazards, malicious attacks, and other threats that could damage information processing facilities or disrupt operations.

## Applicability

- Data centers and server rooms
- Network operations centers
- Equipment rooms and communication facilities
- Facilities in disaster-prone areas
- Critical infrastructure locations
- Storage facilities for backup media
- Any facility housing information processing equipment

## Examples (Non-Normative)

### No Environmental Protection

```yaml
data_center:
  location: "Building C"
  environmental_threats:
    fire_suppression: false
    smoke_detection: false
    climate_control: false
    humidity_monitoring: false
    temperature_alerts: false
  natural_disaster_protection:
    flood_barriers: false
    earthquake_resistant: false
    storm_protection: false
```

### Missing Physical Threat Protection

```yaml
critical_facility:
  name: "Primary Data Center"
  threat_protection:
    fire_extinguishers: false
    water_detection: false
    hvac_redundancy: false
    structural_hardening: false
    backup_power: false
  emergency_procedures:
    documented: false
    staff_trained: false
```

## ISO 27001:2022 Context (Informative)

- **A.7.5**: Protection against physical and environmental threats, such as natural disasters, malicious attack or accidents, should be designed and implemented. Organizations should consider the location and construction of facilities to minimize exposure to environmental threats.

## Related Signals

- `CSE-ISO27001-PHYSICAL-NO-UTILITY-PROTECTION-011`
- `CSE-ISO27001-PHYSICAL-NO-EQUIPMENT-PROTECTION-008`
- `CSE-ISO27001-PHYSICAL-NO-SECURITY-MONITORING-004`
