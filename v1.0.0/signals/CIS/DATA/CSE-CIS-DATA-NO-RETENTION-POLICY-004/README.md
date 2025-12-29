# CSE-CIS-DATA-NO-RETENTION-POLICY-004

**Data Retention Policy Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-DATA-NO-RETENTION-POLICY-004`  |
| Domain          | CIS                                      |
| Category        | DATA                                     |
| Control         | 03 - Data Protection                     |
| Safeguard       | 3.4                                      |
| IG Level        | IG1                                      |
| Asset Type      | Data                                     |
| Security Function | Protect                                |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                   |

## Description

An organization lacks a documented data retention policy that defines how long different types of data should be retained and when it should be disposed of.

This signal indicates that there are no formal retention requirements governing data lifecycle, leading to inconsistent retention practices and potential compliance risks.

## Applicability

This signal applies to:

- Customer and client data
- Financial records and transactions
- Employee records and HR data
- Audit logs and security events
- Backup and archive systems
- Email and communications
- Contracts and legal documents
- Compliance and regulatory data
- Application logs and telemetry

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Documented Retention Requirements

```text
# Organization lacks policies for:
- Customer data retention periods
- Financial record retention (tax, invoices)
- Email retention and deletion
- Log file retention
- Backup retention schedules
- Legal document preservation
- Employee record retention
```

### Indefinite Log Retention

```yaml
# Logging configuration without retention limits
logging:
  application_logs:
    retention: "unlimited"
  security_logs:
    retention: "not_defined"
  audit_logs:
    retention: "forever"
  # No automated cleanup configured
```

### Inconsistent Backup Retention

```hcl
# Backup policies without standardized retention
resource "aws_backup_plan" "example" {
  name = "backup-plan"

  rule {
    rule_name         = "daily_backups"
    target_vault_name = "default"
    schedule          = "cron(0 2 * * ? *)"
    # No lifecycle configuration
    # No retention period defined
  }
}
```

### Database Without Retention Policy

```sql
-- Customer data without defined retention
CREATE TABLE customer_orders (
    order_id INT,
    customer_id INT,
    order_date DATE,
    order_details TEXT
);
-- No TTL configured
-- No archival process defined
-- Data retained indefinitely
```

## What This Signal Does NOT Assert

- Whether informal retention practices exist
- The specific retention periods required
- Whether regulatory requirements are being met
- The format or documentation method required
- Compliance or non-compliance with CIS Controls or any framework
- Required remediation actions

## CIS Context (Informative)

This signal is relevant to CIS Control 3:

- **Safeguard 3.4**: Enforce Data Retention

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-CIS-DATA-NO-MANAGEMENT-PROCESS-001` — Data Management Process Missing
- `CSE-CIS-DATA-NO-DISPOSAL-005` — Secure Data Disposal Missing
- `CSE-CIS-DATA-NO-REMOVAL-003` — Unnecessary Data Not Removed

## Notes

Detection of this signal typically involves:

- Review of data retention policy documentation
- Assessment of regulatory retention requirements
- Examination of automated retention enforcement
- Analysis of data lifecycle configurations
- Verification of retention period definitions
- Review of archival and deletion procedures
- Assessment of legal hold processes

The presence of this signal indicates a condition that warrants review in the context of data governance and compliance requirements.
