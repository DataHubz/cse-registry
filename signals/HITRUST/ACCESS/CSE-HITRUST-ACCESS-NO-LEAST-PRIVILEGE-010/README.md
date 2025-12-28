# CSE-HITRUST-ACCESS-NO-LEAST-PRIVILEGE-010

**Least Privilege Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ACCESS-NO-LEAST-PRIVILEGE-010` |
| Domain | HITRUST |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The principle of least privilege is not being applied to user access rights, resulting in users having more permissions than necessary to perform their job functions.

This signal indicates that users, applications, or services have been granted excessive access rights beyond what is required for their specific roles and responsibilities. Least privilege is a fundamental security principle that minimizes the potential impact of compromised accounts, insider threats, and accidental data exposure in systems containing protected health information (PHI) or other sensitive data.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Cloud infrastructure and services
- Database access controls
- Application programming interfaces (APIs)
- Service accounts and system-to-system access
- Electronic health record (EHR) systems

## Examples (Non-Normative)

### Overly Permissive IAM Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "*",
      "Resource": "*"
    }
  ]
}
```

### Database Access Beyond Job Requirements

```sql
-- Billing clerk granted full database access
GRANT ALL PRIVILEGES ON healthcare_db.* TO 'billing_clerk'@'%';
-- Should only need SELECT on billing tables and INSERT on billing_log
-- Does not need DELETE, DROP, ALTER on all tables
```

### Service Account with Admin Rights

```yaml
# Application service account with excessive permissions
service_account:
  name: "app-service-account"
  permissions:
    - "admin"  # Should have specific, limited permissions
    - "full_database_access"
    - "modify_all_records"
    - "delete_all_resources"
  # Only needs read access to specific tables and write to application logs
```

### Cloud Storage Bucket Overly Permissive

```hcl
# S3 bucket policy granting excessive access
resource "aws_s3_bucket_policy" "phi_data" {
  bucket = aws_s3_bucket.phi_data.id

  policy = jsonencode({
    Statement = [{
      Effect = "Allow"
      Principal = "*"
      Action = "s3:*"
      Resource = "${aws_s3_bucket.phi_data.arn}/*"
    }]
  })
}
```

### Application User with Unrestricted Access

```python
# User granted all permissions instead of role-specific access
class UserPermissions:
    def __init__(self, user_role):
        # All users get all permissions regardless of role
        self.can_read_phi = True
        self.can_modify_phi = True
        self.can_delete_records = True
        self.can_export_data = True
        self.can_manage_users = True
        self.can_change_permissions = True
        # Should be restricted based on actual job function
```

### API Key with Broad Scope

```javascript
// API key with access beyond necessary scope
const apiConfig = {
  apiKey: process.env.API_KEY,
  scopes: [
    'read:all',
    'write:all',
    'delete:all',
    'admin:all'
  ]
  // Should only have specific scopes needed for the integration
};
```

## What This Signal Does NOT Assert

- Whether users are misusing their access
- The specific permissions that should be granted
- Whether role-based access control (RBAC) is in use
- Compliance or non-compliance with HITRUST
- Whether access reviews are being conducted
- The business justification for access levels

## HITRUST Context (Informative)

- **Control Domain**: 01 - Access Control
- **Control Reference**: 01.j
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for least privilege including:
- Users granted minimum access necessary for job functions
- Default deny with explicit allow permissions
- Privileged functions restricted to authorized personnel
- Separation of user and privileged accounts
- Just-in-time (JIT) access for temporary elevated privileges
- Regular review and validation of access rights
- Removal of unnecessary permissions
- Application of least privilege to service accounts and APIs

Best practices for least privilege:
- Role-based access control (RBAC)
- Attribute-based access control (ABAC)
- Time-limited elevated access
- Read-only access as default
- Explicit grants rather than wildcards

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ACCESS-NO-POLICY-001` - Access control policy missing
- `CSE-HITRUST-ACCESS-NO-PRIVILEGE-MANAGEMENT-003` - Privilege management not implemented
- `CSE-HITRUST-ACCESS-NO-USER-REVIEW-004` - User access review not conducted
- `CSE-HITRUST-ACCESS-NO-SEGREGATION-009` - Segregation of duties not enforced
- `CSE-CMMC-ACCESS-NO-LEAST-PRIVILEGE-002` - CMMC least privilege (if defined)

## Notes

Detection of this signal typically involves:

- Analysis of IAM policies and permission grants
- Review of role definitions and assignments
- Comparison of granted permissions vs. job requirements
- Examination of wildcard permissions and broad grants
- Assessment of service account and API permissions
- Review of database access control lists
- Analysis of privilege creep over time

The presence of this signal indicates a fundamental security weakness that increases the attack surface and potential impact of account compromise, insider threats, and accidental data exposure.
