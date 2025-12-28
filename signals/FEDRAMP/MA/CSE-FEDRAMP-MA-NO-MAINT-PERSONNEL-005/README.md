# CSE-FEDRAMP-MA-NO-MAINT-PERSONNEL-005

**No Maintenance Personnel Authorization**

## Signal Overview

| Field           | Value                                       |
|-----------------|---------------------------------------------|
| Identifier      | `CSE-FEDRAMP-MA-NO-MAINT-PERSONNEL-005`    |
| Domain          | FEDRAMP                                     |
| Category        | MA                                          |
| Status          | Active                                      |
| Introduced In   | 1.0.0                                       |

## Description

Maintenance personnel are not properly authorized, escorted when required, or designated with appropriate access levels.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Maintenance (MA)
**Control:** MA-5
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Establish a process for maintenance personnel authorization, maintain a list of authorized maintenance organizations or personnel, verify that non-escorted personnel performing maintenance have required access authorizations, and designate organizational personnel with required access authorizations and technical competence to supervise maintenance when personnel do not possess required access authorizations."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing maintenance personnel authorization lists, absence of escort procedures for uncleared personnel, lack of access authorization verification processes, and no designated supervisors for maintenance activities.
