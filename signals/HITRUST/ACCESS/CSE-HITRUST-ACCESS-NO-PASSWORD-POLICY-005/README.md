# CSE-HITRUST-ACCESS-NO-PASSWORD-POLICY-005

**Password Policy Not Enforced**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ACCESS-NO-PASSWORD-POLICY-005` |
| Domain | HITRUST |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A formal password policy has not been established or is not being enforced for systems containing protected health information (PHI) or other sensitive data.

This signal indicates the absence of password complexity requirements, length minimums, expiration rules, history restrictions, or other password security controls. A comprehensive password policy is essential for preventing unauthorized access through weak or compromised credentials.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Identity providers and authentication systems
- Active Directory and LDAP systems
- Application authentication mechanisms
- Database access controls

## Examples (Non-Normative)

### No Password Complexity Requirements

```yaml
# Authentication system without password policy
password_policy:
  minimum_length: null
  require_uppercase: false
  require_lowercase: false
  require_numbers: false
  require_special_characters: false
  prevent_common_passwords: false
```

### Missing Password Controls

```json
{
  "authentication_config": {
    "password_policy": {
      "enforced": false,
      "min_length": 0,
      "max_age_days": null,
      "history_count": 0,
      "lockout_threshold": null,
      "complexity_enabled": false
    }
  }
}
```

### Weak Database Password Policy

```sql
-- MySQL/PostgreSQL without password validation
-- No minimum length
-- No complexity requirements
-- No password expiration
CREATE USER 'healthcare_app'@'%' IDENTIFIED BY '123';
```

### Cloud IAM Without Password Policy

```hcl
# AWS IAM password policy not configured
# No terraform resource for aws_iam_account_password_policy
# Users can set weak passwords like "password123"
```

### Active Directory Default Policy

```powershell
# Domain password policy with weak settings
Get-ADDefaultDomainPasswordPolicy | Where-Object {
    $_.MinPasswordLength -lt 14 -or
    $_.PasswordHistoryCount -lt 24 -or
    $_.MaxPasswordAge -eq 0 -or
    $_.ComplexityEnabled -eq $false
}
```

## What This Signal Does NOT Assert

- Whether passwords are actually weak
- Whether multi-factor authentication is in use
- The specific password requirements needed
- Compliance or non-compliance with HITRUST
- Whether password managers are being used
- The effectiveness of password education

## HITRUST Context (Informative)

- **Control Domain**: 01 - Access Control
- **Control Reference**: 01.e
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for password management including:
- Minimum password length (typically 14+ characters)
- Password complexity requirements
- Password history (prevent reuse of recent passwords)
- Maximum password age/expiration
- Prohibition of common or easily guessed passwords
- Protection of passwords during transmission and storage
- Initial password change requirements
- Different requirements for user vs. privileged accounts

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ACCESS-NO-POLICY-001` - Access control policy missing
- `CSE-HITRUST-ACCESS-NO-MFA-006` - Multi-factor authentication not implemented
- `CSE-HITRUST-ACCESS-NO-ACCOUNT-LOCKOUT-011` - Account lockout not configured
- `CSE-CMMC-IDENTITY-WEAK-PASSWORD-002` - Weak password requirements (if defined)
- `CSE-HIPAA-TECH-WEAK-PASSWORD-001` - HIPAA password requirements (if defined)

## Notes

Detection of this signal typically involves:

- Review of password policy configurations
- Analysis of authentication system settings
- Examination of password validation rules
- Assessment of password policy enforcement mechanisms
- Review of directory service configurations
- Testing of password policy enforcement

The presence of this signal indicates a fundamental security weakness that significantly increases the risk of unauthorized access through compromised credentials.
