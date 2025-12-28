# CSE-SOC2-CC-NO-CONTROL-SELECTION-015

**No Selection and Development of Controls**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-CONTROL-SELECTION-015` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not select and develop control activities that contribute to the mitigation of risks to the achievement of objectives to acceptable levels.

## Applicability

- Applies when controls are not based on risk assessments
- Applies when there is no risk-to-control mapping
- Applies when control design is arbitrary or ad-hoc
- Applies when controls do not address identified risks
- Applies when control selection methodology is undefined
- Applies when preventive and detective controls are not balanced
- Applies when control design does not consider cost-effectiveness

## Examples (Non-Normative)

### Controls Not Based on Risk Assessment

```yaml
security_controls:
  implemented_controls:
    - firewall
    - antivirus
    - password_policy
  # Standard controls, not risk-based

risk_assessment:
  performed: false

control_justification:
  methodology: industry_best_practices
  risk_linkage: none
```

### No Risk-to-Control Mapping

```yaml
identified_risks:
  - risk_id: R-001
    description: "Unauthorized data access"
    severity: high
    controls: not_mapped

  - risk_id: R-002
    description: "Data loss from ransomware"
    severity: critical
    controls: not_mapped

control_gaps:
  unmitigated_risks: 15
  gap_analysis: not_performed
```

### Ad-Hoc Control Implementation

```yaml
control_implementation:
  trigger: vendor_suggestion
  risk_assessment: not_performed
  cost_benefit_analysis: not_conducted

  example:
    control: dlp_solution
    cost: 250000_annually
    justification: "competitors have it"
    risks_addressed: unclear
    effectiveness_measure: undefined
```

## SOC 2 Context (Informative)

- **CC5.1**: The entity selects and develops control activities that contribute to the mitigation of risks to the achievement of objectives to acceptable levels
- **COSO Principle 10**: The organization selects and develops control activities that contribute to the mitigation of risks to the achievement of objectives to acceptable levels

## Related Signals

- `CSE-SOC2-CC-NO-RISK-IDENTIFICATION-010`
- `CSE-SOC2-CC-NO-OBJECTIVES-SPEC-009`
- `CSE-SOC2-CC-NO-TECH-CONTROLS-016`
