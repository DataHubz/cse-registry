# CSE-PCIDSS-TRANSIT-NO-PAN-ENCRYPTION-002

**No PAN Transmission Encryption**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-TRANSIT-NO-PAN-ENCRYPTION-002` |
| Domain          | PCIDSS                                   |
| Category        | TRANSIT                                  |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

PANs are not protected with strong cryptography during transmission over public networks.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Payment processors and service providers
- E-commerce platforms and merchants
- Database systems containing payment card data
- Data transmission channels and APIs

## PCI DSS Context (Informative)

**Requirement:** 4.2 PAN is protected with strong cryptography whenever it is sent over open, public networks

**Sub-Requirement:** 4.2.1, 4.2.2

**Regulatory Text:** "PAN is secured with strong cryptography whenever it is sent over open, public networks. Only trusted keys and certificates are accepted, and the configuration supports only secure versions and does not support fallback to weaker protocols or ciphers."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Monitor network traffic for unencrypted PAN transmissions over public networks including the Internet, wireless networks, and cellular technologies. Verify implementation of TLS 1.2 or higher with strong cipher suites. Check for weak protocols (SSL, early TLS versions) and insecure fallback mechanisms. Review certificate validation processes and trust store configurations. Test end-to-end encryption for payment transactions, APIs, and data exchanges.
