# CSE-CMMC-PHYSICAL-NO-ALTERNATE-SITE-005

**Alternate Work Site Security Not Addressed**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-PHYSICAL-NO-ALTERNATE-SITE-005` |
| Domain | CMMC |
| Category | PHYSICAL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Security controls for alternate work sites such as home offices are not implemented or verified.

This signal indicates that CUI may be processed in environments without adequate physical protection.

## Applicability

- Home office security
- Remote work environments
- Temporary work locations
- Satellite offices
- Coworking spaces

## Examples (Non-Normative)

### No Remote Work Policy

```yaml
alternate_site_policy:
  defined: false
  security_requirements: none
  verification_process: not_implemented
```

### Unverified Home Office

```
Telework Assessment:
  Home Office Security Review: Never performed
  Physical Security Requirements: Not communicated
  Verification Process: None
```

## CMMC Context (Informative)

- **PE.L2-3.10.6**: Enforce safeguarding measures for CUI at alternate work sites

## Related Signals

- `CSE-CMMC-PHYSICAL-NO-ACCESS-CONTROL-001`
- `CSE-CMMC-ACCESS-NO-REMOTE-SESSION-CONTROL-003`
