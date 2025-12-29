# CSE-CCPA-SECURITY-NO-RISK-ASSESSMENT-005

**Security Risk Assessment Missing (CPRA Regulations)**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-SECURITY-NO-RISK-ASSESSMENT-005` |
| Domain | CCPA |
| Category | SECURITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal identifies when a business has not performed a security risk assessment to evaluate the risks to personal information and determine appropriate security measures. Regular risk assessments are essential to implementing and maintaining "reasonable security procedures and practices appropriate to the nature of the information" as required by CCPA §1798.150(a).

## Applicability

- Businesses subject to CCPA that have not conducted security risk assessments
- Organizations that have not evaluated the sensitivity of personal information they process
- Companies without documented risk assessment methodologies or frameworks
- Businesses that have not reassessed security risks after significant system changes or incidents

## Examples (Non-Normative)

### No Risk Assessment Performed

```yaml
security_program:
  risk_assessment_conducted: false
  last_assessment_date: null
  risk_methodology: "none"
  identified_threats: []
  risk_register: false
  mitigation_plans: []
  signal: CSE-CCPA-SECURITY-NO-RISK-ASSESSMENT-005
  compliance_status: non-compliant
```

### Outdated Risk Assessment

```yaml
risk_management:
  last_assessment: "2019-06-01"
  assessment_frequency: "ad-hoc"
  reassessment_triggers: []
  changes_since_assessment:
    - new_cloud_services: true
    - new_data_types: true
    - regulatory_changes: true
    - previous_incidents: 2
  current_risks_documented: false
  signal: CSE-CCPA-SECURITY-NO-RISK-ASSESSMENT-005
  risk_posture: unknown
```

### Incomplete Risk Assessment

```yaml
assessment_coverage:
  data_inventory: false
  threat_modeling: false
  vulnerability_assessment: false
  business_impact_analysis: false
  third_party_risk_review: false
  technical_controls_evaluation: "partial"
  residual_risk_acceptance: false
  executive_approval: false
  signal: CSE-CCPA-SECURITY-NO-RISK-ASSESSMENT-005
  effectiveness: inadequate
```

### Missing Data Classification

```yaml
data_management:
  personal_info_inventory: false
  data_classification: "not implemented"
  sensitivity_levels: []
  data_flows_mapped: false
  retention_policies: "undefined"
  access_requirements: "not risk-based"
  signal: CSE-CCPA-SECURITY-NO-RISK-ASSESSMENT-005
  foundational_gap: true
```

## CCPA Context (Informative)

- **Section**: §1798.150(a) and CPPA Regulations
- **Requirement**: CCPA requires businesses to "implement and maintain reasonable security procedures and practices appropriate to the nature of the information." The California Privacy Protection Agency (CPPA) regulations emphasize that businesses must conduct risk assessments to determine what security measures are appropriate based on the sensitivity and volume of personal information processed.
- **Added by**: CCPA (§1798.150), enhanced by CPRA and CPPA regulations

## Related Signals

- `CSE-CCPA-SECURITY-NO-REASONABLE-MEASURES-001`
- `CSE-CCPA-SECURITY-NO-ENCRYPTION-002`
- `CSE-CCPA-SECURITY-NO-BREACH-PROCEDURES-003`
- `CSE-CCPA-SECURITY-UNREDACTED-EXPOSURE-004`
