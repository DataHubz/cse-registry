# CSE-FEDRAMP-AU-NO-AUDIT-GENERATION-008

**No Audit Record Generation**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-AU-NO-AUDIT-GENERATION-008` |
| Domain          | FEDRAMP                                  |
| Category        | AU                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information system does not provide audit record generation capability for defined auditable events.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Audit and Accountability (AU)
**Control:** AU-12
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Provide audit record generation capability for the auditable events defined in AU-2 at specified information system components and allow designated organizational personnel to select which auditable events are to be audited by specific components."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for system components lacking audit generation capabilities, missing audit configuration options, or inability to capture defined auditable events.
