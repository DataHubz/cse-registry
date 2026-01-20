# CSE-CIS-ACCESS-NO-ROLE-BASED-006

**Role-Based Access Control Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-ACCESS-NO-ROLE-BASED-006`       |
| Domain          | CIS                                      |
| Category        | ACCESS                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

The organization has not established or does not use a role-based access control (RBAC) system to assign permissions to user accounts based on defined job functions or business roles.

This signal indicates that access permissions may be assigned individually to users rather than through standardized roles, making it difficult to consistently apply the principle of least privilege and maintain access controls as the organization scales.

## Applicability

This signal applies to:

- Identity and access management (IAM) systems
- Active Directory or LDAP security groups
- Cloud platform role assignments (AWS IAM roles, Azure RBAC, GCP IAM)
- Application-level role definitions
- Database role assignments
- Enterprise resource planning (ERP) system roles
- Access control matrices and documentation
- Security group design and management

## Examples (Non-Normative)

### Individual Permission Assignment

```yaml
findings:
  - Permissions granted directly to user accounts
  - No standardized roles defined for common job functions
  - Each user has unique combination of permissions
  - Access rights manually configured per user request
```

### Inconsistent Group Usage

```yaml
findings:
  - Security groups exist but not consistently applied
  - Users granted both role-based and individual permissions
  - No role hierarchy or inheritance structure
  - Group membership doesn't align with job functions
```

### Missing Role Documentation

```yaml
findings:
  - No documented roles or access entitlements matrix
  - Role definitions not aligned with business functions
  - Unclear separation between roles and security groups
  - No role owner or approval authority defined
```

### Ad-Hoc Access Management

```yaml
findings:
  - Permissions copied from one user to another
  - Access granted based on individual requests without role assignment
  - No standard access packages for common positions
  - Role definitions not maintained as business changes
```

## What This Signal Does NOT Assert

- Whether users have appropriate access for their functions
- The granularity or effectiveness of existing roles
- Whether role-based access control technology is available
- The maturity of role engineering processes
- Compliance or non-compliance with any framework
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 6.6**: Establish and Maintain an Inventory of Authentication and Authorization Systems (IG2)
- **Asset Type**: Users
- **Security Function**: Protect

**Control Description**: Establish and maintain an inventory of the enterprise's authentication and authorization systems, including those hosted on-site or at a remote service provider. Review and update the inventory, at a minimum, annually, or more frequently.

Note: While CIS 6.6 focuses on inventory of authentication/authorization systems, role-based access control is a fundamental component of access control management within CIS Control 6.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-ACCESS-NO-PROCESS-001` - Access Granting Process Missing
- `CSE-CIS-ACCESS-NO-REVOCATION-002` - Access Revocation Process Missing
