# CSE-FEDRAMP-CM-NO-IMPACT-ANALYSIS-004

**No Impact Analysis**

## Signal Overview

| Field           | Value                                        |
|-----------------|----------------------------------------------|
| Identifier      | `CSE-FEDRAMP-CM-NO-IMPACT-ANALYSIS-004`     |
| Domain          | FEDRAMP                                      |
| Category        | CM                                           |
| Status          | Active                                       |
| Introduced In   | 1.0.0                                        |

## Description

No security impact analysis is performed before implementing changes to the information system to determine potential impacts on security.

## Applicability

This signal applies to:

- Cloud Service Providers (CSPs) seeking FedRAMP authorization
- Federal agencies operating cloud systems
- Third Party Assessment Organizations (3PAOs) conducting assessments
- Federal information systems processing government data

## FedRAMP Context (Informative)

**Control Family:** Configuration Management (CM)
**Control Number:** CM-4
**FedRAMP Baseline:** Low, Moderate, High

**NIST SP 800-53 Rev. 5 Text:** "The organization analyzes changes to the information system to determine potential security impacts prior to change implementation."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Review change management records, change request forms, and approval workflows to determine if security impact analyses are documented and performed before changes. Look for change requests that lack security impact assessments, missing risk analysis documentation, or changes implemented without security review. Check for absence of security team involvement in change approval processes or lack of documented security considerations in change records.
