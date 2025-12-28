# CSE-PCIDSS-AUTH-NO-AUTH-PROCESS-001

**No Authentication Processes**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-AUTH-NO-AUTH-PROCESS-001` |
| Domain          | PCIDSS                                   |
| Category        | AUTH                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No defined processes for user identification and authentication.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Identity and access management systems
- User directories and authentication services
- Administrative access to CDE components
- Remote access to payment systems

## PCI DSS Context (Informative)

**Requirement:** 8.1 Processes and mechanisms for identifying and authenticating users are defined and understood.

**Sub-Requirement:** 8.1.1

**Regulatory Text:** "All security policies and operational procedures that are identified in Requirement 8 are documented, kept up to date, actively disseminated to affected personnel, and reviewed and acknowledged as understood at least once every 12 months."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Review documentation for formal authentication and identification processes. Look for defined user provisioning workflows, authentication method standards, and account lifecycle management procedures. Absence of documented processes for managing user identities and authentication indicates this signal.
