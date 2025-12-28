# CSE-SOC2-CC-NO-INTERNAL-COMMS-007

**No Internal Communication of Objectives**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-INTERNAL-COMMS-007` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not internally communicate information, including objectives and responsibilities for internal control, necessary to support the functioning of internal control.

## Applicability

- Applies when control policies are not communicated to employees
- Applies when control objectives are unclear to personnel
- Applies when employees do not know their control responsibilities
- Applies when there are no communication channels for control matters
- Applies when control changes are not announced or explained
- Applies when there is no mechanism to report control concerns
- Applies when control training is absent or inadequate

## Examples (Non-Normative)

### No Communication of Control Policies

```yaml
security_policy:
  version: 2.0
  effective_date: 2024-01-01
  communication:
    announcement: none
    training: none
    acknowledgment: not_required

employee_awareness:
  policy_exists: 23%
  policy_location: unknown
  responsibilities: unclear
```

### Lack of Communication Channels

```yaml
internal_communications:
  control_updates:
    method: none
    frequency: never

  reporting_mechanisms:
    control_concerns: no_channel
    questions: unspecified
    escalation: unclear

  feedback_loop:
    employee_input: not_solicited
```

### Unawareness of Responsibilities

```yaml
employee_survey:
  question: "Do you know your information security responsibilities?"
  responses:
    yes: 15%
    no: 60%
    unsure: 25%

  question: "Where can you find the company's control policies?"
  responses:
    correct_answer: 8%
    incorrect_answer: 32%
    dont_know: 60%
```

## SOC 2 Context (Informative)

- **CC2.2**: The entity internally communicates information, including objectives and responsibilities for internal control, necessary to support the functioning of internal control
- **COSO Principle 14**: The organization internally communicates information, including objectives and responsibilities for internal control, necessary to support the functioning of internal control

## Related Signals

- `CSE-SOC2-CC-NO-INTEGRITY-COMMITMENT-001`
- `CSE-SOC2-CC-NO-QUALITY-INFO-006`
- `CSE-SOC2-CC-NO-EXTERNAL-COMMS-008`
