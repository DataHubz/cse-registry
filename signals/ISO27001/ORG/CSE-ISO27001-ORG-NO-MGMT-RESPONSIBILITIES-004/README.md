# CSE-ISO27001-ORG-NO-MGMT-RESPONSIBILITIES-004

**No Management Security Responsibilities**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-MGMT-RESPONSIBILITIES-004` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Management does not require personnel to apply information security in accordance with established policies and procedures.

## Applicability

- Organizations where management does not enforce security policies
- Environments lacking accountability for security compliance
- Companies where security violations have no consequences
- Organizations where management exempts themselves from security requirements
- Environments where leadership does not demonstrate security commitment

## Examples (Non-Normative)

### No Security Enforcement

```yaml
management_assessment:
  security_policy_enforcement: false
  findings:
    - policy: "Password Policy"
      violations_detected: 47
      management_action_taken: false
    - policy: "Clean Desk Policy"
      compliance_rate: "23%"
      management_communication: null
```

### Management Security Exemptions

```yaml
access_control_review:
  exemptions:
    - user: "ceo@company.com"
      exempted_controls:
        - "multi_factor_authentication"
        - "password_expiration"
      justification: "executive convenience"
      approved_by: "self"
      risk_acceptance: false
```

## ISO 27001:2022 Context (Informative)

- **A.5.4 Management responsibilities**: Management should require all personnel to apply information security in accordance with the established information security policy, topic-specific policies and procedures of the organization. Management should define and assign all information security responsibilities and provide authorization processes and controls.

## Related Signals

- `CSE-ISO27001-ORG-NO-SECURITY-POLICIES-001`
- `CSE-ISO27001-ORG-NO-SECURITY-ROLES-002`
