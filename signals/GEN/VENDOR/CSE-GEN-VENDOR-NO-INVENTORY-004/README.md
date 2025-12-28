# CSE-GEN-VENDOR-NO-INVENTORY-004

**Vendor Inventory Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-GEN-VENDOR-NO-INVENTORY-004`        |
| Domain          | GEN (General)                            |
| Category        | VENDOR                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No maintained inventory of third-party service providers with access to systems or data.

This signal indicates the absence of a comprehensive and current catalog of all third-party vendors, service providers, and business partners that have access to organizational systems, networks, or data assets.

## Applicability

This signal applies to:

- All organizations utilizing third-party services
- Cloud service providers and SaaS applications
- Managed service providers and IT outsourcing
- Software vendors with system access
- Contractors and consultants with network access
- Business process outsourcing providers
- Supply chain and logistics partners with data access

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Vendor Catalog

```text
Indicators of missing vendor inventory:
- No centralized list of third-party vendors
- No documentation of vendor relationships
- No tracking of vendors with system access
- No record of vendors processing data
- No classification of vendor risk levels
- No vendor contact information database
```

### Lack of Vendor Tracking System

```yaml
# Missing vendor inventory components
vendor_inventory:
  vendor_registry: null
  vendor_classification: null
  access_level_tracking: null
  data_processing_catalog: null
  contract_repository: null
  vendor_status_tracking: null
  vendor_ownership_assignment: null
```

### No Vendor Metadata

```text
Missing vendor inventory information:
- Vendor name and contact details
- Services provided and systems accessed
- Data types accessed or processed
- Access methods and authentication
- Contract dates and renewal information
- Risk classification and assessment status
- Security certifications and compliance status
```

### Absence of Inventory Management

```python
# Indicators of missing vendor inventory management
def assess_vendor_inventory():
    issues = []

    # No vendor registry
    if not has_vendor_registry():
        issues.append("No centralized vendor registry")

    # No access tracking
    if not tracks_vendor_access():
        issues.append("No tracking of vendor system access")

    # No data processing records
    if not maintains_data_processing_inventory():
        issues.append("No inventory of vendors processing data")

    # No regular updates
    if not has_inventory_update_process():
        issues.append("No vendor inventory update process")

    return issues
```

### Missing Inventory Attributes

```json
{
  "vendor_inventory_fields": {
    "vendor_identification": {
      "vendor_name": false,
      "vendor_type": false,
      "contact_information": false,
      "vendor_owner": false
    },
    "access_information": {
      "systems_accessed": false,
      "access_level": false,
      "authentication_methods": false,
      "data_types_accessed": false
    },
    "contract_details": {
      "contract_start_date": false,
      "contract_end_date": false,
      "contract_type": false,
      "security_requirements": false
    },
    "risk_and_compliance": {
      "risk_classification": false,
      "last_assessment_date": false,
      "certifications": false,
      "compliance_status": false
    }
  }
}
```

### No Inventory Governance

```text
Missing inventory management elements:
- Vendor inventory policy and procedures
- Vendor onboarding registration process
- Regular inventory review and update schedule
- Vendor decommissioning and removal process
- Inventory accuracy verification procedures
- Vendor classification and categorization criteria
- Inventory reporting and analytics
- Integration with access management systems
```

## What This Signal Does NOT Assert

- Whether individual vendors are properly managed
- The effectiveness of any informal vendor tracking
- Whether compensating controls are in place
- The specific inventory system or tool to be used
- Compliance or non-compliance with any framework
- Required inventory attributes or data fields
- The appropriate inventory update frequency

## Related Signals

- `CSE-GEN-VENDOR-NO-RISK-MGMT-001` — Vendor risk management missing
- `CSE-GEN-VENDOR-NO-AGREEMENTS-002` — Vendor security agreements missing
- `CSE-GEN-VENDOR-NO-MONITORING-003` — Vendor monitoring missing
- `CSE-GEN-ASSET-NO-INVENTORY-001` — Asset inventory missing (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **CIS Controls**: Control 15.1 (Establish and maintain an inventory of service providers)
- **ISO 27001**: A.15.1.1 (Information security policy for supplier relationships)
- **SOC 2**: CC9.2 (Service commitments include identification of service providers)
- **NIST CSF**: ID.SC-1 (Cyber supply chain risk management processes are identified)
- **PCI DSS**: Requirement 12.8.1 (Maintain a list of service providers)
- **CMMC**: CM.L2-3.4.1 (Establish and maintain baseline configurations)
- **HITRUST**: 04.a (Inventory of Third Parties)
- **FedRAMP**: PL-8 (Information Security Architecture)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Review of vendor inventory documentation
- Assessment of vendor registry or catalog systems
- Examination of vendor onboarding procedures
- Evaluation of vendor tracking and classification
- Review of vendor access records and logs
- Analysis of procurement and contract management systems
- Assessment of inventory update and maintenance processes

A comprehensive vendor inventory typically includes:
- **Vendor Identification**: Name, type, contact information, business owner
- **Service Details**: Services provided, systems accessed, criticality
- **Access Information**: Access levels, authentication, data types
- **Contract Information**: Start/end dates, contract type, SLAs
- **Risk Profile**: Risk classification, assessment status, certifications
- **Compliance**: Regulatory requirements, security obligations
- **Status**: Active, inactive, under review, terminated

The presence of this signal indicates a fundamental visibility gap that prevents effective vendor risk management, access control, and compliance oversight of third-party relationships.
