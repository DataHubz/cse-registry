# CSE-CMMC-AUDIT-NO-NONREPUDIATION-009

**Non-Repudiation Controls Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-AUDIT-NO-NONREPUDIATION-009` |
| Domain | CMMC |
| Category | AUDIT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Audit mechanisms do not provide non-repudiation capabilities to prove that actions occurred.

This signal indicates that users may be able to deny performing actions due to lack of cryptographic or tamper-evident logging.

## Applicability

- Critical transaction logging
- Privileged action records
- Digitally signed audit logs
- Tamper-evident storage
- Cryptographic timestamps

## Examples (Non-Normative)

### No Log Signing

```yaml
audit_config:
  log_signing: disabled
  integrity_verification: none
  tamper_detection: not_implemented
```

### Mutable Log Storage

```
Log Storage Configuration:
  Write Protection: None
  Digital Signatures: Not Applied
  Immutable Storage: Not Used
```

## CMMC Context (Informative)

- **AU.L2-3.3.2**: Ensure that the actions of individual system users can be uniquely traced to those users so they can be held accountable for their actions

## Related Signals

- `CSE-CMMC-AUDIT-NO-USER-ACCOUNTABILITY-002`
- `CSE-CMMC-AUDIT-NO-PROTECTION-003`
