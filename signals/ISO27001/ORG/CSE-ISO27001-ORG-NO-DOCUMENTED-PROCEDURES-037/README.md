# CSE-ISO27001-ORG-NO-DOCUMENTED-PROCEDURES-037

**No Documented Operating Procedures**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-DOCUMENTED-PROCEDURES-037` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Operating procedures for information processing facilities are not documented and available. Organizations must document operating procedures for information processing facilities and make them available to personnel who need them to ensure consistent, secure, and reliable operations.

## Applicability

- Organizations operating IT infrastructure and systems
- Data centers and server facilities
- Cloud infrastructure management teams
- Database administration operations
- Network operations centers
- System administration functions
- DevOps and platform engineering teams

## Examples (Non-Normative)

### No Documented Operating Procedures

```yaml
information_processing_facilities:
  critical_systems:
    - production_database_cluster
    - web_application_servers
    - api_gateway
    - storage_systems

  operating_procedures:
    startup_procedures: null            # Signal: No documented startup
    shutdown_procedures: null           # Signal: No documented shutdown
    backup_procedures: null             # Signal: No backup documentation
    monitoring_procedures: null         # Signal: No monitoring process
    incident_response_procedures: null  # Signal: No operational IR docs

  documentation_availability:
    procedure_repository: null          # Signal: No central documentation
    access_by_operators: "difficult"    # Signal: Procedures not accessible
    version_control: null               # Signal: No document versioning
```

### Undocumented or Outdated Procedures

```yaml
operations:
  database_administration:
    procedures:
      backup_restore: "tribal knowledge"     # Signal: Not documented
      failover: "learned on the job"         # Signal: No written procedure
      maintenance: "informal notes"          # Signal: Not formal documentation

  system_administration:
    server_provisioning:
      documentation: "outdated"              # Signal: Procedures obsolete
      last_updated: "2019"                   # Signal: Not maintained
      actual_practice: "differs from docs"   # Signal: Documentation inaccurate

  network_operations:
    change_management: "ad-hoc"              # Signal: No documented process
    configuration_procedures: null           # Signal: Not documented
    troubleshooting_guides: null             # Signal: No runbooks

  knowledge_management:
    documentation_standard: null             # Signal: No documentation standards
    procedure_review_process: null           # Signal: No review/update process
    training_materials: "inconsistent"       # Signal: Poor documentation quality

  operational_risks:
    single_point_of_knowledge: true          # Signal: Key person dependency
    inconsistent_execution: "common"         # Signal: No standardization
    error_rate: "elevated"                   # Signal: Lack of procedures increases errors
```

## ISO 27001:2022 Context (Informative)

- **A.5.37 Documented operating procedures**: Requires operating procedures for information processing facilities to be documented and made available to personnel who need them. Procedures should cover all aspects of operating information processing facilities, including startup, shutdown, backup, recovery, error handling, and routine operations.

## Related Signals

- `CSE-ISO27001-ORG-NO-SECURITY-POLICIES-001` (Information security policies)
- `CSE-ISO27001-ORG-NO-CHANGE-MANAGEMENT` (If applicable for change procedures)
- `CSE-ISO27001-TECH-NO-BACKUP` (If applicable for backup procedures)
