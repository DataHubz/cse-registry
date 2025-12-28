# CSE-FEDRAMP-SI-NO-ERROR-HANDLING-010

**No Error Handling**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SI-NO-ERROR-HANDLING-010`  |
| Domain          | FEDRAMP                                  |
| Category        | SI                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Error handling mechanisms are not implemented to identify and handle error conditions in a secure manner.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Information Integrity (SI)
**Control:** SI-11
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Generate error messages that provide information necessary for corrective actions without revealing information that could be exploited; and reveal error messages only to authorized personnel."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for verbose error messages revealing system details, stack traces exposed to users, database errors displaying schema information, missing custom error pages, and lack of secure error logging mechanisms.
