# CSE-NISTCSF-RP-NO-BACKUP-INTEGRITY-003

**Backup and Restoration Asset Integrity Not Verified Before Use**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-NISTCSF-RP-NO-BACKUP-INTEGRITY-003` |
| Domain          | NISTCSF                                  |
| Category        | RP                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

The integrity of backups and other restoration assets is not verified before use.

## Applicability

This signal applies to:

- All organizations with business continuity and disaster recovery requirements
- Incident recovery and restoration teams
- Communications and public relations functions
- Organizations with regulatory recovery requirements

## NIST CSF 2.0 Context (Informative)

**Function:** RECOVER (RC)
**Category:** RC.RP - Incident Recovery Plan Execution
**Subcategory:** RC.RP-03

**Framework Text:** "The integrity of backups and other restoration assets is verified before using them for restoration"

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Monitor for backup restorations that occur without hash verification, signature validation, or integrity checks. Look for missing pre-restoration testing procedures or skipped verification steps during recovery operations that could introduce compromised data.
