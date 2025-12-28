# CSE-SOC2-CC-NO-FRAUD-ASSESSMENT-011

**No Fraud Risk Assessment**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-FRAUD-ASSESSMENT-011` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not consider the potential for fraud in assessing risks to the achievement of objectives.

## Applicability

- Applies when fraud risk assessments are not conducted
- Applies when fraud scenarios are not identified or documented
- Applies when controls do not address fraud prevention and detection
- Applies when there is no whistleblower or fraud reporting mechanism
- Applies when fraud indicators are not monitored
- Applies when privileged access abuse is not considered
- Applies when fraud risk is not part of the overall risk assessment

## Examples (Non-Normative)

### No Fraud Risk Assessment

```yaml
risk_assessment:
  date: 2024-06-01
  scope:
    - cybersecurity_risks
    - operational_risks
    - compliance_risks
  # No fraud risk assessment

fraud_scenarios:
  identified: []
  analyzed: false
```

### Missing Fraud Controls

```yaml
financial_controls:
  segregation_of_duties: partial
  approval_limits: defined

  fraud_specific_controls:
    transaction_monitoring: none
    anomaly_detection: absent
    whistleblower_hotline: not_implemented

privileged_access:
  monitoring_for_abuse: none
  fraud_indicators: not_tracked
```

### No Fraud Reporting Mechanism

```yaml
reporting_channels:
  customer_support: exists
  hr_complaints: exists
  ethics_hotline: null
  fraud_reporting: no_mechanism

employee_handbook:
  fraud_policy: absent
  reporting_procedures: undefined
  protection_for_reporters: not_specified
```

## SOC 2 Context (Informative)

- **CC3.3**: The entity considers the potential for fraud in assessing risks to the achievement of objectives
- **COSO Principle 8**: The organization considers the potential for fraud in assessing risks to the achievement of objectives

## Related Signals

- `CSE-SOC2-CC-NO-RISK-IDENTIFICATION-010`
- `CSE-SOC2-CC-NO-INTEGRITY-COMMITMENT-001`
- `CSE-SOC2-CC-NO-CONTROL-SELECTION-015`
