# CSE-HIPAA-TECH-NO-UNIQUE-USER-ID-001

**No Unique User Identification**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-TECH-NO-UNIQUE-USER-ID-001` |
| Domain          | HIPAA                                    |
| Category        | TECH                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No unique name and/or number assigned for identifying and tracking user identity.

## Applicability

This signal applies to:

- Electronic health record (EHR) systems
- Health information exchanges (HIEs)
- Patient portals and healthcare applications
- Database systems containing ePHI
- Network infrastructure transmitting ePHI
- Cloud services hosting healthcare data

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.312(a)(2)(i)
**Requirement Type:** Required

**Regulatory Text:** "Unique user identification (Required). Assign a unique name and/or number for identifying and tracking user identity."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Examine user account configurations, authentication systems, and access logs to verify that each user has been assigned a unique identifier. Look for shared accounts, generic usernames (e.g., "admin", "user"), or systems that allow multiple users to authenticate with the same credentials.
