# CSE-NISTCSF-RP-NO-RESTORATION-VERIFICATION-005

**Restored Asset Integrity Not Verified and Normal Status Not Confirmed**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-NISTCSF-RP-NO-RESTORATION-VERIFICATION-005` |
| Domain          | NISTCSF                                  |
| Category        | RP                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

The integrity of restored assets is not verified and normal operating status not confirmed.

## Applicability

This signal applies to:

- All organizations with business continuity and disaster recovery requirements
- Incident recovery and restoration teams
- Communications and public relations functions
- Organizations with regulatory recovery requirements

## NIST CSF 2.0 Context (Informative)

**Function:** RECOVER (RC)
**Category:** RC.RP - Incident Recovery Plan Execution
**Subcategory:** RC.RP-05

**Framework Text:** "The integrity of restored assets is verified, systems and services are restored, and normal operating status is confirmed"

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Monitor for systems returned to production without post-restoration integrity checks, functionality testing, or formal operational status confirmation. Look for missing validation steps that confirm restored assets are clean, functional, and operating within normal parameters.
