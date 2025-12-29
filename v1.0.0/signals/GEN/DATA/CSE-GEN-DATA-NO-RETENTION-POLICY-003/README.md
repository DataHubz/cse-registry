# CSE-GEN-DATA-NO-RETENTION-POLICY-003

**Data Retention Policy Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GEN-DATA-NO-RETENTION-POLICY-003` |
| Domain | GEN (General) |
| Category | DATA |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No defined policy specifying how long data should be retained and when it should be deleted.

Organizations lack documented retention schedules that establish the period for which different types of data must be kept, when data should be reviewed, and when it should be securely deleted or anonymized. This signal indicates data may be retained indefinitely without justification or business need.

## Applicability

This signal applies to:

- Data governance programs
- Database and storage systems
- Backup and archive systems
- Log management platforms
- Cloud storage and SaaS applications
- Customer and employee data systems
- Legal hold and e-discovery processes

## Examples (Non-Normative)

### No Retention Policy

```yaml
data_retention:
  policy_document: null                    # Signal: No retention policy exists
  retention_schedules: []                  # Signal: No schedules defined
  review_frequency: "never"                # Signal: No policy review

data_categories:
  customer_data:
    retention_period: "indefinite"         # Signal: No defined period
    deletion_trigger: null                 # Signal: No deletion criteria
    legal_basis: "not documented"          # Signal: No justification

  employee_records:
    retention_period: "permanent"          # Signal: Unlimited retention
    deletion_process: null                 # Signal: No deletion process

  application_logs:
    retention_period: "until storage full" # Signal: Storage-driven retention
    deletion_schedule: null                # Signal: No scheduled deletion
```

### Indefinite Data Retention

```
Storage Analysis:

Database Records:
  - customer_accounts: Created 2010-2024 (14 years), no deletion policy
  - order_history: 5.2M records, oldest from 2008, never purged
  - user_sessions: 45M records, retained indefinitely
  - application_logs: 12TB, no rotation policy

Backup Systems:
  - Daily backups: Retained indefinitely
  - Archive backups: No expiration date
  - Disaster recovery: All historical data retained

Business Justification: None documented
Legal Requirements: Not assessed
```

## What This Signal Does NOT Assert

- Whether current retention practices violate regulations
- The specific retention periods that should be applied
- Whether data is actually being retained longer than necessary
- Required remediation actions
- Compliance or non-compliance with any framework

## Related Signals

- `CSE-GEN-DATA-NO-DISPOSAL-004` — Secure disposal process missing
- `CSE-GEN-DATA-NO-CLASSIFICATION-001` — Data classification missing
- `CSE-GDPR-PRINCIPLES-NO-STORAGE-LIMITATION` — GDPR storage limitation violated (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **GDPR**: Article 5(1)(e) (Storage limitation principle)
- **PCI DSS**: Requirement 3.1 (Keep cardholder data storage to a minimum)
- **ISO 27001**: A.5.34 (Privacy and protection of PII)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Reviewing data governance documentation for retention policies
- Examining database configurations for automated deletion rules
- Analyzing storage growth patterns and data age
- Checking backup and archive system configurations
- Assessing legal and regulatory retention requirements
- Interviewing data stewards about retention practices

The absence of a retention policy increases storage costs, complicates compliance with data protection regulations, expands the attack surface, and makes it difficult to respond to data subject deletion requests.
