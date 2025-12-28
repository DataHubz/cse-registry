# CSE-PCIDSS-AUTH-NO-STRONG-AUTH-003

**No Strong Authentication**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-AUTH-NO-STRONG-AUTH-003` |
| Domain          | PCIDSS                                   |
| Category        | AUTH                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Strong authentication is not established (passwords less than 12 characters, no complexity).

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Identity and access management systems
- User directories and authentication services
- Administrative access to CDE components
- Remote access to payment systems

## PCI DSS Context (Informative)

**Requirement:** 8.3 Strong authentication for users and administrators is established and managed.

**Sub-Requirement:** 8.3.6

**Regulatory Text:** "If passwords/passphrases are used as authentication factors to meet Requirement 8.3.1, they meet the following minimum level of complexity: A minimum length of 12 characters (or IF the system does not support 12 characters, a minimum length of eight characters). Contain both numeric and alphabetic characters."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Analyze password policies and authentication configurations. Check minimum password length requirements, complexity rules (numeric, alphabetic, special characters), and enforcement mechanisms. Passwords shorter than 12 characters or lacking complexity requirements indicate this signal.
