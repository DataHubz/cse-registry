# CSE-FEDRAMP-IA-NO-REPLAY-RESISTANCE-010

**No Re-authentication Requirements**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-IA-NO-REPLAY-RESISTANCE-010` |
| Domain          | FEDRAMP                                  |
| Category        | IA                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information systems do not require users to re-authenticate when performing privileged functions or after defined periods of inactivity.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Identification and Authentication (IA)
**Control:** IA-11
**Baseline:** Moderate, High

**NIST 800-53 Text:** "Require users to re-authenticate when [Assignment: organization-defined circumstances or situations requiring re-authentication]."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for systems not requiring re-authentication for privileged operations, missing re-authentication after session timeouts, ability to perform sensitive actions without credential verification, sessions that persist indefinitely without re-authentication, missing re-authentication for role elevation or privilege escalation, and absence of re-authentication requirements for high-value transactions. Verify re-authentication is required when accessing systems with different security categories or changing authorization attributes.
