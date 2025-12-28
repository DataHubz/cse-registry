# CSE-NISTCSF-AA-NO-ASSERTION-PROTECTION-004

**No Identity Assertion Protection**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-NISTCSF-AA-NO-ASSERTION-PROTECTION-004` |
| Domain          | NISTCSF                                  |
| Category        | AA                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Identity assertions are not protected, conveyed, and verified.

## Applicability

This signal applies to:

- All organizations implementing cybersecurity safeguards
- Identity and access management teams
- Security awareness and training programs
- Organizations managing user authentication

## NIST CSF 2.0 Context (Informative)

**Function:** PROTECT (PR)
**Category:** Identity Management, Authentication, and Access Control
**Subcategory:** PR.AA-04

**Framework Text:** "Identity assertions are protected, conveyed, and verified"

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Identify authentication flows where identity assertions (such as tokens, tickets, or SAML assertions) lack cryptographic protection during transmission, are conveyed over insecure channels, or are not properly validated by relying parties before granting access.
