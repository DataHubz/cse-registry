# CSE-FEDRAMP-CM-NO-CHANGE-CONTROL-003

**No Configuration Change Control**

## Signal Overview

| Field           | Value                                        |
|-----------------|----------------------------------------------|
| Identifier      | `CSE-FEDRAMP-CM-NO-CHANGE-CONTROL-003`      |
| Domain          | FEDRAMP                                      |
| Category        | CM                                           |
| Status          | Active                                       |
| Introduced In   | 1.0.0                                        |

## Description

No configuration change control process has been established to determine, approve, and track configuration-controlled changes to the information system.

## Applicability

This signal applies to:

- Cloud Service Providers (CSPs) seeking FedRAMP authorization
- Federal agencies operating cloud systems
- Third Party Assessment Organizations (3PAOs) conducting assessments
- Federal information systems processing government data

## FedRAMP Context (Informative)

**Control Family:** Configuration Management (CM)
**Control Number:** CM-3
**FedRAMP Baseline:** Low, Moderate, High

**NIST SP 800-53 Rev. 5 Text:** "The organization determines the types of changes to the information system that are configuration-controlled; reviews proposed configuration-controlled changes to the information system and approves or disapproves such changes with explicit consideration for security impact analyses; documents configuration change decisions associated with the information system; implements approved configuration-controlled changes to the information system; retains records of configuration-controlled changes to the information system for [Assignment: organization-defined time period]; audits and reviews activities associated with configuration-controlled changes to the information system; and coordinates and provides oversight for configuration change control activities."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Review change management systems, ticketing systems, and deployment processes to verify existence of formal change control procedures. Look for untracked changes, absence of change approval workflows, missing change advisory boards (CAB), or lack of documented change requests. Check for direct production changes without approval, missing rollback procedures, or absence of change logs and audit trails.
