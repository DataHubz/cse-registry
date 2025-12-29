# CSE-CMMC-ACCESS-NO-LEAST-PRIVILEGE-002

**Least Privilege Not Enforced**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CMMC-ACCESS-NO-LEAST-PRIVILEGE-002` |
| Domain          | CMMC                                     |
| Category        | ACCESS                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Access permissions granted to users, accounts, or processes exceed what is necessary to perform assigned duties or functions.

This signal indicates that the principle of least privilege is not applied, resulting in broader access rights than required for the intended purpose.

## Applicability

This signal applies to:

- Cloud IAM policies and role assignments
- Operating system user and group permissions
- Database access grants and privileges
- Application-level authorization configurations
- Service account and machine identity permissions
- File system and object storage ACLs
- Network access control configurations

## Examples (Non-Normative)

### Overly Permissive IAM Policy

```json
{
  "Effect": "Allow",
  "Action": "s3:*",
  "Resource": "*"
}
```

### Database User with Excessive Grants

```sql
GRANT ALL PRIVILEGES ON *.* TO 'app_user'@'%';
```

### Service Account with Admin Role

```yaml
# Kubernetes service account with cluster-admin
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: app-admin-binding
roleRef:
  kind: ClusterRole
  name: cluster-admin
subjects:
  - kind: ServiceAccount
    name: application-sa
```

## What This Signal Does NOT Assert

- Whether the permissions are intentionally broad
- Whether compensating controls exist
- The likelihood of privilege abuse
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **AC.L2-3.1.5**: Employ the principle of least privilege, including for specific security functions and privileged accounts
- **AC.L2-3.1.6**: Use non-privileged accounts or roles when accessing nonsecurity functions

## Related Signals

- `CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001` — Unrestricted Administrative Access
- `CSE-CMMC-ACCESS-NO-SEPARATION-005` — No Separation of Duties (if defined)
