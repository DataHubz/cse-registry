# CSE-GEN-GOVERN-NO-COMPLIANCE-REVIEW-005

**Compliance Review Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-GEN-GOVERN-NO-COMPLIANCE-REVIEW-005` |
| Domain          | GEN (General)                             |
| Category        | GOVERN                                    |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

No documented process exists for periodically reviewing compliance with security policies, procedures, and applicable regulatory or contractual requirements.

This signal indicates that the organization lacks a systematic approach to verifying that security controls are operating as intended and that the organization remains compliant with its obligations.

## Applicability

This signal applies to:

- Organizations with regulatory compliance requirements
- Organizations subject to contractual security obligations
- Healthcare organizations under HIPAA
- Financial services institutions
- Organizations processing payment card data (PCI DSS)
- Government contractors requiring CMMC
- Organizations certified to ISO 27001
- Organizations undergoing SOC 2 audits
- Organizations with HITRUST certification
- Cloud service providers with compliance commitments
- Organizations in regulated industries

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Compliance Review Process

```
# Indicators of missing compliance reviews:
- No documented compliance review schedule
- No internal audit program
- No policy compliance assessments
- No control effectiveness testing
- No regulatory compliance monitoring
- No third-party assessment reviews
- No management review of compliance status
```

### Undocumented Review Program

```yaml
# Compliance review characteristics:
compliance_program:
  review_process: false
  review_schedule: false
  internal_audits: false
  control_testing: false
  compliance_monitoring: false
  management_reviews: false

review_scope:
  policy_compliance: false
  regulatory_compliance: false
  contractual_obligations: false
  control_effectiveness: false
  risk_assessments: false

documentation:
  review_procedures: false
  review_findings: false
  corrective_actions: false
  compliance_reports: false
```

### Missing Review Components

```
Compliance Review Gaps:
- Policy and procedure compliance verification
- Security control effectiveness testing
- Regulatory requirement monitoring
- Contractual obligation tracking
- Internal audit schedule and execution
- Management review meetings
- Compliance gap analysis
- Corrective action tracking
- Continuous monitoring processes
- Compliance reporting to stakeholders
```

### No Evidence of Reviews

```python
# Example indicators of missing compliance reviews:
compliance_indicators = {
    "review_schedule": None,
    "last_review_date": None,
    "review_findings": [],
    "corrective_actions": [],
    "compliance_reports": [],
    "audit_program": False,
    "monitoring_tools": [],
    "management_reviews": []
}

frameworks_tracked = {
    "ISO27001": False,
    "SOC2": False,
    "HIPAA": False,
    "PCI_DSS": False,
    "HITRUST": False,
    "CMMC": False
}
```

### No Compliance Metrics

```
Missing Compliance Monitoring:
- No compliance dashboards or metrics
- No tracking of control failures
- No monitoring of policy exceptions
- No measurement of control effectiveness
- No trending of compliance status
- No reporting to executive leadership
```

## What This Signal Does NOT Assert

- Whether the organization is compliant with any framework
- Whether security controls are effective
- Whether audits have been performed by external parties
- The scope or frequency of required reviews
- Compliance or non-compliance with specific requirements
- Whether compensating controls exist
- The maturity of the compliance program
- Whether security incidents have occurred

## Related Signals

- `CSE-GEN-GOVERN-NO-SECURITY-POLICY-001` — Security policy missing
- `CSE-GEN-GOVERN-NO-RISK-ASSESSMENT-002` — Risk assessment missing
- `CSE-GEN-GOVERN-NO-SECURITY-ROLES-003` — Security roles undefined
- `CSE-CMMC-ASSESSMENT-NO-PERIODIC-REVIEW-002` — CMMC periodic review missing (if defined)
- `CSE-GEN-AUDIT-NO-REVIEW-001` — Audit log review missing (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **ISO 27001**: Clause 9.2 — Internal audit
- **ISO 27001**: Clause 9.3 — Management review
- **ISO 27001**: A.5.1.2 — Review of the policies for information security
- **ISO 27001**: A.18.2.2 — Compliance with security policies and standards
- **ISO 27001**: A.18.2.3 — Technical compliance review
- **SOC 2**: CC4.1 — Monitors the environment
- **SOC 2**: CC5.1 — Selects, develops, and performs ongoing or separate evaluations
- **SOC 2**: CC5.2 — Evaluates and communicates deficiencies
- **SOC 2**: CC5.3 — Evaluates control changes
- **HITRUST**: 01.g — Management review of information security
- **HITRUST**: 02.b — Compliance with security policies and standards

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Review of compliance program documentation
- Examination of audit schedules and reports
- Interviews with compliance and audit personnel
- Review of management review meeting minutes
- Assessment of compliance monitoring tools
- Examination of corrective action tracking
- Review of regulatory filing and reporting

The presence of this signal indicates a governance gap that can result in:

- Undetected compliance violations
- Ineffective security controls
- Regulatory penalties and fines
- Failed audits or certifications
- Inability to demonstrate due diligence
- Erosion of security posture over time
- Loss of customer or partner trust

Organizations should establish a compliance review process that includes:

- Documented review procedures and schedules
- Regular internal audits of security controls
- Policy and procedure compliance verification
- Testing of control effectiveness
- Management review meetings
- Tracking of compliance obligations
- Monitoring of regulatory changes
- Gap analysis and remediation planning
- Corrective action tracking and closure
- Compliance reporting to stakeholders

The review process should be:
- Risk-based and prioritized
- Documented with evidence
- Performed by qualified personnel
- Independent of operational functions
- Regular and scheduled
- Responsive to changes in the environment
- Integrated with other governance processes
- Reported to executive management

Frequency should be determined based on:
- Regulatory requirements
- Contractual obligations
- Risk assessment results
- Rate of change in the environment
- Findings from previous reviews
- Industry best practices
