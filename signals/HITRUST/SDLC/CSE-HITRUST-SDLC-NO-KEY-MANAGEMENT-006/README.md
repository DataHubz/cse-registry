# CSE-HITRUST-SDLC-NO-KEY-MANAGEMENT-006

**Key Management Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-SDLC-NO-KEY-MANAGEMENT-006` |
| Domain | HITRUST |
| Category | SDLC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Cryptographic key management controls have not been implemented in information systems processing protected health information (PHI) or other sensitive data, creating risk of key compromise, unauthorized data access, or inability to decrypt critical information.

This signal indicates the absence of proper procedures and controls for generating, distributing, storing, rotating, revoking, and destroying cryptographic keys. Key management is essential for maintaining the security of encrypted data and includes secure key storage, access controls, key rotation policies, and disaster recovery procedures.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems using encryption for data protection
- Cloud-based healthcare services
- Applications with encrypted databases
- Mobile health applications
- Medical device manufacturers

## Examples (Non-Normative)

### Hardcoded Encryption Keys

```python
# Encryption key hardcoded in source code - CRITICAL VULNERABILITY
ENCRYPTION_KEY = "1234567890abcdef1234567890abcdef"

def encrypt_patient_data(data):
    cipher = AES.new(ENCRYPTION_KEY, AES.MODE_EAX)
    ciphertext, tag = cipher.encrypt_and_digest(data)
    return ciphertext
```

### Missing Key Rotation

```javascript
// Database encryption without key rotation
const dbConfig = {
  encryption: {
    enabled: true,
    key: process.env.DB_ENCRYPTION_KEY,
    keyRotation: false,  // No key rotation policy
    keyAge: "3 years",   // Stale encryption key
  }
};
```

### Insecure Key Storage

```java
// Encryption key stored in configuration file
public class CryptoConfig {
    // Key stored in plain text configuration
    private static final String MASTER_KEY =
        ConfigReader.getProperty("master.encryption.key");

    // No key access controls
    // No key backup or recovery mechanism
}
```

## What This Signal Does NOT Assert

- Whether encryption is implemented in the system
- The strength of cryptographic algorithms used
- Whether the organization is compliant or non-compliant with HITRUST
- The specific key management solution required
- Whether keys are currently compromised
- Whether compensating controls exist

## HITRUST Context (Informative)

- **Control Domain**: 10 - Information Systems Acquisition, Development, and Maintenance
- **Control Reference**: 10.f
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for key management that:
- Generates cryptographic keys using approved methods
- Stores keys securely using hardware security modules (HSMs) or key vaults
- Implements role-based access controls for key operations
- Rotates cryptographic keys on a regular schedule
- Maintains key backup and recovery procedures
- Revokes and destroys keys securely when no longer needed
- Maintains audit logs of all key management activities
- Separates key management duties from system administration

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-SDLC-NO-CRYPTOGRAPHY-005` - Cryptographic controls missing
- `CSE-HITRUST-ACCESS-NO-PRIVILEGE-MANAGEMENT-003` - Privilege management missing (if defined)
- `CSE-CMMC-COMMS-NO-KEY-MANAGEMENT-007` - CMMC key management (if defined)
- `CSE-HITRUST-OPS-NO-PROCEDURES-001` - Operational procedures missing

## Notes

Detection of this signal typically involves:

- Code review for hardcoded keys and secrets
- Examination of configuration files and environment variables
- Review of key storage mechanisms (HSM, key vault, etc.)
- Assessment of key rotation policies and procedures
- Verification of key access controls and logging
- Analysis of key backup and disaster recovery plans
- Review of key lifecycle documentation
- Testing for secure key destruction procedures
- Evaluation of separation of duties in key management

The presence of this signal indicates a critical security gap that could undermine all cryptographic protections. Poor key management can result in data breaches, regulatory violations, and permanent data loss if encryption keys are compromised or lost.
