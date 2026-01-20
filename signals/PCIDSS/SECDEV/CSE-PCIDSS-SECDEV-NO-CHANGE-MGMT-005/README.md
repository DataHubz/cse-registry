# CSE-PCIDSS-SECDEV-NO-CHANGE-MGMT-005

**No Secure Change Management**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-SECDEV-NO-CHANGE-MGMT-005` |
| Domain          | PCIDSS                                   |
| Category        | SECDEV                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Changes to applications and software are not managed securely.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Payment application developers
- E-commerce platforms and merchants
- Systems and endpoints within CDE scope
- Web applications handling payment data

## PCI DSS Context (Informative)

**Requirement:** 6.5 - Changes to all system components are managed securely

**Sub-Requirement:** 6.5.1, 6.5.2, 6.5.3, 6.5.4, 6.5.5, 6.5.6

**Regulatory Text:** "Changes to all system components in the production environment are made according to established procedures that include: Change authorization. Security impact review. Verification that the change does not adversely impact the security of the system. Documentation of changes. Testing of security functionality. Procedures to address failures and return to secure state."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Monitor for unauthorized changes to production systems and applications. Review change management tickets for missing security impact assessments or approvals. Detect deployments that bypass established change control processes (shadow IT, emergency changes without proper documentation). Check for inadequate separation between development, testing, and production environments. Identify changes deployed without adequate testing, security validation, or rollback procedures. Review configuration management databases for drift between documented and actual system states.
