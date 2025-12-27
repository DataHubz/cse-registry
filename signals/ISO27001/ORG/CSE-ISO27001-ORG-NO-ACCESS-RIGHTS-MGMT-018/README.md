# CSE-ISO27001-ORG-NO-ACCESS-RIGHTS-MGMT-018

**No Access Rights Management**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-ACCESS-RIGHTS-MGMT-018` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Access rights are not provisioned, reviewed, modified, and removed in accordance with policy.

## Applicability

- Organizations without access review processes
- Environments where access rights accumulate without removal
- Companies lacking formal access request and approval workflows
- Organizations not performing periodic access certifications
- Environments where privileged access is not specially controlled

## Examples (Non-Normative)

### No Access Review Process

```yaml
access_governance:
  access_reviews:
    scheduled: false
    last_review: null
    frequency: "never"
  access_provisioning:
    approval_required: false
    business_justification: false
    automated_workflow: false
  access_removal:
    upon_termination: "manual_delayed"
    upon_role_change: "not_tracked"
    periodic_cleanup: false
```

### Excessive Access Rights

```yaml
access_analysis:
  users_reviewed: 250
  findings:
    dormant_accounts_with_access: 47
    users_with_admin_rights: 89
    justified_admin_users: 8
    access_creep_detected: 156
  privileged_access:
    periodic_review: false
    just_in_time_access: false
    approval_workflow: false
  last_access_certification: null
```

## ISO 27001:2022 Context (Informative)

- **A.5.18 Access rights**: Access rights to information and other associated assets should be provisioned, reviewed, modified and removed in accordance with the organization's topic-specific policy on and rules for access control. This should include periodic reviews of access rights to ensure they remain appropriate.

## Related Signals

- `CSE-ISO27001-ORG-NO-ACCESS-CONTROL-POLICY-015`
- `CSE-ISO27001-ORG-NO-IDENTITY-MANAGEMENT-016`
- `CSE-ISO27001-ORG-NO-DUTY-SEGREGATION-003`
