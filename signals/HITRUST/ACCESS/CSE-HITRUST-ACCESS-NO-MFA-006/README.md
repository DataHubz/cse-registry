# CSE-HITRUST-ACCESS-NO-MFA-006

**Multi-Factor Authentication Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ACCESS-NO-MFA-006` |
| Domain | HITRUST |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Multi-factor authentication (MFA) is not implemented or enforced for access to systems containing protected health information (PHI) or other sensitive data.

This signal indicates that authentication relies solely on a single factor (typically passwords), without requiring additional verification methods such as time-based one-time passwords (TOTP), hardware tokens, biometrics, or push notifications. MFA is critical for protecting against credential theft, phishing attacks, and unauthorized access.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Remote access systems (VPN, remote desktop)
- Administrative and privileged access
- Cloud infrastructure management consoles
- Electronic health record (EHR) systems
- Patient portals and mobile health applications

## Examples (Non-Normative)

### Cloud Console Without MFA

```json
{
  "aws_iam_users": [
    {
      "username": "admin-user",
      "mfa_enabled": false,
      "permissions": ["AdministratorAccess"],
      "console_access": true
    }
  ]
}
```

### VPN Access Without Second Factor

```yaml
# VPN configuration allowing password-only authentication
vpn_access:
  authentication_methods:
    - username_password
  mfa_required: false
  certificate_auth: false
  token_auth: false
```

### Application Login Without MFA

```javascript
// Application authentication without MFA
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await authenticate(username, password);
  // No MFA challenge
  if (user) {
    return res.json({ token: generateToken(user) });
  }
});
```

### SSH Access Without 2FA

```hcl
# Security group allowing SSH without MFA enforcement
resource "aws_security_group_rule" "ssh_access" {
  type        = "ingress"
  from_port   = 22
  to_port     = 22
  protocol    = "tcp"
  cidr_blocks = ["0.0.0.0/0"]
  # No MFA enforcement at network or application level
}
```

### Database Access Single-Factor

```sql
-- Database user authentication without MFA
CREATE USER phi_app_user
IDENTIFIED BY 'password_only'
-- No requirement for second authentication factor
-- No certificate-based authentication
-- No token-based authentication
;
```

## What This Signal Does NOT Assert

- Whether password policies are strong
- The specific MFA methods that should be used
- Whether MFA is needed for all users or all systems
- Compliance or non-compliance with HITRUST
- Whether compensating controls exist
- The usability of MFA solutions

## HITRUST Context (Informative)

- **Control Domain**: 01 - Access Control
- **Control Reference**: 01.f
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for multi-factor authentication including:
- MFA for remote access to networks containing PHI
- MFA for privileged/administrative access
- MFA for access to critical systems
- Use of at least two different authentication factors
- Risk-based authentication approaches
- MFA for cloud infrastructure management
- Protection against MFA bypass

Acceptable authentication factors include:
- Something you know (password, PIN)
- Something you have (token, smartphone, smart card)
- Something you are (biometric)

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ACCESS-NO-POLICY-001` - Access control policy missing
- `CSE-HITRUST-ACCESS-NO-PASSWORD-POLICY-005` - Password policy not enforced
- `CSE-HITRUST-ACCESS-NO-REMOTE-ACCESS-CONTROL-008` - Remote access controls missing
- `CSE-CMMC-IDENTITY-NO-MFA-001` - CMMC MFA requirement (if defined)
- `CSE-HIPAA-TECH-NO-MFA-001` - HIPAA MFA requirement (if defined)

## Notes

Detection of this signal typically involves:

- Review of authentication system configurations
- Analysis of IAM policies and conditional access rules
- Examination of MFA enrollment rates and enforcement
- Assessment of authentication logs and session establishment
- Review of VPN and remote access configurations
- Testing of authentication flows

The presence of this signal indicates a critical security gap that significantly increases the risk of unauthorized access from compromised credentials, particularly for remote access and privileged accounts.
