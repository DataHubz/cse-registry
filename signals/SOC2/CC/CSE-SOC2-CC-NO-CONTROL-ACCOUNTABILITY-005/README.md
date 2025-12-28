# CSE-SOC2-CC-NO-CONTROL-ACCOUNTABILITY-005

**No Accountability for Internal Control**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-CONTROL-ACCOUNTABILITY-005` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not hold individuals accountable for their internal control responsibilities in pursuit of objectives.

## Applicability

- Applies when internal controls do not have assigned owners
- Applies when job descriptions do not include control responsibilities
- Applies when performance evaluations do not include control effectiveness
- Applies when control failures have no consequences
- Applies when individuals are not aware of their control responsibilities
- Applies when there is no monitoring of control performance by individuals
- Applies when accountability for control deficiencies is unclear

## Examples (Non-Normative)

### No Control Ownership

```yaml
access_control_policy:
  policy_id: AC-001
  owner: unassigned
  last_review: unknown

backup_controls:
  responsible_party: null
  monitoring: none

incident_response:
  control_owner: unclear
  accountability: undefined
```

### Performance Objectives Exclude Controls

```yaml
employee_performance_review:
  employee: database_administrator
  objectives:
    - database_uptime: 99.9%
    - query_optimization: 20_improvements
    - migration_projects: 3_completed
    # No objectives related to access controls, audit logs, or security

  control_responsibilities: not_evaluated
```

### No Consequences for Control Failures

```yaml
control_failure_incident:
  date: 2024-06-15
  control: mandatory_code_review
  failure: 15_commits_without_review
  responsible_party: senior_engineer_001
  consequences: none
  corrective_action: verbal_reminder

control_failure_pattern:
  recurrence: quarterly
  accountability_action: none
```

## SOC 2 Context (Informative)

- **CC1.5**: The entity holds individuals accountable for their internal control responsibilities in the pursuit of objectives
- **COSO Principle 5**: The organization holds individuals accountable for their internal control responsibilities in the pursuit of objectives

## Related Signals

- `CSE-SOC2-CC-NO-INTEGRITY-COMMITMENT-001`
- `CSE-SOC2-CC-NO-MGMT-STRUCTURE-003`
- `CSE-SOC2-CC-NO-DEFICIENCY-COMMS-014`
