# CSE-HITRUST-ASSET-NO-CLASSIFICATION-004

**Information Classification Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|--------------------------------------------|
| Identifier      | `CSE-HITRUST-ASSET-NO-CLASSIFICATION-004`  |
| Domain          | HITRUST                                    |
| Category        | ASSET                                      |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

Information and information assets lack a systematic classification scheme that identifies their sensitivity, criticality, and required protection level.

This signal indicates that data is not categorized according to its value, legal requirements, sensitivity, or criticality to the organization, making it difficult to apply appropriate security controls.

## Applicability

This signal applies to:

- Structured and unstructured data
- Documents and files
- Databases and data warehouses
- Email and communications
- Source code and intellectual property
- Customer and patient information
- Financial records
- Cloud storage repositories
- Backup and archive data

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Classification Schema Defined

```text
# Organization lacks formal data classification levels such as:
- Public
- Internal Use Only
- Confidential
- Highly Confidential / Restricted
- Protected Health Information (PHI)
- Personally Identifiable Information (PII)
```

### Unclassified Database Schema

```sql
-- Database containing sensitive data without classification metadata
CREATE TABLE customer_records (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100),
    ssn VARCHAR(11),  -- Sensitive PII
    credit_card VARCHAR(16),  -- Payment data
    medical_history TEXT,  -- PHI
    email VARCHAR(100)
    -- Missing: data_classification field
    -- Missing: sensitivity_level
    -- Missing: retention_period
);
```

### Cloud Storage Without Classification Tags

```hcl
# S3 bucket lacking classification metadata
resource "aws_s3_bucket" "company_data" {
  bucket = "corporate-documents-prod"

  tags = {
    Environment = "production"
    Department  = "all"
    # Missing: DataClassification
    # Missing: SensitivityLevel
    # Missing: ComplianceScope (HIPAA, PCI, etc.)
  }
}
```

### Document Management Without Labels

```yaml
# SharePoint/file system structure without classification
corporate_documents:
  - folder: "HR Files"
    contains: "Employee SSNs, salary data, performance reviews"
    classification: undefined
    access_controls: default
    encryption: none

  - folder: "Marketing Materials"
    contains: "Public presentations, press releases"
    classification: undefined
    access_controls: default
```

## What This Signal Does NOT Assert

- Whether data is protected despite lack of formal classification
- The appropriateness of classification schemes that may exist
- Whether users understand data sensitivity informally
- Compliance or non-compliance with HITRUST or any framework
- Required classification levels or methodologies

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **07.d - Information Classification**: Information should be classified in terms of its value, legal requirements, sensitivity, and criticality to the organization

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ASSET-NO-LABELING-005` — Information labeling missing
- `CSE-HITRUST-ASSET-NO-HANDLING-006` — Asset handling procedures missing
- `CSE-HITRUST-ASSET-NO-INVENTORY-001` — Asset inventory not maintained
- `CSE-GDPR-DATA-NO-INVENTORY-001` — Personal data inventory missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of information security policies for classification schemes
- Analysis of data governance documentation
- Assessment of database schemas for classification metadata
- Evaluation of cloud resource tagging standards
- Review of document management systems for classification labels
- Verification of data loss prevention (DLP) policy configurations

The presence of this signal indicates a condition that warrants review in the context of information classification requirements.
