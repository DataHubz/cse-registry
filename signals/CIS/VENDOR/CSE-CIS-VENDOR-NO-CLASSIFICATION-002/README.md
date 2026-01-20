# CSE-CIS-VENDOR-NO-CLASSIFICATION-002

**Service Provider Classification Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CIS-VENDOR-NO-CLASSIFICATION-002` |
| Domain | CIS |
| Category | VENDOR |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal detects when an organization fails to classify service providers based on the sensitivity of data they process, store, or transmit, and the criticality of the services they provide. Without proper classification, organizations cannot appropriately allocate security resources, conduct risk-based assessments, or implement proportional security controls for different vendors. Classification enables prioritization of vendor security efforts based on actual risk.

## Implementation Group

- **IG Level**: IG2
- **Applicable To**: Organizations with moderate to advanced security programs and multiple service providers

## Applicability

- Organizations with multiple service providers
- Companies processing sensitive or regulated data
- Enterprises with critical IT infrastructure dependencies
- Healthcare organizations managing PHI with vendors
- Financial institutions with third-party processors
- Organizations subject to regulatory requirements (GDPR, HIPAA, PCI-DSS)
- Companies with complex supply chains

## Examples (Non-Normative)

### Missing Classification Schema

```yaml
# Detection indicators:
classification_schema_exists: false
providers_classified: 0
total_providers: 47
classification_criteria: null

# Expected state:
classification_schema_exists: true
providers_classified: 47
total_providers: 47
classification_criteria:
  - data_sensitivity
  - service_criticality
  - access_level
  - regulatory_impact
```

### Unclassified Service Providers

```yaml
# Providers lacking classification:
service_providers:
  - name: "AWS"
    data_processed: "Customer PII, Financial Data"
    classification: null
    risk_tier: "unknown"
  - name: "Salesforce"
    data_processed: "Customer Records, Sales Data"
    classification: null
    risk_tier: "unknown"
  - name: "Email Marketing SaaS"
    data_processed: "Customer Email Addresses"
    classification: null
    risk_tier: "unknown"

# All providers should be classified by risk tier
```

### Proper Classification Example

```yaml
# Well-classified service providers:
service_providers:
  - name: "AWS"
    data_sensitivity: "High - PII and Financial Data"
    service_criticality: "Critical - Production Infrastructure"
    classification: "Tier 1 - Critical High Risk"
    assessment_frequency: "Annual"
  - name: "Office Supplies Vendor"
    data_sensitivity: "Low - No Sensitive Data"
    service_criticality: "Low - Non-critical service"
    classification: "Tier 3 - Low Risk"
    assessment_frequency: "As Needed"
```

## CIS Controls Context (Informative)

- **Control**: 15 - Service Provider Management
- **Safeguard**: 15.2
- **Safeguard Title**: Establish and Maintain a Service Provider Management Policy
- **Asset Type**: N/A (Service Providers)
- **Security Function**: Identify

## Related Signals

- CSE-CIS-VENDOR-NO-INVENTORY-001
- CSE-CIS-VENDOR-NO-REQUIREMENTS-003
- CSE-CIS-VENDOR-NO-ASSESSMENT-004
- CSE-CIS-DATA-NO-CLASSIFICATION-001
- CSE-SOC2-CC9-VENDOR-002

## Notes

### Detection Guidance

This signal can be detected through:

1. **No Classification Criteria**: Organization has not defined criteria for classifying service providers by risk
2. **Unclassified Providers**: Service providers in inventory lack risk classification or tiering
3. **Missing Data Sensitivity Assessment**: Providers not evaluated for types/sensitivity of data they access
4. **Missing Criticality Assessment**: Services not evaluated for business criticality or operational impact
5. **Uniform Treatment**: All vendors treated identically regardless of risk level
6. **No Risk-Based Controls**: Security requirements and oversight not adjusted based on provider classification

### Common Classification Criteria

Organizations typically classify service providers based on:

- **Data Sensitivity**: Type and classification of data accessed (public, internal, confidential, restricted)
- **Data Volume**: Amount of sensitive data processed or stored
- **Service Criticality**: Impact to business operations if service is unavailable
- **Access Level**: Degree of access to systems, networks, or facilities
- **Regulatory Scope**: Whether provider is subject to specific compliance requirements
- **Substitutability**: Availability of alternative providers and switching costs

### Remediation Priority

This IG2 control is essential for organizations with multiple service providers. Proper classification enables:

- Risk-based prioritization of vendor assessments
- Appropriate allocation of security resources
- Proportional security requirements in contracts
- Efficient vendor oversight and monitoring
- Regulatory compliance demonstration
- Board and executive risk reporting
