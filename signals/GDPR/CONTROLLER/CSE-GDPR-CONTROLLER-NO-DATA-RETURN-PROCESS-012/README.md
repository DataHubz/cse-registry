# CSE-GDPR-CONTROLLER-NO-DATA-RETURN-PROCESS-012

**Data Return Process Not Established**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-CONTROLLER-NO-DATA-RETURN-PROCESS-012` |
| Domain | GDPR |
| Category | CONTROLLER |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The processor contract does not provide for deletion or return of all personal data to the controller after the end of provision of services as required by Article 28.3(g).

This includes failure to establish processes for secure data deletion and verification of deletion.

## Applicability

- Vendor termination procedures
- Service contract expiration
- Data migration processes
- Processor offboarding
- Contract renewal decisions

## Examples (Non-Normative)

### No Data Return Clause

```yaml
processor_contract:
  termination_provisions:
    data_return: null
    data_deletion: "Not specified"
    timeline: "Not defined"
    verification: false
    backup_deletion: "Not addressed"
    copies_in_logs: "Not mentioned"
```

### Inadequate Deletion Process

```
Contract Termination:
  - Processor: CRM Platform
  - Service End Date: 2024-01-01
  - Data Return: Not performed
  - Deletion Certificate: Not provided
  - Backup Retention: Unknown (processor discretion)
  - Log Files: Retained indefinitely
  - Legal Holds: Not addressed
```

## GDPR Context (Informative)

- **Art. 28.3(g)**: Processor must delete or return data after end of services
- **Art. 17**: Right to erasure applies to processor data
- **Art. 5.1(e)**: Storage limitation principle requires data deletion

## Related Signals

- `CSE-GDPR-CONTROLLER-NO-PROCESSOR-CONTRACT-005`
- `CSE-GDPR-PRINCIPLES-NO-STORAGE-LIMITATION-007`
- `CSE-GDPR-RIGHTS-NO-ERASURE-MECHANISM-010`
