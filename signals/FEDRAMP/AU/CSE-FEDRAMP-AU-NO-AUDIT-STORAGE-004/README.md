# CSE-FEDRAMP-AU-NO-AUDIT-STORAGE-004

**No Audit Log Storage Capacity**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-AU-NO-AUDIT-STORAGE-004` |
| Domain          | FEDRAMP                                  |
| Category        | AU                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Audit log storage capacity is not allocated or managed to prevent loss of audit records.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Audit and Accountability (AU)
**Control:** AU-4
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Allocate audit record storage capacity in accordance with organizational audit record storage requirements."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for undefined audit storage capacity requirements, missing storage allocation planning, or audit logs at risk of being overwritten.
