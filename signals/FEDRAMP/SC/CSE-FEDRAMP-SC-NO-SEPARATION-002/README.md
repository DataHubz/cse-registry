# CSE-FEDRAMP-SC-NO-SEPARATION-002

**No Separation of System and User Functionality**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SC-NO-SEPARATION-002`       |
| Domain          | FEDRAMP                                  |
| Category        | SC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

System and user functionality are not separated within the information system.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Communications Protection (SC)
**Control:** SC-2
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Separate user functionality, including user interface services, from system management functionality."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for systems where administrative and management functions are accessible through the same interfaces as user functions, lack of role-based interface separation, no distinction between user and system management privileges, and shared access paths for regular users and administrators.
