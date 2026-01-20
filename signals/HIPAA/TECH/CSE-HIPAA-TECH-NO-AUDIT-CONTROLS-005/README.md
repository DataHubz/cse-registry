# CSE-HIPAA-TECH-NO-AUDIT-CONTROLS-005

**No Audit Controls**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-TECH-NO-AUDIT-CONTROLS-005` |
| Domain          | HIPAA                                    |
| Category        | TECH                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No hardware, software, or procedural mechanisms to record and examine activity in systems containing ePHI.

## Applicability

This signal applies to:

- Electronic health record (EHR) systems
- Health information exchanges (HIEs)
- Patient portals and healthcare applications
- Database systems containing ePHI
- Network infrastructure transmitting ePHI
- Cloud services hosting healthcare data

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.312(b)
**Requirement Type:** Required

**Regulatory Text:** "Audit controls (Required). Implement hardware, software, and/or procedural mechanisms that record and examine activity in information systems that contain or use electronic protected health information."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Review system logging configurations and audit trail capabilities. Verify that systems capture user access, modifications, deletions, and other activities involving ePHI. Check for centralized log management, log retention policies, and regular audit log reviews. Identify systems with disabled logging or insufficient audit trail detail.
