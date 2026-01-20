# CSE-FEDRAMP-PE-NO-PHYSICAL-AUTH-002

**No Physical Access Authorizations**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-PE-NO-PHYSICAL-AUTH-002` |
| Domain          | FEDRAMP                                  |
| Category        | PE                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Physical access authorizations are not developed, approved, and maintained for individuals requiring access to facilities.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Physical and Environmental Protection (PE)
**Control:** PE-2
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Develop, approve, and maintain a list of individuals with authorized access to the facility where the system resides; issue authorization credentials for facility access; review the access list detailing authorized facility access by individuals; and remove individuals from the facility access list when access is no longer required."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing physical access authorization lists, unapproved or outdated access lists, lack of review processes, missing authorization credentials, and inadequate processes for removing access when no longer required.
