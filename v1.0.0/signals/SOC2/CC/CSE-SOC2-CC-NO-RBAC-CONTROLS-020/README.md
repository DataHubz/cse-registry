# CSE-SOC2-CC-NO-RBAC-CONTROLS-020

**No Role-Based Access and Least Privilege**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-RBAC-CONTROLS-020` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not authorize, modify, or remove access to data, software, functions, and other protected information assets based on roles, responsibilities, or the system design and changes.

## Applicability

- Access control systems and authorization mechanisms
- Role-based access control (RBAC) implementations
- Permission management processes
- System access review procedures

## Examples (Non-Normative)

### Missing Role-Based Access Controls

```yaml
finding:
  type: CSE-SOC2-CC-NO-RBAC-CONTROLS-020
  severity: high
  description: System lacks role-based access control implementation
  evidence:
    - All users granted administrative privileges
    - No role definitions exist
    - Access not aligned with job responsibilities
  remediation: Implement RBAC system with defined roles and least privilege
```

### Excessive Permissions

```yaml
finding:
  type: CSE-SOC2-CC-NO-RBAC-CONTROLS-020
  severity: high
  description: Users have access beyond role requirements
  evidence:
    - Developers have production database admin rights
    - Support staff can modify financial records
    - Least privilege principle not enforced
  remediation: Restrict access based on roles and responsibilities
```

## SOC 2 Context (Informative)

- **CC6.3**: The entity authorizes, modifies, or removes access to data, software, functions, and other protected information assets based on roles, responsibilities, or the system design and changes, giving consideration to the concepts of least privilege and segregation of duties, to meet the entity's objectives.

## Related Signals

- `CSE-SOC2-CC-NO-USER-REGISTRATION-019`
- `CSE-SOC2-CC-NO-LOGICAL-ACCESS-CONTROLS-018`
