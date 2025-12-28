# CSE-GEN-AUTH-NO-AUTHENTICATION-001

**Authentication Mechanism Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-GEN-AUTH-NO-AUTHENTICATION-001`     |
| Domain          | GEN (General)                            |
| Category        | AUTH                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

A system or application lacks authentication controls to verify user identity before granting access to resources or functionality.

This signal indicates that access is permitted without validating that users are who they claim to be, allowing anonymous or unverified access to protected resources.

## Applicability

This signal applies to:

- Web applications and APIs
- Database servers and data stores
- Network services and protocols
- Administrative interfaces
- Internal applications and microservices
- Cloud service endpoints
- File servers and shared resources
- IoT and embedded devices

## Examples (Non-Normative)

### API Endpoint Without Authentication

```python
# Flask API with no authentication
@app.route('/api/users')
def get_users():
    return jsonify(users)  # No authentication check
```

### Database Connection Without Authentication

```yaml
# MongoDB configuration allowing unauthenticated access
net:
  bindIp: 0.0.0.0
  port: 27017
security:
  authorization: disabled
```

### Cloud Storage Bucket Public Access

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::my-bucket/*"
  }]
}
```

### SSH Service Without Authentication Requirement

```
# /etc/ssh/sshd_config
PermitEmptyPasswords yes
PasswordAuthentication no
PubkeyAuthentication no
```

## What This Signal Does NOT Assert

- Whether the resource contains sensitive data
- The business impact of unauthorized access
- Whether network-level controls provide protection
- Whether the configuration is intentional (e.g., public website)
- Compliance or non-compliance with any framework
- Required remediation actions

## Related Framework Signals

- `CSE-CMMC-IDENTITY-NO-MFA-001` — Multi-Factor Authentication Not Enabled
- `CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001` — Unrestricted Administrative Access
- `CSE-PCIDSS-ACCESS-NO-AUTH-001` — Authentication Controls Missing (if defined)
- `CSE-SOC2-ACCESS-NO-AUTH-001` — User Authentication Not Enforced (if defined)
- `CSE-HIPAA-ACCESS-NO-AUTH-001` — Access Authentication Missing (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **HIPAA**: 164.312(a)(2)(i) - Unique User Identification
- **HIPAA**: 164.312(d) - Person or Entity Authentication
- **SOC 2**: CC6.1 - Logical and physical access controls
- **ISO 27001**: A.9.2.1 - User registration and de-registration
- **ISO 27001**: A.9.4.2 - Secure log-on procedures
- **GDPR**: Article 32 - Security of processing
- **PCI DSS**: 8.1 - Define and implement policies and procedures
- **PCI DSS**: 8.2 - Ensure proper user authentication management
- **CIS Controls**: 6.1 - Establish an Access Granting Process
- **CIS Controls**: 6.2 - Establish an Access Revoking Process
- **CMMC**: IA.L2-3.5.1 - Identify information system users
- **CMMC**: IA.L2-3.5.2 - Authenticate users and devices
- **NIST CSF**: PR.AC-1 - Identities and credentials are issued, managed, verified, revoked

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Scanning configuration files for authentication settings
- Testing endpoints for anonymous access
- Reviewing network service configurations
- Analyzing access control policies
- Examining application code for authentication checks

The presence of this signal indicates a fundamental security control gap that should be prioritized for review and remediation.
