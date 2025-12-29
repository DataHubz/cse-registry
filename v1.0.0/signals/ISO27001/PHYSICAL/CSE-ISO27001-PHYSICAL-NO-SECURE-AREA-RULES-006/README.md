# CSE-ISO27001-PHYSICAL-NO-SECURE-AREA-RULES-006

**No Secure Area Working Rules**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PHYSICAL-NO-SECURE-AREA-RULES-006` |
| Domain | ISO27001 |
| Category | PHYSICAL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Security measures for working in secure areas are not designed and implemented. This indicates a lack of documented procedures and controls governing how personnel should conduct themselves and their work activities within designated secure areas.

## Applicability

- Secure rooms and data centers
- Server and network equipment rooms
- Areas processing classified or sensitive information
- Research and development facilities
- Secure storage areas
- Clean rooms and special-purpose facilities
- Areas with visitor restrictions

## Examples (Non-Normative)

### No Secure Area Procedures

```yaml
secure_area_policy:
  documented: false
  rules:
    visitor_escort_required: null
    photography_prohibited: null
    unattended_access_restrictions: null
    equipment_removal_process: null
    work_documentation_requirements: null
  training:
    provided: false
    acknowledgment_required: false
```

### Undefined Security Protocols

```yaml
data_center_access:
  location: "Secure Facility"
  working_rules:
    escort_policy: undefined
    authorized_activities: unspecified
    prohibited_items:
      cameras: allowed
      mobile_devices: allowed
      recording_devices: allowed
  enforcement:
    monitoring: false
    violations_tracked: false
```

## ISO 27001:2022 Context (Informative)

- **A.7.6**: Security measures for working in secure areas should be designed and implemented. This includes considerations for personnel working in secure areas, visitor access, isolated work, and awareness of security requirements within these areas.

## Related Signals

- `CSE-ISO27001-PHYSICAL-NO-ENTRY-CONTROLS-002`
- `CSE-ISO27001-PHYSICAL-NO-FACILITY-SECURITY-003`
- `CSE-ISO27001-PHYSICAL-NO-SECURITY-MONITORING-004`
