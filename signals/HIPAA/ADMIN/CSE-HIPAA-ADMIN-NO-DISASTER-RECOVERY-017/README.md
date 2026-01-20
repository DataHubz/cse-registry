# CSE-HIPAA-ADMIN-NO-DISASTER-RECOVERY-017

**No Disaster Recovery Plan**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-ADMIN-NO-DISASTER-RECOVERY-017` |
| Domain          | HIPAA                                    |
| Category        | ADMIN                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No procedures exist for restoring any loss of data containing electronic protected health information (ePHI) following a disaster or system failure.

This signal indicates the absence of documented disaster recovery processes to enable timely restoration of ePHI and related systems.

## Applicability

This signal applies to:

- Covered entities (healthcare providers, health plans, healthcare clearinghouses)
- Business associates handling ePHI
- Health information systems and EHR platforms
- Cloud service providers hosting ePHI
- IT infrastructure supporting healthcare operations

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.308(a)(7)(ii)(B)
**Requirement Type:** Required

**Regulatory Text:** "Establish (and implement as needed) procedures to restore any loss of data."

These references are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Review of disaster recovery policies and procedures
- Examination of recovery time objectives (RTOs) and recovery point objectives (RPOs)
- Analysis of disaster recovery testing and exercise documentation
- Verification of data restoration procedures and capabilities
- Assessment of recovery infrastructure and resources

The presence of this signal indicates that the organization may be unable to recover ePHI following a disaster or major system failure.
