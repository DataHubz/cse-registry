# CSE-HIPAA-TECH-NO-AUTO-LOGOFF-003

**No Automatic Logoff**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-TECH-NO-AUTO-LOGOFF-003` |
| Domain          | HIPAA                                    |
| Category        | TECH                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No electronic procedures to terminate sessions after predetermined period of inactivity.

## Applicability

This signal applies to:

- Electronic health record (EHR) systems
- Health information exchanges (HIEs)
- Patient portals and healthcare applications
- Database systems containing ePHI
- Network infrastructure transmitting ePHI
- Cloud services hosting healthcare data

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.312(a)(2)(iii)
**Requirement Type:** Addressable

**Regulatory Text:** "Automatic logoff (Addressable). Implement electronic procedures that terminate an electronic session after a predetermined time of inactivity."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Test application and system session timeout settings to verify automatic logoff functionality. Check for configured idle timeout periods in web applications, terminal sessions, and database connections. Monitor for systems that allow indefinite session persistence or require manual logout only.
