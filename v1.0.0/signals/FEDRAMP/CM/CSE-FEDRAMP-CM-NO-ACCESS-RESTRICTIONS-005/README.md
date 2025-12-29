# CSE-FEDRAMP-CM-NO-ACCESS-RESTRICTIONS-005

**No Access Restrictions for Changes**

## Signal Overview

| Field           | Value                                             |
|-----------------|---------------------------------------------------|
| Identifier      | `CSE-FEDRAMP-CM-NO-ACCESS-RESTRICTIONS-005`      |
| Domain          | FEDRAMP                                           |
| Category        | CM                                                |
| Status          | Active                                            |
| Introduced In   | 1.0.0                                             |

## Description

No access restrictions are defined, documented, approved, or enforced for changes to the information system, allowing unauthorized personnel to make configuration changes.

## Applicability

This signal applies to:

- Cloud Service Providers (CSPs) seeking FedRAMP authorization
- Federal agencies operating cloud systems
- Third Party Assessment Organizations (3PAOs) conducting assessments
- Federal information systems processing government data

## FedRAMP Context (Informative)

**Control Family:** Configuration Management (CM)
**Control Number:** CM-5
**FedRAMP Baseline:** Low, Moderate, High

**NIST SP 800-53 Rev. 5 Text:** "The organization defines, documents, approves, and enforces physical and logical access restrictions associated with changes to the information system."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Review access control lists, role-based access controls (RBAC), and privileged access management systems to verify restrictions on who can make configuration changes. Look for overly permissive access rights, lack of separation of duties between development and production environments, missing audit logs for configuration changes, or absence of documented approval requirements for change access. Check for users with unnecessary administrative privileges or missing access controls on configuration management tools.
