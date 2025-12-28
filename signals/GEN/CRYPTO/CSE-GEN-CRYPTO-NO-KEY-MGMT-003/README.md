# CSE-GEN-CRYPTO-NO-KEY-MGMT-003

**Cryptographic Key Management Missing**

## Signal Overview

| Field           | Value                                |
|-----------------|--------------------------------------|
| Identifier      | `CSE-GEN-CRYPTO-NO-KEY-MGMT-003`     |
| Domain          | GEN (General)                        |
| Category        | CRYPTO                               |
| Status          | Active                               |
| Introduced In   | 1.0.0                                |

## Description

No documented process for generating, storing, rotating, or revoking cryptographic keys.

This signal indicates the absence of formalized key management practices, which can lead to weak key generation, insecure key storage, failure to rotate keys, inability to revoke compromised keys, and overall compromise of cryptographic systems.

## Applicability

This signal applies to:

- Organizations using encryption for data protection
- Systems implementing cryptographic controls
- Key management systems (KMS) and HSM deployments
- Certificate authorities and PKI infrastructure
- API key and token management systems
- Cloud encryption services (AWS KMS, Azure Key Vault, GCP KMS)
- Database encryption implementations
- Application-level encryption systems

## Examples (Non-Normative)

The following are illustrative examples of patterns that may trigger this signal:

```python
# Hardcoded encryption key with no rotation
from cryptography.fernet import Fernet

# Key generated once and never rotated
KEY = b'ZmDfcTF7_60GrrY167zsiPd67pEvs0aGOv2oasOM1Pg='
cipher = Fernet(KEY)
encrypted = cipher.encrypt(b"sensitive data")
```

```yaml
# Kubernetes secret without key rotation policy
apiVersion: v1
kind: Secret
metadata:
  name: encryption-key
  # No annotations for key rotation schedule
  # No documentation of key lifecycle
type: Opaque
data:
  key: c29tZS1lbmNyeXB0aW9uLWtleQ==
```

```javascript
// No key versioning or rotation mechanism
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = Buffer.from('0123456789abcdef0123456789abcdef', 'hex');
// Key stored without version tracking or rotation schedule
```

```terraform
# AWS KMS key without rotation enabled
resource "aws_kms_key" "example" {
  description             = "Example KMS key"
  deletion_window_in_days = 10
  # enable_key_rotation = false (default - no automatic rotation)
}
```

Organizational indicators:

- No key management policy document exists
- No defined key generation standards or procedures
- No key rotation schedule or automated rotation process
- No key access logging or audit trails
- No key backup and recovery procedures
- No process for emergency key revocation
- No separation of duties for key management operations

## What This Signal Does NOT Assert

- Severity or exploitability in a specific context
- Whether cryptographic keys have been compromised
- Whether encryption is being used effectively
- Compliance or non-compliance with any framework
- Required key rotation frequency
- Specific key management technology or solution requirements

## Related Signals

- `CSE-GEN-CRYPTO-NO-ENCRYPTION-REST-001` — Encryption at rest missing
- `CSE-GEN-CRYPTO-WEAK-ALGORITHMS-004` — Weak cryptographic algorithms used
- `CSE-GEN-SECRETS-PLAINTEXT-001` — Plaintext secret in source code
- `CSE-GEN-CRYPTO-NO-CERTIFICATE-MGMT-005` — Certificate management missing

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **PCI DSS**: Requirement 3.5 (Document and implement procedures to protect keys), 3.6 (Fully document and implement key management processes)
- **ISO 27001**: A.10.1.2 (Key management)
- **NIST CSF**: PR.DS-1 (Data-at-rest is protected), PR.DS-5 (Protections against data leaks)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Reviewing organizational documentation for key management policies
- Examining key storage mechanisms and access controls
- Checking for automated key rotation configurations
- Analyzing key lifecycle management procedures
- Verifying existence of key backup and recovery processes
- Reviewing audit logs for key access and operations
- Assessing separation of duties in key management
- Checking for key versioning and tracking mechanisms

The presence of this signal indicates a systemic gap in cryptographic key management practices that may undermine the effectiveness of encryption controls.
