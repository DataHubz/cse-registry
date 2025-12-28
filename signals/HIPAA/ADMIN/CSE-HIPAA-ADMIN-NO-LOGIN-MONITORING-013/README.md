# CSE-HIPAA-ADMIN-NO-LOGIN-MONITORING-013

**No Log-in Monitoring**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-ADMIN-NO-LOGIN-MONITORING-013` |
| Domain          | HIPAA                                    |
| Category        | ADMIN                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No procedures exist for monitoring log-in attempts to systems containing electronic protected health information (ePHI) and reporting discrepancies such as failed login attempts or unusual access patterns.

This signal indicates the absence of documented processes to detect and respond to potentially unauthorized access attempts.

## Applicability

This signal applies to:

- Covered entities (healthcare providers, health plans, healthcare clearinghouses)
- Business associates handling ePHI
- Health information systems and EHR platforms
- Cloud service providers hosting ePHI
- IT infrastructure supporting healthcare operations

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.308(a)(5)(ii)(C)
**Requirement Type:** Addressable

**Regulatory Text:** "Implement procedures for monitoring log-in attempts and reporting discrepancies."

These references are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Review of log-in monitoring procedures and policies
- Examination of authentication log collection and analysis tools
- Analysis of failed login attempt detection and alerting mechanisms
- Verification of discrepancy reporting workflows
- Assessment of monitoring coverage across ePHI systems

The presence of this signal indicates that unauthorized access attempts may go undetected or unreported.
