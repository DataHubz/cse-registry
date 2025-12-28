# CSE-SOC2-CC-NO-QUALITY-INFO-006

**No Quality Information for Internal Control**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-QUALITY-INFO-006` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not obtain or generate and use relevant, quality information to support the functioning of internal control.

## Applicability

- Applies when control monitoring systems do not generate metrics or reports
- Applies when information for control decisions is unreliable or inaccurate
- Applies when data quality controls are absent
- Applies when information is not timely for effective control decisions
- Applies when relevant external information is not obtained
- Applies when information systems cannot provide control-relevant data
- Applies when management makes control decisions without supporting data

## Examples (Non-Normative)

### No Control Monitoring Data

```yaml
security_controls:
  monitoring:
    metrics_collected: none
    dashboards: null
    reporting: manual_ad_hoc

access_reviews:
  data_source: manual_spreadsheet
  accuracy: questionable
  last_validation: never

incident_tracking:
  system: email_threads
  searchability: poor
  reporting_capability: minimal
```

### Poor Data Quality

```yaml
user_access_report:
  source: multiple_disconnected_systems
  reconciliation: none
  known_discrepancies: 150
  data_quality_score: unknown

control_testing_results:
  storage: local_files
  version_control: none
  consolidation: manual
  reliability: unverified
```

### Decision Making Without Data

```yaml
control_assessment_meeting:
  date: 2024-08-20
  decisions:
    - increase_password_complexity
    - implement_mfa

  supporting_data:
    password_breach_statistics: not_available
    authentication_failure_rates: not_tracked
    user_impact_analysis: not_performed

  basis: management_intuition
```

## SOC 2 Context (Informative)

- **CC2.1**: The entity obtains or generates and uses relevant, quality information to support the functioning of internal control
- **COSO Principle 13**: The organization obtains or generates and uses relevant, quality information to support the functioning of internal control

## Related Signals

- `CSE-SOC2-CC-NO-INTERNAL-COMMS-007`
- `CSE-SOC2-CC-NO-CONTROL-EVALUATIONS-013`
- `CSE-SOC2-CC-NO-RISK-IDENTIFICATION-010`
