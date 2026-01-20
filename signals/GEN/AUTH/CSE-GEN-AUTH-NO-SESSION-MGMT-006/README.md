# CSE-GEN-AUTH-NO-SESSION-MGMT-006

**Session Management Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-GEN-AUTH-NO-SESSION-MGMT-006`       |
| Domain          | GEN (General)                            |
| Category        | AUTH                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No controls exist for session timeout, termination, or protection against session hijacking, allowing authenticated sessions to persist indefinitely or remain vulnerable to compromise.

This signal indicates that session management lacks security controls such as inactivity timeouts, absolute timeouts, secure token handling, or session invalidation mechanisms.

## Applicability

This signal applies to:

- Web applications and APIs
- Single sign-on (SSO) systems
- Mobile applications
- Remote access and VPN connections
- Database connections
- Administrative interfaces
- Banking and financial applications
- Healthcare information systems
- E-commerce platforms
- Cloud management consoles

## Examples (Non-Normative)

### Web Application Without Session Timeout

```python
# Flask session without timeout configuration
app.config['SESSION_PERMANENT'] = False
# No SESSION_COOKIE_MAX_AGE set
# No inactivity timeout logic

@app.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html')
```

### API Token Without Expiration

```javascript
// JWT token without expiration
const token = jwt.sign(
  { userId: user.id, role: user.role },
  SECRET_KEY
  // No 'expiresIn' option
);

// Token validation without expiry check
const decoded = jwt.verify(token, SECRET_KEY);
```

### Session Cookie Without Security Flags

```python
# Cookie without secure flags
session.cookie_httponly = False
session.cookie_secure = False
session.cookie_samesite = None
# Vulnerable to XSS and CSRF attacks
```

### Database Connection Without Timeout

```yaml
# PostgreSQL connection pool without idle timeout
database:
  connection_pool:
    min_size: 10
    max_size: 100
    # No idle_timeout or max_lifetime configured
```

### SSH Session Without Timeout

```
# /etc/ssh/sshd_config
ClientAliveInterval 0
ClientAliveCountMax 0
# Sessions never timeout due to inactivity
```

### Application Without Logout Functionality

```javascript
// Authentication system without proper logout
app.post('/login', async (req, res) => {
  const token = generateToken(user);
  res.json({ token });
});

// No /logout endpoint
// No token revocation mechanism
// Tokens remain valid until they naturally expire
```

### Cloud Console Without Session Limits

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": "sts:GetSessionToken",
    "Resource": "*"
  }]
}
```
*No session duration limits enforced in policy*

## What This Signal Does NOT Assert

- Whether sessions have been hijacked or compromised
- The sensitivity of data accessible via sessions
- Whether network-level controls provide protection
- Whether sessions are actually long-lived in practice
- Compliance or non-compliance with any framework
- Required remediation actions

## Related Framework Signals

- `CSE-CMMC-ACCESS-NO-SESSION-LOCK-003` — Session Lock Not Implemented
- `CSE-CMMC-ACCESS-NO-SESSION-TERMINATION-021` — Session Termination Not Enforced
- `CSE-PCIDSS-SESSION-NO-TIMEOUT-001` — Session Timeout Missing (if defined)
- `CSE-SOC2-SESSION-NO-MGMT-001` — Session Management Controls Missing (if defined)
- `CSE-GEN-AUTH-NO-AUTHENTICATION-001` — Authentication Mechanism Missing

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **PCI DSS**: 8.1.8 - Session timeout after no more than 15 minutes of inactivity
- **PCI DSS**: 6.5.10 - Protect against broken authentication and session management
- **SOC 2**: CC6.1 - Logical and physical access controls
- **SOC 2**: CC6.6 - The entity implements logical access security measures to protect against threats
- **CIS Controls**: 4.3 - Configure Automatic Session Locking on Enterprise Assets
- **CIS Controls**: 6.6 - Require MFA for Administrative Access

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Analyzing session configuration in applications
- Testing session timeout behavior
- Reviewing cookie security attributes
- Examining token generation and validation code
- Testing logout and session termination functions
- Auditing session storage mechanisms

Session management best practices include:
- Inactivity timeouts (typically 15-30 minutes)
- Absolute session timeouts (typically 8-12 hours)
- Secure cookie flags (HttpOnly, Secure, SameSite)
- Token expiration and refresh mechanisms
- Proper logout and session invalidation
- Session fixation protection
- CSRF token implementation
- Session storage security

Inadequate session management is a common vulnerability that can lead to unauthorized access, session hijacking, and compliance violations.
