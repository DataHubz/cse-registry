# CSE-FEDRAMP-SI-NO-INPUT-VALIDATION-009

**No Information Input Validation**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SI-NO-INPUT-VALIDATION-009` |
| Domain          | FEDRAMP                                  |
| Category        | SI                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information input validation mechanisms are not implemented to check validity of inputs to the system.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Information Integrity (SI)
**Control:** SI-10
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Check the validity of information inputs to the system."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing input validation routines, absence of data type and format checking, lack of boundary validation, no protection against injection attacks (SQL, command, XSS), and missing allowlist/denylist implementations.
