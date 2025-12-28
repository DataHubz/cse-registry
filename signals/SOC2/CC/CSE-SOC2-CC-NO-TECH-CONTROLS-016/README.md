# CSE-SOC2-CC-NO-TECH-CONTROLS-016

**No Technology General Controls**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-TECH-CONTROLS-016` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not select and develop general control activities over technology to support the achievement of objectives.

## Applicability

- Applies when IT general controls (ITGC) are not designed or implemented
- Applies when change management controls for technology are absent
- Applies when access controls over infrastructure are inadequate
- Applies when there are no controls over data backup and recovery
- Applies when technology operations lack formal controls
- Applies when IT service continuity controls are missing
- Applies when controls over technology acquisition and development are absent

## Examples (Non-Normative)

### No Change Management Controls

```yaml
production_environment:
  change_control_process: none
  testing_requirements: undefined
  approval_process: none

recent_deployment:
  changes: 45_commits
  testing: developer_only
  approvals: none
  rollback_plan: none
  deployment_time: friday_5pm
```

### Missing Infrastructure Access Controls

```yaml
infrastructure_access:
  production_aws_account:
    privileged_users: 23
    access_reviews: never
    mfa_required: false
    session_logging: disabled

  database_admin_access:
    shared_credentials: true
    password_rotation: never
    activity_monitoring: none
```

### No Backup and Recovery Controls

```yaml
backup_procedures:
  documentation: none
  schedule: undefined
  verification: never_tested

disaster_recovery:
  plan: does_not_exist
  rto: undefined
  rpo: undefined
  last_test: never

data_recovery:
  restore_testing: never_performed
  recovery_capability: unknown
```

## SOC 2 Context (Informative)

- **CC5.2**: The entity also selects and develops general control activities over technology to support the achievement of objectives
- **COSO Principle 11**: The organization selects and develops general control activities over technology to support the achievement of objectives

## Related Signals

- `CSE-SOC2-CC-NO-CONTROL-SELECTION-015`
- `CSE-SOC2-CC-NO-CHANGE-IMPACT-012`
- `CSE-SOC2-CC-NO-POLICY-DEPLOYMENT-017`
