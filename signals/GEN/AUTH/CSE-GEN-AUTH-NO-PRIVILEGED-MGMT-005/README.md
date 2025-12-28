# CSE-GEN-AUTH-NO-PRIVILEGED-MGMT-005

**Privileged Access Management Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-GEN-AUTH-NO-PRIVILEGED-MGMT-005`    |
| Domain          | GEN (General)                            |
| Category        | AUTH                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No specific controls exist for managing and monitoring privileged or administrative access, treating high-privilege accounts the same as standard user accounts.

This signal indicates the absence of enhanced security measures for accounts with elevated permissions, such as just-in-time access, session recording, approval workflows, or dedicated privileged credential vaults.

## Applicability

This signal applies to:

- Cloud platform administrative accounts
- Database administrator accounts
- Domain administrator and root accounts
- Service accounts with elevated privileges
- Break-glass emergency access accounts
- Infrastructure management tools
- Security system administrative interfaces
- CI/CD pipeline service accounts
- Hypervisor and virtualization administrators
- Network device administrative access

## Examples (Non-Normative)

### Root Account Without PAM

```bash
# /etc/passwd - root account used directly
root:x:0:0:root:/root:/bin/bash
# No jump host, session recording, or approval workflow
```

### AWS Without Privileged Access Controls

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": "*",
    "Resource": "*"
  }]
}
```
*Administrative IAM policy without conditions for MFA, time-based access, or approval*

### Database Admin Without Session Monitoring

```sql
-- PostgreSQL superuser without audit controls
CREATE USER admin WITH SUPERUSER PASSWORD 'complex_password';
-- No session recording or approval workflow
-- No time-based access restrictions
```

### SSH Access Without Bastion/Jump Host

```
# /etc/ssh/sshd_config
PermitRootLogin yes
# Direct root login allowed
# No bastion host or privileged session management
```

### Azure AD Without PIM

```powershell
# Direct assignment of Global Administrator role
Add-AzureADDirectoryRoleMember -ObjectId $roleId `
  -RefObjectId $userId
# No Privileged Identity Management (PIM)
# No time-bound access or approval required
```

### Kubernetes Admin Without Time Limits

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-binding
subjects:
- kind: User
  name: admin@example.com
roleRef:
  kind: ClusterRole
  name: cluster-admin
# Permanent admin access without time limits
```

## What This Signal Does NOT Assert

- Whether privileged accounts have been misused
- The number of users with privileged access
- Whether logging and monitoring are in place
- The business justification for privileged access
- Compliance or non-compliance with any framework
- Required remediation actions

## Related Framework Signals

- `CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001` — Unrestricted Administrative Access
- `CSE-CMMC-ACCESS-NO-LEAST-PRIVILEGE-002` — Least Privilege Not Enforced
- `CSE-GEN-AUTH-NO-ACCESS-CONTROL-003` — Access Control Mechanism Missing
- `CSE-GEN-AUTH-NO-SESSION-MGMT-006` — Session Management Missing
- `CSE-NISTCSF-ACCESS-NO-PAM-001` — Privileged Access Management Missing (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **CIS Controls**: 5.4 - Restrict Administrator Privileges to Dedicated Accounts
- **CIS Controls**: 6.7 - Centrally Manage Privileged Account Access
- **CIS Controls**: 6.8 - Define and Maintain Role-Based Access Control
- **CMMC**: AC.L2-3.1.5 - Employ the principle of least privilege
- **CMMC**: IA.L2-3.5.7 - Prevent reuse of identifiers for a defined period
- **NIST CSF**: PR.AC-4 - Access permissions and authorizations are managed
- **NIST CSF**: DE.CM-3 - Personnel activity is monitored
- **ISO 27001**: A.9.2.3 - Management of privileged access rights
- **ISO 27001**: A.9.4.3 - Password management system

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Reviewing privileged account configurations
- Analyzing access patterns for administrative users
- Examining just-in-time access implementations
- Auditing session recording and monitoring tools
- Evaluating privileged credential vault usage

Privileged Access Management (PAM) best practices include:
- Just-in-time (JIT) access provisioning
- Session recording and monitoring
- Multi-person approval workflows
- Credential vaulting and rotation
- Time-bound access grants
- Enhanced authentication requirements
- Privileged session isolation

The absence of PAM controls significantly increases the risk of insider threats, credential theft, and unauthorized administrative actions.
