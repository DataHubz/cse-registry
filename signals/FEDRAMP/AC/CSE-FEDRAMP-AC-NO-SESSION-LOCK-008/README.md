# CSE-FEDRAMP-AC-NO-SESSION-LOCK-008

**No Session Lock**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-AC-NO-SESSION-LOCK-008` |
| Domain          | FEDRAMP                                  |
| Category        | AC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Session lock mechanisms are not implemented to prevent access to active sessions after a defined period of inactivity.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Access Control (AC)
**Control:** AC-11
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Prevent further access to the system by initiating a session lock after a defined period of inactivity or upon receiving a request from a user; retain the session lock until the user reestablishes access using established identification and authentication procedures."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing session timeout configurations, no automatic screen lock mechanisms, absence of session lock policies, systems not requiring re-authentication after inactivity, and lack of session lock enforcement on remote access sessions.
