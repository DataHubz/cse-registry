# CSE-CMMC-ENHANCED-NO-DUAL-AUTH-001

**Dual Authorization Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ENHANCED-NO-DUAL-AUTH-001` |
| Domain | CMMC |
| Category | ENHANCED |
| Status | Active |
| Introduced In | 1.0.0 |
| CMMC Level | 3 |

## Description

Dual authorization controls for critical operations are not implemented.

This signal indicates that sensitive actions can be performed by a single individual without independent verification.

## Applicability

- Privileged access operations
- System configuration changes
- Critical data modifications
- Security control changes
- Key management operations

## Examples (Non-Normative)

### Single-Person Critical Operations

```yaml
critical_operations:
  dual_authorization: not_required
  two_person_integrity: disabled
  independent_verification: none
```

### No Approval Workflow

```
Critical Operation Assessment:
  Key Rotation: Single admin
  Config Changes: No approval
  Data Deletion: Single auth
```

## CMMC Level 3 Context (Informative)

- **L3-AC.3.1.2e**: Employ dual authorization for critical or sensitive operations

## Related Signals

- `CSE-CMMC-ACCESS-NO-SEPARATION-DUTIES-006`
- `CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001`
