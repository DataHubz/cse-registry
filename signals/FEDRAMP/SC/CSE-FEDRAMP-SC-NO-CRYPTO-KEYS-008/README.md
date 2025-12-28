# CSE-FEDRAMP-SC-NO-CRYPTO-KEYS-008

**No Cryptographic Key Management**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SC-NO-CRYPTO-KEYS-008`      |
| Domain          | FEDRAMP                                  |
| Category        | SC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information system does not establish and manage cryptographic keys for required cryptography.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Communications Protection (SC)
**Control:** SC-12
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Establish and manage cryptographic keys when cryptography is employed within the system in accordance with organization-defined requirements for key generation, distribution, storage, access, and destruction."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for absence of formal key management procedures, lack of secure key generation processes, inadequate key storage mechanisms, no key rotation policies, missing key lifecycle management, weak key distribution methods, inadequate key destruction procedures, and no segregation of key management duties.
