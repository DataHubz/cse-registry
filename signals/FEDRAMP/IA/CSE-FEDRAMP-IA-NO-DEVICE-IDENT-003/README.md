# CSE-FEDRAMP-IA-NO-DEVICE-IDENT-003

**No Device Identification and Authentication**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-IA-NO-DEVICE-IDENT-003` |
| Domain          | FEDRAMP                                  |
| Category        | IA                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information systems do not uniquely identify and authenticate devices before establishing a connection.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Identification and Authentication (IA)
**Control:** IA-3
**Baseline:** Moderate, High

**NIST 800-53 Text:** "Uniquely identify and authenticate [Assignment: organization-defined specific and/or types of devices] before establishing a [Selection (one or more): local; remote; network] connection."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for systems accepting connections from unidentified devices, missing device certificates or credentials, absence of device registration or enrollment processes, systems without device authentication mechanisms (MAC filtering, certificate-based authentication), and missing device inventory with authentication status. Review configuration for mobile devices, IoT devices, and remote access endpoints.
