# CSE-HIPAA-ADMIN-NO-DATA-BACKUP-016

**No Data Backup Plan**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-ADMIN-NO-DATA-BACKUP-016` |
| Domain          | HIPAA                                    |
| Category        | ADMIN                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No procedures exist to create and maintain retrievable exact copies of electronic protected health information (ePHI) to ensure data availability and business continuity.

This signal indicates the absence of documented backup processes to protect against data loss and enable recovery of ePHI.

## Applicability

This signal applies to:

- Covered entities (healthcare providers, health plans, healthcare clearinghouses)
- Business associates handling ePHI
- Health information systems and EHR platforms
- Cloud service providers hosting ePHI
- IT infrastructure supporting healthcare operations

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.308(a)(7)(ii)(A)
**Requirement Type:** Required

**Regulatory Text:** "Establish and implement procedures to create and maintain retrievable exact copies of electronic protected health information."

These references are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Review of data backup policies and procedures
- Examination of backup schedules and retention periods
- Analysis of backup storage locations and media protection
- Verification of backup completeness and integrity testing
- Assessment of backup retrieval capabilities and restoration testing

The presence of this signal indicates that ePHI may be permanently lost in the event of system failures or disasters.
