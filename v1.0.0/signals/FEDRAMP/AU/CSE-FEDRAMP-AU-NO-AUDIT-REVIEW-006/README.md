# CSE-FEDRAMP-AU-NO-AUDIT-REVIEW-006

**No Audit Record Review**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-AU-NO-AUDIT-REVIEW-006` |
| Domain          | FEDRAMP                                  |
| Category        | AU                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Audit records are not reviewed and analyzed for indications of inappropriate or unusual activity.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Audit and Accountability (AU)
**Control:** AU-6
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Review and analyze information system audit records for indications of inappropriate or unusual activity and report findings to designated organizational officials."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing audit review schedules, undefined review procedures, or lack of documented review activities and findings.
