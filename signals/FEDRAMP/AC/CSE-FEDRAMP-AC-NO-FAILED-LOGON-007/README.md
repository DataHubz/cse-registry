# CSE-FEDRAMP-AC-NO-FAILED-LOGON-007

**No Unsuccessful Logon Attempts Handling**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-AC-NO-FAILED-LOGON-007` |
| Domain          | FEDRAMP                                  |
| Category        | AC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Controls for handling unsuccessful logon attempts are not implemented, including account lockout and delay mechanisms.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Access Control (AC)
**Control:** AC-7
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Enforce a limit of consecutive invalid logon attempts by a user during a time period; automatically lock/disable account or node when the maximum number of unsuccessful attempts is exceeded."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing account lockout policies, no tracking of failed logon attempts, absence of automatic account disabling mechanisms, lack of delay between failed attempts, and no alerting on repeated failed logon attempts.
