# CSE-FEDRAMP-CA-NO-ASSESSMENT-POLICY-001

**No Assessment Policy**

## Signal Overview

| Field           | Value                                        |
|-----------------|----------------------------------------------|
| Identifier      | `CSE-FEDRAMP-CA-NO-ASSESSMENT-POLICY-001`    |
| Domain          | FEDRAMP                                      |
| Category        | CA                                           |
| Status          | Active                                       |
| Introduced In   | 1.0.0                                        |

## Description

An organization lacks a documented security assessment and authorization policy or procedures for control assessment activities.

This signal indicates the absence of formal policies and procedures governing how security controls are assessed, documented, and authorized within the organization's information systems, which is a foundational requirement for FedRAMP authorization.

## Applicability

This signal applies to:

- Cloud Service Providers (CSPs) seeking FedRAMP authorization
- Federal agencies implementing cloud services
- Third Party Assessment Organizations (3PAOs) conducting assessments
- Federal information systems requiring authorization

## FedRAMP Context (Informative)

**Control Family:** Security Assessment and Authorization (CA)

**Control:** CA-1 - Security Assessment and Authorization Policy and Procedures

**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "The organization develops, documents, and disseminates to [Assignment: organization-defined personnel or roles]: (a) A security assessment and authorization policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance; and (b) Procedures to facilitate the implementation of the security assessment and authorization policy and associated security assessment and authorization controls."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance:

- Check for the existence of documented security assessment and authorization policies
- Verify that policies address purpose, scope, roles, responsibilities, and compliance requirements
- Confirm that procedures exist to facilitate implementation of the policy
- Validate that policies and procedures are disseminated to appropriate personnel
- Review policy update frequency and version control mechanisms
- Examine whether policies align with FedRAMP requirements and organizational risk management framework
