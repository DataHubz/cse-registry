# CSE-GEN-VENDOR-NO-AGREEMENTS-002

**Vendor Security Agreements Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-GEN-VENDOR-NO-AGREEMENTS-002`       |
| Domain          | GEN (General)                            |
| Category        | VENDOR                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No security requirements or data protection clauses in vendor contracts and agreements.

This signal indicates the absence of formal contractual provisions that establish security expectations, data protection obligations, and compliance requirements for third-party vendors and service providers.

## Applicability

This signal applies to:

- All third-party vendor and service provider contracts
- Cloud service agreements and SaaS subscriptions
- Managed service provider contracts
- Business associate agreements (healthcare context)
- Data processing agreements (privacy context)
- Outsourcing and professional services contracts
- Software licensing and support agreements

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Security Contractual Provisions

```text
Indicators of missing vendor security agreements:
- No security requirements in vendor contracts
- No data protection clauses or obligations
- No breach notification requirements
- No right to audit or assess vendor security
- No security incident reporting provisions
- No data handling and disposal requirements
```

### Lack of Data Protection Terms

```yaml
# Missing data protection agreement components
vendor_agreement:
  data_protection_clauses: null
  data_classification_requirements: null
  data_encryption_obligations: null
  data_retention_requirements: null
  data_disposal_procedures: null
  data_location_restrictions: null
  subprocessor_requirements: null
```

### No Security Standards Defined

```text
Missing contractual security requirements:
- No adherence to security standards or frameworks
- No required security certifications (SOC 2, ISO 27001)
- No minimum security control requirements
- No vulnerability management obligations
- No access control and authentication requirements
- No encryption and data protection standards
```

### Absence of Compliance Provisions

```python
# Indicators of missing compliance terms
def assess_vendor_contract():
    issues = []

    # No regulatory compliance requirements
    if not has_compliance_obligations():
        issues.append("No regulatory compliance requirements")

    # No audit rights
    if not has_audit_rights_clause():
        issues.append("No right to audit vendor security")

    # No breach notification
    if not has_breach_notification_clause():
        issues.append("No breach notification requirements")

    # No liability terms
    if not has_security_liability_terms():
        issues.append("No security liability provisions")

    return issues
```

### Missing Vendor Obligations

```json
{
  "vendor_contract_requirements": {
    "security_controls_required": false,
    "data_protection_obligations": false,
    "incident_response_requirements": false,
    "breach_notification_timeline": null,
    "audit_and_assessment_rights": false,
    "compliance_attestation": false,
    "insurance_requirements": false,
    "termination_and_transition": false
  }
}
```

### No Agreement Templates

```text
Missing contract documentation:
- Security addendum or exhibit templates
- Data processing agreement templates
- Business associate agreement templates
- Service level agreements with security metrics
- Acceptable use policy requirements
- Incident response and escalation procedures
- Data breach notification procedures
- Right to audit and assessment provisions
```

## What This Signal Does NOT Assert

- Whether vendors are actually providing adequate security
- The effectiveness of any verbal security commitments
- Whether compensating controls are in place
- The specific contractual terms that should be included
- Compliance or non-compliance with any framework
- Required security standards or certifications
- The enforceability of existing agreements

## Related Signals

- `CSE-GEN-VENDOR-NO-RISK-MGMT-001` — Vendor risk management missing
- `CSE-GEN-VENDOR-NO-MONITORING-003` — Vendor monitoring missing
- `CSE-GEN-VENDOR-NO-INVENTORY-004` — Vendor inventory missing
- `CSE-GEN-DATA-NO-CLASSIFICATION-001` — Data classification missing (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **GDPR**: Article 28 (Processor obligations), Article 32 (Security of processing)
- **ISO 27001**: A.15.1.2 (Addressing security within supplier agreements), A.15.1.3 (Supply chain security)
- **PCI DSS**: Requirement 12.8.2 (Maintain written agreements with service providers)
- **SOC 2**: CC9.2 (Service commitments include service-level agreements)
- **HIPAA**: 164.308(b)(1) (Business associate contracts)
- **NIST CSF**: ID.SC-3 (Contracts with suppliers include security requirements)
- **CIS Controls**: Control 15.2 (Service provider contracts include security requirements)
- **CMMC**: CM.L2-3.4.6 (Establish safeguards to protect information shared with external providers)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Review of vendor contracts and service agreements
- Assessment of security addendums and exhibits
- Examination of data processing agreements
- Evaluation of business associate agreements
- Review of service level agreements
- Analysis of contract templates and standard clauses
- Assessment of vendor contractual obligations

Key contractual security provisions typically include:
- **Security Controls**: Required security standards and controls
- **Data Protection**: Encryption, access controls, and data handling
- **Compliance**: Regulatory and framework compliance requirements
- **Audit Rights**: Right to assess and audit vendor security
- **Incident Response**: Breach notification and incident reporting
- **Liability**: Security breach liability and indemnification
- **Termination**: Data return and secure disposal upon termination

The presence of this signal indicates a critical gap that exposes the organization to legal, regulatory, and security risks from third-party relationships.
