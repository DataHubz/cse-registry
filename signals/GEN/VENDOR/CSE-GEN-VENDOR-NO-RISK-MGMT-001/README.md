# CSE-GEN-VENDOR-NO-RISK-MGMT-001

**Vendor Risk Management Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-GEN-VENDOR-NO-RISK-MGMT-001`        |
| Domain          | GEN (General)                            |
| Category        | VENDOR                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No process for assessing and managing security risks posed by third-party vendors and service providers.

This signal indicates the absence of a formal vendor risk management program that systematically evaluates, monitors, and mitigates security risks introduced by third-party relationships throughout the vendor lifecycle.

## Applicability

This signal applies to:

- All organizations utilizing third-party vendors and service providers
- Cloud service providers and SaaS applications
- Outsourced IT services and managed service providers
- Business process outsourcing relationships
- Supply chain and logistics partners
- Contractors and consultants with system access
- Payment processors and financial service providers

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Vendor Risk Assessment Process

```text
Indicators of missing vendor risk management:
- No vendor security questionnaire or assessment process
- No risk evaluation criteria for vendor selection
- No security requirements for vendor onboarding
- No documented vendor risk classification methodology
- No vendor due diligence procedures
- No vendor risk scoring or rating system
```

### Lack of Vendor Risk Framework

```yaml
# Missing vendor risk management components
vendor_risk_program:
  vendor_assessment_process: null
  risk_classification_framework: null
  due_diligence_procedures: null
  security_evaluation_criteria: null
  risk_mitigation_strategies: null
  vendor_lifecycle_management: null
  continuous_monitoring: null
```

### No Vendor Security Evaluation

```text
Missing vendor evaluation capabilities:
- No security posture assessment of vendors
- No review of vendor certifications and attestations
- No evaluation of vendor security controls
- No assessment of vendor incident response capabilities
- No review of vendor business continuity plans
- No evaluation of subcontractor relationships
```

### Absence of Risk Governance

```python
# Indicators of missing vendor risk governance
def assess_vendor_risk_program():
    issues = []

    # No vendor risk policy
    if not has_vendor_risk_policy():
        issues.append("No vendor risk management policy")

    # No risk assessment workflow
    if not has_vendor_assessment_workflow():
        issues.append("No formal vendor assessment process")

    # No risk acceptance process
    if not has_vendor_risk_acceptance():
        issues.append("No vendor risk acceptance procedures")

    # No periodic reassessment
    if not has_vendor_reassessment_schedule():
        issues.append("No periodic vendor risk reassessment")

    return issues
```

### Missing Vendor Lifecycle Management

```json
{
  "vendor_lifecycle": {
    "vendor_identification": false,
    "security_assessment": false,
    "contract_review": false,
    "onboarding_security_checks": false,
    "ongoing_monitoring": false,
    "periodic_reassessment": false,
    "offboarding_procedures": false
  }
}
```

### No Risk Documentation

```text
Missing documentation elements:
- Vendor risk management policy and procedures
- Vendor risk assessment templates and questionnaires
- Risk classification and rating criteria
- Vendor security requirements and standards
- Risk mitigation and remediation procedures
- Vendor risk reporting and escalation processes
- Roles and responsibilities for vendor risk management
- Vendor risk metrics and KPIs
```

## What This Signal Does NOT Assert

- Whether specific vendors pose security risks
- The effectiveness of any informal vendor oversight
- Whether compensating controls are in place
- The specific risk assessment methodology to be used
- Compliance or non-compliance with any framework
- Required vendor security standards
- The appropriate level of vendor due diligence

## Related Signals

- `CSE-GEN-VENDOR-NO-AGREEMENTS-002` — Vendor security agreements missing
- `CSE-GEN-VENDOR-NO-MONITORING-003` — Vendor monitoring missing
- `CSE-GEN-VENDOR-NO-INVENTORY-004` — Vendor inventory missing
- `CSE-GEN-RISK-NO-ASSESSMENT-001` — Risk assessment process missing (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **ISO 27001**: A.15.1.1 (Information security policy for supplier relationships), A.15.1.2 (Addressing security within supplier agreements)
- **SOC 2**: CC9.2 (Vendor and business partner management)
- **CIS Controls**: Control 15 (Service Provider Management)
- **NIST CSF**: ID.SC-2 (Suppliers and third-party partners are identified, prioritized, and assessed)
- **HITRUST**: 04.c (Third Party Management)
- **CMMC**: CA.L2-3.12.2 (Take corrective actions on identified deficiencies)
- **PCI DSS**: Requirement 12.8 (Service provider management)
- **FedRAMP**: SA-9 (External Information System Services)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Review of documented vendor risk management policies
- Assessment of vendor assessment and evaluation processes
- Examination of vendor risk classification methodologies
- Evaluation of vendor due diligence procedures
- Review of vendor risk reporting and governance
- Analysis of vendor lifecycle management processes
- Assessment of risk mitigation and remediation workflows

A comprehensive vendor risk management program typically includes:
- **Identification**: Catalog of all third-party relationships
- **Assessment**: Security evaluation during vendor selection
- **Classification**: Risk-based categorization of vendors
- **Due Diligence**: Review of security controls and certifications
- **Monitoring**: Ongoing oversight of vendor security posture
- **Remediation**: Addressing identified vendor risks
- **Governance**: Oversight and continuous improvement

The presence of this signal indicates a fundamental gap that warrants immediate attention to establish a structured approach to managing third-party security risks.
