# CSE-CMMC-AWARENESS-NO-ROLE-BASED-TRAINING-003

**Role-Based Security Training Not Provided**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-AWARENESS-NO-ROLE-BASED-TRAINING-003` |
| Domain | CMMC |
| Category | AWARENESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Personnel with security responsibilities do not receive specialized training appropriate to their roles.

This signal indicates that administrators, developers, or security personnel may lack skills needed for their specific security duties.

## Applicability

- System administrator training
- Security officer certification
- Developer secure coding training
- Incident responder training
- Auditor and assessor training

## Examples (Non-Normative)

### No Role-Specific Training

```yaml
admin_training:
  general_security_awareness: completed
  system_administration_security: not_provided
  privileged_access_training: not_provided
```

### Missing Specialized Curriculum

```
Training Records:
  User: admin@example.com
  Role: System Administrator
  Security Clearance Training: Complete
  Admin-Specific Security: Not Found
```

## CMMC Context (Informative)

- **AT.L2-3.2.2**: Ensure that personnel are trained to carry out their assigned information security-related duties and responsibilities

## Related Signals

- `CSE-CMMC-AWARENESS-NO-SECURITY-TRAINING-001`
- `CSE-CMMC-AWARENESS-NO-INSIDER-THREAT-TRAINING-002`
