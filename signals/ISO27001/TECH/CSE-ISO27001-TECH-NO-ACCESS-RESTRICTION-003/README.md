# CSE-ISO27001-TECH-NO-ACCESS-RESTRICTION-003

**No Information Access Restriction**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-TECH-NO-ACCESS-RESTRICTION-003` |
| Domain | ISO27001 |
| Category | TECH |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Access to information and application system functions is not restricted according to access control policy. This signal indicates that access controls are not properly implemented or enforced based on the organization's access control policy.

## Applicability

- Organizations without defined or enforced access control policies
- Applications and systems that lack role-based access control (RBAC)
- Environments where access is granted without need-to-know justification
- Systems that do not implement least privilege principles
- Applications with overly permissive default access settings

## Examples (Non-Normative)

### Overly Permissive Access Configuration

```yaml
application_access:
  default_permissions: full_access
  rbac_implemented: false
  access_control_policy: undefined
  need_to_know_enforcement: false
  least_privilege: not_implemented
  permission_review: never
```

### Unrestricted Database Access

```yaml
database:
  name: customer_data
  access_control:
    authentication: basic
    authorization: all_users_read_write
    row_level_security: disabled
    column_masking: disabled
    audit_logging: disabled
```

## ISO 27001:2022 Context (Informative)

- **A.8.3 Information access restriction**: Access to information and other associated assets shall be restricted in accordance with the established topic-specific policy on access control.

## Related Signals

- `CSE-ISO27001-TECH-NO-PRIVILEGED-ACCESS-MGMT-002`
- `CSE-ISO27001-TECH-NO-SECURE-AUTH-005`
- `CSE-ISO27001-TECH-NO-DATA-MASKING-011`
- `CSE-ISO27001-TECH-NO-LOGGING-015`
