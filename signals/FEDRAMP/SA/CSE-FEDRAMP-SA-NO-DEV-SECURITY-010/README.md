# CSE-FEDRAMP-SA-NO-DEV-SECURITY-010

**No Development Process and Standards**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SA-NO-DEV-SECURITY-010` |
| Domain          | FEDRAMP                                  |
| Category        | SA                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Security and privacy requirements, descriptions, design considerations, and development processes are not required for the developer of the information system, component, or service.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Services Acquisition (SA)
**Control:** SA-15
**Baseline:** Moderate, High

**NIST 800-53 Text:** "Require the developer of the system, system component, or system service to follow a documented development process that: (1) Explicitly addresses security and privacy requirements; (2) Identifies the standards and tools used in the development process; (3) Documents the specific tool options and tool configurations used in the development process; and (4) Documents, manages, and ensures the integrity of changes to the process and/or tools used in development."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing documented development processes, absence of security requirements in development standards, lack of privacy considerations in design, undocumented development tools and configurations, missing change management for development processes, inadequate integrity controls for development tools, and absence of security and privacy standards integration in SDLC.
