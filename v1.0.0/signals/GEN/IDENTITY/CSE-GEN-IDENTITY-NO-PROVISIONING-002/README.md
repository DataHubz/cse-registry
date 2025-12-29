# CSE-GEN-IDENTITY-NO-PROVISIONING-002

**Access Provisioning Process Missing**

## Signal Overview

| Field           | Value                                   |
|-----------------|-----------------------------------------|
| Identifier      | `CSE-GEN-IDENTITY-NO-PROVISIONING-002`  |
| Domain          | GEN (General)                           |
| Category        | IDENTITY                                |
| Status          | Active                                  |
| Introduced In   | 1.0.0                                   |

## Description

No formal process exists for provisioning access to systems, applications, or data based on job role and business need.

This signal indicates that user access is granted without standardized procedures, approval workflows, or role-based access controls, potentially leading to excessive permissions and unauthorized access.

## Applicability

This signal applies to:

- New employee onboarding
- Role changes and transfers
- Cloud platform access (AWS, Azure, GCP)
- Application access provisioning
- Database and system permissions
- Network resource access
- Privileged access assignments
- Contractor and vendor access
- Service account creation

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Approval Workflow

```
Access provisioning characteristics:
- IT staff grant access based on verbal requests
- No documented approval from managers or data owners
- Access requests not tracked or logged
- Permissions granted without business justification
```

### Missing Role-Based Access Control

```
Organization lacks:
- Defined roles with associated permissions
- Standard permission sets for common job functions
- Automated provisioning based on role assignment
- Access baselines for different user types
```

### Ad-Hoc Permission Granting

```bash
# Example: Direct database access granted without process
CREATE USER 'newuser'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'newuser'@'%';
# No approval record, no role assignment, excessive permissions
```

### Informal Access Management

```
Indicators such as:
- Email requests for access without formal ticketing
- No standardized access request forms
- Permissions copied from similar users without review
- No documentation of access granted
- No verification of manager approval
```

## What This Signal Does NOT Assert

- Whether specific users have inappropriate access
- The technical correctness of permission assignments
- Whether compensating controls exist
- Compliance or non-compliance with any framework
- Required remediation actions
- The security of authentication mechanisms

## Related Framework Signals

This signal may be relevant to controls in various frameworks:

- **CIS Controls**: 5.4 (Restrict administrator privileges to dedicated accounts), 6.8 (Define and maintain role-based access control)
- **ISO 27001**: A.9.1.1 (Access control policy), A.9.2.2 (User access provisioning)
- **CMMC**: AC.L2-3.1.1 (Limit system access to authorized users)

## Related Signals

- `CSE-GEN-IDENTITY-NO-LIFECYCLE-001` — Identity Lifecycle Management Missing
- `CSE-GEN-IDENTITY-NO-DEPROVISIONING-003` — Access Deprovisioning Missing
- `CSE-GEN-IDENTITY-NO-ACCESS-REVIEW-004` — Access Review Missing
- `CSE-CMMC-ACCESS-NO-LEAST-PRIVILEGE-002` — Least Privilege Not Enforced (if defined)

## Cross-References (Informative)

This signal supports access control objectives including:

- Ensuring access is granted based on business need
- Preventing unauthorized access to sensitive resources
- Establishing accountability for access decisions
- Supporting segregation of duties
- Maintaining audit trails for access provisioning
- Facilitating compliance audits

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Review of access request and approval procedures
- Assessment of provisioning workflow documentation
- Analysis of ticketing system for access requests
- Examination of recent account creations
- Interviews with IT operations and security teams
- Review of role definitions and permission matrices
- Analysis of approval chains and authorization records

The presence of this signal indicates a need for formalized access provisioning procedures that include request, approval, implementation, and verification steps.
