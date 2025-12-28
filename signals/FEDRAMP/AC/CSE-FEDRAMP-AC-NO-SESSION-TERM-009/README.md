# CSE-FEDRAMP-AC-NO-SESSION-TERM-009

**No Session Termination**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-AC-NO-SESSION-TERM-009` |
| Domain          | FEDRAMP                                  |
| Category        | AC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Session termination mechanisms are not implemented to automatically end user sessions after defined conditions or time periods.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Access Control (AC)
**Control:** AC-12
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Automatically terminate a user session after defined conditions or trigger events requiring session disconnect."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing automatic session termination policies, sessions that persist indefinitely, lack of session timeout enforcement, no termination of sessions after user logout, and absence of network-level session termination controls.
