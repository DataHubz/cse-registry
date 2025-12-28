# CSE-CIS-VENDOR-NO-INVENTORY-001

**Service Provider Inventory Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CIS-VENDOR-NO-INVENTORY-001` |
| Domain | CIS |
| Category | VENDOR |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal detects when an organization lacks an inventory of service providers that hold sensitive data or are responsible for an enterprise's critical IT platforms or processes. Without a comprehensive service provider inventory, organizations cannot effectively manage third-party risks, ensure compliance with contractual obligations, or respond to supply chain security incidents. This is a foundational requirement for managing third-party risk and supply chain security.

## Implementation Group

- **IG Level**: IG1
- **Applicable To**: All organizations regardless of size or security maturity level

## Applicability

- Organizations using cloud service providers
- Companies with managed service providers (MSPs)
- Enterprises with SaaS applications
- Organizations outsourcing IT operations
- Companies with third-party data processors
- Healthcare organizations with business associates
- Financial institutions with third-party service providers

## Examples (Non-Normative)

### Missing Service Provider Inventory

```yaml
# Detection indicators:
service_provider_inventory_exists: false
inventory_system: null
total_providers_tracked: 0
last_inventory_update: null

# Expected state:
service_provider_inventory_exists: true
inventory_system: "Third-Party Risk Management Platform"
total_providers_tracked: 47
last_inventory_update: "2025-12-15"
```

### Incomplete Service Provider Documentation

```yaml
# Detected gaps in inventory:
providers_identified:
  - name: "AWS"
    documented: false
    data_sensitivity: "unknown"
    services_provided: "unknown"
  - name: "Office 365"
    documented: false
    data_sensitivity: "unknown"
    services_provided: "unknown"

# All providers should be fully documented
```

### Missing Critical Provider Information

```yaml
# Incomplete provider records:
provider_record:
  name: "Acme Managed Services"
  documented: true
  missing_attributes:
    - sensitive_data_stored
    - critical_services_provided
    - contract_review_date
    - security_assessment_date
    - access_level

# All critical attributes should be documented
```

## CIS Controls Context (Informative)

- **Control**: 15 - Service Provider Management
- **Safeguard**: 15.1
- **Safeguard Title**: Establish and Maintain an Inventory of Service Providers
- **Asset Type**: N/A (Service Providers)
- **Security Function**: Identify

## Related Signals

- CSE-CIS-VENDOR-NO-CLASSIFICATION-002
- CSE-CIS-VENDOR-NO-REQUIREMENTS-003
- CSE-CIS-VENDOR-NO-ASSESSMENT-004
- CSE-SOC2-CC9-VENDOR-001
- CSE-ISO27001-SUPPLY-CHAIN-001

## Notes

### Detection Guidance

This signal can be detected through:

1. **Absence of Service Provider Registry**: No centralized inventory or database of service providers exists
2. **Missing Provider Documentation**: Critical service providers are not documented or tracked
3. **Incomplete Provider Records**: Provider inventory lacks essential information (data sensitivity, services provided, criticality)
4. **No Ownership Assigned**: No designated owner responsible for maintaining the service provider inventory
5. **Outdated Records**: Service provider inventory has not been reviewed or updated within required timeframes
6. **Procurement Disconnection**: New service providers are onboarded without being added to inventory

### Remediation Priority

This is a foundational IG1 control for third-party risk management. Organizations should prioritize establishing a service provider inventory immediately as it is prerequisite to all other vendor management and supply chain security activities. This control is critical for:

- Supply chain security
- Regulatory compliance (GDPR, HIPAA, PCI-DSS)
- Incident response involving third parties
- Contractual obligation tracking
- Risk assessment and management
