# CSE-FEDRAMP-PE-NO-VISITOR-ACCESS-005

**No Visitor Access Records**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-PE-NO-VISITOR-ACCESS-005` |
| Domain          | FEDRAMP                                  |
| Category        | PE                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Visitor access records are not maintained, and visitors are not properly controlled when accessing facilities containing information systems.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Physical and Environmental Protection (PE)
**Control:** PE-8
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Maintain visitor access records to the facility where the system resides; control visitor access to the facility where the system resides; and review visitor access records."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing visitor sign-in/sign-out logs, lack of visitor badges or identification, absence of escort procedures, inadequate visitor access records, missing review processes for visitor logs, and failure to retain visitor access records for appropriate periods.
