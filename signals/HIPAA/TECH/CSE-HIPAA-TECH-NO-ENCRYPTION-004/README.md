# CSE-HIPAA-TECH-NO-ENCRYPTION-004

**No Encryption and Decryption**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-TECH-NO-ENCRYPTION-004` |
| Domain          | HIPAA                                    |
| Category        | TECH                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No mechanism to encrypt and decrypt ePHI.

## Applicability

This signal applies to:

- Electronic health record (EHR) systems
- Health information exchanges (HIEs)
- Patient portals and healthcare applications
- Database systems containing ePHI
- Network infrastructure transmitting ePHI
- Cloud services hosting healthcare data

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.312(a)(2)(iv)
**Requirement Type:** Addressable

**Regulatory Text:** "Encryption and decryption (Addressable). Implement a mechanism to encrypt and decrypt electronic protected health information."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Examine data storage configurations, database encryption settings, and file system encryption status. Check for unencrypted ePHI at rest on servers, workstations, portable devices, and backup media. Verify encryption standards and key management practices for systems that do implement encryption.
