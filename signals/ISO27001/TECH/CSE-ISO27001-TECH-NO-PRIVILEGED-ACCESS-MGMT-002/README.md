# CSE-ISO27001-TECH-NO-PRIVILEGED-ACCESS-MGMT-002

**No Privileged Access Management**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-TECH-NO-PRIVILEGED-ACCESS-MGMT-002` |
| Domain | ISO27001 |
| Category | TECH |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Allocation and use of privileged access rights is not restricted and managed. This signal indicates that privileged access (administrative, root, superuser) is granted without proper controls, approval workflows, or ongoing management.

## Applicability

- Organizations that grant administrative or root access to systems and applications
- Environments where privileged access rights are assigned without formal approval
- Systems lacking privileged access management (PAM) solutions
- Organizations without periodic reviews of privileged account assignments
- Environments where privileged sessions are not monitored or logged

## Examples (Non-Normative)

### Unmanaged Privileged Access

```yaml
privileged_access:
  approval_required: false
  access_review_frequency: never
  session_monitoring: disabled
  password_vault: not_implemented
  just_in_time_access: false
  segregation_of_duties: not_enforced
```

### Excessive Administrative Rights

```yaml
user_account:
  username: john.doe
  privileged_roles:
    - domain_admin
    - database_admin
    - backup_admin
  approval_date: null
  business_justification: null
  last_reviewed: never
  session_recording: disabled
```

## ISO 27001:2022 Context (Informative)

- **A.8.2 Privileged access rights**: The allocation and use of privileged access rights shall be restricted and managed.

## Related Signals

- `CSE-ISO27001-TECH-NO-ACCESS-RESTRICTION-003`
- `CSE-ISO27001-TECH-NO-SECURE-AUTH-005`
- `CSE-ISO27001-TECH-NO-LOGGING-015`
- `CSE-ISO27001-TECH-NO-MONITORING-016`
