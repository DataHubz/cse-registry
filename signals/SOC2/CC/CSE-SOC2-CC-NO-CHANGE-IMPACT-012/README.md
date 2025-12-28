# CSE-SOC2-CC-NO-CHANGE-IMPACT-012

**No Change Impact Assessment**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-CHANGE-IMPACT-012` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not identify and assess changes that could significantly impact the system of internal control.

## Applicability

- Applies when technology changes are not assessed for control impacts
- Applies when business model changes do not trigger control reviews
- Applies when organizational restructuring does not include control reassessment
- Applies when regulatory changes are not evaluated for control implications
- Applies when new products or services launch without control evaluation
- Applies when third-party changes are not monitored for control impacts
- Applies when change management does not include control considerations

## Examples (Non-Normative)

### No Control Impact Assessment

```yaml
cloud_migration:
  scope: move_all_services_to_aws
  start_date: 2024-05-01
  completion_date: 2024-08-15

  control_impact_assessment: not_performed
  updated_controls: none
  risk_assessment: not_updated

  result:
    controls_obsolete: 12
    new_risks: unidentified
```

### Business Change Without Control Review

```yaml
business_expansion:
  new_market: european_union
  new_requirements:
    - gdpr_compliance
    - data_residency
    - local_regulations

  control_updates: none
  privacy_controls: unchanged
  data_governance: not_revised
```

### Technology Change Without Assessment

```yaml
identity_provider_migration:
  from: on_premise_ad
  to: okta_saas
  migration_date: 2024-09-01

  access_control_review: not_performed
  authentication_controls: not_updated
  control_documentation: not_revised

  issues_discovered_post_migration:
    - orphaned_accounts: 250
    - misconfigured_mfa: true
    - audit_log_gaps: 30_days
```

## SOC 2 Context (Informative)

- **CC3.4**: The entity identifies and assesses changes that could significantly impact the system of internal control
- **COSO Principle 9**: The organization identifies and assesses changes that could significantly impact the system of internal control

## Related Signals

- `CSE-SOC2-CC-NO-RISK-IDENTIFICATION-010`
- `CSE-SOC2-CC-NO-CONTROL-EVALUATIONS-013`
- `CSE-SOC2-CC-NO-TECH-CONTROLS-016`
