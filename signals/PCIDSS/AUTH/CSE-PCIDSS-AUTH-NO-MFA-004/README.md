# CSE-PCIDSS-AUTH-NO-MFA-004

**No Multi-Factor Authentication**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-AUTH-NO-MFA-004` |
| Domain          | PCIDSS                                   |
| Category        | AUTH                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Multi-factor authentication is not used to secure CDE access.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Identity and access management systems
- User directories and authentication services
- Administrative access to CDE components
- Remote access to payment systems

## PCI DSS Context (Informative)

**Requirement:** 8.4 Multi-factor authentication (MFA) is implemented to secure access into the CDE.

**Sub-Requirement:** 8.4.2

**Regulatory Text:** "MFA is implemented for all access into the CDE."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Review authentication mechanisms for CDE access points including administrative consoles, remote access solutions, and application interfaces. Verify that at least two independent authentication factors (something you know, something you have, something you are) are required. Single-factor authentication to CDE components indicates this signal.
