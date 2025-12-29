# CSE-PCIDSS-ACCESS-NO-ACCESS-MGMT-003

**No Access Management System**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-ACCESS-NO-ACCESS-MGMT-003` |
| Domain          | PCIDSS                                   |
| Category        | ACCESS                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Access to system components is not managed systematically.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Identity and access management systems
- User directories and authentication services
- Administrative access to CDE components
- Remote access to payment systems

## PCI DSS Context (Informative)

**Requirement:** 7.3 Access to system components and data is managed via an access control system(s).

**Sub-Requirement:** 7.3.1

**Regulatory Text:** "An access control system(s) is in place that restricts access based on a user's need to know and covers all system components."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Assess whether an access control system is deployed to manage user permissions across system components. Look for centralized identity management platforms, directory services, or access governance tools. Manual or decentralized access management without systematic controls indicates this signal.
