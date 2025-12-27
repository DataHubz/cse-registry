# CSE-ISO27001-TECH-NO-CRYPTOGRAPHY-024

**Missing Cryptography Controls**

## Signal Overview

| Field           | Value                                           |
|-----------------|-------------------------------------------------|
| Identifier      | `CSE-ISO27001-TECH-NO-CRYPTOGRAPHY-024`         |
| Domain          | ISO27001                                        |
| Category        | TECH                                            |
| Status          | Active                                          |
| Introduced In   | 1.0.0                                           |

## Description

Rules for effective use of cryptography including key management are not defined and implemented.

This signal indicates that cryptographic controls, encryption standards, key management procedures, or cryptographic protocols are not properly established, documented, or enforced across the organization.

## Applicability

This signal applies to:

- Data encryption at rest (disk, database, file, object storage)
- Data encryption in transit (TLS/SSL, VPN, secure protocols)
- Cryptographic key management systems (KMS)
- Certificate authorities and PKI infrastructure
- Encryption key storage (HSM, key vaults, secrets management)
- Cryptographic libraries and algorithms
- Digital signatures and authentication tokens
- Application-level encryption
- Cloud encryption services

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Encryption Policy

```text
Organization Cryptography Status:
- No documented encryption standards
- No approved algorithms list
- No key management procedures
- No key rotation schedule
- No encryption key lifecycle policy
```

### Weak Cryptographic Configuration

```yaml
# TLS configuration with weak ciphers
ssl_protocols: TLSv1 TLSv1.1
ssl_ciphers:
  - DES-CBC3-SHA
  - RC4-SHA
  - MD5
# Using deprecated protocols and weak ciphers
```

### Unmanaged Encryption Keys

```python
# Hardcoded encryption key in application
ENCRYPTION_KEY = "mysecretkey12345"

def encrypt_data(data):
    cipher = AES.new(ENCRYPTION_KEY, AES.MODE_ECB)
    return cipher.encrypt(data)
# Key stored in code, no rotation, weak mode
```

### Database Without Encryption

```sql
-- Database without TDE (Transparent Data Encryption)
SELECT name, is_encrypted
FROM sys.databases;
-- Returns: is_encrypted = 0

-- No encryption at rest
-- No column-level encryption
-- No backup encryption
```

### Cloud Storage Without Encryption

```hcl
# S3 bucket without encryption
resource "aws_s3_bucket" "data" {
  bucket = "sensitive-data-bucket"

  # No server_side_encryption_configuration
  # No default encryption
  # Objects stored unencrypted
}
```

### Missing Key Management

```yaml
# Application configuration
encryption:
  enabled: true
  algorithm: AES-256-GCM
  key_storage: environment_variable
  # No KMS integration
  # No key rotation
  # No key versioning
  # No key access audit
```

## What This Signal Does NOT Assert

- Whether the configuration is intentional or accidental
- Whether compensating controls exist elsewhere
- The likelihood or impact of cryptographic failures
- Compliance or non-compliance with ISO 27001 or any framework
- Required remediation actions

## ISO 27001:2022 Context (Informative)

This signal is relevant to:

- **A.8.24**: Use of cryptography - Rules for the effective use of cryptography, including cryptographic key management, should be defined and implemented

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-ISO27001-TECH-NO-DATA-AT-REST-ENCRYPTION-004` — Missing data at rest encryption
- `CSE-ISO27001-TECH-NO-TRANSIT-ENCRYPTION-005` — Missing data in transit encryption
- `CSE-ISO27001-TECH-WEAK-CRYPTOGRAPHY-006` — Use of weak cryptographic algorithms

## Notes

Detection of this signal typically involves:

- Review of cryptography policies and standards documentation
- Analysis of encryption configurations across systems
- Inspection of key management procedures and systems
- Assessment of cryptographic algorithm selections
- Examination of certificate management practices
- Review of secure protocol configurations (TLS, SSH, etc.)
- Evaluation of encryption key lifecycle management
- Testing of cryptographic implementation strength

The presence of this signal indicates a condition that warrants review in the context of cryptography and key management requirements.
