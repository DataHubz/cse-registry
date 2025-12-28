# CSE-CIS-DATA-NO-MANAGEMENT-PROCESS-001

**Data Management Process Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-CIS-DATA-NO-MANAGEMENT-PROCESS-001` |
| Domain          | CIS                                       |
| Category        | DATA                                      |
| Control         | 03 - Data Protection                      |
| Safeguard       | 3.1                                       |
| IG Level        | IG1                                       |
| Asset Type      | Data                                      |
| Security Function | Protect                                 |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                    |

## Description

An organization lacks a documented and implemented data management process to establish and maintain the provenance of data.

This signal indicates that there is no formal process for tracking where data originates, how it flows through systems, who has access to it, and what transformations or processing it undergoes throughout its lifecycle.

## Applicability

This signal applies to:

- Enterprise data governance frameworks
- Data warehouses and data lakes
- Cloud storage repositories (S3, Azure Blob, GCS)
- Database management systems
- Data integration and ETL pipelines
- File sharing and collaboration platforms
- Application data stores
- Data backup and archive systems

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Data Governance Documentation

```text
# Organization lacks:
- Data ownership assignments
- Data classification schemes
- Data lifecycle policies
- Data lineage tracking
- Data quality standards
- Data access procedures
```

### Untracked Data Sources

```yaml
# Data infrastructure without provenance tracking
data_sources:
  - customer_database: "No owner documented"
  - analytics_bucket: "Origin unknown"
  - legacy_files: "No classification"
  - api_feeds: "Lineage not tracked"
```

### No Data Flow Documentation

```python
# Data processing without documented flow
def process_customer_data(data):
    # No documentation of:
    # - Where data came from
    # - What transformations are applied
    # - Where data goes next
    # - Who authorized the processing
    transformed_data = transform(data)
    return transformed_data
```

### Missing Data Inventory

```text
# Organization cannot answer:
- What data do we have?
- Where is it stored?
- Who owns each dataset?
- What is the sensitivity level?
- What is the business purpose?
- How long should we keep it?
```

## What This Signal Does NOT Assert

- Whether informal data management practices exist
- The specific data management framework required
- Whether compensating controls exist
- The quality or completeness of existing documentation
- Compliance or non-compliance with CIS Controls or any framework
- Required remediation actions

## CIS Context (Informative)

This signal is relevant to CIS Control 3:

- **Safeguard 3.1**: Establish and Maintain a Data Management Process

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-CIS-DATA-NO-INVENTORY-002` — Sensitive Data Inventory Missing
- `CSE-CIS-DATA-NO-CLASSIFICATION-007` — Data Classification Missing
- `CSE-CIS-DATA-NO-RETENTION-POLICY-004` — Data Retention Policy Missing

## Notes

Detection of this signal typically involves:

- Review of data governance documentation
- Assessment of data ownership assignments
- Examination of data lifecycle policies
- Analysis of data lineage capabilities
- Verification of data management procedures
- Review of data quality standards

The presence of this signal indicates a condition that warrants review in the context of data protection and governance requirements.
