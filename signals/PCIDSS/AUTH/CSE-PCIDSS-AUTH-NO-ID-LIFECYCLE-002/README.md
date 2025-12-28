# CSE-PCIDSS-AUTH-NO-ID-LIFECYCLE-002

**No User ID Lifecycle Management**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-AUTH-NO-ID-LIFECYCLE-002` |
| Domain          | PCIDSS                                   |
| Category        | AUTH                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

User and administrator IDs are not managed throughout the account lifecycle.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Identity and access management systems
- User directories and authentication services
- Administrative access to CDE components
- Remote access to payment systems

## PCI DSS Context (Informative)

**Requirement:** 8.2 User identification and related accounts for users and administrators are strictly managed throughout an account's lifecycle.

**Sub-Requirement:** 8.2.1

**Regulatory Text:** "All users are assigned a unique ID before access to system components or cardholder data is allowed."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Examine user account provisioning and deprovisioning processes. Look for evidence of unique user ID assignments, proper account creation procedures, timely account disablement upon termination, and regular account reviews. Shared accounts, missing deprovisioning processes, or lack of account lifecycle tracking indicates this signal.
