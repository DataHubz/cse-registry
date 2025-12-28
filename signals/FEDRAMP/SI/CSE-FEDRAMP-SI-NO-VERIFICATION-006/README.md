# CSE-FEDRAMP-SI-NO-VERIFICATION-006

**No Security and Privacy Function Verification**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SI-NO-VERIFICATION-006`    |
| Domain          | FEDRAMP                                  |
| Category        | SI                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Security and privacy functions are not verified to operate correctly and are not monitored for anomalous behavior.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Information Integrity (SI)
**Control:** SI-6
**Baseline:** Moderate, High

**NIST 800-53 Text:** "Verify the correct operation of security and privacy functions and report anomalies."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing security function testing procedures, absence of automated verification mechanisms, lack of anomaly detection for security controls, and no documented verification schedules.
