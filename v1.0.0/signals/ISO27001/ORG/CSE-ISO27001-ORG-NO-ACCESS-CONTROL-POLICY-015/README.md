# CSE-ISO27001-ORG-NO-ACCESS-CONTROL-POLICY-015

**No Access Control Policy**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-ACCESS-CONTROL-POLICY-015` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Rules for controlling physical and logical access to information are not established based on business requirements.

## Applicability

- Organizations without documented access control policies
- Environments where access is granted without formal authorization
- Companies lacking role-based access control definitions
- Organizations not applying least privilege principles
- Environments where physical and logical access controls are undefined

## Examples (Non-Normative)

### Missing Access Control Policy

```yaml
access_control_governance:
  policy:
    exists: false
    documented: false
  principles:
    least_privilege: "not_applied"
    need_to_know: "not_applied"
    separation_of_duties: "not_applied"
  access_decisions:
    based_on_business_requirements: false
    formal_authorization_required: false
```

### Ad-Hoc Access Granting

```yaml
access_management:
  policy_defined: false
  access_requests:
    formal_process: false
    approval_workflow: "email_to_it"
    business_justification_required: false
  access_types_covered:
    physical_access: "undefined"
    logical_access: "undefined"
    privileged_access: "undefined"
  access_reviews: false
```

## ISO 27001:2022 Context (Informative)

- **A.5.15 Access control**: Rules to control physical and logical access to information and other associated assets should be established and implemented based on business and information security requirements. This is a foundational control that underpins many other security measures.

## Related Signals

- `CSE-ISO27001-ORG-NO-IDENTITY-MANAGEMENT-016`
- `CSE-ISO27001-ORG-NO-ACCESS-RIGHTS-MGMT-018`
- `CSE-ISO27001-ORG-NO-SECURITY-POLICIES-001`
