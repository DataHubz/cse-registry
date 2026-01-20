# CSE-FEDRAMP-MA-NO-MAINT-TOOLS-003

**No Maintenance Tools Control**

## Signal Overview

| Field           | Value                                   |
|-----------------|-----------------------------------------|
| Identifier      | `CSE-FEDRAMP-MA-NO-MAINT-TOOLS-003`    |
| Domain          | FEDRAMP                                 |
| Category        | MA                                      |
| Status          | Active                                  |
| Introduced In   | 1.0.0                                   |

## Description

Maintenance tools are not approved, controlled, or monitored for use on information systems.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Maintenance (MA)
**Control:** MA-3
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Approve, control, and monitor the use of system maintenance tools and inspect tools carried into a facility by maintenance personnel for improper or unauthorized modifications."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for lack of approved maintenance tools inventory, absence of controls on tool usage, no monitoring of maintenance tool activities, and missing inspection procedures for tools brought into facilities.
