# CSE-FEDRAMP-SC-NO-BOUNDARY-005

**No Boundary Protection**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SC-NO-BOUNDARY-005`         |
| Domain          | FEDRAMP                                  |
| Category        | SC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information system does not monitor and control communications at external boundaries and key internal boundaries.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Communications Protection (SC)
**Control:** SC-7
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Monitor and control communications at the external managed interfaces to the system and at key internal managed interfaces within the system; implement subnetworks for publicly accessible system components that are physically or logically separated from internal organizational networks; and connect to external networks or systems only through managed interfaces."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing or misconfigured firewalls, lack of network segmentation, no demilitarized zones (DMZ) for public-facing systems, unmanaged network connections, absence of boundary monitoring and filtering, inadequate logical separation between networks, and no managed interface requirements for external connections.
