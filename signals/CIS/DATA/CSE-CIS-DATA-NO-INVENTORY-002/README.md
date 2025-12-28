# CSE-CIS-DATA-NO-INVENTORY-002

**Sensitive Data Inventory Missing**

## Signal Overview

| Field           | Value                                |
|-----------------|-------------------------------------|
| Identifier      | `CSE-CIS-DATA-NO-INVENTORY-002`    |
| Domain          | CIS                                 |
| Category        | DATA                                |
| Control         | 03 - Data Protection                |
| Safeguard       | 3.2                                 |
| IG Level        | IG1                                 |
| Asset Type      | Data                                |
| Security Function | Protect                           |
| Status          | Active                              |
| Introduced In   | 1.0.0                              |

## Description

An organization lacks an inventory of sensitive data, including data types, locations, access requirements, and processing restrictions.

This signal indicates that the organization cannot identify what sensitive data it possesses, where it is stored, who has access to it, or what protection requirements apply.

## Applicability

This signal applies to:

- Databases containing personal information (PII)
- Customer relationship management (CRM) systems
- Financial transaction systems
- Healthcare records and patient data
- Employee records and HR systems
- Cloud storage repositories
- File servers and network shares
- Application data stores
- Backup and archive systems

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Sensitive Data Registry

```text
# Organization lacks documentation of:
- Customer PII locations
- Payment card data stores
- Healthcare information systems
- Intellectual property repositories
- Confidential business data
- Employee personal information
```

### Undocumented Database Contents

```sql
-- Databases without documented sensitivity
CREATE TABLE users (
    user_id INT,
    name VARCHAR(100),
    email VARCHAR(100),
    ssn VARCHAR(11),      -- PII not documented
    credit_card VARCHAR(16) -- PCD not documented
);
-- No record of what sensitive data exists
```

### Cloud Storage Without Classification

```yaml
# S3 buckets without sensitivity inventory
buckets:
  - customer-data-prod:
      sensitivity: "Unknown"
      data_types: "Not catalogued"
      compliance_requirements: "Not identified"
  - analytics-archive:
      sensitivity: "Unknown"
      retention_period: "Not defined"
```

### Application Data Untracked

```javascript
// Application collecting data without inventory
const userData = {
  name: req.body.name,
  email: req.body.email,
  phone: req.body.phone,
  address: req.body.address,
  // No documentation that this collects PII
  // No record in sensitive data inventory
};
```

## What This Signal Does NOT Assert

- Whether sensitive data actually exists
- The specific inventory format required
- Whether informal tracking exists
- The completeness of any existing inventory
- Compliance or non-compliance with CIS Controls or any framework
- Required remediation actions

## CIS Context (Informative)

This signal is relevant to CIS Control 3:

- **Safeguard 3.2**: Establish and Maintain a Data Inventory

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-CIS-DATA-NO-MANAGEMENT-PROCESS-001` — Data Management Process Missing
- `CSE-CIS-DATA-NO-CLASSIFICATION-007` — Data Classification Missing
- `CSE-CIS-DATA-NO-ENCRYPTION-AT-REST-006` — Encryption at Rest Missing

## Notes

Detection of this signal typically involves:

- Review of data inventory documentation
- Assessment of data discovery tools
- Examination of data catalogs and registries
- Analysis of data classification systems
- Verification of sensitivity tagging
- Review of data access controls

The presence of this signal indicates a condition that warrants review in the context of data protection and privacy requirements.
