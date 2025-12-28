# CSE-FEDRAMP-PE-NO-PHYSICAL-CONTROL-003

**No Physical Access Control**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-PE-NO-PHYSICAL-CONTROL-003` |
| Domain          | FEDRAMP                                  |
| Category        | PE                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Physical access controls are not implemented to enforce physical access authorizations and verify individual access at entry and exit points.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Physical and Environmental Protection (PE)
**Control:** PE-3
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Enforce physical access authorizations at entry and exit points to the facility where the system resides by: verifying individual access authorizations before granting access to the facility; and controlling ingress and egress to the facility using physical access control systems or devices and guards."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing physical access control systems, lack of badge readers or biometric controls, absence of guards or monitoring at entry/exit points, inadequate verification of authorization credentials, and missing controls for controlling ingress/egress.
