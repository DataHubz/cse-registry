# CSE-PCIDSS-STORE-NO-KEY-MGMT-PROCESS-007

**No Key Management Processes**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-STORE-NO-KEY-MGMT-PROCESS-007` |
| Domain          | PCIDSS                                   |
| Category        | STORE                                    |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No defined processes for securely managing cryptographic keys.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Payment processors and service providers
- E-commerce platforms and merchants
- Database systems containing payment card data
- Data transmission channels and APIs

## PCI DSS Context (Informative)

**Requirement:** 3.7 Where cryptography is used to protect stored account data, key management processes and procedures are defined and implemented

**Sub-Requirement:** 3.7.1, 3.7.2, 3.7.3, 3.7.4, 3.7.5, 3.7.6, 3.7.7, 3.7.8, 3.7.9

**Regulatory Text:** "Key management processes and procedures for cryptographic keys used for encryption of cardholder data are defined and implemented, including key generation, distribution, storage, rotation, retirement, and destruction."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Review documentation for key management lifecycle processes including generation, distribution, storage, change/rotation, retirement, and destruction. Verify existence of procedures for key custodian responsibilities, split knowledge, dual control, and periodic key changes. Check for documented processes covering compromised key handling, key strength requirements, and secure key distribution methods. Assess implementation of cryptoperiod policies and key archival procedures.
