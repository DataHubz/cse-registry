# CSE-GEN-PHYSICAL-NO-PERIMETER-002

**Physical Perimeter Security Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-GEN-PHYSICAL-NO-PERIMETER-002`      |
| Domain          | GEN (General)                            |
| Category        | PHYSICAL                                 |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No secure perimeter or physical barriers protecting sensitive areas, facilities, or data centers from unauthorized entry or intrusion.

This signal indicates the absence of physical perimeter security measures such as fencing, walls, gates, security checkpoints, bollards, vehicle barriers, or other mechanisms that establish and protect the physical boundary of secure facilities and prevent unauthorized access to the premises.

## Applicability

This signal applies to:

- Data centers and colocation facilities
- Corporate headquarters and office buildings
- Server rooms and telecommunications closets
- Cloud provider facilities
- Backup and disaster recovery sites
- Manufacturing or operations facilities with IT infrastructure
- Remote network equipment locations
- Critical infrastructure facilities

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Physical Perimeter Definition

```text
Indicators of missing perimeter security:
- No fencing or walls around facility
- No defined secure perimeter
- No vehicle barriers or gates
- No security checkpoints
- No perimeter intrusion detection
- No clear delineation of secure areas
- Unrestricted public access to building
```

### Missing Perimeter Infrastructure

```yaml
# Absent physical perimeter controls
perimeter_security:
  outer_perimeter:
    fencing: false
    security_walls: false
    vehicle_barriers: false
    bollards: false
    gates: false
    height_adequate: null

  access_points:
    controlled_entry: false
    security_checkpoint: false
    vehicle_inspection: false
    delivery_areas_secured: false

  monitoring:
    perimeter_cameras: false
    motion_sensors: false
    intrusion_detection: false
    security_lighting: false
    patrol_services: false
```

### No Perimeter Access Control

```python
# Missing perimeter security controls
def perimeter_security_program():
    gaps = []

    # No physical barriers
    if not has_perimeter_fencing():
        gaps.append("No perimeter fencing or walls")

    # No entry points
    if not has_controlled_entry_points():
        gaps.append("No controlled entry/exit points")

    # No vehicle controls
    if not controls_vehicle_access():
        gaps.append("No vehicle access controls")

    # No perimeter monitoring
    if not monitors_perimeter():
        gaps.append("No perimeter monitoring systems")

    # No intrusion detection
    if not has_perimeter_intrusion_detection():
        gaps.append("No perimeter intrusion detection")

    # No security patrols
    if not performs_security_patrols():
        gaps.append("No security patrol or guard service")

    return gaps
```

### Lack of Perimeter Defense

```json
{
  "facility_perimeter": {
    "physical_barriers": {
      "perimeter_fence": false,
      "fence_height": null,
      "anti_climb_features": false,
      "security_walls": false,
      "vehicle_barriers": false
    },
    "entry_exit_points": {
      "main_gate": {
        "controlled": false,
        "staffed": false,
        "automated_barrier": false
      },
      "vehicle_entrance": {
        "controlled": false,
        "inspection_area": false,
        "barrier_gate": false
      },
      "loading_dock": {
        "secured": false,
        "monitored": false,
        "restricted_hours": false
      }
    },
    "perimeter_monitoring": {
      "surveillance_cameras": false,
      "motion_detection": false,
      "lighting": "inadequate",
      "guards": false
    }
  }
}
```

### No Perimeter Monitoring

```text
Missing perimeter monitoring capabilities:
- No CCTV cameras covering perimeter
- No motion sensors or intrusion detection
- No security lighting for nighttime visibility
- No alarm systems for perimeter breaches
- No 24/7 monitoring or response capability
- No recording of perimeter events
- No integration with access control systems
```

### Missing Vehicle Controls

```bash
#!/bin/bash
# Perimeter security gaps

# No vehicle barriers
echo "Vehicle access barriers: Not installed"

# No vehicle screening
echo "Vehicle inspection process: Not implemented"

# No delivery controls
echo "Delivery vehicle controls: Not enforced"

# No parking restrictions
echo "Visitor parking restrictions: Not defined"

# No vehicle registration
echo "Vehicle registration system: Not maintained"

# No ram protection
echo "Anti-ram bollards: Not installed"
```

### No Layered Perimeter Defense

```yaml
# Advanced perimeter security missing
layered_perimeter_defense:
  outer_perimeter:
    defined_boundary: false
    fencing_complete: false
    signage_posted: false

  buffer_zones:
    standoff_distance: null
    clear_zone_maintained: false
    landscaping_secured: false

  entry_deterrence:
    anti_climb_barriers: false
    topped_fencing: false
    vehicle_bollards: false
    crash_barriers: false

  detection_systems:
    perimeter_intrusion_detection: false
    fiber_optic_sensors: false
    microwave_sensors: false
    video_analytics: false

  response_capabilities:
    guard_force: false
    rapid_response_team: false
    law_enforcement_integration: false
```

### No Perimeter Security Documentation

```sql
-- Missing perimeter security tracking
-- No perimeter vulnerability assessments
-- No perimeter security plan
-- No incident response for breaches
-- No maintenance records for barriers

-- Expected schema not implemented:
-- CREATE TABLE perimeter_security_events (
--   event_id UUID PRIMARY KEY,
--   event_timestamp TIMESTAMP,
--   event_type VARCHAR(50),
--   location VARCHAR(100),
--   detection_method VARCHAR(50),
--   response_time_minutes INT,
--   responding_personnel VARCHAR(100),
--   incident_severity VARCHAR(20),
--   resolution_status VARCHAR(50),
--   camera_footage_id VARCHAR(50)
-- );
```

## What This Signal Does NOT Assert

- Whether interior security controls are in place
- The specific type of perimeter security required
- Whether perimeter breaches have occurred
- The adequacy of building security systems
- Compliance or non-compliance with any framework
- Required remediation actions

## Related Signals

- `CSE-GEN-PHYSICAL-NO-ACCESS-CONTROLS-001` — Physical access controls missing
- `CSE-GEN-PHYSICAL-NO-EQUIPMENT-PROTECTION-004` — Equipment protection missing
- `CSE-GEN-INCIDENT-NO-RESPONSE-PLAN` — Incident response plan missing (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **ISO 27001**: A.7.1 (Physical security perimeters)
- **ISO 27001**: A.7.2 (Physical entry controls)
- **ISO 27001**: A.11.1.2 (Physical security perimeter)
- **PCI DSS**: Requirement 9.1 (Appropriate facility entry controls)
- **PCI DSS**: Requirement 9.1.1 (Video cameras and access control mechanisms)
- **HITRUST**: 01.j (Physical Security Perimeter)
- **NIST CSF**: PR.AC-2 (Physical access is managed and protected)
- **NIST CSF**: PR.PT-2 (Removable media is protected)
- **SOC 2**: CC6.4 (Restricts physical access to facilities)
- **CIS Controls**: Safeguard 12.8 (Establish and maintain dedicated computing resources)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Physical site survey and inspection
- Review of facility security plans
- Assessment of perimeter barriers and fencing
- Evaluation of entry/exit control points
- Examination of vehicle access procedures
- Analysis of perimeter monitoring systems
- Review of security guard or patrol services
- Assessment of perimeter intrusion detection capabilities

Effective physical perimeter security programs typically include:
- **Defined Perimeter**: Clear boundary delineation with appropriate barriers
- **Physical Barriers**: Fencing, walls, gates, and vehicle barriers
- **Access Control**: Limited and controlled entry/exit points
- **Vehicle Security**: Barriers, gates, and inspection procedures
- **Monitoring**: CCTV cameras, sensors, and lighting
- **Detection**: Intrusion detection and alarm systems
- **Response**: Security personnel, patrols, and incident procedures
- **Layered Defense**: Multiple security zones and progressive controls
- **Maintenance**: Regular inspection and upkeep of barriers and systems

The presence of this signal indicates a fundamental gap in establishing and protecting the physical boundary of facilities, which could enable unauthorized individuals or vehicles to access the premises and potentially compromise physical security controls or gain access to sensitive areas.
