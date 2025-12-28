# CSE-NISTCSF-MA-NO-RECOVERY-CRITERIA-005

**Criteria for Initiating Incident Recovery Not Applied**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-NISTCSF-MA-NO-RECOVERY-CRITERIA-005` |
| Domain          | NISTCSF                                  |
| Category        | RS.MA                                    |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Criteria for initiating incident recovery are not applied.

## Applicability

This signal applies to:

- All organizations with incident response capabilities
- Security operations and incident response teams
- Forensics and investigation functions
- Organizations with breach notification requirements

## NIST CSF 2.0 Context (Informative)

**Function:** RESPOND (RS)
**Category:** RS.MA - Incident Management
**Subcategory:** RS.MA-05

**Framework Text:** "The criteria for initiating incident recovery are applied"

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Look for incidents transitioning to recovery phase without documented criteria being met, premature recovery initiation before containment verification, missing approval checkpoints for recovery operations, or recovery activities starting without validation that threats have been eradicated. Monitor for gaps between incident resolution and formal recovery criteria assessment.
