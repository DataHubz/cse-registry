# CSE-FEDRAMP-AC-NO-INFO-FLOW-004

**No Information Flow Enforcement**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-AC-NO-INFO-FLOW-004` |
| Domain          | FEDRAMP                                  |
| Category        | AC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information flow enforcement mechanisms are not implemented to control the flow of information between systems and system components.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Access Control (AC)
**Control:** AC-4
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Enforce approved authorizations for controlling the flow of information within the system and between connected systems based on information flow control policies."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing information flow policies, lack of data flow controls between security domains, absence of network segmentation, no enforcement of information flow restrictions, and uncontrolled data transfers between classification levels.
