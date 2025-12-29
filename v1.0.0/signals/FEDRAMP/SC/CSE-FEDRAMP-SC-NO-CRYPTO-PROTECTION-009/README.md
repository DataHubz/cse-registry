# CSE-FEDRAMP-SC-NO-CRYPTO-PROTECTION-009

**No Cryptographic Protection**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SC-NO-CRYPTO-PROTECTION-009`|
| Domain          | FEDRAMP                                  |
| Category        | SC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information system does not implement required cryptographic protection using cryptographic modules.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Communications Protection (SC)
**Control:** SC-13
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Implement cryptographic mechanisms to prevent unauthorized disclosure of information and detect changes to information during transmission unless otherwise protected by alternative physical safeguards."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for use of non-FIPS 140-2 validated cryptographic modules, weak or deprecated cryptographic algorithms, missing encryption for sensitive data, inadequate cryptographic strength, absence of cryptographic protection for data in transit and at rest, and lack of validation certificates for cryptographic implementations.
