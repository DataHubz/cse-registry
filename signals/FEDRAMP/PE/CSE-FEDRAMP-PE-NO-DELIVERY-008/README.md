# CSE-FEDRAMP-PE-NO-DELIVERY-008

**No Delivery and Removal Controls**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-PE-NO-DELIVERY-008` |
| Domain          | FEDRAMP                                  |
| Category        | PE                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Controls for authorizing, monitoring, and controlling the delivery and removal of system components are not implemented.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Physical and Environmental Protection (PE)
**Control:** PE-16
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Authorize and control the entry and exit of system components into and out of the facility; and maintain records of the system components."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing authorization procedures for equipment delivery/removal, lack of chain-of-custody documentation, absence of receiving/shipping logs, inadequate inspection procedures for incoming equipment, missing inventory reconciliation processes, and no evidence of controls to prevent unauthorized removal of equipment.
