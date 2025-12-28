# CSE-HITRUST-ASSET-NO-LABELING-005

**Information Labeling Missing**

## Signal Overview

| Field           | Value                                 |
|-----------------|---------------------------------------|
| Identifier      | `CSE-HITRUST-ASSET-NO-LABELING-005`   |
| Domain          | HITRUST                               |
| Category        | ASSET                                 |
| Status          | Active                                |
| Introduced In   | 1.0.0                                 |

## Description

Information assets lack visible labels or metadata that clearly identify their classification level and handling requirements.

This signal indicates that even if classification schemes exist, the information itself does not carry visible markings or electronic metadata that communicate its sensitivity to users and systems.

## Applicability

This signal applies to:

- Documents (Word, PDF, presentations)
- Email messages and attachments
- Database records and fields
- File system directories and files
- Printed materials
- Cloud storage objects
- Data exports and reports
- Backup media
- Removable storage devices

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Documents Without Classification Headers

```markdown
# Document lacks classification marking
Title: 2024 Compensation Plan
Author: HR Department
Date: January 2024

[No classification banner]
[No sensitivity marking]
[No handling instructions]

Content: Executive salary information, bonus structures...
```

### Email Without Classification Labels

```email
From: finance@company.com
To: accounting-team@company.com
Subject: Q4 Financial Results - Pre-Announcement

[No classification marking in subject]
[No banner in email body]
[No sensitivity warning]
[No handling restrictions noted]

Attached: Q4_Earnings_Draft.xlsx (containing confidential financial data)
```

### File System Without Metadata

```bash
# Files containing sensitive data without classification metadata
/corporate_data/
  ├── customer_database_export.csv  # Contains PII
  ├── employee_ssn_list.xlsx  # Contains sensitive PII
  ├── strategic_plan_2024.pdf  # Contains confidential strategy
  └── merger_analysis.docx  # Contains highly confidential M&A data

# None have:
# - Extended file attributes for classification
# - Naming conventions indicating sensitivity
# - Embedded metadata headers
# - Visual watermarks
```

### Database Records Without Classification Fields

```sql
-- Sensitive data without classification metadata
CREATE TABLE financial_transactions (
    transaction_id INT PRIMARY KEY,
    account_number VARCHAR(20),  -- Sensitive
    amount DECIMAL(15,2),
    customer_ssn VARCHAR(11),  -- Highly sensitive
    -- Missing classification columns:
    -- data_classification VARCHAR(20),
    -- sensitivity_label VARCHAR(50),
    -- handling_restrictions TEXT
);
```

### Cloud Objects Without Classification Tags

```python
# S3 object upload without classification metadata
import boto3

s3_client = boto3.client('s3')
s3_client.upload_file(
    'patient_records.csv',
    'medical-data-bucket',
    'patient_records.csv',
    ExtraArgs={
        'Metadata': {
            'department': 'healthcare',
            'uploaded-by': 'admin'
            # Missing: 'classification': 'PHI-Restricted'
            # Missing: 'handling': 'HIPAA-Protected'
            # Missing: 'retention': '7-years'
        }
    }
)
```

## What This Signal Does NOT Assert

- Whether classification schemes are defined
- Whether users understand data sensitivity without labels
- Whether technical controls protect unlabeled data
- Compliance or non-compliance with HITRUST or any framework
- Required labeling formats or methodologies

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **07.e - Labeling and Handling of Information**: An appropriate set of procedures for information labeling and handling should be developed and implemented in accordance with the classification scheme adopted by the organization

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ASSET-NO-CLASSIFICATION-004` — Information classification missing
- `CSE-HITRUST-ASSET-NO-HANDLING-006` — Asset handling procedures missing
- `CSE-HIPAA-DATA-NO-PHI-LABELING-001` — PHI labeling missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of document templates for classification headers/footers
- Analysis of email system classification plugins or add-ins
- Assessment of file metadata and extended attributes
- Evaluation of data loss prevention (DLP) label enforcement
- Review of database schemas for classification columns
- Inspection of cloud object tagging practices
- Verification of printed material marking procedures

The presence of this signal indicates a condition that warrants review in the context of information labeling requirements.
