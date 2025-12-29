# CSE-GEN-AUTH-NO-MFA-002

**Multi-Factor Authentication Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-GEN-AUTH-NO-MFA-002`                |
| Domain          | GEN (General)                            |
| Category        | AUTH                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Authentication does not require multiple independent factors for identity verification, relying instead on a single authentication method.

This signal indicates that access control depends solely on one factor (typically password or API key) without additional verification through possession, biometric, or out-of-band confirmation.

## Applicability

This signal applies to:

- Cloud management consoles (AWS, Azure, GCP)
- Identity providers and SSO systems
- VPN and remote access solutions
- Administrative and privileged accounts
- Email and collaboration platforms
- Source code repositories
- CI/CD pipelines and automation systems
- Database administrative interfaces
- Payment processing systems
- Healthcare information systems

## Examples (Non-Normative)

### AWS IAM User Without MFA Enforcement

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
*No MFA condition enforced for privileged access*

### Azure AD Conditional Access Without MFA

```json
{
  "displayName": "All users policy",
  "conditions": {
    "users": {
      "includeUsers": ["All"]
    }
  },
  "grantControls": {
    "operator": "OR",
    "builtInControls": ["block"]
  }
}
```
*No multifactorAuthentication control required*

### SSH Configuration Without Two-Factor

```
# /etc/ssh/sshd_config
PasswordAuthentication yes
ChallengeResponseAuthentication no
# Missing: AuthenticationMethods publickey,keyboard-interactive
```

### Application Login Without MFA

```javascript
// Authentication endpoint with only password
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await authenticateUser(username, password);
  if (user) {
    return res.json({ token: generateToken(user) });
  }
  // No second factor verification
});
```

### Database Admin Access Without MFA

```sql
-- PostgreSQL user with admin privileges, no MFA
CREATE USER admin_user WITH PASSWORD 'password123';
GRANT ALL PRIVILEGES ON DATABASE production TO admin_user;
```

## What This Signal Does NOT Assert

- Whether single-factor authentication is sufficient for the risk level
- Whether compensating controls are in place
- The strength of the existing authentication factor
- Whether accounts have been compromised
- Compliance or non-compliance with any framework
- Required remediation actions

## Related Framework Signals

- `CSE-CMMC-IDENTITY-NO-MFA-001` — Multi-Factor Authentication Not Enabled
- `CSE-HIPAA-ACCESS-NO-MFA-001` — MFA Not Implemented (if defined)
- `CSE-PCIDSS-ACCESS-NO-MFA-001` — Multi-Factor Authentication Missing (if defined)
- `CSE-SOC2-ACCESS-NO-MFA-001` — MFA Not Enforced (if defined)
- `CSE-GEN-AUTH-NO-AUTHENTICATION-001` — Authentication Mechanism Missing

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **HIPAA**: 164.312(a)(2)(i) - Unique User Identification
- **HIPAA**: 164.312(d) - Person or Entity Authentication
- **PCI DSS**: 8.3 - Secure all individual non-console administrative access and all remote access
- **PCI DSS**: 8.3.1 - Incorporate multi-factor authentication for all non-console access
- **SOC 2**: CC6.1 - Logical and physical access controls
- **CIS Controls**: 6.3 - Require MFA for Externally-Exposed Applications
- **CIS Controls**: 6.4 - Require MFA for Remote Network Access
- **CIS Controls**: 6.5 - Require MFA for Administrative Access
- **CMMC**: IA.L2-3.5.3 - Use multifactor authentication
- **NIST CSF**: PR.AC-7 - Users, devices, and other assets are authenticated

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Analyzing identity provider configurations
- Reviewing access policies for MFA requirements
- Examining authentication flows in applications
- Scanning cloud platform security settings
- Auditing privileged account configurations

Multi-factor authentication is considered a critical security control for protecting against credential compromise, phishing, and unauthorized access.
