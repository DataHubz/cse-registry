# CSE-SOC2-PRIV-NO-COMPLIANCE-REVIEW-020

**No Privacy Compliance Review**

## Signal Overview

| Field           | Value                                        |
|-----------------|----------------------------------------------|
| Identifier      | `CSE-SOC2-PRIV-NO-COMPLIANCE-REVIEW-020`     |
| Domain          | SOC2                                         |
| Category        | PRIV                                         |
| Status          | Active                                       |
| Introduced In   | 1.0.0                                        |

## Description

The entity does not periodically monitor compliance with its privacy policies and procedures.

This signal indicates that the organization lacks ongoing oversight of privacy practices, potentially allowing policy violations and privacy risks to go undetected.

## Applicability

This signal applies to:

- Privacy compliance programs
- Internal audit functions
- Privacy monitoring and oversight
- Compliance review schedules
- Privacy impact assessments
- Data protection audits
- Privacy governance frameworks
- Continuous monitoring systems

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Compliance Monitoring Program

```yaml
# Privacy program configuration
privacy_program:
  policies: documented
  procedures: documented
  training: scheduled
  compliance_monitoring: none  # No periodic review
  privacy_audits: never
  policy_review_schedule: none
```

### No Privacy Audit Schedule

```text
Internal Audit Plan:
- Financial controls: Quarterly
- IT security: Semi-annual
- Operational compliance: Annual
- Privacy compliance: NOT SCHEDULED
- Data protection review: NOT INCLUDED
```

### Missing Compliance Metrics

```json
{
  "privacy_oversight": {
    "privacy_policy": "published",
    "consent_management": true,
    "data_retention": true,
    "compliance_monitoring": {
      "periodic_reviews": false,
      "compliance_metrics": null,
      "policy_adherence_checks": false,
      "violation_detection": false,
      "audit_schedule": null
    }
  }
}
```

### Privacy Program Without Oversight

```javascript
// Privacy management without compliance monitoring
class PrivacyProgram {
  async publishPrivacyPolicy() { /* implemented */ }
  async handleDataRequest() { /* implemented */ }
  async manageConsent() { /* implemented */ }

  // Missing: Periodic compliance review
  // Missing: Policy adherence monitoring
  // Missing: Privacy audit function
  // Missing: Compliance reporting
}
```

## What This Signal Does NOT Assert

- Whether privacy violations exist
- The specific review frequency required
- The scope of compliance monitoring needed
- Compliance or non-compliance with SOC 2 or any framework
- Required audit methodology

## SOC 2 Context (Informative)

This signal is relevant to SOC 2 Privacy criteria:

- **P8.3**: The entity periodically monitors compliance with its privacy policies and procedures and has procedures to address identified deficiencies.
- **GAPP Principle**: Monitoring and enforcement

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-SOC2-PRIV-NO-COMPLIANCE-MONITORING-018` — Missing inquiry/complaint monitoring
- `CSE-SOC2-PRIV-NO-INCIDENT-REPORTING-021` — Missing privacy incident reporting
- `CSE-CMMC-ASSESSMENT-NO-PERIODIC-REVIEW-002` — General assessment deficiency (if defined)

## Notes

Detection of this signal typically involves:

- Review of privacy audit schedules
- Examination of compliance monitoring procedures
- Analysis of privacy review documentation
- Assessment of oversight mechanisms
- Inspection of compliance reporting
- Review of governance frameworks

Elements of effective privacy compliance monitoring:
- **Periodic Reviews**: Scheduled assessments of privacy practices
- **Compliance Metrics**: KPIs and measurements
- **Policy Adherence**: Verification of procedure compliance
- **Gap Analysis**: Identification of deficiencies
- **Corrective Action**: Remediation of issues
- **Documentation**: Records of reviews and findings
- **Reporting**: Communication to management

Privacy compliance review areas:
- Adherence to privacy policies and procedures
- Data subject rights fulfillment
- Consent management effectiveness
- Third-party data sharing compliance
- Data retention and deletion practices
- Privacy notice accuracy and currency
- Security controls for personal data
- Privacy training completion
- Vendor compliance with DPAs
- Privacy incident response effectiveness

Review frequency considerations:
- **Continuous**: Automated monitoring of key controls
- **Monthly**: High-risk activities and metrics
- **Quarterly**: Operational privacy controls
- **Semi-annual**: Vendor and third-party compliance
- **Annual**: Comprehensive privacy program assessment
- **Ad-hoc**: Incident-driven or change-driven reviews

Common compliance monitoring activities:
- Privacy policy compliance audits
- Data processing activity reviews
- Consent management audits
- Privacy impact assessment reviews
- Vendor privacy compliance checks
- Data subject request metrics analysis
- Privacy training completion tracking
- Privacy incident trend analysis

The presence of this signal indicates a condition that warrants review in the context of privacy oversight and continuous compliance requirements.
