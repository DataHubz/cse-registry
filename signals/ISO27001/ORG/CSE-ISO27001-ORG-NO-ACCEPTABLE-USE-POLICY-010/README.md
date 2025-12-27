# CSE-ISO27001-ORG-NO-ACCEPTABLE-USE-POLICY-010

**No Acceptable Use Policy**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-ACCEPTABLE-USE-POLICY-010` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Rules for acceptable use of information and assets are not identified, documented, and implemented.

## Applicability

- Organizations without documented acceptable use policies
- Environments where acceptable use is informally understood but not enforced
- Companies lacking guidelines for personal use of organizational resources
- Organizations without BYOD (Bring Your Own Device) policies
- Environments where users have not acknowledged acceptable use terms

## Examples (Non-Normative)

### Missing Acceptable Use Policy

```yaml
policy_review:
  acceptable_use_policy:
    exists: false
    documented: false
  covered_topics:
    personal_use: "undefined"
    prohibited_activities: "undefined"
    email_usage: "undefined"
    internet_usage: "undefined"
    byod: "undefined"
```

### Unenforced Usage Rules

```yaml
acceptable_use:
  policy_exists: true
  policy_published: false
  user_acknowledgment:
    required: false
    completion_rate: "0%"
  monitoring: false
  violation_consequences: "not_defined"
```

## ISO 27001:2022 Context (Informative)

- **A.5.10 Acceptable use of information and other associated assets**: Rules for the acceptable use of information and of assets associated with information and information processing facilities should be identified, documented and implemented. Personnel and other relevant interested parties should be made aware of their obligations for acceptable use of information and assets.

## Related Signals

- `CSE-ISO27001-ORG-NO-SECURITY-POLICIES-001`
- `CSE-ISO27001-ORG-NO-ASSET-INVENTORY-009`
