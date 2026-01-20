# CSE-FEDRAMP-AC-NO-ACCOUNT-MGMT-002

**No Account Management**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-AC-NO-ACCOUNT-MGMT-002` |
| Domain          | FEDRAMP                                  |
| Category        | AC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Account management procedures are not implemented, including account creation, modification, disabling, and termination processes.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Access Control (AC)
**Control:** AC-2
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Manage information system accounts... identify account types... establish conditions for group and role membership... specify authorized users... specify access authorizations... require approvals... create, enable, modify, disable, and remove accounts."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing account management procedures, lack of account approval workflows, absence of account review processes, no monitoring of account usage, and missing documentation of authorized users and access levels.
