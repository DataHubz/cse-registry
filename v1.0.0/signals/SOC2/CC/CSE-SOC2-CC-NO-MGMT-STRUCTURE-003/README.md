# CSE-SOC2-CC-NO-MGMT-STRUCTURE-003

**No Management Structure and Authority**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-MGMT-STRUCTURE-003` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Management has not established structures, reporting lines, and appropriate authorities and responsibilities in pursuit of objectives.

## Applicability

- Applies when there is no documented organizational structure or org chart
- Applies when reporting relationships are unclear or frequently change
- Applies when job descriptions do not define responsibilities
- Applies when authority levels and approval limits are not documented
- Applies when there is inadequate segregation of duties
- Applies when decision-making authority is ambiguous
- Applies when span of control is too broad for effective oversight

## Examples (Non-Normative)

### Undefined Organizational Structure

```yaml
organization:
  org_chart: null
  last_updated: never

departments:
  engineering:
    manager: unclear
    reporting_structure: undefined
    team_members: 45

roles:
  senior_engineer:
    responsibilities: not_documented
    authority: undefined
```

### Lack of Segregation of Duties

```yaml
financial_controls:
  purchase_approval:
    authorized_users:
      - employee_001

  payment_processing:
    authorized_users:
      - employee_001  # Same person can approve and process

  bank_reconciliation:
    performed_by: employee_001  # Same person performs all functions
```

### Ambiguous Authority

```yaml
approval_matrix:
  exists: false

spending_authority:
  documentation: none

recent_incident:
  issue: unauthorized_cloud_purchase
  amount: 50000
  approved_by: team_lead
  authority_level: unknown
  escalation: none
```

## SOC 2 Context (Informative)

- **CC1.3**: Management establishes, with board oversight, structures, reporting lines, and appropriate authorities and responsibilities in the pursuit of objectives
- **COSO Principle 3**: Management establishes, with board oversight, structures, reporting lines, and appropriate authorities and responsibilities in the pursuit of objectives

## Related Signals

- `CSE-SOC2-CC-NO-BOARD-OVERSIGHT-002`
- `CSE-SOC2-CC-NO-CONTROL-ACCOUNTABILITY-005`
- `CSE-SOC2-CC-NO-CONTROL-SELECTION-015`
