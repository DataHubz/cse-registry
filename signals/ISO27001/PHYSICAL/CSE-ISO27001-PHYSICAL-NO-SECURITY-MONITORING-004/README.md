# CSE-ISO27001-PHYSICAL-NO-SECURITY-MONITORING-004

**No Physical Security Monitoring**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PHYSICAL-NO-SECURITY-MONITORING-004` |
| Domain | ISO27001 |
| Category | PHYSICAL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Premises are not continuously monitored for unauthorized physical access. This indicates a lack of surveillance and monitoring systems to detect, record, and respond to security incidents in real-time. This control is new in ISO 27001:2022.

## Applicability

- Data centers and critical infrastructure facilities
- 24/7 operations centers
- Facilities with high-value assets
- Buildings with after-hours operations
- Remote or unstaffed facilities
- Areas with regulatory monitoring requirements
- Premises in high-risk locations

## Examples (Non-Normative)

### No Surveillance Systems

```yaml
facility_monitoring:
  name: "Corporate Headquarters"
  surveillance:
    cctv_cameras: false
    motion_sensors: false
    intrusion_detection: false
  monitoring:
    24x7_coverage: false
    security_operations_center: false
    automated_alerts: false
  incident_response:
    real_time_detection: false
```

### Unmonitored Security Systems

```yaml
data_center:
  location: "Primary Facility"
  security_systems:
    cameras_installed: true
    cameras_monitored: false
    recording_enabled: false
    alarm_system: true
    alarm_monitoring: false
  response_procedures:
    documented: false
    tested: false
```

## ISO 27001:2022 Context (Informative)

- **A.7.4**: Premises should be continuously monitored for unauthorized physical access. This is a new control introduced in ISO 27001:2022, emphasizing the importance of active surveillance and monitoring to detect security incidents.

## Related Signals

- `CSE-ISO27001-PHYSICAL-NO-SECURITY-PERIMETER-001`
- `CSE-ISO27001-PHYSICAL-NO-ENTRY-CONTROLS-002`
- `CSE-ISO27001-PHYSICAL-NO-THREAT-PROTECTION-005`
