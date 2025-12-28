# CSE-PCIDSS-ACCESS-NO-RBAC-002

**No Role-Based Access Control**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-ACCESS-NO-RBAC-002` |
| Domain          | PCIDSS                                   |
| Category        | ACCESS                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Access to system components is not appropriately defined based on roles.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Identity and access management systems
- User directories and authentication services
- Administrative access to CDE components
- Remote access to payment systems

## PCI DSS Context (Informative)

**Requirement:** 7.2 Access to system components and data is appropriately defined and assigned.

**Sub-Requirement:** 7.2.1

**Regulatory Text:** "An access control model is defined and includes granting access as follows: Appropriate access depending on the entity's business and access needs. Access to system components and data resources based on users' job classification and functions (also referred to as "role-based access control" or RBAC). The least privileges required (for example, user, administrator) to perform a job function."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Examine user account configurations and permissions to determine if access is granted based on defined roles or assigned ad-hoc. Review access control models for evidence of role definitions, privilege mappings, and least privilege principles. Missing or undefined role-based access structures indicate this signal.
