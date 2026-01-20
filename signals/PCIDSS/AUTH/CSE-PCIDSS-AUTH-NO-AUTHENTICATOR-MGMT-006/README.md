# CSE-PCIDSS-AUTH-NO-AUTHENTICATOR-MGMT-006

**No Authenticator Management**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-AUTH-NO-AUTHENTICATOR-MGMT-006` |
| Domain          | PCIDSS                                   |
| Category        | AUTH                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Accounts and authentication factors are not strictly managed.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Identity and access management systems
- User directories and authentication services
- Administrative access to CDE components
- Remote access to payment systems

## PCI DSS Context (Informative)

**Requirement:** 8.6 Use of application and system accounts and associated authentication factors is strictly managed.

**Sub-Requirement:** 8.6.1

**Regulatory Text:** "If accounts used by systems or applications can be used for interactive login, they are managed as follows: Interactive use is prevented unless needed for an exceptional circumstance. Interactive use is limited to the time needed for the exceptional circumstance. Business justification for interactive use is documented. Interactive use is explicitly approved by management. Individual user identity is confirmed before access to account is granted. Every action taken is attributable to an individual user."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Review system and application account management practices. Look for controls preventing interactive login to service accounts, monitoring of authentication factor usage, and documentation of exceptional access. Uncontrolled service accounts, missing authentication factor management, or lack of accountability for privileged account usage indicates this signal.
