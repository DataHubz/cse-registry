# CSE-FEDRAMP-AU-NO-AUDIT-FAILURE-005

**No Audit Failure Response**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-AU-NO-AUDIT-FAILURE-005` |
| Domain          | FEDRAMP                                  |
| Category        | AU                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Response actions for audit processing failures are not defined or implemented.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Audit and Accountability (AU)
**Control:** AU-5
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Alert appropriate organizational officials in the event of an audit processing failure and take additional actions as defined by the organization."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing audit failure alerting mechanisms, undefined response procedures, or no designated personnel for audit failure notifications.
