# CSE-GEN-DATA-NO-INVENTORY-002

**Data Inventory Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GEN-DATA-NO-INVENTORY-002` |
| Domain | GEN (General) |
| Category | DATA |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No inventory documenting what sensitive data exists and where it is stored.

Organizations lack a comprehensive record or catalog of sensitive data assets across their environment. This signal indicates an absence of systematic documentation identifying data types, locations, systems, data flows, and responsible parties for sensitive information.

## Applicability

This signal applies to:

- Data governance and management programs
- Privacy compliance initiatives
- Database and storage systems
- Cloud platforms and SaaS applications
- File servers and network shares
- Third-party data processors
- Data protection impact assessments (DPIAs)

## Examples (Non-Normative)

### No Data Inventory

```yaml
data_governance:
  inventory:
    maintained: false                     # Signal: No inventory maintained
    last_updated: null                    # Signal: Never created
    coverage: "unknown"                   # Signal: Unknown data locations

  sensitive_data_tracking:
    pii_locations: "undocumented"         # Signal: PII not tracked
    phi_locations: "undocumented"         # Signal: PHI not tracked
    financial_data: "undocumented"        # Signal: Financial data not tracked
    intellectual_property: "undocumented" # Signal: IP not tracked
```

### Incomplete Data Mapping

```
Data Discovery Results:

Databases without inventory records:
  - production_db_01 (contains customer emails, addresses)
  - analytics_warehouse (contains user behavior data)
  - legacy_crm (contains sales contacts)

Cloud Storage without documentation:
  - s3://company-backups/ (unknown contents)
  - s3://user-uploads/ (unknown data types)

Third-Party Integrations:
  - Salesforce: Data shared unknown
  - Marketing Platform: Data transfer not documented
  - Analytics Service: Data retention unknown
```

## What This Signal Does NOT Assert

- Whether sensitive data exists
- The specific types of data that should be inventoried
- Severity or compliance impact
- Required remediation actions
- Compliance or non-compliance with any framework

## Related Signals

- `CSE-GEN-DATA-NO-CLASSIFICATION-001` — Data classification missing
- `CSE-GDPR-RECORDS-NO-PROCESSING-INVENTORY` — GDPR Article 30 records missing (if defined)
- `CSE-GEN-DATA-NO-RETENTION-POLICY-003` — Retention policy missing

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **GDPR**: Article 30 (Records of processing activities)
- **CIS Controls**: 3.1 (Establish and maintain a data management process)
- **ISO 27001**: A.5.9 (Inventory of information and other associated assets)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Checking for data inventory documentation or systems
- Reviewing data governance policies and procedures
- Examining data flow diagrams and architecture documentation
- Assessing Records of Processing Activities (ROPA) for GDPR
- Interviewing data stewards and system owners
- Scanning for undocumented databases and storage systems

The absence of a data inventory makes it difficult to implement appropriate security controls, respond to data subject requests, assess privacy risks, or demonstrate compliance with data protection regulations.
