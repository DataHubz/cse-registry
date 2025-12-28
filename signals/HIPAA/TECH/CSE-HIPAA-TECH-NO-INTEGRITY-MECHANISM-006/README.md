# CSE-HIPAA-TECH-NO-INTEGRITY-MECHANISM-006

**No ePHI Integrity Mechanism**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-TECH-NO-INTEGRITY-MECHANISM-006` |
| Domain          | HIPAA                                    |
| Category        | TECH                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No electronic mechanisms to corroborate that ePHI has not been altered or destroyed in an unauthorized manner.

## Applicability

This signal applies to:

- Electronic health record (EHR) systems
- Health information exchanges (HIEs)
- Patient portals and healthcare applications
- Database systems containing ePHI
- Network infrastructure transmitting ePHI
- Cloud services hosting healthcare data

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.312(c)(2)
**Requirement Type:** Addressable

**Regulatory Text:** "Mechanism to authenticate electronic protected health information (Addressable). Implement electronic mechanisms to corroborate that electronic protected health information has not been altered or destroyed in an unauthorized manner."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Examine systems for integrity verification mechanisms such as digital signatures, hash functions, checksums, or blockchain technologies. Review change management processes and version control systems for ePHI. Check for file integrity monitoring tools and database audit trails that detect unauthorized modifications.
