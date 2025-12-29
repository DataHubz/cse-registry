# CSE-CMMC-ASSESSMENT-NO-PLAN-001

**Security Assessment Plan Not Defined**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ASSESSMENT-NO-PLAN-001` |
| Domain | CMMC |
| Category | ASSESSMENT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A security assessment plan to periodically evaluate security controls is not developed or documented.

This signal indicates that security control effectiveness may not be systematically verified.

## Applicability

- Security assessment methodology
- Assessment scope and frequency
- Control evaluation criteria
- Assessment documentation
- Assessment team qualifications

## Examples (Non-Normative)

### No Assessment Plan

```yaml
security_assessment:
  plan_documented: false
  methodology: not_defined
  schedule: ad_hoc
```

### Informal Assessment Process

```
Assessment Program Review:
  Written Plan: None
  Methodology: Inconsistent
  Last Assessment: 3 years ago
```

## CMMC Context (Informative)

- **CA.L2-3.12.1**: Periodically assess the security controls in organizational systems to determine if the controls are effective in their application

## Related Signals

- `CSE-CMMC-ASSESSMENT-NO-PERIODIC-REVIEW-002`
- `CSE-CMMC-ASSESSMENT-NO-POA-003`
