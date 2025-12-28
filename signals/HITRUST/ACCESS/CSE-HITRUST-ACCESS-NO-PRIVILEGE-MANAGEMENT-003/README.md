# CSE-HITRUST-ACCESS-NO-PRIVILEGE-MANAGEMENT-003

**Privilege Management Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ACCESS-NO-PRIVILEGE-MANAGEMENT-003` |
| Domain | HITRUST |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Privileged access rights are not being actively managed or controlled through a formal privilege management process.

This signal indicates the absence of controls for allocating, monitoring, and reviewing privileged access to systems containing protected health information (PHI) or other sensitive data. Privilege management ensures that elevated access rights (such as administrative, root, or superuser privileges) are granted only when necessary, properly authorized, and regularly reviewed.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Cloud infrastructure management
- Database administration
- Network device management
- Application administrative functions

## Examples (Non-Normative)

### Unmanaged Administrative Accounts

```yaml
# Administrative privileges without management controls
privileged_accounts:
  management_process: false
  approval_required: false
  regular_review: false
  temporary_elevation: "not supported"
  audit_logging: "incomplete"
```

### Permanent Administrative Rights

```json
{
  "iam_users": [
    {
      "username": "john.doe",
      "groups": ["administrators"],
      "access_type": "permanent",
      "justification": null,
      "review_date": null,
      "approved_by": null
    }
  ]
}
```

### Shared Privileged Credentials

```hcl
# Shared root/admin accounts without privilege management
resource "aws_iam_user" "admin" {
  name = "shared-admin"
  # No individual accountability
  # No privilege escalation process
  # No time-bound access
}
```

### Database Superuser Without Controls

```sql
-- Database administrative access without management
CREATE USER admin_user WITH SUPERUSER PASSWORD 'static_password';
-- No approval workflow
-- No access review process
-- No logging of privilege usage
```

## What This Signal Does NOT Assert

- Whether privileged accounts exist
- The number of users with elevated privileges
- Whether privileged access is being misused
- Compliance or non-compliance with HITRUST
- The technical implementation of privilege controls
- Whether monitoring is in place

## HITRUST Context (Informative)

- **Control Domain**: 01 - Access Control
- **Control Reference**: 01.c
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for privilege management including:
- Formal allocation of privileged access rights
- Approval process for privilege grants
- Regular review and validation of privileged accounts
- Just-in-time (JIT) privilege elevation where appropriate
- Separation of privileged and standard user accounts
- Monitoring and logging of privileged actions
- Time-limited privileged access where feasible

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ACCESS-NO-POLICY-001` - Access control policy missing
- `CSE-HITRUST-ACCESS-NO-USER-REGISTRATION-002` - User registration process missing
- `CSE-HITRUST-ACCESS-NO-LEAST-PRIVILEGE-010` - Least privilege not implemented
- `CSE-HITRUST-ACCESS-NO-SEGREGATION-009` - Segregation of duties not enforced
- `CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001` - Unrestricted administrative access (if defined)

## Notes

Detection of this signal typically involves:

- Review of privileged account inventories
- Analysis of IAM policies and role assignments
- Examination of privilege escalation processes
- Assessment of administrative access approval workflows
- Review of privileged access review schedules and records
- Analysis of privileged session monitoring capabilities

The presence of this signal indicates a critical gap in access control that can lead to unauthorized administrative actions, insider threats, and compliance violations.
