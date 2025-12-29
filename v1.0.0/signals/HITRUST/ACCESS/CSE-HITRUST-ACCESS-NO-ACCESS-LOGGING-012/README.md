# CSE-HITRUST-ACCESS-NO-ACCESS-LOGGING-012

**Access Logging Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ACCESS-NO-ACCESS-LOGGING-012` |
| Domain | HITRUST |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Logging of user access events and authentication attempts is not implemented for systems containing protected health information (PHI) or other sensitive data.

This signal indicates the absence of audit logs that capture user login events, logout events, failed authentication attempts, access to sensitive resources, and privilege escalation activities. Access logging is essential for security monitoring, incident investigation, compliance verification, and detecting unauthorized access attempts.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Web applications and patient portals
- Electronic health record (EHR) systems
- Database management systems
- Cloud infrastructure and services
- Identity and access management (IAM) systems
- Remote access systems (VPN, remote desktop)

## Examples (Non-Normative)

### Application Without Access Logging

```javascript
// Authentication without logging
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user && await user.validatePassword(password)) {
    // No logging of successful login
    return res.json({ token: generateToken(user) });
  }

  // No logging of failed login attempt
  return res.status(401).json({ error: 'Invalid credentials' });
});
```

### Database Without Audit Logging

```sql
-- MySQL without audit logging enabled
SHOW VARIABLES LIKE 'audit_log%';
-- audit_log_file: empty
-- audit_log_policy: NONE
-- No tracking of:
-- - Login attempts
-- - Query execution
-- - Data access
-- - Privilege changes
```

### Cloud Infrastructure Without Logging

```hcl
# AWS account without CloudTrail enabled
# No logging of:
# - API calls
# - Console sign-ins
# - IAM changes
# - Resource access
# - Failed authentication attempts

resource "aws_instance" "app_server" {
  ami           = "ami-12345678"
  instance_type = "t2.micro"
  # No CloudTrail
  # No VPC Flow Logs
  # No access logging
}
```

### VPN Without Connection Logging

```yaml
# VPN configuration without access logging
vpn_service:
  enabled: true
  authentication: "username_password"
  logging:
    connections: false
    authentication_attempts: false
    disconnections: false
    failed_logins: false
  # No audit trail of who accessed when
```

### Web Server Without Access Logs

```nginx
# Nginx configuration with access logging disabled
server {
    listen 443 ssl;
    server_name healthcare-portal.example.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    access_log off;  # Access logging disabled
    error_log /dev/null;  # Error logging disabled

    location / {
        proxy_pass http://backend;
        # No logging of access to PHI
    }
}
```

### API Without Audit Trail

```python
# API without access event logging
@app.route('/api/patient/<patient_id>', methods=['GET'])
@require_auth
def get_patient_data(patient_id):
    # No logging of:
    # - Who accessed the data
    # - When it was accessed
    # - What data was retrieved
    # - Source IP address
    patient = Patient.query.get(patient_id)
    return jsonify(patient.to_dict())
```

## What This Signal Does NOT Assert

- Whether other types of logs exist
- The specific log retention requirements
- Whether logs are being reviewed or monitored
- Compliance or non-compliance with HITRUST
- The format or centralization of logs
- Whether log integrity is protected

## HITRUST Context (Informative)

- **Control Domain**: 01 - Access Control
- **Control Reference**: 01.l
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for access logging including:
- Logging of successful authentication events
- Logging of failed authentication attempts
- Logging of logout events
- Recording user identity for all access events
- Timestamps for all access events
- Source IP addresses or network locations
- Logging of privileged operations
- Access to sensitive data (PHI)
- Changes to access rights and permissions
- Use of privileged accounts

Required log information typically includes:
- User identifier
- Date and time
- Type of event (login, logout, access, etc.)
- Success or failure indication
- Source of request (IP, device)
- Resource accessed
- Action performed

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ACCESS-NO-POLICY-001` - Access control policy missing
- `CSE-HITRUST-ACCESS-NO-ACCOUNT-LOCKOUT-011` - Account lockout not configured
- `CSE-CMMC-AUDIT-NO-LOGGING-001` - CMMC logging requirements (if defined)
- `CSE-HIPAA-TECH-NO-ACCESS-LOGGING-001` - HIPAA access logging (if defined)
- `CSE-HITRUST-ISMP-NO-AUDIT-LOGGING-xxx` - Related audit logging signals (if defined)

## Notes

Detection of this signal typically involves:

- Review of application logging configurations
- Analysis of system and security log settings
- Examination of database audit log configurations
- Assessment of cloud service logging enablement
- Review of log collection and aggregation systems
- Verification of authentication event capture
- Analysis of access log content and completeness

The presence of this signal indicates a critical security and compliance gap that prevents detection of unauthorized access, hinders incident investigation, and may violate regulatory requirements for audit trails.
