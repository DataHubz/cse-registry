# CSE-ISO27001-ORG-NO-IDENTITY-MANAGEMENT-016

**No Identity Management Lifecycle**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-IDENTITY-MANAGEMENT-016` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Full lifecycle management of identities is not implemented from creation through revocation.

## Applicability

- Organizations without formal identity provisioning processes
- Environments with delayed or incomplete account deprovisioning
- Companies lacking centralized identity management
- Organizations with orphaned or dormant accounts
- Environments where identity changes are not synchronized across systems

## Examples (Non-Normative)

### No Lifecycle Management

```yaml
identity_management:
  lifecycle_process:
    provisioning: "manual_ad_hoc"
    modification: "email_request"
    review: false
    deprovisioning: "incomplete"
  orphaned_accounts:
    count: 89
    oldest: "2019-04-12"
  identity_management_system: null
  automation: false
```

### Delayed Deprovisioning

```yaml
termination_review:
  employees_terminated_last_90_days: 12
  accounts_still_active:
    - user: "john.doe@company.com"
      termination_date: "2024-10-15"
      active_systems: 7
    - user: "jane.smith@company.com"
      termination_date: "2024-09-22"
      active_systems: 12
  average_deprovisioning_delay: "45_days"
```

## ISO 27001:2022 Context (Informative)

- **A.5.16 Identity management**: The full life cycle of identities should be managed. This includes the creation, maintenance and revocation of identities. The process should ensure that identities are uniquely identified and authenticated throughout their lifecycle.

## Related Signals

- `CSE-ISO27001-ORG-NO-ACCESS-CONTROL-POLICY-015`
- `CSE-ISO27001-ORG-NO-ACCESS-RIGHTS-MGMT-018`
- `CSE-ISO27001-ORG-NO-AUTH-INFO-MANAGEMENT-017`
