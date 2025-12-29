# CSE-FEDRAMP-IA-NO-CRYPTO-AUTH-007

**No Cryptographic Module Authentication**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-IA-NO-CRYPTO-AUTH-007` |
| Domain          | FEDRAMP                                  |
| Category        | IA                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information systems do not implement mechanisms for authentication to a cryptographic module that meet FIPS 140-2 requirements.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Identification and Authentication (IA)
**Control:** IA-7
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Implement mechanisms for authentication to a cryptographic module that meet the requirements of applicable federal laws, Executive Orders, directives, policies, regulations, standards, and guidance for such authentication."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for cryptographic modules without FIPS 140-2 validation, systems using non-approved cryptographic algorithms for authentication, missing authentication mechanisms for accessing cryptographic keys or modules, cryptographic operations performed without proper authentication, and absence of FIPS 140-2 certificates for cryptographic modules. Verify that cryptographic modules meet at least FIPS 140-2 Level 1 validation requirements.
