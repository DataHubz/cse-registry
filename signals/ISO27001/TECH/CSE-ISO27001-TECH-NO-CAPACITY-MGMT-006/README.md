# CSE-ISO27001-TECH-NO-CAPACITY-MGMT-006

**No Capacity Management**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-TECH-NO-CAPACITY-MGMT-006` |
| Domain | ISO27001 |
| Category | TECH |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Use of resources is not monitored and adjusted with projections for future capacity requirements. This signal indicates a lack of capacity monitoring, planning, and proactive resource management.

## Applicability

- Organizations without resource monitoring and capacity planning processes
- Systems experiencing unexpected performance issues or outages due to capacity
- Environments lacking metrics for CPU, memory, storage, and network utilization
- Organizations that do not forecast future capacity needs
- Infrastructure without automated scaling or capacity alerts

## Examples (Non-Normative)

### No Capacity Monitoring

```yaml
infrastructure:
  monitoring:
    cpu_utilization: not_monitored
    memory_usage: not_monitored
    disk_space: not_monitored
    network_bandwidth: not_monitored
  capacity_planning:
    growth_projections: none
    review_frequency: never
    alerting: disabled
    auto_scaling: not_configured
```

### Unmanaged Storage Growth

```yaml
storage_system:
  total_capacity_gb: 1000
  current_usage_gb: 950
  monitoring: disabled
  alerts:
    threshold_warning: none
    threshold_critical: none
  capacity_planning:
    growth_rate_analysis: never_performed
    procurement_lead_time: unknown
```

## ISO 27001:2022 Context (Informative)

- **A.8.6 Capacity management**: The use of resources shall be monitored and adjusted in line with current and expected capacity requirements.

## Related Signals

- `CSE-ISO27001-TECH-NO-MONITORING-016`
- `CSE-ISO27001-TECH-NO-REDUNDANCY-014`
- `CSE-ISO27001-TECH-NO-LOGGING-015`
