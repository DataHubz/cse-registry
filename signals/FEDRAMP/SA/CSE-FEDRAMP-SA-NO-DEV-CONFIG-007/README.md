# CSE-FEDRAMP-SA-NO-DEV-CONFIG-007

**No Developer Configuration Management**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SA-NO-DEV-CONFIG-007` |
| Domain          | FEDRAMP                                  |
| Category        | SA                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Configuration management is not required during system, component, or service development including documentation, tracking, and control of security-relevant changes.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Services Acquisition (SA)
**Control:** SA-10
**Baseline:** Moderate, High

**NIST 800-53 Text:** "Require the developer of the system, system component, or system service to: (1) Perform configuration management during system, component, or service development, implementation, and operation; (2) Document, manage, and control the integrity of changes to [Assignment: organization-defined configuration items under configuration management]; (3) Implement only organization-approved changes to the system, component, or service; (4) Document approved changes to the system, component, or service and the potential security and privacy impacts of such changes; and (5) Track security flaws and flaw resolution within the system, component, or service and report findings to [Assignment: organization-defined personnel]."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing developer configuration management processes, absence of change tracking systems, lack of integrity controls for configuration items, unapproved changes to system components, missing documentation of security impacts, inadequate security flaw tracking, and absence of flaw resolution reporting mechanisms.
