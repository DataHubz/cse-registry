# CSE-NISTCSF-MA-NO-TRIAGE-002

**Incident Reports Not Triaged and Validated**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-NISTCSF-MA-NO-TRIAGE-002` |
| Domain          | NISTCSF                                  |
| Category        | RS.MA                                    |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Incident reports are not triaged and validated.

## Applicability

This signal applies to:

- All organizations with incident response capabilities
- Security operations and incident response teams
- Forensics and investigation functions
- Organizations with breach notification requirements

## NIST CSF 2.0 Context (Informative)

**Function:** RESPOND (RS)
**Category:** RS.MA - Incident Management
**Subcategory:** RS.MA-02

**Framework Text:** "Incident reports are triaged and validated"

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Identify incident reports that bypass triage processes or lack validation steps. Monitor for alerts that go directly to investigation without initial assessment, missing triage timestamps, incomplete initial classification fields, or reports lacking analyst validation signatures. Check for backlogs of unreviewed alerts or incidents submitted without proper vetting.
