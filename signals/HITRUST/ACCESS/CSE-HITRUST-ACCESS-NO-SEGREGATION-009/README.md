# CSE-HITRUST-ACCESS-NO-SEGREGATION-009

**Segregation of Duties Not Enforced**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ACCESS-NO-SEGREGATION-009` |
| Domain | HITRUST |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Segregation of duties (SoD) principles are not enforced to prevent individuals from having conflicting responsibilities that could enable fraud, errors, or unauthorized activities.

This signal indicates the absence of controls that separate critical functions across different individuals or roles. Segregation of duties ensures that no single person has complete control over a critical process, reducing the risk of intentional or unintentional security violations in systems containing protected health information (PHI) or other sensitive data.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Financial and billing systems
- Electronic health record (EHR) access controls
- Medication ordering and dispensing systems
- IT administration and security operations
- Data access and modification workflows

## Examples (Non-Normative)

### Combined Developer and Production Administrator Roles

```yaml
# Single user with conflicting privileges
user_roles:
  john_doe:
    roles:
      - developer
      - production_admin
      - database_admin
    # Can write code, deploy to production, and access production data
    # No segregation between development and operations
```

### Unrestricted Administrative Access

```json
{
  "iam_user": {
    "username": "admin-user",
    "permissions": [
      "create_users",
      "delete_users",
      "modify_permissions",
      "access_audit_logs",
      "modify_audit_logs"
    ]
  }
}
```

### Combined Security and Audit Functions

```hcl
# Security team member who can modify logs they're supposed to review
resource "aws_iam_role_policy_attachment" "security_admin" {
  role       = aws_iam_role.security_team.name
  policy_arn = "arn:aws:iam::aws:policy/SecurityAudit"
  # Same role also has CloudWatch Logs modification permissions
  # Can alter the evidence they're auditing
}
```

### Pharmacy System Without SoD

```sql
-- Single pharmacist account with all privileges
GRANT SELECT, INSERT, UPDATE, DELETE ON prescriptions TO pharmacist_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON dispensing_log TO pharmacist_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON inventory TO pharmacist_user;
-- Can order, dispense, and modify all records without oversight
```

### Financial Controls Without Separation

```python
# Billing system without segregation of duties
class BillingUser:
    def __init__(self, user_id):
        self.user_id = user_id
        self.can_create_invoice = True
        self.can_approve_invoice = True  # SoD violation
        self.can_process_payment = True  # SoD violation
        self.can_reconcile_account = True  # SoD violation
        # Single user can control entire billing process
```

## What This Signal Does NOT Assert

- Whether fraud or errors have occurred
- The specific duties that must be segregated
- Whether compensating controls exist
- Compliance or non-compliance with HITRUST
- The organizational structure required
- Whether detective controls are in place

## HITRUST Context (Informative)

- **Control Domain**: 01 - Access Control
- **Control Reference**: 01.i
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for segregation of duties including:
- Separation of duties for critical functions
- Division of responsibilities to prevent conflicts of interest
- No single person controls all aspects of critical processes
- Segregation between system administration and security administration
- Separation of development, test, and production environments
- Segregation of access approval and access provisioning
- Separation of audit functions from operational functions
- Conflicting duty identification and prevention

Common duties that should be segregated:
- Requesting vs. approving access
- Creating vs. approving financial transactions
- Developing vs. deploying code
- Configuring security vs. auditing security
- Accessing data vs. deleting audit logs

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ACCESS-NO-POLICY-001` - Access control policy missing
- `CSE-HITRUST-ACCESS-NO-PRIVILEGE-MANAGEMENT-003` - Privilege management not implemented
- `CSE-HITRUST-ACCESS-NO-LEAST-PRIVILEGE-010` - Least privilege not implemented
- `CSE-CMMC-ACCESS-NO-SEPARATION-DUTIES-006` - CMMC separation of duties (if defined)

## Notes

Detection of this signal typically involves:

- Analysis of role definitions and permission matrices
- Review of user-to-role assignments
- Examination of critical process workflows
- Assessment of conflicting permission combinations
- Review of role-based access control (RBAC) implementations
- Identification of toxic permission combinations
- Analysis of approval workflows and authorization chains

The presence of this signal indicates a significant control weakness that increases the risk of fraud, errors, and unauthorized activities, particularly in financial, clinical, and security-critical processes.
