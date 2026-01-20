# CSE-SOC2-CC-NO-DEFICIENCY-COMMS-014

**No Communication of Deficiencies**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-DEFICIENCY-COMMS-014` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not evaluate and communicate internal control deficiencies in a timely manner to those parties responsible for taking corrective action.

## Applicability

- Applies when control deficiencies are not documented or tracked
- Applies when deficiencies are not communicated to responsible parties
- Applies when there is no deficiency remediation process
- Applies when significant deficiencies are not escalated to management or board
- Applies when remediation timelines are not established or monitored
- Applies when deficiency status is not tracked to completion
- Applies when there is no prioritization of deficiency remediation

## Examples (Non-Normative)

### No Deficiency Tracking

```yaml
audit_findings:
  2024_q2_audit:
    deficiencies_identified: 12
    tracking_system: none
    documentation: email_threads

  deficiency_status: unknown
  responsible_parties: not_assigned
  remediation_plans: not_created
```

### No Communication Process

```yaml
control_deficiency:
  id: DEF-2024-045
  severity: high
  identified_date: 2024-07-01
  description: "MFA not enforced for admin accounts"

  communication:
    to_control_owner: not_communicated
    to_management: not_escalated
    to_board: not_reported

  current_date: 2024-12-01
  status: unresolved
```

### No Remediation Tracking

```yaml
deficiency_remediation:
  total_open_deficiencies: 28
  overdue_remediation: 19

  remediation_tracking:
    system: none
    status_updates: not_required
    completion_verification: not_performed

  escalation_process:
    for_overdue: undefined
    to_senior_management: no_process
```

## SOC 2 Context (Informative)

- **CC4.2**: The entity evaluates and communicates internal control deficiencies in a timely manner to those parties responsible for taking corrective action, including senior management and the board of directors, as appropriate
- **COSO Principle 17**: The organization evaluates and communicates internal control deficiencies in a timely manner to those parties responsible for taking corrective action, including senior management and the board of directors, as appropriate

## Related Signals

- `CSE-SOC2-CC-NO-CONTROL-EVALUATIONS-013`
- `CSE-SOC2-CC-NO-INTERNAL-COMMS-007`
- `CSE-SOC2-CC-NO-CONTROL-ACCOUNTABILITY-005`
