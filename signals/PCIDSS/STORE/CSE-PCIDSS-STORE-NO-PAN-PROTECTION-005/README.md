# CSE-PCIDSS-STORE-NO-PAN-PROTECTION-005

**No PAN Storage Protection**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-STORE-NO-PAN-PROTECTION-005` |
| Domain          | PCIDSS                                   |
| Category        | STORE                                    |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

PANs are not rendered unreadable everywhere they are stored (encryption, truncation, hashing).

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Payment processors and service providers
- E-commerce platforms and merchants
- Database systems containing payment card data
- Data transmission channels and APIs

## PCI DSS Context (Informative)

**Requirement:** 3.5 Primary account number is secured wherever it is stored

**Sub-Requirement:** 3.5.1, 3.5.2

**Regulatory Text:** "The PAN is rendered unreadable anywhere it is stored, including on portable digital media, backup media, in logs, and data received from or stored by wireless networks, through any of the following approaches: one-way hashes, truncation, index tokens, or strong cryptography."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Scan all storage locations for unencrypted or plaintext PANs, including databases, file systems, removable media, backups, and logs. Verify encryption implementation meets PCI DSS standards for cryptographic strength. Check for proper truncation (maximum first 6 and last 4 digits). Review tokenization systems and hash implementations. Test data protection across all storage environments including cloud, on-premises, and portable media.
