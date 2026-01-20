# CSE-FEDRAMP-AU-NO-AUDIT-RETENTION-007

**No Audit Record Retention**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-AU-NO-AUDIT-RETENTION-007` |
| Domain          | FEDRAMP                                  |
| Category        | AU                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Audit records are not retained for the required period to support after-the-fact investigations.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Audit and Accountability (AU)
**Control:** AU-11
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Retain audit records for a defined time period to provide support for after-the-fact investigations of security incidents and to meet regulatory and organizational information retention requirements."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing retention policies, undefined retention periods, or audit records being deleted before the required retention period expires.
