# CSE-GEN-AUTH-NO-ACCESS-CONTROL-003

**Access Control Mechanism Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-GEN-AUTH-NO-ACCESS-CONTROL-003`     |
| Domain          | GEN (General)                            |
| Category        | AUTH                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No mechanism exists to restrict access to resources based on authorization policies, allowing authenticated users unrestricted access regardless of their legitimate need.

This signal indicates that while users may be authenticated, there are no controls to enforce what resources they can access or what actions they can perform.

## Applicability

This signal applies to:

- APIs and web services
- Database systems
- File systems and storage
- Cloud resources and services
- Application features and functionality
- Microservices and internal services
- Administrative interfaces
- Data processing pipelines
- Network segments and VLANs

## Examples (Non-Normative)

### API Without Authorization Checks

```python
# Flask API endpoint without authorization
@app.route('/api/admin/users/<user_id>', methods=['DELETE'])
@login_required  # Only checks authentication
def delete_user(user_id):
    user = User.query.get(user_id)
    db.session.delete(user)
    db.session.commit()
    # No check if logged-in user is authorized to delete users
    return {'status': 'deleted'}
```

### Database Without Row-Level Security

```sql
-- PostgreSQL table without access controls
CREATE TABLE patient_records (
    id SERIAL PRIMARY KEY,
    patient_name VARCHAR(100),
    ssn VARCHAR(11),
    diagnosis TEXT
);
-- No row-level security policies defined
-- Any authenticated user can access all records
```

### Cloud Storage Without Access Policies

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": {
      "AWS": "arn:aws:iam::123456789012:root"
    },
    "Action": "s3:*",
    "Resource": "arn:aws:s3:::company-data/*"
  }]
}
```
*All authenticated IAM users have full access*

### Kubernetes Without RBAC

```yaml
# Service account with no role bindings
apiVersion: v1
kind: ServiceAccount
metadata:
  name: app-service-account
  namespace: production
# No RoleBinding or ClusterRoleBinding defined
# Default permissions apply to all
```

### GraphQL Without Field-Level Authorization

```javascript
// GraphQL resolver without authorization
const resolvers = {
  Query: {
    sensitiveData: (parent, args, context) => {
      // Authenticated via context.user
      // But no authorization check for access
      return getSensitiveData();
    }
  }
};
```

## What This Signal Does NOT Assert

- Whether the lack of access control has been exploited
- The sensitivity of accessible resources
- Whether the system is intended for internal use only
- Whether network segmentation provides protection
- Compliance or non-compliance with any framework
- Required remediation actions

## Related Framework Signals

- `CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001` — Unrestricted Administrative Access
- `CSE-CMMC-ACCESS-NO-LEAST-PRIVILEGE-002` — Least Privilege Not Enforced
- `CSE-GEN-AUTH-NO-RBAC-004` — Role-Based Access Control Missing
- `CSE-GEN-AUTH-NO-PRIVILEGED-MGMT-005` — Privileged Access Management Missing
- `CSE-SOC2-ACCESS-NO-AUTHORIZATION-001` — Authorization Controls Missing (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **HIPAA**: 164.312(a)(1) - Access Control
- **HIPAA**: 164.308(a)(3) - Workforce Clearance Procedure
- **HIPAA**: 164.308(a)(4) - Access Authorization
- **SOC 2**: CC6.1 - Logical and physical access controls
- **SOC 2**: CC6.2 - Prior to issuing system credentials, the entity registers and authorizes new users
- **ISO 27001**: A.9.1.2 - Access to networks and network services
- **ISO 27001**: A.9.2.3 - Management of privileged access rights
- **ISO 27001**: A.9.4.1 - Information access restriction
- **GDPR**: Article 32 - Security of processing (access control)
- **PCI DSS**: 7.1 - Limit access to system components and cardholder data
- **PCI DSS**: 7.2 - Establish an access control system
- **CIS Controls**: 6.1 - Establish an Access Granting Process
- **CIS Controls**: 6.8 - Define and Maintain Role-Based Access Control
- **CMMC**: AC.L2-3.1.1 - Limit information system access to authorized users
- **CMMC**: AC.L2-3.1.2 - Limit system access to types of transactions and functions
- **NIST CSF**: PR.AC-4 - Access permissions and authorizations are managed

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Reviewing code for authorization checks at critical functions
- Analyzing access control configurations in databases and services
- Examining IAM policies and role definitions
- Testing API endpoints for unauthorized access
- Auditing application security controls

Access control is a fundamental security principle (often called authorization) that should be enforced after authentication to ensure users can only access resources appropriate to their role and responsibilities.
