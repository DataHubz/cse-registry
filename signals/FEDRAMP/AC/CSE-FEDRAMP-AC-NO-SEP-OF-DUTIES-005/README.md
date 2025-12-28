# CSE-FEDRAMP-AC-NO-SEP-OF-DUTIES-005

**No Separation of Duties**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-AC-NO-SEP-OF-DUTIES-005` |
| Domain          | FEDRAMP                                  |
| Category        | AC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Separation of duties controls are not implemented to prevent individuals from having conflicting responsibilities that could enable fraud or error.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Access Control (AC)
**Control:** AC-5
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Identify and document duties of individuals requiring separation; define system access authorizations to support separation of duties."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing separation of duties policies, individuals with conflicting roles, lack of documented duty separation requirements, no monitoring of duty conflicts, and absence of compensating controls where separation cannot be achieved.
