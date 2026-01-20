# CSE-CCPA-RETENTION-NO-SCHEDULE-005

**Retention Schedule Not Disclosed**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-RETENTION-NO-SCHEDULE-005` |
| Domain | CCPA |
| Category | RETENTION |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal identifies when a business fails to disclose the length of time it intends to retain each category of personal information, or the criteria used to determine that period, in its privacy policy. Consumers have the right to know how long their PI will be kept by the business.

## Applicability

- Businesses that do not disclose retention periods in privacy notices
- Privacy policies lacking retention criteria or timeframes
- Organizations using vague retention language without specific periods
- Websites providing no retention information to consumers

## Examples (Non-Normative)

### Privacy Policy Without Retention Disclosure

```yaml
# Example: Privacy policy missing retention information
privacy_policy:
  url: "https://example.com/privacy"
  last_updated: "2025-01-15"

  sections:
    - information_collected: "complete"
    - purposes_of_use: "complete"
    - sharing_practices: "complete"
    - consumer_rights: "complete"
    - retention_period: "missing"  # VIOLATION

  retention_disclosure:
    disclosed: false
    categories_with_periods: []
    criteria_provided: false

compliance_check:
  ccpa_1798_130_a_5_b: false  # Missing required disclosure
```

### Vague Retention Statement

```yaml
# Example: Insufficient retention disclosure
privacy_policy_excerpt:
  retention_section: |
    "We retain your personal information for as long as necessary
    to provide our services and for legitimate business purposes."

  issues:
    - specific_periods: false  # No timeframes provided
    - category_breakdown: false  # No per-category retention
    - criteria_defined: false  # Vague "necessary" language
    - deletion_triggers: false  # No specific triggers stated

  required_disclosure:
    - account_data: "not specified"
    - transaction_records: "not specified"
    - marketing_data: "not specified"
    - support_tickets: "not specified"
    - analytics_data: "not specified"

adequate_disclosure: false
```

### Compliant Disclosure Example (Contrast)

```yaml
# Example: Proper retention disclosure for comparison
privacy_policy_compliant:
  retention_section:
    disclosed: true
    categories:
      - category: "Account Information"
        retention_period: "Duration of account plus 2 years"
        criteria: "Account closure or inactivity"

      - category: "Transaction Records"
        retention_period: "7 years from transaction date"
        criteria: "Tax and regulatory compliance requirements"

      - category: "Marketing Communications"
        retention_period: "Until opt-out plus 30 days for suppression"
        criteria: "Consumer consent withdrawal"

      - category: "Website Analytics"
        retention_period: "26 months from collection"
        criteria: "Analytics reporting requirements"

compliance_check:
  ccpa_1798_130_a_5_b: true  # Compliant disclosure
```

## CCPA Context (Informative)

- **Section**: §1798.130(a)(5)(B)
- **Requirement**: "The length of time the business intends to retain each category of personal information, including sensitive personal information, or if that is not possible, the criteria used to determine such period, provided that a business shall not retain a consumer's personal information or sensitive personal information for each disclosed purpose for which the personal information was collected for longer than is reasonably necessary for that disclosed purpose."
- **Added by**: CPRA (California Privacy Rights Act)

## Related Signals

- `CSE-CCPA-RETENTION-NO-POLICY-003`
- `CSE-CCPA-RETENTION-BEYOND-NECESSARY-004`
- `CSE-CCPA-NOTICE-RETENTION-MISSING-005`
- `CSE-CCPA-NOTICE-INCOMPLETE-DISCLOSURE-001`
