# CSE-PCIDSS-STORE-NO-KEY-SECURITY-006

**No Cryptographic Key Security**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-STORE-NO-KEY-SECURITY-006` |
| Domain          | PCIDSS                                   |
| Category        | STORE                                    |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Cryptographic keys used to protect account data are not adequately secured.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Payment processors and service providers
- E-commerce platforms and merchants
- Database systems containing payment card data
- Data transmission channels and APIs

## PCI DSS Context (Informative)

**Requirement:** 3.6 Cryptographic keys used to protect stored account data are secured

**Sub-Requirement:** 3.6.1

**Regulatory Text:** "Cryptographic keys used to encrypt/decrypt stored account data are secured against disclosure and misuse, including restriction to the fewest locations and forms necessary to perform their intended function."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Review key storage mechanisms for proper protection including encryption of data-encrypting keys with key-encrypting keys. Verify keys are not stored in clear text or in the same location as encrypted data. Check access controls limiting key access to custodians. Audit key storage locations including hardware security modules (HSMs), key management systems, and secure cryptographic devices. Assess split knowledge and dual control implementations.
