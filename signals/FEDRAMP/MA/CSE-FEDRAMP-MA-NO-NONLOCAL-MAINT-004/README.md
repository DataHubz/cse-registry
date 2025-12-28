# CSE-FEDRAMP-MA-NO-NONLOCAL-MAINT-004

**No Nonlocal Maintenance Controls**

## Signal Overview

| Field           | Value                                      |
|-----------------|---------------------------------------------|
| Identifier      | `CSE-FEDRAMP-MA-NO-NONLOCAL-MAINT-004`     |
| Domain          | FEDRAMP                                     |
| Category        | MA                                          |
| Status          | Active                                      |
| Introduced In   | 1.0.0                                       |

## Description

Nonlocal maintenance and diagnostic activities are not approved, controlled, or monitored.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Maintenance (MA)
**Control:** MA-4
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Approve and monitor nonlocal maintenance and diagnostic activities, allow the use of nonlocal maintenance and diagnostic tools only as consistent with organizational policy, employ strong authentication, and maintain records for nonlocal maintenance and diagnostic activities."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for absence of approval processes for remote maintenance, lack of monitoring for nonlocal maintenance sessions, missing authentication requirements for remote access, and no records of remote maintenance activities.
