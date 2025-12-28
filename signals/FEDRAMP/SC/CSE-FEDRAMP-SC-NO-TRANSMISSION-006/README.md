# CSE-FEDRAMP-SC-NO-TRANSMISSION-006

**No Transmission Confidentiality and Integrity**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SC-NO-TRANSMISSION-006`     |
| Domain          | FEDRAMP                                  |
| Category        | SC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information system does not protect the confidentiality and integrity of transmitted information.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Communications Protection (SC)
**Control:** SC-8
**Baseline:** Moderate, High

**NIST 800-53 Text:** "Protect the confidentiality and integrity of transmitted information."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for unencrypted network communications, lack of TLS/SSL implementation, use of deprecated or weak encryption protocols, no cryptographic protection for data in transit, missing encryption for external and internal network transmissions, and absence of integrity verification mechanisms for transmitted data.
