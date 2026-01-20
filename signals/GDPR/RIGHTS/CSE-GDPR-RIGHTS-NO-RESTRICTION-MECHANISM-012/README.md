# CSE-GDPR-RIGHTS-NO-RESTRICTION-MECHANISM-012

**Processing Restriction Mechanism Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-RIGHTS-NO-RESTRICTION-MECHANISM-012` |
| Domain | GDPR |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No mechanism exists to restrict processing of personal data when applicable conditions are met.

Restriction may be required during accuracy verification or when processing is contested.

## Applicability

- Data status flagging systems
- Processing workflow controls
- Database access controls
- Automated processing systems
- Marketing suppression lists

## Examples (Non-Normative)

### No Restriction Capability

```yaml
restriction_mechanism:
  flag_capability: false
  processing_controls: null
  notification_on_lift: false
  audit_trail: false
```

### Binary Delete Only

```
Restriction Assessment:
  Options: Delete or Keep
  Restrict Flag: Not available
  Suppress Processing: Not possible
  Retain for Legal: Cannot implement
```

## GDPR Context (Informative)

- **Art. 18.1**: The data subject shall have the right to obtain restriction of processing where one of the specified conditions applies

## Related Signals

- `CSE-GDPR-RIGHTS-NO-ERASURE-MECHANISM-010`
- `CSE-GDPR-RIGHTS-NO-OBJECTION-MECHANISM-015`
