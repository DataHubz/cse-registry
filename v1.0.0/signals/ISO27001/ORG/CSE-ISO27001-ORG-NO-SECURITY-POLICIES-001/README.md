# CSE-ISO27001-ORG-NO-SECURITY-POLICIES-001

**No Information Security Policies**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-SECURITY-POLICIES-001` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Organization lacks documented information security policies approved by management, published, and communicated to relevant parties.

## Applicability

- Organizations without formal information security policy documentation
- Environments where security policies exist but lack management approval
- Organizations that have not published or communicated security policies to personnel
- Companies where security policies have not been reviewed or updated regularly
- Organizations lacking a policy framework aligned with business objectives

## Examples (Non-Normative)

### Missing Security Policy Documentation

```yaml
policy_review:
  security_policies_path: "/policies/security"
  findings:
    - status: "not_found"
      expected_policies:
        - "Information Security Policy"
        - "Acceptable Use Policy"
        - "Data Classification Policy"
      actual_count: 0
```

### Policy Without Management Approval

```yaml
policy_status:
  document: "InfoSec-Policy-Draft-2024.pdf"
  created_date: "2024-01-15"
  approval_status: "pending"
  approved_by: null
  published: false
  communicated: false
```

## ISO 27001:2022 Context (Informative)

- **A.5.1 Policies for information security**: Information security policies should be defined, approved by management, published, communicated to and acknowledged by relevant personnel and relevant interested parties, and reviewed at planned intervals and if significant changes occur.

## Related Signals

- `CSE-ISO27001-ORG-NO-ACCEPTABLE-USE-POLICY-010`
- `CSE-ISO27001-ORG-NO-ACCESS-CONTROL-POLICY-015`
