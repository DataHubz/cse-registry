# CSE-ISO27001-ORG-NO-ICT-CONTINUITY-030

**No ICT Readiness for Business Continuity** [NEW IN ISO 27001:2022]

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-ICT-CONTINUITY-030` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

ICT continuity requirements are not planned, implemented, maintained, and tested. Organizations must establish ICT continuity capabilities that align with business continuity objectives, including redundant systems, backup infrastructure, disaster recovery procedures, and regular testing to ensure ICT services can be maintained or rapidly restored during disruptions.

## Applicability

- Organizations dependent on ICT systems for operations
- Environments with critical technology infrastructure
- Businesses with defined recovery time objectives (RTO)
- Organizations with regulatory continuity requirements
- Entities providing technology-dependent services
- Cloud and hybrid infrastructure environments

## Examples (Non-Normative)

### No ICT Continuity Planning

```yaml
ict_infrastructure:
  critical_systems:
    - customer_database
    - transaction_processing
    - email_services

  continuity_planning:
    ict_continuity_plan: null         # Signal: No ICT continuity plan
    rto_requirements: "undefined"     # Signal: No recovery time objectives
    rpo_requirements: "undefined"     # Signal: No recovery point objectives
    redundancy: null                  # Signal: No redundant systems

  backup_strategy:
    backup_procedures: "ad-hoc"       # Signal: No formal backup plan
    backup_testing: "never"           # Signal: Backups not tested
    offsite_backups: false            # Signal: No geographic redundancy
```

### Untested ICT Recovery Capabilities

```yaml
disaster_recovery:
  recovery_plan:
    last_updated: "2019-06-01"        # Signal: Outdated plan
    documented: true

  implementation:
    redundant_datacenter: false       # Signal: No failover capability
    network_redundancy: "partial"     # Signal: Incomplete redundancy
    data_replication: null            # Signal: No data replication

  testing:
    last_dr_test: "never"             # Signal: Never tested
    tabletop_exercises: null          # Signal: No exercises conducted
    recovery_validation: null         # Signal: No validation procedures

  business_alignment:
    continuity_objectives: "not integrated"  # Signal: Not aligned with BCP
    impact_analysis: null                    # Signal: No BIA for ICT
```

## ISO 27001:2022 Context (Informative)

- **A.5.30 ICT readiness for business continuity**: This is a NEW control in ISO 27001:2022. It requires organizations to plan, implement, maintain, and test ICT continuity based on business continuity objectives and ICT continuity requirements. This includes implementing redundancy, backup systems, recovery procedures, and ensuring regular testing and maintenance.

## Related Signals

- `CSE-ISO27001-ORG-NO-DISRUPTION-SECURITY-029` (Information security during disruption)
- `CSE-ISO27001-TECH-NO-BACKUP` (If applicable for backup controls)
- `CSE-ISO27001-ORG-NO-INCIDENT-PLANNING-024` (Incident management planning)
