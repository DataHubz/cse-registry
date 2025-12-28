# CSE-FEDRAMP-IA-NO-SERVICE-IDENT-009

**No Service Identification and Authentication**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-IA-NO-SERVICE-IDENT-009` |
| Domain          | FEDRAMP                                  |
| Category        | IA                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information systems do not uniquely identify and authenticate service accounts and system-to-system communications.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Identification and Authentication (IA)
**Control:** IA-9
**Baseline:** Moderate, High

**NIST 800-53 Text:** "Identify and authenticate [Assignment: organization-defined information system services] using [Assignment: organization-defined security safeguards]."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for service accounts without unique identifiers, system-to-system communications without authentication, APIs accepting unauthenticated requests, microservices or containers without identity verification, shared service credentials across multiple systems, missing mutual authentication for critical services, and absence of service account lifecycle management. Review API gateways, message queues, database connections, and inter-service communications.
