# CSE-CIS-ACCESS-NO-PROCESS-001

**Access Granting Process Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-ACCESS-NO-PROCESS-001`          |
| Domain          | CIS                                      |
| Category        | ACCESS                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

The organization lacks a documented and established process for granting access to enterprise assets based on the principles of least privilege and need-to-know.

This signal indicates that access may be granted in an ad-hoc manner without proper authorization workflows, documentation, or justification requirements.

## Applicability

This signal applies to:

- Access request and approval workflows
- Identity and access management (IAM) systems
- User provisioning processes
- Access control policies and procedures
- Service desk ticketing systems
- HR onboarding/offboarding processes
- Role assignment procedures

## Examples (Non-Normative)

### No Documented Access Request Process

```yaml
findings:
  - Access granted via email requests without formal workflow
  - No standard approval chain or authority matrix
  - Missing documentation of access justifications
  - Inconsistent approval requirements across departments
```

### Missing Authorization Controls

```yaml
findings:
  - System administrators grant access without manager approval
  - No verification of business need for requested access
  - Access granted based on verbal requests
  - No documentation trail for audit purposes
```

### Ad-Hoc Provisioning

```yaml
findings:
  - User accounts created without following standard process
  - Role assignments made without security review
  - Access permissions copied from other users arbitrarily
  - No formal access request form or ticketing requirement
```

## What This Signal Does NOT Assert

- Whether unauthorized access has occurred
- The security of specific systems or data
- The competence of individuals granting access
- Compliance or non-compliance with any framework
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 6.1**: Establish an Access Granting Process (IG1)
- **Asset Type**: Users
- **Security Function**: Protect

**Control Description**: Establish and follow a process, preferably automated, for granting access to enterprise assets upon new hire, rights grant, or role change of a user.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-ACCESS-NO-REVOCATION-002` - Access Revocation Process Missing
- `CSE-CIS-ACCESS-NO-ROLE-BASED-006` - Role-Based Access Control Missing
