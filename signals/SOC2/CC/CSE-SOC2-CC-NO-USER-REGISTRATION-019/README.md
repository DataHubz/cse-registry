# CSE-SOC2-CC-NO-USER-REGISTRATION-019

**No User Registration and Authorization**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-USER-REGISTRATION-019` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Prior to issuing system credentials and granting system access, the entity does not register and authorize new internal and external users.

## Applicability

- Identity and access management processes
- User provisioning workflows
- Employee onboarding procedures
- Third-party and vendor access management

## Examples (Non-Normative)

### Missing User Registration Process

```yaml
finding:
  type: CSE-SOC2-CC-NO-USER-REGISTRATION-019
  severity: high
  description: Users granted system access without formal registration
  evidence:
    - No access request documentation
    - Missing manager approval process
    - Credentials issued without authorization
  remediation: Implement formal user registration and authorization workflow
```

### Uncontrolled External User Access

```yaml
finding:
  type: CSE-SOC2-CC-NO-USER-REGISTRATION-019
  severity: high
  description: External contractors granted access without proper authorization
  evidence:
    - No third-party access request forms
    - Missing business justification
    - Absence of authorization trail
  remediation: Establish registration process for external users
```

## SOC 2 Context (Informative)

- **CC6.2**: Prior to issuing system credentials and granting system access, the entity registers and authorizes new internal and external users whose access is administered by the entity. For those users whose access is administered by the entity, user system credentials are removed when user access is no longer authorized.

## Related Signals

- `CSE-SOC2-CC-NO-LOGICAL-ACCESS-CONTROLS-018`
- `CSE-SOC2-CC-NO-RBAC-CONTROLS-020`
