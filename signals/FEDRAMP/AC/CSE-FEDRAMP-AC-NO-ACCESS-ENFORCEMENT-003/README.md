# CSE-FEDRAMP-AC-NO-ACCESS-ENFORCEMENT-003

**No Access Enforcement**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-AC-NO-ACCESS-ENFORCEMENT-003` |
| Domain          | FEDRAMP                                  |
| Category        | AC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Access enforcement mechanisms are not implemented to control access to system resources based on approved authorizations.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Access Control (AC)
**Control:** AC-3
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Enforce approved authorizations for logical access to information and system resources in accordance with applicable access control policies."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing role-based access controls (RBAC), lack of mandatory access controls (MAC), absence of discretionary access controls (DAC), no enforcement of authorization policies, and systems allowing unauthorized access to resources.
