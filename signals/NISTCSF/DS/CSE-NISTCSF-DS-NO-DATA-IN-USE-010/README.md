# CSE-NISTCSF-DS-NO-DATA-IN-USE-010

**Data in Use Not Protected**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-NISTCSF-DS-NO-DATA-IN-USE-010` |
| Domain          | NISTCSF                                  |
| Category        | Data Security                            |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

The confidentiality, integrity, and availability of data-in-use are not protected.

## Applicability

This signal applies to:

- All organizations implementing cybersecurity safeguards
- Data protection and platform security teams
- Infrastructure resilience programs
- Organizations managing technology platforms

## NIST CSF 2.0 Context (Informative)

**Function:** PROTECT (PR)
**Category:** PR.DS - Data Security
**Subcategory:** PR.DS-10

**Framework Text:** "The confidentiality, integrity, and availability of data-in-use are protected"

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Monitor for lack of memory encryption, inadequate process isolation, missing secure enclaves or trusted execution environments, unprotected data in RAM, and insufficient controls to protect data during active processing and computation.
