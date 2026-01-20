# CSE-FEDRAMP-MA-NO-CONTROLLED-MAINT-002

**No Controlled Maintenance**

## Signal Overview

| Field           | Value                                       |
|-----------------|---------------------------------------------|
| Identifier      | `CSE-FEDRAMP-MA-NO-CONTROLLED-MAINT-002`   |
| Domain          | FEDRAMP                                     |
| Category        | MA                                          |
| Status          | Active                                      |
| Introduced In   | 1.0.0                                       |

## Description

Controlled maintenance activities are not scheduled, performed, documented, or reviewed for information systems.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Maintenance (MA)
**Control:** MA-2
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Schedule, document, and review records of maintenance, repair, and replacement on system components in accordance with manufacturer or vendor specifications and/or organizational requirements."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for absence of maintenance schedules, lack of maintenance records, no approval process for maintenance activities, and missing documentation of maintenance performed on system components.
