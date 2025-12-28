# CSE-FEDRAMP-IA-NO-IDENTIFIER-MGMT-004

**No Identifier Management**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-IA-NO-IDENTIFIER-MGMT-004` |
| Domain          | FEDRAMP                                  |
| Category        | IA                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information system identifiers are not properly managed, including receiving authorization, uniquely identifying individuals/devices, preventing reuse, and disabling after periods of inactivity.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Identification and Authentication (IA)
**Control:** IA-4
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Manage information system identifiers by: a. Receiving authorization from [Assignment: organization-defined personnel or roles] to assign an individual, group, role, or device identifier; b. Selecting an identifier that identifies an individual, group, role, or device; c. Assigning the identifier to the intended individual, group, role, or device; d. Preventing reuse of identifiers for [Assignment: organization-defined time period]; and e. Disabling the identifier after [Assignment: organization-defined time period of inactivity]."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for unauthorized user identifiers, duplicate or non-unique identifiers, reused identifiers that violate organizational policy, inactive identifiers that remain enabled beyond policy timeframes, missing identifier authorization workflows, absence of identifier lifecycle management processes, and group accounts without proper justification. Review user provisioning and deprovisioning processes.
