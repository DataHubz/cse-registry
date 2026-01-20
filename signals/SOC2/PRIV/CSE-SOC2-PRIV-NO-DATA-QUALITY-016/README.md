# CSE-SOC2-PRIV-NO-DATA-QUALITY-016

**No Data Accuracy and Completeness**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-SOC2-PRIV-NO-DATA-QUALITY-016`      |
| Domain          | SOC2                                     |
| Category        | PRIV                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

The entity does not collect and maintain accurate, up-to-date, complete, and relevant personal information for the purposes identified in the privacy notice.

This signal indicates that data quality controls are insufficient, potentially leading to incorrect decisions, poor customer experiences, and privacy violations.

## Applicability

This signal applies to:

- Customer data collection forms
- Data validation and verification systems
- User profile management
- Data update and correction workflows
- CRM and customer database systems
- Data integration and synchronization
- Data quality monitoring and reporting
- Master data management systems

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Data Validation

```javascript
// User registration without validation
app.post('/api/register', async (req, res) => {
  const userData = req.body;

  // No validation of data accuracy
  // No completeness checks
  // No format verification
  await database.users.insert(userData);

  res.json({ success: true });
});
```

### No Data Update Mechanism

```yaml
# System configuration
data_management:
  collection: enabled
  validation: minimal
  update_workflow: none  # No way for users to update data
  accuracy_verification: false
  data_quality_monitoring: false
```

### Incomplete Data Quality Controls

```json
{
  "data_quality": {
    "email_validation": false,
    "phone_validation": false,
    "address_verification": false,
    "duplicate_detection": false,
    "data_freshness_checks": false,
    "mandatory_fields": []
  }
}
```

### Missing Data Refresh Process

```text
Data Management Procedures:
- Initial collection: YES
- Storage: YES
- Access control: YES
- Missing: Regular data updates
- Missing: Accuracy verification
- Missing: Stale data detection
- Missing: Data correction workflow
```

## What This Signal Does NOT Assert

- Whether inaccurate data exists
- The specific quality standards required
- The acceptable error rate
- Compliance or non-compliance with SOC 2 or any framework
- Required data quality technology

## SOC 2 Context (Informative)

This signal is relevant to SOC 2 Privacy criteria:

- **P7.1**: The entity collects and maintains accurate, up-to-date, complete, and relevant personal information for the purposes identified in the entity's privacy notice.
- **GAPP Principle**: Quality

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-SOC2-PRIV-NO-DATA-RELEVANCE-017` — Missing data relevance verification
- `CSE-SOC2-PRIV-NO-SUBJECT-ACCESS-009` — Missing data access for review/update

## Notes

Detection of this signal typically involves:

- Review of data collection forms and validation
- Examination of data update workflows
- Analysis of data quality monitoring
- Assessment of verification procedures
- Inspection of data governance policies
- Review of master data management

Data quality dimensions to consider:
- **Accuracy**: Information is correct and error-free
- **Completeness**: All required data fields are populated
- **Consistency**: Data is uniform across systems
- **Timeliness**: Information is current and up-to-date
- **Validity**: Data conforms to defined formats and rules
- **Uniqueness**: No unnecessary duplication of records

Common data quality controls:
- Input validation (format, range, type checking)
- Real-time verification (email, phone, address)
- Mandatory field enforcement
- Duplicate detection and prevention
- Regular data refresh and update prompts
- Data subject access for corrections
- Automated data quality scoring
- Periodic data cleansing and enrichment

The presence of this signal indicates a condition that warrants review in the context of data quality and privacy accuracy requirements.
