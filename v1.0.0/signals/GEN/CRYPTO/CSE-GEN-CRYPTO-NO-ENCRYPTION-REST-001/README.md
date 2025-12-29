# CSE-GEN-CRYPTO-NO-ENCRYPTION-REST-001

**Encryption at Rest Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-GEN-CRYPTO-NO-ENCRYPTION-REST-001`  |
| Domain          | GEN (General)                            |
| Category        | CRYPTO                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Sensitive data is not encrypted when stored in databases, file systems, or storage media.

This signal indicates that data at rest lacks cryptographic protection, potentially exposing confidential information to unauthorized access through physical media theft, improper disposal, or unauthorized system access.

## Applicability

This signal applies to:

- Databases storing sensitive or regulated data
- File systems containing confidential information
- Cloud storage services (S3, Azure Blob, GCS, etc.)
- Backup and archive systems
- Mobile devices and laptops
- Removable media (USB drives, external hard drives)
- Virtual machine disk images
- Container persistent volumes

## Examples (Non-Normative)

The following are illustrative examples of patterns that may trigger this signal:

```python
# Database without encryption at rest
import sqlite3
conn = sqlite3.connect('customer_data.db')
# No encryption configured - data stored in plaintext
```

```yaml
# AWS RDS instance without encryption
Resources:
  MyDatabase:
    Type: AWS::RDS::DBInstance
    Properties:
      DBInstanceClass: db.t3.micro
      Engine: postgres
      # StorageEncrypted: false (default - no encryption)
```

```terraform
# Azure storage account without encryption
resource "azurerm_storage_account" "example" {
  name                     = "mystorageaccount"
  resource_group_name      = azurerm_resource_group.example.name
  location                 = azurerm_resource_group.example.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  # No encryption configuration specified
}
```

```java
// Writing sensitive data to unencrypted file
FileWriter writer = new FileWriter("patient_records.txt");
writer.write("SSN: 123-45-6789, Name: John Doe");
writer.close();
// File stored without encryption
```

## What This Signal Does NOT Assert

- Severity or exploitability in a specific context
- Whether the data has been accessed by unauthorized parties
- Whether compensating controls exist (physical security, network isolation)
- Compliance or non-compliance with any framework
- Required encryption algorithm or key strength
- Whether data is classified as sensitive in a specific context

## Related Signals

- `CSE-GEN-CRYPTO-WEAK-ALGORITHMS-004` — Weak cryptographic algorithms used
- `CSE-GEN-CRYPTO-NO-KEY-MGMT-003` — Cryptographic key management missing
- `CSE-GEN-CRYPTO-NO-CERTIFICATE-MGMT-005` — Certificate management missing

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **HIPAA**: 45 CFR 164.312(a)(2)(iv) (Encryption and decryption)
- **ISO 27001**: A.10.1.1 (Policy on the use of cryptographic controls)
- **GDPR**: Article 32 (Security of processing)
- **PCI DSS**: Requirement 3.4 (Render PAN unreadable)
- **CIS Controls**: Control 3.11 (Encrypt sensitive data at rest)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Scanning database configurations for encryption settings
- Examining storage service encryption parameters
- Reviewing file system encryption status
- Checking cloud resource encryption configurations
- Analyzing backup and archive encryption settings
- Verifying disk encryption on endpoints and servers

The presence of this signal indicates a condition where sensitive data may be vulnerable to unauthorized access through physical or logical means when stored.
