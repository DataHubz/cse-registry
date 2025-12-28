# CSE-HITRUST-ACCESS-NO-SESSION-MANAGEMENT-007

**Session Management Controls Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ACCESS-NO-SESSION-MANAGEMENT-007` |
| Domain | HITRUST |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Session management controls such as automatic logout, session timeouts, and idle disconnect are not implemented for systems containing protected health information (PHI) or other sensitive data.

This signal indicates the absence of mechanisms to terminate inactive user sessions, enforce maximum session durations, or require re-authentication after periods of inactivity. Proper session management prevents unauthorized access from unattended workstations and reduces the window of opportunity for session hijacking attacks.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Web applications and patient portals
- Electronic health record (EHR) systems
- Remote desktop and VPN sessions
- Clinical workstations
- Mobile health applications

## Examples (Non-Normative)

### No Session Timeout Configured

```javascript
// Web application without session timeout
const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  // No maxAge or timeout configured
  cookie: {
    secure: true,
    httpOnly: true
    // maxAge: undefined - sessions never expire
  }
};
```

### Indefinite Database Connections

```yaml
# Database connection pool without idle timeout
database:
  connection_pool:
    max_connections: 100
    idle_timeout: 0  # No timeout - connections persist indefinitely
    max_lifetime: 0
    wait_timeout: 0
```

### VPN Without Idle Disconnect

```hcl
# VPN configuration without session management
resource "aws_ec2_client_vpn_endpoint" "healthcare" {
  description            = "Healthcare VPN"
  server_certificate_arn = aws_acm_certificate.vpn.arn
  client_cidr_block      = "10.0.0.0/16"

  authentication_options {
    type = "certificate-authentication"
  }

  # No session timeout configured
  # No idle disconnect
  # No maximum session duration
}
```

### Application Without Inactivity Logout

```python
# Flask application without session timeout
app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
# No SESSION_PERMANENT or PERMANENT_SESSION_LIFETIME configured
# No inactivity timeout
# No automatic logout

@app.before_request
def check_session():
    # No session expiration validation
    pass
```

### Workstation Without Screen Lock

```powershell
# Windows workstation without automatic screen lock
$policy = Get-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System"
if ($policy.InactivityTimeoutSecs -eq 0) {
    # No automatic screen lock on inactivity
    # Sessions remain active indefinitely
}
```

## What This Signal Does NOT Assert

- Whether users manually log out
- The specific timeout duration required
- Whether session tokens are properly secured
- Compliance or non-compliance with HITRUST
- Whether physical security controls are in place
- The usability impact of session timeouts

## HITRUST Context (Informative)

- **Control Domain**: 01 - Access Control
- **Control Reference**: 01.g
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for session management including:
- Automatic logout/lock after defined period of inactivity
- Maximum session duration limits
- Re-authentication requirements for sensitive operations
- Concurrent session controls
- Session termination upon disconnect
- Clear session data upon logout
- Protection against session fixation and hijacking

Typical timeout requirements:
- Workstations: 15 minutes of inactivity
- Web applications: 15-30 minutes of inactivity
- Remote access: Based on risk assessment
- Privileged sessions: Shorter timeouts (5-15 minutes)

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ACCESS-NO-POLICY-001` - Access control policy missing
- `CSE-HITRUST-ACCESS-NO-REMOTE-ACCESS-CONTROL-008` - Remote access controls missing
- `CSE-CMMC-ACCESS-NO-SESSION-LOCK-003` - Session lock requirements (if defined)
- `CSE-HIPAA-TECH-NO-SESSION-TIMEOUT-001` - HIPAA session timeout (if defined)

## Notes

Detection of this signal typically involves:

- Review of application session configuration
- Analysis of authentication system timeout settings
- Examination of workstation screen lock policies
- Assessment of VPN and remote access timeout configurations
- Review of database connection pool settings
- Testing of session expiration behavior

The presence of this signal indicates a significant security weakness that increases the risk of unauthorized access from unattended sessions and session hijacking attacks.
