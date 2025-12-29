# CSE-ISO27001-ORG-NO-AUTH-INFO-MANAGEMENT-017

**No Authentication Information Management**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-AUTH-INFO-MANAGEMENT-017` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Allocation and management of authentication information is not controlled through a formal process.

## Applicability

- Organizations without password policies or enforcement mechanisms
- Environments allowing weak or default credentials
- Companies lacking multi-factor authentication requirements
- Organizations where credentials are shared between users
- Environments without secure credential issuance and revocation processes

## Examples (Non-Normative)

### No Credential Management Process

```yaml
authentication_management:
  password_policy:
    defined: false
    complexity_requirements: null
    expiration: null
    history: null
    enforcement: false
  credential_issuance:
    formal_process: false
    secure_delivery: false
    initial_change_required: false
  multi_factor_authentication:
    required: false
    coverage: "0%"
```

### Weak Authentication Controls

```yaml
credential_assessment:
  default_credentials_found: 23
  shared_accounts: 15
  password_analysis:
    weak_passwords: "67%"
    no_expiration: true
    complexity_enforced: false
  privileged_accounts:
    mfa_required: false
    password_rotation: false
  api_keys:
    embedded_in_code: true
    rotation_policy: null
```

## ISO 27001:2022 Context (Informative)

- **A.5.17 Authentication information**: Allocation and management of authentication information should be controlled by a management process, including advising personnel on appropriate handling of authentication information. This includes passwords, tokens, smart cards, and biometric information.

## Related Signals

- `CSE-ISO27001-ORG-NO-IDENTITY-MANAGEMENT-016`
- `CSE-ISO27001-ORG-NO-ACCESS-CONTROL-POLICY-015`
