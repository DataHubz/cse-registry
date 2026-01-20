# CSE-HITRUST-ACCESS-NO-ACCOUNT-LOCKOUT-011

**Account Lockout Not Configured**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ACCESS-NO-ACCOUNT-LOCKOUT-011` |
| Domain | HITRUST |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Account lockout mechanisms to prevent brute force password attacks have not been configured for systems containing protected health information (PHI) or other sensitive data.

This signal indicates the absence of automatic account lockout or login attempt throttling after a specified number of failed authentication attempts. Account lockout is a critical defense against password guessing and brute force attacks, preventing attackers from repeatedly attempting to gain unauthorized access.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Web applications and patient portals
- Identity providers and authentication systems
- Electronic health record (EHR) systems
- Active Directory and LDAP systems
- Database authentication mechanisms
- API authentication endpoints

## Examples (Non-Normative)

### Application Without Lockout

```javascript
// Authentication endpoint without account lockout
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user && await user.validatePassword(password)) {
    return res.json({ token: generateToken(user) });
  }

  // No failed attempt tracking
  // No account lockout
  // Unlimited authentication attempts allowed
  return res.status(401).json({ error: 'Invalid credentials' });
});
```

### Database Without Login Limits

```sql
-- MySQL user account without failed login tracking
CREATE USER 'app_user'@'%' IDENTIFIED BY 'password123';
-- No MAX_QUERIES_PER_HOUR
-- No MAX_CONNECTIONS_PER_HOUR
-- No failed_login_attempts tracking
-- No account locking mechanism
```

### AWS IAM Without Lockout Policy

```json
{
  "aws_iam_account_password_policy": {
    "minimum_password_length": 14,
    "require_symbols": true,
    "require_numbers": true,
    "require_uppercase_characters": true,
    "require_lowercase_characters": true,
    "allow_users_to_change_password": true,
    "max_password_age": 90,
    "password_reuse_prevention": 24
  }
}
```

### Active Directory Without Lockout

```powershell
# Domain password policy without account lockout
Get-ADDefaultDomainPasswordPolicy | Where-Object {
    $_.LockoutThreshold -eq 0  # Lockout disabled
    # Or lockout threshold too high (>10 attempts)
    # Or lockout duration too short (<15 minutes)
}
```

### API Without Rate Limiting

```python
# API authentication without throttling or lockout
@app.route('/api/authenticate', methods=['POST'])
def authenticate():
    username = request.json.get('username')
    password = request.json.get('password')

    user = User.query.filter_by(username=username).first()
    if user and user.check_password(password):
        return jsonify({'token': generate_token(user)})

    # No rate limiting
    # No failed attempt counter
    # No temporary account lockout
    return jsonify({'error': 'Authentication failed'}), 401
```

## What This Signal Does NOT Assert

- Whether accounts are being attacked
- The specific lockout threshold that should be used
- Whether CAPTCHA or other anti-automation measures exist
- Compliance or non-compliance with HITRUST
- Whether monitoring and alerting are in place
- The impact on legitimate users

## HITRUST Context (Informative)

- **Control Domain**: 01 - Access Control
- **Control Reference**: 01.k
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for account lockout including:
- Automatic account lockout after failed login attempts
- Lockout threshold (typically 5-10 failed attempts)
- Lockout duration (typically 15-30 minutes or until administrator reset)
- Failed login attempt tracking and logging
- Administrator notification of lockouts
- Different policies for standard vs. privileged accounts
- Balance between security and usability
- Protection against account enumeration

Recommended lockout configurations:
- Lockout threshold: 5-10 failed attempts
- Lockout duration: 15-30 minutes (or manual unlock)
- Reset counter: After successful login or time period
- Privileged accounts: Lower threshold (3-5 attempts)
- Public-facing systems: May use CAPTCHA after fewer attempts

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ACCESS-NO-PASSWORD-POLICY-005` - Password policy not enforced
- `CSE-HITRUST-ACCESS-NO-ACCESS-LOGGING-012` - Access logging not implemented
- `CSE-HITRUST-ACCESS-NO-MFA-006` - Multi-factor authentication not implemented
- `CSE-CMMC-ACCESS-NO-UNSUCCESSFUL-LOGON-007` - CMMC unsuccessful logon (if defined)

## Notes

Detection of this signal typically involves:

- Review of authentication system configurations
- Analysis of account lockout policies
- Examination of failed login tracking mechanisms
- Assessment of rate limiting implementations
- Review of directory service lockout settings
- Testing of lockout behavior with failed attempts
- Analysis of lockout notification and reset procedures

The presence of this signal indicates a critical security weakness that leaves systems vulnerable to brute force password attacks and credential stuffing campaigns.
