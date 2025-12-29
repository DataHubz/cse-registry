# CSE-CMMC-COMMS-NO-KEY-MANAGEMENT-007

**Cryptographic Key Management Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-COMMS-NO-KEY-MANAGEMENT-007` |
| Domain | CMMC |
| Category | COMMS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Cryptographic keys are not managed throughout their lifecycle including generation, distribution, storage, and revocation.

This signal indicates that weak key management may compromise cryptographic protections.

## Applicability

- Key generation procedures
- Key storage security
- Key distribution methods
- Key rotation schedules
- Key revocation processes

## Examples (Non-Normative)

### No Key Rotation

```yaml
key_management:
  rotation_schedule: never
  generation_method: ad_hoc
  storage_protection: none
```

### Unprotected Key Storage

```
Key Storage Assessment:
  Location: Plain text file
  Access Control: None
  Encryption: Not encrypted
  Backup: Uncontrolled
```

## CMMC Context (Informative)

- **SC.L2-3.13.10**: Establish and manage cryptographic keys for cryptography employed in organizational systems

## Related Signals

- `CSE-CMMC-COMMS-WEAK-CRYPTO-004`
- `CSE-GEN-SECRETS-PLAINTEXT-001`
