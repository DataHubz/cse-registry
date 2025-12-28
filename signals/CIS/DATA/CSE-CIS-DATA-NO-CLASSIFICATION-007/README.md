# CSE-CIS-DATA-NO-CLASSIFICATION-007

**Data Classification Missing**

## Signal Overview

| Field           | Value                                  |
|-----------------|----------------------------------------|
| Identifier      | `CSE-CIS-DATA-NO-CLASSIFICATION-007`  |
| Domain          | CIS                                    |
| Category        | DATA                                   |
| Control         | 03 - Data Protection                   |
| Safeguard       | 3.7                                    |
| IG Level        | IG2                                    |
| Asset Type      | Data                                   |
| Security Function | Protect                              |
| Status          | Active                                 |
| Introduced In   | 1.0.0                                 |

## Description

An organization lacks a data classification scheme to categorize data based on sensitivity, criticality, and handling requirements.

This signal indicates that data is not systematically labeled or tagged according to its confidentiality, integrity, and availability requirements, making it difficult to apply appropriate security controls.

## Applicability

This signal applies to:

- Documents and file repositories
- Database records and fields
- Cloud storage objects and containers
- Email and communication systems
- Application data stores
- Intellectual property repositories
- Customer and employee data
- Financial and regulatory data
- System and application logs

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Classification Labels

```text
# File server without classification
/share/documents/
  ├── customer_list.xlsx          # No classification tag
  ├── financial_reports_2024.pdf  # No sensitivity label
  ├── merger_plans.docx           # No handling restrictions
  └── employee_ssns.csv           # No protection requirements
```

### Database Without Field Classification

```sql
-- Database schema without sensitivity markers
CREATE TABLE employees (
    employee_id INT,
    name VARCHAR(100),           -- No classification
    ssn VARCHAR(11),             -- PII not marked
    salary DECIMAL(10,2),        -- Confidential not marked
    performance_review TEXT,     -- Sensitivity unknown
    medical_info TEXT            -- PHI not identified
);
```

### Cloud Storage Without Tagging

```yaml
# S3 buckets without classification tags
s3_buckets:
  - customer-data-prod:
      tags: {}  # No classification
  - financial-reports:
      tags: {}  # No sensitivity level
  - public-assets:
      tags: {}  # No handling requirements
```

### Application Data Without Metadata

```python
# Application collecting data without classification
class UserProfile:
    def __init__(self):
        self.name = ""           # No classification metadata
        self.email = ""          # No sensitivity marker
        self.ssn = ""            # No PII indicator
        self.credit_score = 0    # No confidentiality level
        # No way to determine appropriate controls
```

## What This Signal Does NOT Assert

- The specific classification scheme required
- Whether informal classifications exist
- The granularity of classification needed
- Whether data is properly protected despite lack of labels
- Compliance or non-compliance with CIS Controls or any framework
- Required remediation actions

## CIS Context (Informative)

This signal is relevant to CIS Control 3:

- **Safeguard 3.7**: Establish and Maintain a Data Classification Scheme

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-CIS-DATA-NO-INVENTORY-002` — Sensitive Data Inventory Missing
- `CSE-CIS-DATA-NO-MANAGEMENT-PROCESS-001` — Data Management Process Missing
- `CSE-CIS-DATA-NO-DLP-008` — Data Loss Prevention Missing

## Notes

Detection of this signal typically involves:

- Review of data classification policy documentation
- Assessment of classification labeling systems
- Examination of metadata and tagging schemes
- Analysis of access control based on classification
- Verification of handling procedures by classification
- Review of user training on classification
- Assessment of automated classification tools
- Examination of data protection controls alignment

The presence of this signal indicates a condition that warrants review in the context of data governance and protection requirements.
