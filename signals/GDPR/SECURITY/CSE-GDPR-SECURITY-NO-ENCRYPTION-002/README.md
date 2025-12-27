# CSE-GDPR-SECURITY-NO-ENCRYPTION-002

**Encryption Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-SECURITY-NO-ENCRYPTION-002` |
| Domain | GDPR |
| Category | SECURITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Personal data is not encrypted in transit or at rest where appropriate, exposing data to unauthorized access.

Encryption is a fundamental security measure that protects data confidentiality by rendering it unreadable without proper decryption keys.

## Applicability

- Database systems storing personal data
- API endpoints transmitting personal data
- Cloud storage and file systems
- Backup and archive systems
- Mobile applications handling personal data
- Email and messaging systems

## Examples (Non-Normative)

### Unencrypted Database Connection

```python
# Signal Present: Connecting without encryption
import psycopg2

conn = psycopg2.connect(
    host="db.example.com",
    database="customers",
    user="app",
    password="secret",
    sslmode="disable"  # No encryption
)
```

### Unencrypted HTTP API

```javascript
// Signal Present: Using HTTP instead of HTTPS
fetch('http://api.example.com/users/profile', {
    method: 'POST',
    body: JSON.stringify({
        email: 'user@example.com',
        ssn: '123-45-6789'
    })
});
```

### Unencrypted Storage

```yaml
# Signal Present: S3 bucket without encryption
resources:
  CustomerDataBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: customer-data
      # Missing: BucketEncryption configuration
```

### Remediation Example

```python
# Signal Resolved: Encrypted connection
conn = psycopg2.connect(
    host="db.example.com",
    database="customers",
    user="app",
    password="secret",
    sslmode="require",  # Enforce SSL/TLS
    sslrootcert="/path/to/ca-cert.pem"
)
```

## GDPR Context (Informative)

- **Art. 32.1(a)**: Implement encryption of personal data as an appropriate technical measure
- **Art. 34.3(a)**: Effective encryption may eliminate the obligation to notify data subjects of a breach
- **Recital 83**: Encryption helps ensure ongoing confidentiality and security

## Related Signals

- `CSE-GDPR-SECURITY-NO-PSEUDONYMIZATION-001`
- `CSE-GDPR-SECURITY-NO-CONFIDENTIALITY-003`
- `CSE-GDPR-SECURITY-NO-ACCESS-CONTROL-010`
