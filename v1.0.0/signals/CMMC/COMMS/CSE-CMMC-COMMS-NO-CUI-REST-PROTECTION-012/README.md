# CSE-CMMC-COMMS-NO-CUI-REST-PROTECTION-012

**CUI at Rest Not Protected**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-COMMS-NO-CUI-REST-PROTECTION-012` |
| Domain | CMMC |
| Category | COMMS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Controlled Unclassified Information stored in persistent storage is not protected through encryption or other mechanisms.

This signal indicates that stored CUI may be exposed if physical or logical access is compromised.

## Applicability

- Full disk encryption
- Database encryption
- File-level encryption
- Backup encryption
- Cloud storage encryption

## Examples (Non-Normative)

### Unencrypted CUI Storage

```yaml
storage_config:
  disk_encryption: disabled
  database_encryption: none
  file_encryption: not_implemented
```

### Plain Text Database

```sql
-- CUI stored without encryption
SELECT * FROM customer_data;
-- SSN, contract data visible in plain text
```

## CMMC Context (Informative)

- **SC.L2-3.13.16**: Protect the confidentiality of CUI at rest

## Related Signals

- `CSE-CMMC-MEDIA-NOT-ENCRYPTED-002`
- `CSE-CMMC-ACCESS-PORTABLE-CUI-UNENCRYPTED-012`
