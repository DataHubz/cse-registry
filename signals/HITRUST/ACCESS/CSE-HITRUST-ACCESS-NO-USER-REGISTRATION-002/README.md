# CSE-HITRUST-ACCESS-NO-USER-REGISTRATION-002

**User Registration Process Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ACCESS-NO-USER-REGISTRATION-002` |
| Domain | HITRUST |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A formal user registration and deregistration process has not been established for managing access to systems containing protected health information (PHI) or other sensitive data.

This signal indicates the absence of documented procedures for onboarding new users, granting appropriate access rights, modifying access when roles change, and removing access when users leave or no longer require system access. A proper user registration process ensures accountability and traceability of access privileges.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Identity and access management (IAM) systems
- Human resources information systems
- Electronic health record (EHR) systems

## Examples (Non-Normative)

### Ad-Hoc User Provisioning

```yaml
# User access granted without formal process
user_management:
  provisioning_process: "informal"
  approval_workflow: false
  documentation_required: false
  access_requests:
    - email_to_it: true
    - formal_ticket: false
    - manager_approval: "sometimes"
```

### Missing Deregistration Process

```json
{
  "user_lifecycle": {
    "onboarding": {
      "process_defined": false,
      "approval_required": false
    },
    "role_changes": {
      "process_defined": false
    },
    "termination": {
      "access_removal_process": null,
      "timeline": "undefined"
    }
  }
}
```

### Untracked Access Grants

```hcl
# IAM users created without registration tracking
resource "aws_iam_user" "users" {
  for_each = toset(var.user_list)
  name     = each.value
  # No registration ticket reference
  # No approval documentation
  # No access review metadata
}
```

## What This Signal Does NOT Assert

- Whether users are appropriately authenticated
- The specific approval requirements needed
- Whether access is being granted inappropriately
- Compliance or non-compliance with HITRUST
- The effectiveness of existing informal processes
- Whether access logging is in place

## HITRUST Context (Informative)

- **Control Domain**: 01 - Access Control
- **Control Reference**: 01.b
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for formal user registration processes that include:
- Documented procedures for granting, modifying, and revoking access
- Approval workflows by authorized personnel
- Unique user identification
- Verification of authorization before granting access
- Record keeping of access requests and approvals
- Regular review and validation of user access rights

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ACCESS-NO-POLICY-001` - Access control policy missing
- `CSE-HITRUST-ACCESS-NO-USER-REVIEW-004` - User access review not conducted
- `CSE-HITRUST-ACCESS-NO-PRIVILEGE-MANAGEMENT-003` - Privilege management not implemented
- `CSE-HIPAA-TECH-NO-USER-PROVISIONING-001` - HIPAA user provisioning (if defined)

## Notes

Detection of this signal typically involves:

- Review of IAM procedures and workflows
- Examination of access request ticketing systems
- Analysis of user provisioning automation scripts
- Verification of approval and authorization records
- Assessment of onboarding and offboarding documentation
- Review of access grant audit trails

The presence of this signal indicates a significant gap in user access management that can lead to unauthorized access, orphaned accounts, and compliance violations.
