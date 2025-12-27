# CSE-CMMC-COMMS-WEAK-CRYPTO-004

**Weak Cryptographic Configuration**

## Signal Overview

| Field           | Value                                |
|-----------------|--------------------------------------|
| Identifier      | `CSE-CMMC-COMMS-WEAK-CRYPTO-004`     |
| Domain          | CMMC                                 |
| Category        | COMMS                                |
| Status          | Active                               |
| Introduced In   | 1.0.0                                |

## Description

Cryptographic implementations use deprecated algorithms, insufficient key lengths, or insecure configurations.

This signal indicates that encryption may not provide adequate protection against modern cryptographic attacks.

## Applicability

This signal applies to:

- TLS/SSL configurations
- Encryption algorithm selection
- Key length requirements
- Certificate management
- Hash function usage
- Key derivation functions
- Cryptographic library configurations

## Examples (Non-Normative)

### Deprecated TLS Versions

```nginx
ssl_protocols SSLv3 TLSv1 TLSv1.1;
# SSLv3, TLSv1.0, TLSv1.1 are deprecated
```

### Weak Cipher Suites

```nginx
ssl_ciphers 'DES-CBC3-SHA:RC4-SHA:NULL-SHA';
# Weak ciphers: 3DES, RC4, NULL
```

### Short RSA Key

```bash
openssl genrsa -out key.pem 1024
# 1024-bit keys are insufficient
```

### Deprecated Hash Algorithms

```python
import hashlib
password_hash = hashlib.md5(password.encode()).hexdigest()
# MD5 should not be used for security
```

### Weak Key Derivation

```python
key = password.encode()  # Direct password use
# Should use PBKDF2, Argon2, or similar
```

## What This Signal Does NOT Assert

- Whether cryptography has been broken
- Whether data has been exposed
- The sensitivity of protected data
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **SC.L2-3.13.11**: Employ FIPS-validated cryptography when used to protect the confidentiality of CUI

## Related Signals

- `CSE-CMMC-COMMS-NO-ENCRYPTION-TRANSIT-001` — Data Not Encrypted in Transit
- `CSE-CMMC-COMMS-NO-ENCRYPTION-REST-002` — Data Not Encrypted at Rest
