# CSE-ISO27001-TECH-NO-INFO-DELETION-010

**No Information Deletion**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-TECH-NO-INFO-DELETION-010` |
| Domain | ISO27001 |
| Category | TECH |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Information stored in systems and devices is not deleted when no longer required. This signal indicates that data is retained indefinitely without proper deletion or disposal processes. This is a new control in ISO 27001:2022.

## Applicability

- Organizations without defined data retention and deletion policies
- Environments where obsolete data accumulates on production systems
- Systems lacking automated data deletion capabilities
- Organizations that do not sanitize decommissioned hardware
- Environments non-compliant with data protection regulations (GDPR, etc.)

## Examples (Non-Normative)

### No Deletion Policy

```yaml
data_management:
  retention_policy:
    defined: false
    enforced: false
  deletion_process:
    automated: false
    manual_review: never
    secure_deletion: not_implemented
  backup_retention:
    policy: indefinite
    purging: never
  device_disposal:
    sanitization: not_performed
    certificate_of_destruction: not_obtained
```

### Indefinite Data Retention

```yaml
information_system:
  customer_data:
    retention_period: unlimited
    deletion_requests: not_tracked
    automated_deletion: disabled
  logs:
    retention: indefinite
    storage_growth: uncontrolled
  decommissioned_systems:
    data_migration: incomplete
    secure_wipe: not_performed
```

## ISO 27001:2022 Context (Informative)

- **A.8.10 Information deletion**: Information stored in information systems, devices or in any other storage media shall be deleted when no longer required. This is a NEW control in ISO 27001:2022.

## Related Signals

- `CSE-ISO27001-TECH-NO-BACKUP-013`
- `CSE-ISO27001-TECH-NO-CONFIG-MANAGEMENT-009`
- `CSE-GDPR-PRIVACY-NO-DATA-RETENTION-POLICY` (if applicable)
