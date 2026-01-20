# CSE-FEDRAMP-SC-NO-DATA-AT-REST-012

**No Protection of Information at Rest**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SC-NO-DATA-AT-REST-012`     |
| Domain          | FEDRAMP                                  |
| Category        | SC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information system does not protect the confidentiality and integrity of information at rest.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Communications Protection (SC)
**Control:** SC-28
**Baseline:** Moderate, High

**NIST 800-53 Text:** "Protect the confidentiality and integrity of information at rest."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for unencrypted storage volumes and databases, lack of encryption for sensitive data at rest, missing full-disk encryption on devices, no encryption for backups and archives, inadequate key management for data-at-rest encryption, weak or deprecated encryption algorithms for stored data, and absence of integrity verification mechanisms for stored information.
