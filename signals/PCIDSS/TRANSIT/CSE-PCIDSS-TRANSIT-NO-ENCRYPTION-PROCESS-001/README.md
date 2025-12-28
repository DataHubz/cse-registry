# CSE-PCIDSS-TRANSIT-NO-ENCRYPTION-PROCESS-001

**No Transmission Encryption Processes**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-TRANSIT-NO-ENCRYPTION-PROCESS-001` |
| Domain          | PCIDSS                                   |
| Category        | TRANSIT                                  |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No defined processes for encrypting cardholder data during transmission.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Payment processors and service providers
- E-commerce platforms and merchants
- Database systems containing payment card data
- Data transmission channels and APIs

## PCI DSS Context (Informative)

**Requirement:** 4.1 Processes and mechanisms for protecting cardholder data with strong cryptography during transmission over open, public networks are defined and understood

**Sub-Requirement:** 4.1.1, 4.1.2

**Regulatory Text:** "Processes and mechanisms for protecting cardholder data with strong cryptography during transmission over open, public networks are defined, documented, implemented, and maintained."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Review organizational documentation for transmission security policies and procedures. Check for absence of documented processes covering encryption protocols, cipher suites, certificate management, and secure transmission requirements. Verify whether security controls for data in transit are documented and understood by personnel responsible for network security and data transmission systems.
