# CSE-NISTCSF-AN-NO-MAGNITUDE-ESTIMATION-008

**Incident Magnitude Not Estimated and Validated**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-NISTCSF-AN-NO-MAGNITUDE-ESTIMATION-008` |
| Domain          | NISTCSF                                  |
| Category        | RS.AN                                    |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

An incident's magnitude is not estimated and validated.

## Applicability

This signal applies to:

- All organizations with incident response capabilities
- Security operations and incident response teams
- Forensics and investigation functions
- Organizations with breach notification requirements

## NIST CSF 2.0 Context (Informative)

**Function:** RESPOND (RS)
**Category:** RS.AN - Incident Analysis
**Subcategory:** RS.AN-08

**Framework Text:** "An incident's magnitude is estimated and validated"

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Look for incidents lacking scope assessments (number of affected systems, users, records), missing impact quantification (financial loss, downtime duration, data volume), or unvalidated initial estimations. Monitor for incidents closed without confirming the breadth of compromise, missing business impact analysis, or discrepancies between initial and final scope without documented validation processes.
