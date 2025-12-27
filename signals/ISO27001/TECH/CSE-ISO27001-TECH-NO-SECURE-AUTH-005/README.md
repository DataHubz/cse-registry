# CSE-ISO27001-TECH-NO-SECURE-AUTH-005

**No Secure Authentication**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-TECH-NO-SECURE-AUTH-005` |
| Domain | ISO27001 |
| Category | TECH |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Secure authentication technologies and procedures are not implemented based on access restrictions. This signal indicates that authentication mechanisms are inadequate for the sensitivity of information and systems being accessed.

## Applicability

- Organizations without multi-factor authentication (MFA) for sensitive systems
- Systems using weak or outdated authentication protocols
- Environments with inadequate password policies
- Applications using basic authentication over unencrypted connections
- Systems lacking adaptive or risk-based authentication

## Examples (Non-Normative)

### Weak Authentication Configuration

```yaml
authentication_system:
  mfa_enabled: false
  password_policy:
    min_length: 6
    complexity_required: false
    expiration_days: never
    history: 0
  protocols:
    - basic_auth
    - plaintext_passwords
  account_lockout: disabled
  session_timeout: unlimited
```

### Insecure Application Authentication

```yaml
application:
  name: customer_portal
  authentication:
    method: username_password
    mfa: not_available
    password_storage: md5_hash
    transport: http
    session_management: cookie_based
    remember_me: permanent
    brute_force_protection: none
```

## ISO 27001:2022 Context (Informative)

- **A.8.5 Secure authentication**: Secure authentication technologies and procedures shall be implemented based on information access restrictions and the topic-specific policy on access control.

## Related Signals

- `CSE-ISO27001-TECH-NO-PRIVILEGED-ACCESS-MGMT-002`
- `CSE-ISO27001-TECH-NO-ACCESS-RESTRICTION-003`
- `CSE-ISO27001-TECH-NO-LOGGING-015`
- `CSE-ISO27001-TECH-NO-MONITORING-016`
