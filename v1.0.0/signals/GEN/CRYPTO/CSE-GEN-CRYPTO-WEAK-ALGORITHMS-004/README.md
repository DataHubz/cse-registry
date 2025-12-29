# CSE-GEN-CRYPTO-WEAK-ALGORITHMS-004

**Weak Cryptographic Algorithms Used**

## Signal Overview

| Field           | Value                                  |
|-----------------|----------------------------------------|
| Identifier      | `CSE-GEN-CRYPTO-WEAK-ALGORITHMS-004`   |
| Domain          | GEN (General)                          |
| Category        | CRYPTO                                 |
| Status          | Active                                 |
| Introduced In   | 1.0.0                                  |

## Description

Deprecated or cryptographically weak algorithms are in use (e.g., MD5, SHA-1, DES, RC4).

This signal indicates that systems are using cryptographic algorithms that have known vulnerabilities, have been deprecated by standards bodies, or provide insufficient security for modern threat environments. Use of weak algorithms can enable attacks such as collision attacks, brute force decryption, or cryptanalysis.

## Applicability

This signal applies to:

- Encryption implementations in applications
- Hash functions for password storage or integrity checking
- TLS/SSL configurations for web servers and APIs
- Digital signature implementations
- VPN and network encryption protocols
- Database encryption configurations
- Code signing and software distribution
- Blockchain and cryptocurrency implementations

## Examples (Non-Normative)

The following are illustrative examples of patterns that may trigger this signal:

```python
# Using MD5 for password hashing
import hashlib
password_hash = hashlib.md5(password.encode()).hexdigest()
# MD5 is cryptographically broken
```

```java
// Using DES encryption
import javax.crypto.Cipher;
Cipher cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");
// DES has only 56-bit key strength, easily broken
```

```javascript
// Using SHA-1 for digital signatures
const crypto = require('crypto');
const sign = crypto.createSign('SHA1');
sign.update('data to sign');
const signature = sign.sign(privateKey);
// SHA-1 is deprecated for digital signatures
```

```yaml
# TLS configuration with weak cipher suites
apiVersion: v1
kind: ConfigMap
metadata:
  name: nginx-config
data:
  ssl_ciphers: "RC4-SHA:DES-CBC3-SHA:AES128-SHA"
  # RC4 and 3DES are weak ciphers
```

```python
# Using RC4 stream cipher
from Crypto.Cipher import ARC4
cipher = ARC4.new(key)
encrypted = cipher.encrypt(plaintext)
# RC4 has known biases and vulnerabilities
```

```nginx
# Nginx allowing SSLv3 and TLS 1.0
ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;
# SSLv3 and TLSv1.0 are deprecated
```

```csharp
// Using weak hash algorithm
using System.Security.Cryptography;
var hash = MD5.Create();
var hashBytes = hash.ComputeHash(data);
// MD5 should not be used for security purposes
```

Common weak algorithms detected:

- **Hash Functions**: MD5, SHA-1 (in security contexts), MD4, MD2
- **Symmetric Encryption**: DES, 3DES, RC4, RC2, Blowfish (64-bit block)
- **Asymmetric Encryption**: RSA < 2048 bits, DSA < 2048 bits
- **TLS/SSL Protocols**: SSLv2, SSLv3, TLS 1.0, TLS 1.1
- **Key Derivation**: PBKDF2 with low iterations, simple hashing without salt

## What This Signal Does NOT Assert

- Severity or exploitability in a specific context
- Whether an active attack is occurring
- Whether the weak algorithm has been successfully exploited
- Compliance or non-compliance with any framework
- Specific algorithm recommendations for replacement
- Whether compensating controls mitigate the risk

## Related Signals

- `CSE-GEN-CRYPTO-NO-ENCRYPTION-REST-001` — Encryption at rest missing
- `CSE-GEN-CRYPTO-NO-ENCRYPTION-TRANSIT-002` — Encryption in transit missing
- `CSE-GEN-CRYPTO-NO-KEY-MGMT-003` — Cryptographic key management missing
- `CSE-GEN-AUTH-WEAK-PASSWORD-HASH-001` — Weak password hashing (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **PCI DSS**: Requirement 4.2 (Never send unprotected PANs by end-user messaging), 6.2 (Ensure all system components are protected from known vulnerabilities)
- **NIST CSF**: PR.DS-1 (Data-at-rest is protected), PR.DS-2 (Data-in-transit is protected)
- **CMMC**: SC.L2-3.13.11 (Employ cryptographic mechanisms to protect the confidentiality of remote access sessions)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Static code analysis for deprecated cryptographic API usage
- TLS/SSL configuration scanning for weak protocols and cipher suites
- Reviewing cryptographic library configurations
- Analyzing certificate signature algorithms
- Checking password hashing implementations
- Scanning for legacy encryption protocols in network traffic
- Reviewing infrastructure-as-code for weak algorithm specifications
- Examining third-party dependencies for outdated crypto libraries

Recommended strong alternatives:

- **Hash Functions**: SHA-256, SHA-384, SHA-512, SHA-3, BLAKE2
- **Symmetric Encryption**: AES-256, ChaCha20
- **Asymmetric Encryption**: RSA >= 2048 bits, ECDSA (P-256 or higher), Ed25519
- **TLS/SSL Protocols**: TLS 1.2 (minimum), TLS 1.3 (preferred)
- **Key Derivation**: Argon2, bcrypt, scrypt, PBKDF2 with high iterations

The presence of this signal indicates use of cryptographic primitives that may not provide adequate security for protecting sensitive data.
