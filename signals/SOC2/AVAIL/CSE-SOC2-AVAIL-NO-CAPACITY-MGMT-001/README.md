# CSE-SOC2-AVAIL-NO-CAPACITY-MGMT-001

**No Capacity Management**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-AVAIL-NO-CAPACITY-MGMT-001` |
| Domain | SOC2 |
| Category | AVAIL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not maintain, monitor, and evaluate current processing capacity and use of system components to manage capacity demand and enable implementation of additional capacity to help meet its objectives.

## Applicability

- Infrastructure capacity planning processes
- Resource monitoring and alerting systems
- Auto-scaling configurations
- Performance baseline documentation
- Capacity forecasting and trend analysis
- Storage, compute, and network capacity management

## Examples (Non-Normative)

### Missing Capacity Monitoring

```yaml
findings:
  - No monitoring of CPU, memory, or disk utilization
  - No alerts configured for resource thresholds
  - No capacity planning documentation found
  - Infrastructure scales manually without metrics-driven decisions
```

### Inadequate Capacity Planning

```yaml
findings:
  - Monitoring exists but no capacity planning process
  - Historical capacity data not analyzed
  - No forecasting for future resource needs
  - Reactive rather than proactive capacity management
```

## SOC 2 Context (Informative)

- **A1.1**: The entity maintains, monitors, and evaluates current processing capacity and use of system components (infrastructure, data, and software) to manage capacity demand and to enable the implementation of additional capacity to help meet its objectives.

## Related Signals

- `CSE-SOC2-AVAIL-NO-RECOVERY-INFRASTRUCTURE-002`
- `CSE-SOC2-CC-NO-PERFORMANCE-MONITORING` (if exists)
