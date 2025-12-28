# CSE-NISTCSF-AN-NO-INVESTIGATION-RECORDS-006

**Actions Performed During Investigation Not Recorded**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-NISTCSF-AN-NO-INVESTIGATION-RECORDS-006` |
| Domain          | NISTCSF                                  |
| Category        | RS.AN                                    |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Actions performed during an investigation are not recorded.

## Applicability

This signal applies to:

- All organizations with incident response capabilities
- Security operations and incident response teams
- Forensics and investigation functions
- Organizations with breach notification requirements

## NIST CSF 2.0 Context (Informative)

**Function:** RESPOND (RS)
**Category:** RS.AN - Incident Analysis
**Subcategory:** RS.AN-06

**Framework Text:** "Actions performed during an investigation are recorded, and the records' integrity and provenance are preserved"

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Look for investigation activities without audit trails, missing chain of custody documentation, unlogged forensic tool usage, or analyst actions not captured in incident tracking systems. Monitor for lack of timestamped entries, missing digital signatures on evidence collection, or investigation steps performed outside documented procedures without record retention.
