# CSE-HITRUST-SDLC-NO-CRYPTOGRAPHY-005

**Cryptographic Controls Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-SDLC-NO-CRYPTOGRAPHY-005` |
| Domain | HITRUST |
| Category | SDLC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Cryptographic controls have not been implemented in information systems processing protected health information (PHI) or other sensitive data, leaving data vulnerable to unauthorized access, disclosure, or tampering.

This signal indicates the absence of appropriate encryption, hashing, or other cryptographic mechanisms to protect data confidentiality and integrity. Cryptographic controls should include encryption of data at rest, encryption of data in transit, secure hashing of passwords, digital signatures for authentication, and proper use of cryptographic algorithms and key strengths.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems storing or transmitting sensitive health information
- Patient portals and mobile health applications
- Electronic health record (EHR) systems
- Medical device communications
- Cloud-based healthcare services

## Examples (Non-Normative)

### Unencrypted Data Storage

```python
# Database configuration without encryption
DATABASE_CONFIG = {
    'host': 'localhost',
    'database': 'patient_records',
    'user': 'app_user',
    'password': 'password123',
    'encryption': False,  # No encryption at rest
    'ssl': False  # No encryption in transit
}
```

### Missing Password Hashing

```javascript
// User authentication without password hashing
async function createUser(username, password) {
  const user = {
    username: username,
    password: password,  // Plaintext password storage - CRITICAL VULNERABILITY
    created: new Date()
  };
  await db.users.insert(user);
}
```

### Unencrypted File Storage

```java
// File storage without encryption
public class MedicalRecordStorage {
    public void saveRecord(String patientId, byte[] recordData) {
        String filename = "records/" + patientId + ".dat";
        // Writes unencrypted file to disk
        Files.write(Paths.get(filename), recordData);
    }
}
```

## What This Signal Does NOT Assert

- Whether the organization has a cryptography policy
- The specific cryptographic algorithms required
- Whether network-level encryption (VPN, TLS) is in place
- Whether the organization is compliant or non-compliant with HITRUST
- Whether compensating controls exist
- The adequacy of key management practices

## HITRUST Context (Informative)

- **Control Domain**: 10 - Information Systems Acquisition, Development, and Maintenance
- **Control Reference**: 10.e
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for cryptographic controls that:
- Encrypt sensitive data at rest using approved algorithms
- Encrypt data in transit using TLS 1.2 or higher
- Hash passwords using approved algorithms (bcrypt, PBKDF2, Argon2)
- Implement digital signatures for authentication and non-repudiation
- Use cryptographic key strengths appropriate to data sensitivity
- Avoid deprecated or weak cryptographic algorithms
- Implement cryptographic controls throughout the system lifecycle

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-SDLC-NO-KEY-MANAGEMENT-006` - Key management missing
- `CSE-CMMC-COMMS-NO-ENCRYPTION-REST-002` - Encryption at rest missing (if defined)
- `CSE-CMMC-COMMS-NO-ENCRYPTION-TRANSIT-001` - Encryption in transit missing (if defined)
- `CSE-CMMC-COMMS-WEAK-CRYPTO-004` - Weak cryptography detected (if defined)

## Notes

Detection of this signal typically involves:

- Review of data storage configurations and database encryption settings
- Examination of file system encryption status
- Analysis of application code for cryptographic implementations
- Verification of TLS/SSL configurations
- Assessment of password storage mechanisms
- Review of encryption key usage and algorithms
- Testing for use of deprecated cryptographic functions
- Evaluation of mobile app data protection

The presence of this signal indicates a critical security deficiency that could result in HIPAA violations, data breaches, and significant regulatory penalties. Cryptographic controls are fundamental to protecting PHI and should be implemented as a priority.
