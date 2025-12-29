# CSE-GDPR-PRINCIPLES-NO-INTEGRITY-CONFIDENTIALITY-008

**Integrity and Confidentiality Not Ensured**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-PRINCIPLES-NO-INTEGRITY-CONFIDENTIALITY-008` |
| Domain | GDPR |
| Category | PRINCIPLES |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Appropriate security measures are not implemented to protect personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.

## Applicability

- Data storage and transmission systems
- Access control implementations
- Encryption configurations
- Backup and recovery systems
- Physical security measures

## Examples (Non-Normative)

### Inadequate Security

```yaml
security_posture:
  encryption_at_rest: false
  encryption_in_transit: false
  access_control: weak
  audit_logging: disabled
```

### Missing Protections

```
Security Assessment:
  Data Encrypted: No
  Access Controls: Basic password only
  Intrusion Detection: None
  Backup Tested: Never
```

## GDPR Context (Informative)

- **Art. 5.1(f)**: Personal data shall be processed in a manner that ensures appropriate security, including protection against unauthorised or unlawful processing and against accidental loss, destruction or damage

## Related Signals

- `CSE-GDPR-SECURITY-NO-ENCRYPTION-002`
- `CSE-GDPR-SECURITY-NO-ACCESS-CONTROL-010`
