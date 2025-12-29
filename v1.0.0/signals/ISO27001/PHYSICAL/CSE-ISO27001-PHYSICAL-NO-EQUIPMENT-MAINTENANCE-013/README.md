# CSE-ISO27001-PHYSICAL-NO-EQUIPMENT-MAINTENANCE-013

**No Equipment Maintenance Controls**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PHYSICAL-NO-EQUIPMENT-MAINTENANCE-013` |
| Domain | ISO27001 |
| Category | PHYSICAL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Equipment is not maintained correctly to ensure availability and integrity. This indicates a lack of proper maintenance procedures, schedules, and controls to keep information processing equipment in good working order while protecting the confidentiality and integrity of information during service activities.

## Applicability

- Servers and storage systems
- Network infrastructure equipment
- Desktop computers and workstations
- Printers and multifunction devices
- Environmental control systems (HVAC, UPS)
- Security systems (cameras, access control)
- Telecommunications equipment
- Any equipment processing or storing sensitive information

## Examples (Non-Normative)

### No Maintenance Program

```yaml
maintenance_program:
  documented: false
  schedules:
    preventive_maintenance: null
    inspections: null
    testing: null
  vendor_management:
    qualified_vendors: unverified
    service_level_agreements: false
    background_checks: false
  data_protection:
    backup_before_service: false
    data_sanitization: false
    supervised_maintenance: false
```

### Inadequate Maintenance Controls

```yaml
equipment_maintenance:
  servers:
    maintenance_schedule: undefined
    service_records: not_maintained
    spare_parts: unavailable
  security_during_maintenance:
    escort_required: false
    data_access_restrictions: false
    activity_logging: false
  fault_management:
    fault_logging: false
    root_cause_analysis: false
    corrective_actions: untracked
```

## ISO 27001:2022 Context (Informative)

- **A.7.13**: Equipment should be maintained correctly to ensure continuing availability and integrity. This includes establishing maintenance schedules according to supplier specifications, using only authorized service personnel, and maintaining records of all maintenance activities.

## Related Signals

- `CSE-ISO27001-PHYSICAL-NO-EQUIPMENT-PROTECTION-008`
- `CSE-ISO27001-PHYSICAL-NO-UTILITY-PROTECTION-011`
- `CSE-ISO27001-PHYSICAL-NO-SECURE-DISPOSAL-014`
