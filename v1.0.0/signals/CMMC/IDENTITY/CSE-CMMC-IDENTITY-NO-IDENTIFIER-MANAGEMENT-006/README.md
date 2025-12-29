# CSE-CMMC-IDENTITY-NO-IDENTIFIER-MANAGEMENT-006

**Identifier Lifecycle Not Managed**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-IDENTITY-NO-IDENTIFIER-MANAGEMENT-006` |
| Domain | CMMC |
| Category | IDENTITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

User and device identifiers are not managed throughout their lifecycle including creation, use, and deactivation.

This signal indicates that stale, shared, or orphaned identifiers may exist without proper controls.

## Applicability

- User account provisioning
- Account deprovisioning processes
- Periodic access reviews
- Shared account prevention
- Service account management

## Examples (Non-Normative)

### No Deprovisioning Process

```yaml
identity_management:
  provisioning: manual
  deprovisioning: not_implemented
  periodic_review: none
  orphaned_account_detection: disabled
```

### Stale Accounts Present

```sql
-- Accounts with no login in 90+ days still active
SELECT username, last_login
FROM users
WHERE status = 'active'
AND last_login < NOW() - INTERVAL 90 DAY;
-- Returns 50+ accounts
```

## CMMC Context (Informative)

- **IA.L2-3.5.5**: Manage information system identifiers by receiving authorization, issuing identifiers to intended parties, disabling identifiers after a defined period of inactivity, and archiving identifiers

## Related Signals

- `CSE-CMMC-IDENTITY-NO-MFA-001`
- `CSE-CMMC-ACCESS-NO-SEPARATION-DUTIES-006`
