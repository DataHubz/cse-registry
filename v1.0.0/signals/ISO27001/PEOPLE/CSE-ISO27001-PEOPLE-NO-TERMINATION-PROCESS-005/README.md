# CSE-ISO27001-PEOPLE-NO-TERMINATION-PROCESS-005

**No Post-Employment Security Process**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PEOPLE-NO-TERMINATION-PROCESS-005` |
| Domain | ISO27001 |
| Category | PEOPLE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Security responsibilities that remain valid after termination or change are not defined and enforced. This creates significant risk as departing personnel may retain access to systems, knowledge of sensitive information, or fail to return organizational assets.

## Applicability

- Employee termination and resignation processes
- Role change and transfer procedures
- Contractor engagement completion
- Access revocation workflows
- Asset return and intellectual property protection
- Continuing confidentiality obligations

## Examples (Non-Normative)

### Incomplete Offboarding Process

```yaml
offboarding_checklist:
  hr_tasks:
    - collect_id_badge
    - final_paycheck
    - exit_interview

  # Missing critical security tasks:
  # - access_revocation: false
  # - asset_return: false
  # - knowledge_transfer: false
  # - confidentiality_reminder: false
  # - ongoing_obligations_review: false

  completed: true  # Marked complete despite security gaps
```

### Access Not Revoked After Termination

```yaml
user_account:
  employee: "Jane Smith"
  status: "terminated"
  termination_date: "2024-06-15"
  last_day: "2024-06-15"

  access_status:
    email: "active"  # Still active after termination
    vpn: "active"
    cloud_services: "active"
    building_access: "disabled"

  assets:
    laptop: "not_returned"
    mobile_device: "not_returned"
    access_cards: "not_returned"
```

### Role Change Without Access Review

```yaml
employee_transfer:
  employee: "Bob Johnson"
  previous_role: "Senior Developer"
  new_role: "Project Manager"
  effective_date: "2024-07-01"

  access_review:
    conducted: false
    # Retained privileged developer access despite role change
    previous_access_revoked: false
    new_access_granted: true
```

## ISO 27001:2022 Context (Informative)

- **A.6.5 Responsibilities after termination or change of employment**: Information security responsibilities and duties that remain valid after termination or change of employment should be defined, enforced and communicated to relevant personnel and other interested parties.

## Related Signals

- `CSE-ISO27001-PEOPLE-NO-EMPLOYMENT-TERMS-002`
- `CSE-ISO27001-PEOPLE-NO-NDA-AGREEMENTS-006`
- `CSE-ISO27001-PHYSICAL-NO-ASSET-MANAGEMENT`
