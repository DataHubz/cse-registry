# CSE-CMMC-IDENTITY-NO-MFA-001

**Multi-Factor Authentication Not Enabled**

## Signal Overview

| Field           | Value                                |
|-----------------|--------------------------------------|
| Identifier      | `CSE-CMMC-IDENTITY-NO-MFA-001`       |
| Domain          | CMMC                                 |
| Category        | IDENTITY                             |
| Status          | Active                               |
| Introduced In   | 1.0.0                                |

## Description

Access to systems, applications, or accounts is permitted without requiring multi-factor authentication.

This signal indicates that authentication relies solely on a single factor (typically a password) without additional verification mechanisms.

## Applicability

This signal applies to:

- Cloud management consoles (AWS, Azure, GCP)
- Identity providers (Azure AD, Okta, etc.)
- VPN and remote access gateways
- Privileged access management systems
- Administrative interfaces
- Applications processing sensitive data
- Email and collaboration platforms

## Examples (Non-Normative)

### AWS IAM Without MFA Enforcement

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": "*",
    "Resource": "*"
  }]
}
```
*No MFA condition present in policy*

### Azure Conditional Access Without MFA

```json
{
  "conditions": {
    "users": {
      "includeUsers": ["All"]
    }
  },
  "grantControls": {
    "builtInControls": []
  }
}
```

### SSH Without Two-Factor Configuration

```
# /etc/ssh/sshd_config
AuthenticationMethods password
# Missing: AuthenticationMethods publickey,keyboard-interactive
```

## What This Signal Does NOT Assert

- Whether the accounts have been compromised
- The sensitivity of accessible data
- Whether network-level controls provide compensation
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **IA.L2-3.5.3**: Use multifactor authentication for local and network access to privileged accounts and for network access to non-privileged accounts

## Related Signals

- `CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001` — Unrestricted Administrative Access
- `CSE-CMMC-IDENTITY-WEAK-PASSWORD-002` — Weak Password Policy
