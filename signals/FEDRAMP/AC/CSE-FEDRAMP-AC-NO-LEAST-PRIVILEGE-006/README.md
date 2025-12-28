# CSE-FEDRAMP-AC-NO-LEAST-PRIVILEGE-006

**No Least Privilege**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-AC-NO-LEAST-PRIVILEGE-006` |
| Domain          | FEDRAMP                                  |
| Category        | AC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Least privilege principles are not enforced, allowing users and processes more access than necessary to perform their authorized tasks.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Access Control (AC)
**Control:** AC-6
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Employ the principle of least privilege, allowing only authorized accesses for users (or processes acting on behalf of users) that are necessary to accomplish assigned organizational tasks."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for excessive user privileges, overly permissive access rights, lack of privileged access reviews, absence of privilege escalation controls, users with administrative rights who don't require them, and no monitoring of privileged account usage.
