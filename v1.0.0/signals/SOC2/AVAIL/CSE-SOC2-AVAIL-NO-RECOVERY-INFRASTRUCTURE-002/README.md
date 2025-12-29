# CSE-SOC2-AVAIL-NO-RECOVERY-INFRASTRUCTURE-002

**No Environmental Protections and Recovery Infrastructure**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-AVAIL-NO-RECOVERY-INFRASTRUCTURE-002` |
| Domain | SOC2 |
| Category | AVAIL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not authorize, design, develop or acquire, implement, operate, approve, maintain, and monitor environmental protections, software, data backup processes, and recovery infrastructure to meet its objectives.

## Applicability

- Disaster recovery infrastructure and plans
- Backup systems and processes
- Environmental controls (power, cooling, fire suppression)
- Redundant systems and failover mechanisms
- Recovery point objectives (RPO) and recovery time objectives (RTO)
- Business continuity planning

## Examples (Non-Normative)

### Missing Backup Infrastructure

```yaml
findings:
  - No automated backup system configured
  - No offsite or geographically distributed backups
  - Critical databases not included in backup scope
  - No documented backup retention policy
```

### Inadequate Environmental Protections

```yaml
findings:
  - Data center lacks redundant power supplies
  - No fire suppression systems in server rooms
  - Environmental monitoring not implemented
  - Single points of failure in infrastructure design
```

### Missing Recovery Infrastructure

```yaml
findings:
  - No failover systems or hot standby infrastructure
  - No documented recovery procedures
  - RPO and RTO not defined
  - Disaster recovery site not established
```

## SOC 2 Context (Informative)

- **A1.2**: The entity authorizes, designs, develops or acquires, implements, operates, approves, maintains, and monitors environmental protections, software, data backup processes, and recovery infrastructure to meet its objectives.

## Related Signals

- `CSE-SOC2-AVAIL-NO-RECOVERY-TESTING-003`
- `CSE-SOC2-AVAIL-NO-CAPACITY-MGMT-001`
