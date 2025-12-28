# CSE-CIS-VENDOR-NO-REQUIREMENTS-003

**Security Requirements Missing in Contracts**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CIS-VENDOR-NO-REQUIREMENTS-003` |
| Domain | CIS |
| Category | VENDOR |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal detects when an organization fails to establish and maintain security requirements in contracts with service providers that are consistent with the organization's enterprise security policy. Without contractually binding security requirements, organizations cannot enforce security standards, hold vendors accountable for security failures, or ensure third parties protect organizational assets and data appropriately. Security requirements must be documented in service-level agreements (SLAs), statements of work (SOWs), or other contractual agreements.

## Implementation Group

- **IG Level**: IG2
- **Applicable To**: Organizations with moderate to advanced security programs managing third-party relationships

## Applicability

- Organizations with cloud service providers
- Companies outsourcing IT operations or services
- Enterprises using SaaS applications processing sensitive data
- Organizations with managed security service providers (MSSPs)
- Healthcare entities with business associates
- Financial institutions with third-party processors
- Companies subject to regulatory compliance requirements
- Organizations handling customer data through vendors

## Examples (Non-Normative)

### Missing Security Requirements in Contract

```yaml
# Detection indicators:
contract_review:
  provider: "Cloud Hosting Provider"
  contract_type: "Master Service Agreement"
  security_requirements_section: false
  data_protection_clause: false
  incident_notification_clause: false
  audit_rights_clause: false
  compliance_requirements: []

# Expected state should include security requirements
```

### Generic Contract Without Specific Requirements

```yaml
# Inadequate contract provisions:
contract_analysis:
  provider: "SaaS Application Provider"
  generic_security_clause: true  # Only boilerplate language
  specific_security_controls: false
  encryption_requirements: "not specified"
  access_control_requirements: "not specified"
  logging_requirements: "not specified"
  breach_notification_timeframe: "not specified"
  data_deletion_procedures: "not specified"

# Contract should include specific, measurable requirements
```

### Comprehensive Security Requirements Example

```yaml
# Well-documented security requirements:
contract_security_provisions:
  provider: "Critical SaaS Provider"
  requirements_defined: true
  key_provisions:
    - encryption_at_rest: "AES-256 required"
    - encryption_in_transit: "TLS 1.2+ required"
    - access_control: "MFA required for all access"
    - logging_retention: "90 days minimum"
    - vulnerability_scanning: "Monthly requirement"
    - patch_management: "Critical patches within 30 days"
    - incident_notification: "24 hours for data breaches"
    - audit_rights: "Annual right to audit or review SOC 2"
    - data_deletion: "30 days upon contract termination"
    - subprocessor_notification: "Advance notice required"
    - compliance_certifications: "SOC 2 Type II, ISO 27001"
```

### Missing Requirements for Data Protection

```yaml
# Critical gaps in contract:
data_protection_requirements:
  data_classification: "not addressed"
  data_location_restrictions: "not specified"
  data_retention_limits: "not defined"
  data_destruction_certification: "not required"
  data_breach_notification: "no timeframe specified"
  liability_for_breach: "not addressed"
  right_to_audit: "not included"

# All data protection aspects should be contractually defined
```

## CIS Controls Context (Informative)

- **Control**: 15 - Service Provider Management
- **Safeguard**: 15.3
- **Safeguard Title**: Classify Service Providers
- **Asset Type**: N/A (Service Providers)
- **Security Function**: Protect

## Related Signals

- CSE-CIS-VENDOR-NO-INVENTORY-001
- CSE-CIS-VENDOR-NO-CLASSIFICATION-002
- CSE-CIS-VENDOR-NO-ASSESSMENT-004
- CSE-CIS-DATA-NO-PROTECTION-003
- CSE-SOC2-CC9-VENDOR-003
- CSE-GDPR-PROCESSOR-001

## Notes

### Detection Guidance

This signal can be detected through:

1. **Missing Security Clauses**: Contracts lack dedicated security requirements sections
2. **Generic Boilerplate Only**: Contracts contain only generic security language without specific, measurable requirements
3. **No Audit Rights**: Contracts do not include rights to audit or review security controls
4. **Missing Incident Response Terms**: No breach notification timeframes or incident response procedures defined
5. **Inadequate Data Protection**: Data handling, retention, and deletion requirements not specified
6. **No Compliance Requirements**: Contracts do not mandate relevant compliance certifications or assessments
7. **Missing Performance Metrics**: No security-related service level agreements or key performance indicators
8. **No Right to Terminate**: Contracts lack provisions for termination based on security failures

### Essential Security Contract Requirements

Organizations should ensure contracts include:

**Access and Authentication**
- Multi-factor authentication requirements
- Access control and least privilege principles
- Background check requirements for personnel

**Data Protection**
- Encryption requirements (at rest and in transit)
- Data classification and handling procedures
- Data location and sovereignty restrictions
- Data retention and deletion requirements

**Security Controls**
- Vulnerability management and patching requirements
- Malware protection requirements
- Network security controls
- Security monitoring and logging

**Compliance and Assurance**
- Required certifications (SOC 2, ISO 27001, etc.)
- Right to audit or review audit reports
- Compliance with applicable regulations
- Security assessment frequency

**Incident Management**
- Breach notification timeframes
- Incident response procedures
- Forensics and evidence preservation
- Communication protocols

**Liability and Insurance**
- Liability caps and limitations
- Cyber insurance requirements
- Indemnification provisions

**Governance**
- Subcontractor/subprocessor approval requirements
- Change management notification
- Contract termination conditions
- Data return and destruction upon termination

### Remediation Priority

This IG2 control is critical for organizations relying on service providers. Contractual security requirements:

- Establish legal obligations for security practices
- Enable enforcement of security standards
- Provide recourse in case of security failures
- Support regulatory compliance demonstrations
- Facilitate risk transfer through liability provisions
- Enable security monitoring and oversight

Organizations should review and update existing contracts to include comprehensive security requirements and ensure all new vendor agreements include appropriate security provisions before execution.
