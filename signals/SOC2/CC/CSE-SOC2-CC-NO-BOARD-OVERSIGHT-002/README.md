# CSE-SOC2-CC-NO-BOARD-OVERSIGHT-002

**No Board Independence and Oversight**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-BOARD-OVERSIGHT-002` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The board of directors does not demonstrate independence from management and does not exercise oversight of internal control development and performance.

## Applicability

- Applies when the board lacks independent directors
- Applies when board members have conflicts of interest with management
- Applies when the board does not have an audit committee or risk committee
- Applies when board meetings do not include internal control discussions
- Applies when the board does not review risk assessments or control deficiencies
- Applies when the board does not challenge management decisions
- Applies when board members lack expertise in risk management or controls

## Examples (Non-Normative)

### Lack of Board Independence

```yaml
board_of_directors:
  total_members: 5
  independent_members: 0
  composition:
    - role: CEO
      independent: false
    - role: CFO
      independent: false
    - role: Founder_Family_Member
      independent: false
    - role: Major_Investor_Representative
      independent: false
      conflict: financial_interest
    - role: Former_Executive
      independent: false
```

### No Oversight Activities

```yaml
board_meetings:
  frequency: quarterly
  2024_topics:
    - financial_results
    - strategic_initiatives
    - product_roadmap
    # No internal control or risk management discussions

audit_committee:
  exists: false

board_training:
  risk_management: none
  internal_controls: none
```

### Rubber Stamp Board

```yaml
control_framework_change:
  proposed_by: management
  board_review:
    questions_asked: 0
    challenges_raised: 0
    approval: unanimous
    discussion_time_minutes: 5
```

## SOC 2 Context (Informative)

- **CC1.2**: The board of directors demonstrates independence from management and exercises oversight of the development and performance of internal control
- **COSO Principle 2**: The board of directors demonstrates independence from management and exercises oversight of the development and performance of internal control

## Related Signals

- `CSE-SOC2-CC-NO-INTEGRITY-COMMITMENT-001`
- `CSE-SOC2-CC-NO-MGMT-STRUCTURE-003`
- `CSE-SOC2-CC-NO-CONTROL-EVALUATIONS-013`
