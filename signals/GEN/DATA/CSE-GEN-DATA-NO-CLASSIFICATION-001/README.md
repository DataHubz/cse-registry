# CSE-GEN-DATA-NO-CLASSIFICATION-001

**Data Classification Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GEN-DATA-NO-CLASSIFICATION-001` |
| Domain | GEN (General) |
| Category | DATA |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No scheme for classifying data by sensitivity level (e.g., public, internal, confidential, restricted).

Organizations lack a structured approach to categorizing data based on its sensitivity, value, and criticality. This signal indicates that data is not systematically labeled or classified according to its confidentiality, integrity, and availability requirements.

## Applicability

This signal applies to:

- Document management systems
- Database systems and data warehouses
- Cloud storage platforms
- File sharing and collaboration tools
- Data processing pipelines
- API endpoints handling various data types
- Information security policies and procedures

## Examples (Non-Normative)

### No Classification Scheme

```yaml
data_management:
  classification_policy: null              # Signal: No classification policy
  sensitivity_levels: []                   # Signal: No defined levels
  labeling_requirements: "not defined"     # Signal: No labeling requirements

storage_systems:
  - name: "corporate_file_share"
    data_classification: "unspecified"     # Signal: Data not classified
    access_controls: "default"

  - name: "customer_database"
    data_classification: null              # Signal: No classification
    encryption: false
```

### Missing Classification Labels

```
File Storage Analysis:
  - contracts/client_agreement.pdf: No classification label
  - hr/employee_records.xlsx: No classification label
  - public/marketing_materials.pdf: No classification label
  - finance/payroll_2024.csv: No classification label

Database Schemas:
  - customers table: No sensitivity classification
  - transactions table: No sensitivity classification
  - employees table: No sensitivity classification
```

## What This Signal Does NOT Assert

- Severity or compliance impact
- Whether data is actually being mishandled
- The specific classification scheme that should be used
- Required remediation actions
- Compliance or non-compliance with any framework

## Related Signals

- `CSE-GEN-DATA-NO-INVENTORY-002` — No data inventory maintained
- `CSE-ISO27001-INFO-NO-CLASSIFICATION` — Information classification missing (if defined)
- `CSE-GEN-AUTH-NO-ROLE-BASED-ACCESS` — Access controls not based on data sensitivity (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **ISO 27001**: A.5.12 (Classification of information)
- **GDPR**: Article 32 (Security of processing - appropriate security measures)
- **CIS Controls**: 3.1 (Establish and maintain a data management process)
- **SOC 2**: CC6.1 (Logical and physical access controls)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Reviewing data governance policies for classification requirements
- Scanning data stores for classification metadata or labels
- Checking file systems for classification tags or naming conventions
- Examining database schemas for sensitivity indicators
- Interviewing data owners about classification practices

The presence of this signal indicates a foundational data governance gap that may affect an organization's ability to implement appropriate security controls, access restrictions, and compliance measures.
