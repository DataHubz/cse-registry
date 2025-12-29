# CSE-ISO27001-PHYSICAL-NO-UTILITY-PROTECTION-011

**No Supporting Utilities Protection**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PHYSICAL-NO-UTILITY-PROTECTION-011` |
| Domain | ISO27001 |
| Category | PHYSICAL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Information processing facilities are not protected from power failures and utility disruptions. This indicates a lack of redundancy and protection measures for critical supporting utilities, creating risks to availability and business continuity.

## Applicability

- Data centers and server rooms
- Network operations centers
- Critical business processing facilities
- Telecommunications infrastructure
- Cloud service provider facilities
- Emergency operations centers
- 24/7 operational facilities
- Facilities with high availability requirements

## Examples (Non-Normative)

### No Power Protection

```yaml
power_infrastructure:
  primary_power:
    single_feed: true
    surge_protection: false
  backup_power:
    ups_system: false
    generator: false
    runtime_capacity: 0
    testing_schedule: null
  power_monitoring:
    voltage_monitoring: false
    alerts_configured: false
```

### Missing Utility Redundancy

```yaml
supporting_utilities:
  electricity:
    redundant_feeds: false
    backup_generator: false
    ups_protection: false
  telecommunications:
    redundant_providers: false
    diverse_routing: false
  hvac:
    redundant_systems: false
    environmental_monitoring: false
  water:
    backup_supply: false
  maintenance:
    scheduled_testing: false
    failover_tested: false
```

## ISO 27001:2022 Context (Informative)

- **A.7.11**: Information processing facilities should be protected from power failures and other disruptions caused by failures in supporting utilities. This includes implementing adequate backup systems and ensuring regular testing of protection measures.

## Related Signals

- `CSE-ISO27001-PHYSICAL-NO-THREAT-PROTECTION-005`
- `CSE-ISO27001-PHYSICAL-NO-EQUIPMENT-PROTECTION-008`
- `CSE-ISO27001-PHYSICAL-NO-EQUIPMENT-MAINTENANCE-013`
