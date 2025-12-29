# CSE-FEDRAMP-AU-NO-AUDIT-EVENTS-002

**No Audit Events Defined**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-AU-NO-AUDIT-EVENTS-002` |
| Domain          | FEDRAMP                                  |
| Category        | AU                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Auditable events are not defined or documented for the information system.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Audit and Accountability (AU)
**Control:** AU-2
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Determine that the information system is capable of auditing specified events and coordinates the security audit function with other organizational entities."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing auditable events list, undefined event types, and lack of coordination between security functions for audit requirements.
