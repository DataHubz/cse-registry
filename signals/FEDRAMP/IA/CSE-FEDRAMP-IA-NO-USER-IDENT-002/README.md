# CSE-FEDRAMP-IA-NO-USER-IDENT-002

**No User Identification and Authentication**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-IA-NO-USER-IDENT-002` |
| Domain          | FEDRAMP                                  |
| Category        | IA                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information systems do not uniquely identify and authenticate organizational users or processes acting on behalf of organizational users.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Identification and Authentication (IA)
**Control:** IA-2
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Uniquely identify and authenticate organizational users (or processes acting on behalf of organizational users)."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for shared user accounts, missing unique identifiers for users, systems allowing unauthenticated access to protected resources, absence of authentication mechanisms (passwords, tokens, biometrics), and systems that cannot distinguish between different users. Check for multi-factor authentication requirements for privileged and non-privileged accounts as required by FedRAMP baselines.
