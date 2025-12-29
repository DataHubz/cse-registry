# CSE-PCIDSS-PHYSICAL-NO-MEDIA-SECURITY-004

**No Media Security**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-PHYSICAL-NO-MEDIA-SECURITY-004` |
| Domain          | PCIDSS                                   |
| Category        | PHYSICAL                                 |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Media containing cardholder data is not stored, accessed, and destroyed securely.

## Applicability

This signal applies to:

- Data centers and server rooms housing CDE
- Point-of-sale (POS) environments
- Payment terminal locations
- SIEM and log management systems
- All systems within CDE scope

## PCI DSS Context (Informative)

**Requirement:** 9.4 Media with cardholder data is securely stored, accessed, transported, and destroyed

**Sub-Requirement:** 9.4.1

**Regulatory Text:** "All media is physically secured, including but not limited to computers, removable electronic media, paper receipts, paper reports, and faxes."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Look for unsecured backup tapes, unencrypted removable media, lack of media inventory tracking, absence of secure destruction processes, or evidence of improper media handling and disposal procedures.
