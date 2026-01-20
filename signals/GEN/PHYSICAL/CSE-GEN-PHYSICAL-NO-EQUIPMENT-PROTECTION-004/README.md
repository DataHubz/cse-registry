# CSE-GEN-PHYSICAL-NO-EQUIPMENT-PROTECTION-004

**Equipment Protection Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-GEN-PHYSICAL-NO-EQUIPMENT-PROTECTION-004` |
| Domain          | GEN (General)                            |
| Category        | PHYSICAL                                 |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No physical protection measures for IT equipment, servers, network devices, workstations, and telecommunications infrastructure against theft, tampering, damage, or environmental hazards.

This signal indicates the absence of physical safeguards such as equipment locks, cable locks, rack security, environmental controls (temperature, humidity, power), surge protection, uninterruptible power supplies (UPS), fire suppression, water detection, or anti-theft measures to protect critical IT assets from physical threats.

## Applicability

This signal applies to:

- Servers and data center equipment
- Network infrastructure (routers, switches, firewalls)
- Workstations and desktop computers
- Laptop computers and mobile devices
- Telecommunications equipment
- Storage arrays and backup systems
- Power and cooling infrastructure
- Wiring closets and telecommunications rooms

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Equipment Protection Measures

```text
Indicators of missing equipment protection:
- No equipment locks or cable locks
- No rack or cabinet locking
- No environmental monitoring systems
- No UPS or backup power systems
- No fire suppression systems
- No water leak detection
- No equipment inventory or asset tags
- No physical tamper detection
```

### Missing Equipment Security Controls

```yaml
# Absent equipment protection controls
equipment_protection:
  physical_security:
    equipment_locks: false
    cable_locks: false
    rack_locks: false
    server_cage: false
    anti_theft_alarms: false
    asset_tags: false

  environmental_controls:
    hvac_system: false
    temperature_monitoring: false
    humidity_monitoring: false
    water_detection: false
    fire_suppression: false
    smoke_detection: false

  power_protection:
    ups_systems: false
    backup_generators: false
    surge_protection: false
    redundant_power: false
    power_monitoring: false
```

### No Equipment Access Controls

```python
# Missing equipment protection controls
def equipment_protection_program():
    gaps = []

    # No physical locks
    if not has_equipment_locks():
        gaps.append("No locks securing equipment")

    # No rack security
    if not secures_equipment_racks():
        gaps.append("No locked racks or cabinets")

    # No environmental controls
    if not has_environmental_controls():
        gaps.append("No environmental monitoring or controls")

    # No power protection
    if not has_power_protection():
        gaps.append("No UPS or backup power systems")

    # No fire suppression
    if not has_fire_suppression():
        gaps.append("No fire suppression systems")

    # No equipment inventory
    if not maintains_equipment_inventory():
        gaps.append("No equipment inventory or asset management")

    # No tamper detection
    if not detects_tampering():
        gaps.append("No tamper detection or alerts")

    return gaps
```

### Lack of Environmental Protection

```json
{
  "equipment_environmental_controls": {
    "server_room": {
      "temperature_control": {
        "hvac_present": false,
        "target_range": null,
        "monitoring": false,
        "alerting": false
      },
      "humidity_control": {
        "dehumidifier": false,
        "target_range": null,
        "monitoring": false
      },
      "fire_protection": {
        "smoke_detectors": false,
        "fire_suppression": false,
        "fire_extinguishers": false,
        "suppression_type": null
      },
      "water_protection": {
        "leak_detection": false,
        "flood_sensors": false,
        "drainage_system": false
      }
    },
    "power_infrastructure": {
      "ups_system": false,
      "backup_generator": false,
      "surge_protection": false,
      "redundant_feeds": false,
      "runtime_minutes": null
    }
  }
}
```

### No Equipment Theft Prevention

```text
Missing theft prevention controls:
- No cable locks for workstations
- No equipment locks for servers
- No locked racks or cabinets
- No asset tracking or inventory
- No equipment serial number registry
- No theft detection alarms
- No video surveillance of equipment areas
- No equipment checkout procedures for removal
```

### Missing Power Protection

```bash
#!/bin/bash
# Equipment protection gaps

# No UPS systems
echo "Uninterruptible Power Supply: Not installed"

# No backup power
echo "Backup generator: Not available"

# No surge protection
echo "Surge protection devices: Not installed"

# No power monitoring
echo "Power monitoring system: Not implemented"

# No redundant power
echo "Redundant power feeds: Not configured"

# No power alerts
echo "Power failure alerting: Not configured"
```

### No Equipment Environmental Monitoring

```yaml
# Advanced equipment protection missing
advanced_equipment_protection:
  environmental_monitoring:
    temperature_sensors: false
    humidity_sensors: false
    water_leak_sensors: false
    smoke_detectors: false
    real_time_monitoring: false
    alerting_system: false

  physical_security:
    server_cages: false
    locked_racks: false
    tamper_evident_seals: false
    intrusion_detection: false
    vibration_sensors: false

  redundancy:
    n_plus_1_cooling: false
    dual_power_supplies: false
    redundant_network_paths: false
    geographic_redundancy: false

  maintenance:
    preventive_maintenance: false
    equipment_lifecycle: null
    spare_parts_inventory: false
    vendor_support_contracts: null
```

### No Equipment Inventory Management

```sql
-- Missing equipment inventory tracking
-- No asset management system
-- No equipment location tracking
-- No configuration management
-- No maintenance records

-- Expected schema not implemented:
-- CREATE TABLE equipment_inventory (
--   asset_id UUID PRIMARY KEY,
--   equipment_type VARCHAR(50),
--   manufacturer VARCHAR(100),
--   model_number VARCHAR(100),
--   serial_number VARCHAR(100),
--   location VARCHAR(100),
--   rack_position VARCHAR(20),
--   owner VARCHAR(50),
--   criticality_level VARCHAR(20),
--   installation_date DATE,
--   warranty_expiration DATE,
--   last_maintenance_date DATE,
--   environmental_requirements TEXT,
--   power_requirements VARCHAR(50),
--   network_connections TEXT
-- );
```

### No Maintenance and Lifecycle Management

```python
# Missing equipment lifecycle controls
def equipment_lifecycle_management():
    lifecycle_gaps = []

    # No preventive maintenance
    if not performs_preventive_maintenance():
        lifecycle_gaps.append("No preventive maintenance schedule")

    # No equipment monitoring
    if not monitors_equipment_health():
        lifecycle_gaps.append("No equipment health monitoring")

    # No spare parts
    if not maintains_spare_parts():
        lifecycle_gaps.append("No spare parts inventory")

    # No vendor support
    if not has_vendor_support_contracts():
        lifecycle_gaps.append("No vendor maintenance contracts")

    # No end-of-life planning
    if not plans_equipment_replacement():
        lifecycle_gaps.append("No equipment replacement planning")

    # No configuration backup
    if not backs_up_configurations():
        lifecycle_gaps.append("No equipment configuration backups")

    return lifecycle_gaps
```

## What This Signal Does NOT Assert

- Whether logical security controls are in place
- The specific protection measures required
- Whether equipment damage has occurred
- The adequacy of insurance coverage
- Compliance or non-compliance with any framework
- Required environmental specifications

## Related Signals

- `CSE-GEN-PHYSICAL-NO-ACCESS-CONTROLS-001` — Physical access controls missing
- `CSE-GEN-PHYSICAL-NO-PERIMETER-002` — Physical perimeter security missing
- `CSE-GEN-DATA-NO-BACKUP` — Data backup missing (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **ISO 27001**: A.7.9 (Equipment siting and protection)
- **ISO 27001**: A.7.12 (Cabling security)
- **ISO 27001**: A.7.13 (Equipment maintenance)
- **ISO 27001**: A.7.14 (Secure disposal or re-use of equipment)
- **ISO 27001**: A.8.13 (Supporting utilities)
- **HITRUST**: 09.s (Equipment Siting and Protection)
- **HITRUST**: 09.t (Supporting Utilities)
- **NIST CSF**: PR.PT-3 (Least functionality is configured)
- **NIST CSF**: PR.PT-4 (Communications and control networks are protected)
- **SOC 2**: CC6.4 (Restricts physical access to IT assets)
- **PCI DSS**: Requirement 9.9 (Protect devices that capture payment card data)
- **CIS Controls**: Safeguard 12.2 (Establish and maintain a secure network architecture)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Physical inspection of equipment locations
- Review of equipment protection policies
- Assessment of environmental control systems
- Evaluation of power protection infrastructure
- Examination of equipment inventory and asset management
- Analysis of equipment maintenance procedures
- Review of environmental monitoring and alerting
- Assessment of anti-theft measures and controls

Effective equipment protection programs typically include:
- **Physical Security**: Locks, cages, racks, cable locks, and anti-theft devices
- **Environmental Controls**: HVAC, temperature/humidity monitoring, air filtration
- **Power Protection**: UPS systems, backup generators, surge protection, redundant power
- **Fire Suppression**: Smoke detection, fire suppression systems, fire extinguishers
- **Water Protection**: Leak detection, flood sensors, drainage systems
- **Asset Management**: Complete inventory, asset tags, location tracking
- **Maintenance**: Preventive maintenance schedules, vendor support contracts
- **Monitoring**: Real-time environmental monitoring and alerting
- **Redundancy**: N+1 configurations, dual power supplies, failover systems
- **Tamper Detection**: Seals, intrusion detection, access logging

The presence of this signal indicates a significant gap in protecting IT equipment from physical threats including theft, tampering, environmental damage, power failures, fire, water damage, or other hazards that could result in service outages, data loss, or equipment destruction.
