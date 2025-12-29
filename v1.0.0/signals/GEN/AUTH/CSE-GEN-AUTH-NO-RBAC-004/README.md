# CSE-GEN-AUTH-NO-RBAC-004

**Role-Based Access Control Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-GEN-AUTH-NO-RBAC-004`               |
| Domain          | GEN (General)                            |
| Category        | AUTH                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Access permissions are not organized by roles or groups; instead, individual permissions are assigned ad-hoc to users without a structured role-based framework.

This signal indicates that access management lacks systematic organization, making it difficult to maintain consistent permissions, audit access, or enforce least privilege principles.

## Applicability

This signal applies to:

- Cloud platforms (AWS, Azure, GCP)
- Identity and access management systems
- Enterprise applications
- Database management systems
- Kubernetes and container orchestration
- Source code repositories
- Business intelligence and analytics platforms
- Content management systems
- Network and security appliances

## Examples (Non-Normative)

### AWS IAM Without Role Structure

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": [
      "s3:GetObject",
      "s3:PutObject",
      "ec2:DescribeInstances",
      "rds:DescribeDBInstances",
      "lambda:InvokeFunction"
    ],
    "Resource": "*"
  }]
}
```
*Individual permissions attached directly to users instead of roles*

### Database Users Without Role Assignment

```sql
-- PostgreSQL users with individual grants
GRANT SELECT, INSERT ON customer_data TO john_doe;
GRANT SELECT, INSERT ON customer_data TO jane_smith;
GRANT SELECT, INSERT, UPDATE ON customer_data TO bob_jones;
-- No roles defined like 'customer_service_rep' or 'manager'
```

### Application Without Role Management

```javascript
// User model without role-based permissions
const userSchema = new Schema({
  username: String,
  permissions: [String]  // Array of individual permissions
  // No 'role' field or role-based structure
});

// Permission check
if (user.permissions.includes('delete_users')) {
  // allow action
}
```

### Kubernetes Without RBAC Roles

```yaml
# Direct binding to user without role abstraction
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: user-binding
subjects:
- kind: User
  name: developer@example.com
roleRef:
  kind: ClusterRole
  name: cluster-admin  # Overly broad
```

### SharePoint Without Permission Groups

```powershell
# Individual user permissions instead of groups
Add-SPOUser -Site "https://company.sharepoint.com/sites/hr" `
  -LoginName "user1@company.com" `
  -Group "Owners"
# Each user added individually rather than via role groups
```

## What This Signal Does NOT Assert

- Whether the current permission assignments are incorrect
- The complexity of managing the current access model
- Whether users have excessive permissions
- Whether audit trails exist for permission changes
- Compliance or non-compliance with any framework
- Required remediation actions

## Related Framework Signals

- `CSE-GEN-AUTH-NO-ACCESS-CONTROL-003` — Access Control Mechanism Missing
- `CSE-CMMC-ACCESS-NO-LEAST-PRIVILEGE-002` — Least Privilege Not Enforced
- `CSE-ISO27001-ACCESS-NO-RBAC-001` — Role-Based Access Control Missing (if defined)
- `CSE-SOC2-ACCESS-NO-RBAC-001` — RBAC Not Implemented (if defined)
- `CSE-HITRUST-ACCESS-NO-RBAC-001` — Role-Based Access Missing (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **ISO 27001**: A.9.2.3 - Management of privileged access rights
- **ISO 27001**: A.9.4.1 - Information access restriction
- **SOC 2**: CC6.2 - Prior to issuing system credentials and granting access
- **SOC 2**: CC6.3 - The entity authorizes, modifies, or removes access
- **CIS Controls**: 6.8 - Define and Maintain Role-Based Access Control
- **CIS Controls**: 5.4 - Restrict Administrator Privileges to Dedicated Accounts
- **HITRUST**: 01.c - User Access Management

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Analyzing IAM configurations for role definitions
- Reviewing user-permission mappings for patterns
- Examining access control models in applications
- Auditing permission assignment histories
- Evaluating group and role utilization metrics

Role-based access control (RBAC) is a best practice that:
- Simplifies permission management
- Ensures consistent access policies
- Supports audit and compliance requirements
- Enables efficient onboarding and offboarding
- Reduces the risk of permission creep

The absence of RBAC often indicates technical debt in access management that becomes more difficult to remediate as systems grow.
