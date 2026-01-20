# CSE-ISO27001-ORG-NO-SECURITY-ROLES-002

**No Information Security Roles and Responsibilities**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-SECURITY-ROLES-002` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Information security roles and responsibilities are not defined and allocated according to organizational needs.

## Applicability

- Organizations without documented security roles and responsibilities
- Environments where security responsibilities are informally assigned
- Companies lacking clear accountability for information security activities
- Organizations where personnel are unaware of their security obligations
- Environments without a RACI matrix or equivalent for security functions

## Examples (Non-Normative)

### Undefined Security Roles

```yaml
role_assessment:
  security_roles_documented: false
  findings:
    - role: "Chief Information Security Officer"
      status: "undefined"
    - role: "Security Operations Team"
      status: "undefined"
    - role: "Data Protection Officer"
      status: "undefined"
  accountability_matrix: null
```

### Informal Role Assignment

```yaml
security_organization:
  formal_structure: false
  role_definitions:
    - position: "IT Manager"
      security_responsibilities: "handles security when needed"
      documented: false
      approved: false
```

## ISO 27001:2022 Context (Informative)

- **A.5.2 Information security roles and responsibilities**: Information security roles and responsibilities should be defined and allocated according to the organization needs. Responsibilities for the protection of individual assets and for carrying out specific information security processes should be defined. Where appropriate, responsibilities should include escalation activities.

## Related Signals

- `CSE-ISO27001-ORG-NO-SECURITY-POLICIES-001`
- `CSE-ISO27001-ORG-NO-MGMT-RESPONSIBILITIES-004`
