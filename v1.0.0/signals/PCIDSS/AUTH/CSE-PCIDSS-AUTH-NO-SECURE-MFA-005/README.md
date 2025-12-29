# CSE-PCIDSS-AUTH-NO-SECURE-MFA-005

**No Secure MFA Configuration**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-AUTH-NO-SECURE-MFA-005` |
| Domain          | PCIDSS                                   |
| Category        | AUTH                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

MFA systems are not configured securely to prevent misuse.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Identity and access management systems
- User directories and authentication services
- Administrative access to CDE components
- Remote access to payment systems

## PCI DSS Context (Informative)

**Requirement:** 8.5 Multi-factor authentication (MFA) systems are configured to prevent misuse.

**Sub-Requirement:** 8.5.1

**Regulatory Text:** "MFA systems are implemented as follows: The MFA system is not susceptible to replay attacks. MFA systems cannot be bypassed by any users, including administrative users unless specifically documented, and authorized by management on an exception basis, for a limited time period."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Test MFA implementations for security weaknesses including replay attack vulnerabilities, bypass mechanisms, and configuration flaws. Review MFA system settings for replay protection, session management, and bypass prevention controls. Vulnerable or bypassable MFA configurations indicate this signal.
