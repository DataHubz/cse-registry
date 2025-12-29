# CSE-HIPAA-TECH-NO-TRANSMISSION-INTEGRITY-008

**No Transmission Integrity Controls**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-TECH-NO-TRANSMISSION-INTEGRITY-008` |
| Domain          | HIPAA                                    |
| Category        | TECH                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No security measures to ensure electronically transmitted ePHI is not improperly modified without detection.

## Applicability

This signal applies to:

- Electronic health record (EHR) systems
- Health information exchanges (HIEs)
- Patient portals and healthcare applications
- Database systems containing ePHI
- Network infrastructure transmitting ePHI
- Cloud services hosting healthcare data

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.312(e)(2)(i)
**Requirement Type:** Addressable

**Regulatory Text:** "Integrity controls (Addressable). Implement security measures to ensure that electronically transmitted electronic protected health information is not improperly modified without detection until disposed of."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Review network transmission protocols and security measures for ePHI transfers. Check for integrity verification mechanisms such as message authentication codes (MACs), digital signatures, or secure protocols (TLS/SSL) that include integrity checking. Verify that file transfers, API communications, and messaging systems implement tamper detection.
