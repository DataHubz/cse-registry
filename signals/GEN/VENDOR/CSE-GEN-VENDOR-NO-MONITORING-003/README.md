# CSE-GEN-VENDOR-NO-MONITORING-003

**Vendor Monitoring Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-GEN-VENDOR-NO-MONITORING-003`       |
| Domain          | GEN (General)                            |
| Category        | VENDOR                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No ongoing monitoring or periodic assessment of vendor security posture.

This signal indicates the absence of continuous oversight and periodic evaluation of third-party vendors to ensure they maintain adequate security controls and comply with contractual security obligations throughout the vendor relationship lifecycle.

## Applicability

This signal applies to:

- All active third-party vendor relationships
- Cloud service providers and SaaS applications
- Managed service providers and outsourced IT services
- Critical vendors with access to sensitive data
- Vendors processing customer or regulated data
- Supply chain and business partners
- High-risk vendor relationships

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Ongoing Monitoring Process

```text
Indicators of missing vendor monitoring:
- No periodic vendor security assessments
- No ongoing review of vendor security posture
- No monitoring of vendor security incidents
- No tracking of vendor compliance status
- No review of vendor audit reports or certifications
- No vendor performance security metrics
```

### Lack of Continuous Oversight

```yaml
# Missing vendor monitoring components
vendor_monitoring_program:
  periodic_reassessment: null
  security_posture_review: null
  compliance_verification: null
  incident_tracking: null
  performance_metrics: null
  certification_monitoring: null
  contract_compliance_checks: null
```

### No Vendor Performance Tracking

```text
Missing monitoring capabilities:
- No tracking of vendor security KPIs
- No review of vendor service level agreements
- No monitoring of vendor access to systems
- No audit of vendor security controls
- No review of vendor change management
- No assessment of vendor incident response
```

### Absence of Periodic Reviews

```python
# Indicators of missing periodic vendor reviews
def assess_vendor_monitoring():
    issues = []

    # No scheduled reassessments
    if not has_periodic_reassessment_schedule():
        issues.append("No periodic vendor reassessment schedule")

    # No certification tracking
    if not monitors_vendor_certifications():
        issues.append("No monitoring of vendor certifications")

    # No incident review
    if not reviews_vendor_incidents():
        issues.append("No review of vendor security incidents")

    # No compliance monitoring
    if not monitors_vendor_compliance():
        issues.append("No vendor compliance monitoring")

    return issues
```

### Missing Monitoring Integration

```json
{
  "vendor_monitoring": {
    "security_questionnaire_updates": false,
    "audit_report_reviews": false,
    "certification_expiry_tracking": false,
    "security_incident_monitoring": false,
    "access_review_processes": false,
    "compliance_attestation_review": false,
    "risk_reassessment_schedule": null,
    "vendor_scorecard_tracking": false
  }
}
```

### No Monitoring Documentation

```text
Missing documentation elements:
- Vendor monitoring policy and procedures
- Periodic reassessment schedule and criteria
- Vendor performance scorecard templates
- Security incident tracking procedures
- Compliance verification checklists
- Audit rights exercise procedures
- Vendor review meeting cadence
- Escalation and remediation processes
```

## What This Signal Does NOT Assert

- Whether vendors currently have adequate security
- The effectiveness of any informal vendor oversight
- Whether compensating controls are in place
- The specific monitoring frequency or methodology
- Compliance or non-compliance with any framework
- Required monitoring tools or technologies
- The appropriate level of vendor oversight

## Related Signals

- `CSE-GEN-VENDOR-NO-RISK-MGMT-001` — Vendor risk management missing
- `CSE-GEN-VENDOR-NO-AGREEMENTS-002` — Vendor security agreements missing
- `CSE-GEN-VENDOR-NO-INVENTORY-004` — Vendor inventory missing
- `CSE-GEN-AUDIT-NO-LOGGING-001` — Audit logging missing (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **ISO 27001**: A.15.2.1 (Monitoring and review of supplier services), A.15.2.2 (Managing changes to supplier services)
- **SOC 2**: CC9.2 (Vendor and business partner management and monitoring)
- **HITRUST**: 04.d (Monitoring and Review of Third Party Services)
- **NIST CSF**: ID.SC-4 (Suppliers and third-party partners are routinely assessed)
- **CIS Controls**: Control 15.3 (Classify and monitor service providers)
- **PCI DSS**: Requirement 12.8.4 (Monitor service providers' compliance)
- **CMMC**: CA.L2-3.12.3 (Monitor security controls on an ongoing basis)
- **FedRAMP**: CA-7 (Continuous Monitoring)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Review of vendor monitoring policies and procedures
- Assessment of periodic reassessment schedules
- Examination of vendor performance tracking systems
- Evaluation of vendor audit report review processes
- Review of vendor certification and compliance monitoring
- Analysis of vendor incident tracking and reporting
- Assessment of vendor access review procedures

A comprehensive vendor monitoring program typically includes:
- **Periodic Reassessment**: Regular security posture evaluations
- **Compliance Monitoring**: Verification of contractual obligations
- **Certification Tracking**: Monitoring of security certifications
- **Incident Monitoring**: Tracking vendor security incidents
- **Performance Metrics**: Vendor security KPIs and scorecards
- **Audit Reviews**: Analysis of vendor audit reports and attestations
- **Access Reviews**: Periodic review of vendor system access
- **Remediation**: Addressing identified vendor security gaps

The presence of this signal indicates a critical gap that may allow vendor security posture to degrade over time without detection, exposing the organization to evolving third-party risks.
