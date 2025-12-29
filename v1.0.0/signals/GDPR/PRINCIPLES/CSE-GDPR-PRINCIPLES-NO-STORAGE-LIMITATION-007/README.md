# CSE-GDPR-PRINCIPLES-NO-STORAGE-LIMITATION-007

**Storage Limitation Not Enforced**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-PRINCIPLES-NO-STORAGE-LIMITATION-007` |
| Domain | GDPR |
| Category | PRINCIPLES |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Personal data is kept for longer than necessary for the purposes for which it was collected.

Data should be retained only as long as needed and then securely deleted or anonymized.

## Applicability

- Database retention policies
- Backup and archive systems
- Log retention configurations
- User account data lifecycle
- Transaction history storage

## Examples (Non-Normative)

### No Retention Policy

```yaml
retention:
  policy_defined: false
  automated_deletion: false
  retention_period: "Indefinite"
  review_schedule: none
```

### Excessive Retention

```
Retention Configuration:
  Customer Data: Never deleted
  Transaction Logs: 50 years
  Session Data: Indefinite
  Justification: Not documented
```

## GDPR Context (Informative)

- **Art. 5.1(e)**: Personal data shall be kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data are processed

## Related Signals

- `CSE-GDPR-RIGHTS-NO-ERASURE-MECHANISM-010`
- `CSE-GDPR-PRINCIPLES-NO-DATA-MINIMIZATION-005`
