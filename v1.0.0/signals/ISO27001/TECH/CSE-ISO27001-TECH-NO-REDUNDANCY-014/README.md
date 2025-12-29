# CSE-ISO27001-TECH-NO-REDUNDANCY-014

**No Redundancy of Information Processing Facilities**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-TECH-NO-REDUNDANCY-014` |
| Domain | ISO27001 |
| Category | TECH |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Information processing facilities are not implemented with redundancy to meet availability requirements. This signal indicates a lack of redundant infrastructure components needed to ensure continuous availability of critical systems and services.

## Applicability

- Organizations with critical systems that lack redundant components
- Environments with single points of failure in infrastructure
- Systems without high availability or failover configurations
- Organizations lacking geographic redundancy for disaster recovery
- Infrastructure without redundant power, network, or storage

## Examples (Non-Normative)

### Single Point of Failure

```yaml
infrastructure:
  servers:
    clustering: not_configured
    failover: manual_only
  storage:
    raid: not_implemented
    replication: none
  network:
    redundant_links: none
    load_balancing: disabled
  power:
    ups: single_unit
    generator: not_available
  availability_sla: undefined
```

### No High Availability

```yaml
critical_application:
  architecture: single_server
  database:
    replication: none
    clustering: not_configured
  load_balancer: not_implemented
  geographic_redundancy: none
  failover:
    automated: false
    rto_target: undefined
  maintenance_window: requires_downtime
```

## ISO 27001:2022 Context (Informative)

- **A.8.14 Redundancy of information processing facilities**: Information processing facilities shall be implemented with redundancy sufficient to meet availability requirements.

## Related Signals

- `CSE-ISO27001-TECH-NO-BACKUP-013`
- `CSE-ISO27001-TECH-NO-CAPACITY-MGMT-006`
- `CSE-ISO27001-TECH-NO-MONITORING-016`
