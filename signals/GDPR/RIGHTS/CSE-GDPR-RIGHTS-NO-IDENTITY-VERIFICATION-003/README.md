# CSE-GDPR-RIGHTS-NO-IDENTITY-VERIFICATION-003

**Identity Verification Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-RIGHTS-NO-IDENTITY-VERIFICATION-003` |
| Domain | GDPR |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No mechanism exists to verify the identity of data subjects making rights requests when reasonable doubts exist.

Verification must balance security with accessibility of rights.

## Applicability

- Data subject access request processing
- Sensitive data disclosure requests
- Account deletion requests
- Data portability requests
- High-risk rights exercises

## Examples (Non-Normative)

### No Verification Process

```yaml
identity_verification:
  process_defined: false
  verification_methods: null
  escalation_criteria: null
  documentation: none
```

### Excessive Verification

```
Verification Assessment:
  Requirements: Notarized ID, utility bill, in-person visit
  Proportionality: Excessive
  Accessibility Impact: Rights effectively blocked
```

## GDPR Context (Informative)

- **Art. 12.6**: Where the controller has reasonable doubts concerning the identity of the natural person making the request, the controller may request additional information necessary to confirm the identity

## Related Signals

- `CSE-GDPR-RIGHTS-NO-RESPONSE-MECHANISM-002`
- `CSE-GDPR-RIGHTS-NO-ACCESS-MECHANISM-007`
