# CSE-GEN-GOVERN-NO-RISK-ASSESSMENT-002

**Risk Assessment Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-GEN-GOVERN-NO-RISK-ASSESSMENT-002`   |
| Domain          | GEN (General)                             |
| Category        | GOVERN                                    |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

No documented process exists for systematically identifying, analyzing, and evaluating security risks to the organization's information assets and systems.

This signal indicates that an organization lacks a formal risk assessment methodology to understand threats, vulnerabilities, likelihood, and potential impact to make informed security investment decisions.

## Applicability

This signal applies to:

- All organizations managing information systems
- Cloud service environments
- Healthcare organizations subject to HIPAA
- Financial institutions under regulatory oversight
- Organizations processing payment card data
- Government contractors requiring CMMC certification
- Organizations subject to ISO 27001 or SOC 2 requirements
- Critical infrastructure operators
- Software development organizations
- Third-party service providers

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Risk Assessment Documentation

```
# Indicators of missing risk assessment:
- No documented risk assessment methodology
- No asset inventory with risk ratings
- No threat and vulnerability analysis
- No risk register or risk treatment plan
- No documented risk acceptance decisions
- No periodic risk reviews
```

### Undocumented Risk Process

```yaml
# Organization risk management characteristics:
risk_management:
  formal_assessment_process: false
  asset_identification: not_documented
  threat_analysis: not_performed
  vulnerability_analysis: not_performed
  risk_evaluation: not_documented
  risk_treatment_plan: false
  periodic_review: false
governance:
  risk_ownership: undefined
  risk_acceptance_authority: undefined
  risk_reporting: false
```

### Missing Risk Assessment Components

```
Risk Assessment Gaps:
- Asset inventory and classification
- Threat identification and analysis
- Vulnerability assessment
- Likelihood determination
- Impact analysis
- Risk calculation and prioritization
- Risk treatment options evaluation
- Residual risk acceptance
- Risk monitoring and review
- Communication to stakeholders
```

### No Evidence of Risk Analysis

```python
# Example indicators in cloud environments:
indicators = {
    "no_asset_inventory": True,
    "no_data_flow_diagrams": True,
    "no_threat_modeling": True,
    "no_vulnerability_scans": True,
    "no_risk_register": True,
    "no_risk_reviews": True,
    "no_security_metrics": True
}
```

## What This Signal Does NOT Assert

- Whether informal risk considerations exist
- The presence or absence of specific security controls
- Whether the organization has experienced security incidents
- Compliance or non-compliance with any framework
- The effectiveness of existing security measures
- Required risk assessment methodology or frequency
- Whether compensating controls are in place
- The organization's risk appetite or tolerance

## Related Signals

- `CSE-GEN-GOVERN-NO-SECURITY-POLICY-001` — Security policy missing
- `CSE-GEN-GOVERN-NO-COMPLIANCE-REVIEW-005` — Compliance review missing
- `CSE-GEN-VULN-NO-SCANNING-001` — Vulnerability scanning missing (if defined)
- `CSE-CMMC-RISK-NO-ASSESSMENT-001` — CMMC risk assessment missing (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **HIPAA**: 164.308(a)(1)(ii)(A) — Risk analysis
- **HIPAA**: 164.308(a)(1)(ii)(B) — Risk management
- **SOC 2**: CC3.2 — Risk assessment process
- **SOC 2**: CC4.1 — Implementation of risk assessment
- **ISO 27001**: Clause 6.1.2 — Information security risk assessment
- **ISO 27001**: A.8.2.1 — Management of information security risks
- **PCI DSS**: Requirement 12.2 — Perform risk assessment at least annually
- **CIS Controls**: 4.1 — Establish and maintain a secure configuration process
- **CIS Controls**: 18.1 — Establish and maintain a penetration testing program
- **CMMC**: CA.L2-3.12.1 — Periodically assess the security controls
- **CMMC**: RM.L2-3.11.1 — Periodically assess the risk to organizational operations
- **NIST CSF**: ID.RA-1 — Asset vulnerabilities are identified and documented
- **NIST CSF**: ID.RA-2 — Cyber threat intelligence is received from information sharing forums
- **NIST CSF**: ID.RA-3 — Threats are identified and documented

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Document review for risk assessment artifacts
- Interviews with security and risk management personnel
- Review of security program documentation
- Assessment of governance processes
- Audit findings and compliance reports
- Examination of decision-making documentation

The presence of this signal indicates a critical governance gap that prevents the organization from:

- Making informed security investment decisions
- Prioritizing security initiatives
- Demonstrating due diligence
- Meeting regulatory requirements
- Understanding the organization's threat landscape

Organizations should establish a risk assessment process that:

- Identifies and values information assets
- Identifies threats and vulnerabilities
- Assesses likelihood and impact
- Calculates and prioritizes risks
- Documents risk treatment decisions
- Reviews and updates assessments regularly
- Integrates with change management
- Reports to executive leadership
