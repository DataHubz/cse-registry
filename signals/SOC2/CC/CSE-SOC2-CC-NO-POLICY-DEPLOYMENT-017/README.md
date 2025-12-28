# CSE-SOC2-CC-NO-POLICY-DEPLOYMENT-017

**No Deployment Through Policies**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-POLICY-DEPLOYMENT-017` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not deploy control activities through policies that establish what is expected and procedures that put policies into action.

## Applicability

- Applies when policies for controls are not documented
- Applies when procedures to implement policies do not exist
- Applies when policies are not communicated to relevant personnel
- Applies when there is no policy acknowledgment or training
- Applies when policies are not enforced or monitored for compliance
- Applies when there is a gap between policy and actual practice
- Applies when policies are outdated or not maintained

## Examples (Non-Normative)

### Missing Policies and Procedures

```yaml
security_program:
  policies:
    access_control_policy: null
    incident_response_policy: null
    data_classification_policy: null

  procedures:
    documented_procedures: 0
    standard_operating_procedures: none

  guidance:
    employee_handbook: security_section_missing
```

### Policy-Practice Gap

```yaml
password_policy:
  documented:
    minimum_length: 12
    complexity: required
    rotation: 90_days

  actual_practice:
    enforcement: none
    compliance_rate: 23%
    exceptions: untracked

  last_review: 2020-01-01
```

### No Policy Communication or Enforcement

```yaml
data_handling_policy:
  version: 3.0
  effective_date: 2024-06-01

  communication:
    employee_notification: none
    training_provided: false
    acknowledgment_required: false

  enforcement:
    compliance_monitoring: none
    violations_tracked: false
    consequences: undefined
```

## SOC 2 Context (Informative)

- **CC5.3**: The entity deploys control activities through policies that establish what is expected and procedures that put policies into action
- **COSO Principle 12**: The organization deploys control activities through policies that establish what is expected and procedures that put policies into action

## Related Signals

- `CSE-SOC2-CC-NO-CONTROL-SELECTION-015`
- `CSE-SOC2-CC-NO-INTERNAL-COMMS-007`
- `CSE-SOC2-CC-NO-CONTROL-ACCOUNTABILITY-005`
