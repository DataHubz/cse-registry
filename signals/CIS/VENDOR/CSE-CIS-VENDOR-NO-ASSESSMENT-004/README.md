# CSE-CIS-VENDOR-NO-ASSESSMENT-004

**Service Provider Assessment Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CIS-VENDOR-NO-ASSESSMENT-004` |
| Domain | CIS |
| Category | VENDOR |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal detects when an organization fails to assess service providers based on the sensitivity of data processed, stored, or transmitted, and the criticality of the services provided. Regular security assessments verify that service providers implement and maintain security controls consistent with contractual requirements and the organization's risk tolerance. Without assessments, organizations cannot validate vendor security claims, identify risks introduced through the supply chain, or ensure ongoing compliance with security standards.

## Implementation Group

- **IG Level**: IG2
- **Applicable To**: Organizations with moderate to advanced security programs managing critical third-party relationships

## Applicability

- Organizations with classified service providers (requires CSE-CIS-VENDOR-NO-CLASSIFICATION-002)
- Companies processing sensitive data through vendors
- Enterprises dependent on critical IT services from third parties
- Healthcare organizations with business associates handling PHI
- Financial institutions with third-party processors
- Organizations subject to regulatory assessment requirements
- Companies with cloud infrastructure providers
- Enterprises using SaaS applications for core business functions

## Examples (Non-Normative)

### Missing Initial Assessment

```yaml
# Detection indicators:
service_provider_assessment:
  provider: "New Cloud Hosting Provider"
  onboarding_date: "2025-01-15"
  data_classification: "Tier 1 - Critical High Risk"
  initial_security_assessment: false
  assessment_performed: null
  assessment_date: null
  risk_accepted_by: null

# Expected state requires assessment before onboarding
```

### Overdue Periodic Assessment

```yaml
# Missing required periodic assessment:
provider_assessment_status:
  provider: "Critical SaaS Application"
  classification: "Tier 1 - High Risk"
  last_assessment_date: "2023-06-15"
  required_assessment_frequency: "Annual"
  days_overdue: 560
  current_risk_status: "Unknown - Assessment Overdue"
  assessment_scheduled: false

# Assessment should be current based on classification
```

### No Assessment Documentation

```yaml
# Undocumented assessment process:
assessment_record:
  provider: "Managed Security Service Provider"
  classification: "Tier 1 - Critical"
  vendor_claims_compliance: true
  assessment_type: "Vendor self-attestation only"
  independent_validation: false
  evidence_reviewed: false
  findings_documented: false
  risk_rating: "not assessed"

# Independent assessment required for critical providers
```

### Comprehensive Assessment Example

```yaml
# Well-documented assessment:
provider_assessment:
  provider: "AWS"
  classification: "Tier 1 - Critical High Risk"
  assessment_date: "2025-11-20"
  assessment_type: "Third-party audit report review"
  assessment_methodology:
    - reviewed_soc2_type_ii_report: true
    - reviewed_iso27001_certificate: true
    - validated_control_alignment: true
    - assessed_compensating_controls: true
  findings:
    - total_controls_reviewed: 156
    - controls_satisfactory: 154
    - controls_with_exceptions: 2
    - critical_gaps: 0
  risk_assessment:
    overall_risk_rating: "Low"
    residual_risk: "Acceptable"
    exceptions_approved_by: "CISO"
  next_assessment_due: "2026-11-20"
```

### Risk-Based Assessment Frequency

```yaml
# Assessment schedule based on classification:
assessment_schedule:
  tier_1_critical_high:
    frequency: "Annual"
    assessment_type: "Comprehensive - SOC 2 Type II or equivalent"
  tier_2_moderate:
    frequency: "Biennial"
    assessment_type: "Questionnaire + Certificate Review"
  tier_3_low:
    frequency: "As needed or on contract renewal"
    assessment_type: "Self-assessment questionnaire"
```

## CIS Controls Context (Informative)

- **Control**: 15 - Service Provider Management
- **Safeguard**: 15.4
- **Safeguard Title**: Ensure Service Provider Contracts Include Security Requirements
- **Asset Type**: N/A (Service Providers)
- **Security Function**: Identify

## Related Signals

- CSE-CIS-VENDOR-NO-INVENTORY-001
- CSE-CIS-VENDOR-NO-CLASSIFICATION-002
- CSE-CIS-VENDOR-NO-REQUIREMENTS-003
- CSE-CIS-VENDOR-NO-MONITORING-005
- CSE-SOC2-CC9-VENDOR-004
- CSE-ISO27001-SUPPLY-ASSESSMENT-001

## Notes

### Detection Guidance

This signal can be detected through:

1. **No Assessment Process**: Organization lacks defined process for assessing service provider security
2. **Missing Initial Assessments**: New service providers onboarded without pre-contract security assessment
3. **Overdue Periodic Assessments**: Existing providers not reassessed within required timeframes
4. **Inadequate Assessment Depth**: Assessments rely solely on vendor self-attestation without validation
5. **No Documentation**: Assessment results not documented or retained
6. **Missing Risk Ratings**: Assessments do not result in documented risk ratings or acceptance decisions
7. **No Follow-up**: Identified gaps or exceptions not tracked for remediation
8. **Assessment Scope Gaps**: Assessments do not cover all critical security domains

### Assessment Methodologies

Organizations can use various assessment methods based on provider classification:

**Tier 1 - Critical/High Risk Providers**
- Third-party audit report review (SOC 2 Type II, ISO 27001, etc.)
- On-site security assessments or audits
- Penetration testing results review
- Detailed security questionnaires with evidence validation
- Regular security meetings and status reviews

**Tier 2 - Moderate Risk Providers**
- Industry-standard security questionnaires (SIG, CAIQ, etc.)
- Compliance certificate review and validation
- Vendor-provided assessment reports
- Periodic security attestations

**Tier 3 - Low Risk Providers**
- Self-assessment questionnaires
- Compliance representation statements
- Assessment on contract renewal or as-needed basis

### Key Assessment Domains

Comprehensive service provider security assessments should evaluate:

**Information Security Governance**
- Security policies and procedures
- Security organization and oversight
- Risk management processes
- Compliance programs

**Access Controls**
- Authentication and authorization
- Privileged access management
- Access review processes
- Physical access controls

**Data Protection**
- Encryption implementation
- Data classification and handling
- Data retention and disposal
- Backup and recovery

**Network and Infrastructure Security**
- Network segmentation
- Firewall and IDS/IPS
- Vulnerability management
- Patch management

**Application Security**
- Secure development lifecycle
- Security testing
- Change management
- API security

**Incident Response and Business Continuity**
- Incident response procedures
- Breach notification processes
- Business continuity planning
- Disaster recovery capabilities

**Monitoring and Logging**
- Security monitoring capabilities
- Log collection and retention
- Threat detection
- Security information sharing

**Compliance and Assurance**
- Regulatory compliance status
- Third-party certifications
- Internal audit results
- Penetration testing results

### Remediation Priority

This IG2 control is essential for validating third-party security. Regular assessments enable organizations to:

- Verify vendor security claims and commitments
- Identify supply chain security risks early
- Support risk-based decision making
- Demonstrate due diligence for regulatory compliance
- Track security posture over time
- Ensure contractual security requirements are met
- Provide assurance to customers and stakeholders

Organizations should establish risk-based assessment schedules and ensure assessments are completed before onboarding new critical providers and periodically throughout the relationship lifecycle.
