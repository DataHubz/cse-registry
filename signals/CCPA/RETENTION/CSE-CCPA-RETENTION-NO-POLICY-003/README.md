# CSE-CCPA-RETENTION-NO-POLICY-003

**Retention Policy Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-RETENTION-NO-POLICY-003` |
| Domain | CCPA |
| Category | RETENTION |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal identifies when a business lacks a documented retention policy for personal information or fails to establish retention periods for PI categories. Without a formal policy, the business cannot demonstrate compliance with requirements to retain PI only as long as reasonably necessary for disclosed purposes.

## Applicability

- Businesses collecting PI without documented retention policies
- Organizations lacking defined retention periods for PI categories
- Systems storing PI indefinitely without governance controls
- Data processors without client-approved retention schedules

## Examples (Non-Normative)

### Missing Retention Policy Document

```yaml
# Example: Business with no retention policy
privacy_program:
  retention_policy:
    status: "not_documented"
    last_review: null
    approval_date: null
    policy_owner: null

data_categories:
  - category: "customer_contact_info"
    retention_period: "undefined"
    deletion_trigger: "none"
  - category: "transaction_history"
    retention_period: "undefined"
    deletion_trigger: "none"
  - category: "browsing_data"
    retention_period: "undefined"
    deletion_trigger: "none"
```

### Undocumented Retention Practices

```yaml
# Example: Inconsistent retention without policy
database_retention:
  users_table:
    retention_documented: false
    deletion_schedule: null
    last_purge: "never"

  orders_table:
    retention_documented: false
    deletion_schedule: null
    last_purge: "never"

  analytics_logs:
    retention_documented: false
    deletion_schedule: null
    last_purge: "never"

retention_policy_exists: false
legal_review_completed: false
```

## CCPA Context (Informative)

- **Section**: §1798.100(a)(3)
- **Requirement**: Businesses must establish, implement, and maintain reasonable security procedures and practices, which include defining retention periods. Additionally, §1798.100(c) requires that retention be "reasonably necessary and proportionate" to achieve disclosed purposes.
- **Added by**: CPRA (California Privacy Rights Act)

## Related Signals

- `CSE-CCPA-RETENTION-NO-MINIMIZATION-001`
- `CSE-CCPA-RETENTION-BEYOND-NECESSARY-004`
- `CSE-CCPA-RETENTION-NO-SCHEDULE-005`
- `CSE-CCPA-NOTICE-RETENTION-MISSING-005`
