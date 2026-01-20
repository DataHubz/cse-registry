# CSE-SOC2-CC-NO-CONTROL-EVALUATIONS-013

**No Ongoing and Separate Evaluations**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-CONTROL-EVALUATIONS-013` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not select, develop, and perform ongoing and/or separate evaluations to ascertain whether the components of internal control are present and functioning.

## Applicability

- Applies when control testing is not performed
- Applies when there is no internal audit function or activities
- Applies when control monitoring is absent
- Applies when control effectiveness is not evaluated
- Applies when management self-assessments are not conducted
- Applies when there is no evidence of ongoing control evaluations
- Applies when control deficiencies are not identified through testing

## Examples (Non-Normative)

### No Control Testing

```yaml
security_controls:
  total_controls: 85
  last_testing_date: never
  testing_schedule: none
  testing_methodology: undefined

access_review_control:
  control_id: AC-015
  frequency: quarterly
  last_performed: never
  evidence: none
```

### Missing Internal Audit Function

```yaml
organization:
  internal_audit:
    function_exists: false
    outsourced_audit: false

  control_evaluation:
    ongoing_monitoring: none
    periodic_assessments: not_scheduled
    management_review: informal
```

### No Control Effectiveness Monitoring

```yaml
incident_response_control:
  documented: true
  implemented: claimed
  testing: never_tested
  effectiveness: unknown

backup_control:
  policy: documented
  execution: automated
  validation:
    restore_testing: never
    effectiveness: unverified
```

## SOC 2 Context (Informative)

- **CC4.1**: The entity selects, develops, and performs ongoing and/or separate evaluations to ascertain whether the components of internal control are present and functioning
- **COSO Principle 16**: The organization selects, develops, and performs ongoing and/or separate evaluations to ascertain whether the components of internal control are present and functioning

## Related Signals

- `CSE-SOC2-CC-NO-QUALITY-INFO-006`
- `CSE-SOC2-CC-NO-DEFICIENCY-COMMS-014`
- `CSE-SOC2-CC-NO-CONTROL-ACCOUNTABILITY-005`
