# CSE-CCPA-RETENTION-BEYOND-NECESSARY-004

**PI Retained Beyond Reasonably Necessary**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-RETENTION-BEYOND-NECESSARY-004` |
| Domain | CCPA |
| Category | RETENTION |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal detects when a business retains personal information longer than reasonably necessary to achieve the disclosed purposes for which it was collected. The business maintains PI past the point where the original business purpose has been fulfilled or the data is no longer needed for operational, legal, or regulatory requirements.

## Applicability

- Businesses retaining PI after purpose fulfillment
- Organizations keeping customer data beyond relationship termination
- Systems storing inactive user accounts indefinitely
- Databases maintaining PI without automated deletion triggers

## Examples (Non-Normative)

### Inactive Account Retention

```yaml
# Example: Retaining inactive customer accounts indefinitely
account_retention:
  account_id: "CUST-12345"
  status: "inactive"
  last_login: "2018-03-15"
  last_transaction: "2017-11-20"
  account_created: "2015-06-01"

  retention_policy:
    inactive_period: "7 years and counting"
    business_purpose: "completed"  # No ongoing purpose
    legal_hold: false
    regulatory_requirement: false
    deletion_scheduled: false

  data_retained:
    - personal_info: "full name, email, phone, address"
    - payment_methods: "credit card last 4 digits"
    - transaction_history: "complete"
    - browsing_history: "complete"

reasonably_necessary: false  # Retention exceeds necessity
```

### Marketing List Retention

```yaml
# Example: Email list retention after opt-out
marketing_database:
  contact_id: "MKT-98765"
  opt_out_date: "2020-01-15"
  current_date: "2025-12-27"
  retention_period: "5+ years post opt-out"

  data_still_retained:
    - email_address: true
    - name: true
    - demographics: true
    - purchase_history: true
    - behavioral_data: true

  purpose_fulfilled: true  # Consumer opted out
  legal_requirement: false  # No legal reason to retain
  suppression_list_only: false  # Full profile retained

deletion_overdue: true
```

## CCPA Context (Informative)

- **Section**: §1798.100(c)
- **Requirement**: "A business' collection, use, retention, and sharing of a consumer's personal information shall be reasonably necessary and proportionate to achieve the purposes for which the personal information was collected or processed." This requires businesses to delete or de-identify PI when it is no longer necessary for disclosed purposes.
- **Added by**: CPRA (California Privacy Rights Act)

## Related Signals

- `CSE-CCPA-RETENTION-NO-MINIMIZATION-001`
- `CSE-CCPA-RETENTION-NO-POLICY-003`
- `CSE-CCPA-RIGHTS-DELETE-NO-RESPONSE-002`
- `CSE-CCPA-NOTICE-RETENTION-MISSING-005`
