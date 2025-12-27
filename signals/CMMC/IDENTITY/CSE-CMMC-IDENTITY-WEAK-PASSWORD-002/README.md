# CSE-CMMC-IDENTITY-WEAK-PASSWORD-002

**Weak Password Policy**

## Signal Overview

| Field           | Value                                  |
|-----------------|----------------------------------------|
| Identifier      | `CSE-CMMC-IDENTITY-WEAK-PASSWORD-002`  |
| Domain          | CMMC                                   |
| Category        | IDENTITY                               |
| Status          | Active                                 |
| Introduced In   | 1.0.0                                  |

## Description

Password policies do not enforce adequate complexity, length, or rotation requirements.

This signal indicates that authentication credentials may be susceptible to guessing, brute force, or credential stuffing attacks due to insufficient password strength requirements.

## Applicability

This signal applies to:

- Active Directory and LDAP directories
- Cloud identity providers (Azure AD, Okta, etc.)
- Application-level authentication systems
- Database user credentials
- Local system accounts
- Service account passwords
- API key and token policies

## Examples (Non-Normative)

### Windows Group Policy with Weak Settings

```
Minimum password length: 6
Password must meet complexity requirements: Disabled
Maximum password age: 0 (never expires)
```

### Azure AD Without Password Protection

```json
{
  "passwordPolicies": {
    "enforcePasswordPolicy": false,
    "bannedPasswordCheckOnPremisesMode": "Disabled"
  }
}
```

### Database Without Password Validation

```sql
-- MySQL without validate_password plugin
UNINSTALL COMPONENT 'file://component_validate_password';
```

### Application with Minimal Requirements

```python
PASSWORD_MIN_LENGTH = 4
PASSWORD_REQUIRE_UPPERCASE = False
PASSWORD_REQUIRE_NUMBERS = False
PASSWORD_REQUIRE_SPECIAL = False
```

## What This Signal Does NOT Assert

- Whether weak passwords are actively in use
- Whether accounts have been compromised
- The effectiveness of compensating controls like MFA
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **IA.L2-3.5.7**: Enforce a minimum password complexity and change of characters when new passwords are created
- **IA.L2-3.5.8**: Prohibit password reuse for a specified number of generations
- **IA.L2-3.5.9**: Allow temporary password use for system logons with an immediate change to a permanent password

## Related Signals

- `CSE-CMMC-IDENTITY-NO-MFA-001` — Multi-Factor Authentication Not Enabled
- `CSE-CMMC-IDENTITY-SHARED-ACCOUNT-003` — Shared Account Usage
