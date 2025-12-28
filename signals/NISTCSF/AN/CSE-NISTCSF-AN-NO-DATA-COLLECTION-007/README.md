# CSE-NISTCSF-AN-NO-DATA-COLLECTION-007

**Incident Data and Metadata Not Collected and Preserved**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-NISTCSF-AN-NO-DATA-COLLECTION-007` |
| Domain          | NISTCSF                                  |
| Category        | RS.AN                                    |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Incident data and metadata are not collected and preserved.

## Applicability

This signal applies to:

- All organizations with incident response capabilities
- Security operations and incident response teams
- Forensics and investigation functions
- Organizations with breach notification requirements

## NIST CSF 2.0 Context (Informative)

**Function:** RESPOND (RS)
**Category:** RS.AN - Incident Analysis
**Subcategory:** RS.AN-07

**Framework Text:** "Incident data and metadata are collected, and their integrity and provenance are preserved"

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Identify incidents where logs, memory dumps, disk images, network captures, or system snapshots were not preserved. Monitor for missing metadata such as timestamps, user contexts, network flow information, or file hashes. Look for evidence spoliation risks from premature system restoration, log rotation, or backup overwrites before forensic data collection.
