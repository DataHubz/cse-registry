# CSE-ISO27001-TECH-NO-TEST-DATA-CONTROLS-033

**Inadequate Test Information Controls**

## Signal Overview

| Field           | Value                                           |
|-----------------|-------------------------------------------------|
| Identifier      | `CSE-ISO27001-TECH-NO-TEST-DATA-CONTROLS-033`   |
| Domain          | ISO27001                                        |
| Category        | TECH                                            |
| Status          | Active                                          |
| Introduced In   | 1.0.0                                           |

## Description

Test information is not appropriately selected, protected, and managed.

This signal indicates that test data, including production data used in testing, is not properly sanitized, masked, anonymized, or protected, potentially exposing sensitive or personal information in non-production environments.

## Applicability

This signal applies to:

- Development and testing databases
- QA and UAT environments
- Performance and load testing data
- Security testing environments
- Training and demonstration systems
- Data used in CI/CD pipelines
- Test file repositories
- Synthetic data generation
- Production data copies for testing

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Production Data in Test Environment

```sql
-- Test database with unmasked production data
-- Database: test_db
-- Source: production_backup_2024_01_15.sql

SELECT * FROM customers LIMIT 5;
-- Returns real customer PII:
-- name, email, phone, SSN, credit_card
-- No data masking applied
```

### No Data Anonymization Process

```python
# Test data provisioning script
def refresh_test_data():
    production_db = connect_to_production()
    test_db = connect_to_test()

    # Direct copy without masking
    data = production_db.query("SELECT * FROM users")
    test_db.bulk_insert("users", data)

    # PII copied directly to test environment
    # No anonymization
    # No masking
```

### Test Data Access Without Controls

```yaml
# Development environment
database:
  host: test-db.internal
  name: customer_data_test
  # Contains production data copy

access:
  - developers: full_access
  - contractors: read_write
  - qa_team: full_access
  # No access controls on sensitive data
  # No audit logging
```

### Unprotected Test Files

```bash
# Test data repository
/test-data/
  ├── customer_export_prod_2024.csv  # Real customer data
  ├── payment_transactions.json      # Real payment info
  ├── user_credentials.txt           # Real passwords
  └── healthcare_records.xml         # Real PHI

# Files committed to git
# Accessible to all developers
# No encryption
# No data classification
```

### Missing Data Masking

```text
Test Data Management:
❌ Data masking policy
❌ Anonymization procedures
❌ Synthetic data generation
❌ PII identification and protection
❌ Test data retention policy
❌ Secure deletion procedures
❌ Access controls on test data

Current: Production data copied directly
```

## What This Signal Does NOT Assert

- Whether the configuration is intentional or accidental
- Whether compensating controls exist elsewhere
- The likelihood or impact of test data exposure
- Compliance or non-compliance with ISO 27001 or any framework
- Required remediation actions

## ISO 27001:2022 Context (Informative)

This signal is relevant to:

- **A.8.33**: Test information - Test information should be appropriately selected, protected and managed

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-ISO27001-TECH-NO-ENV-SEPARATION-031` — Missing environment separation
- `CSE-ISO27001-ORG-NO-DATA-PRIVACY-001` — Inadequate data privacy controls
- `CSE-ISO27001-TECH-NO-ACCESS-CONTROL-008` — Missing access controls

## Notes

Detection of this signal typically involves:

- Review of test data management policies
- Analysis of data provisioning and refresh procedures
- Inspection of data masking and anonymization tools
- Assessment of test environment access controls
- Examination of data flows from production to test
- Review of data retention and deletion procedures
- Evaluation of synthetic data generation capabilities
- Assessment of PII and sensitive data in test systems

Key test data controls include:
- Data masking and anonymization for sensitive fields
- Synthetic or dummy data generation
- Subsetting (using only necessary data volumes)
- Access controls on test environments
- Data classification and handling procedures
- Secure deletion after testing
- Audit logging of test data access
- Data retention policies
- Privacy impact assessments
- Approval for production data use in testing

The presence of this signal indicates a condition that warrants review in the context of test information management requirements.
