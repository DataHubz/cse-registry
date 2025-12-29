# CSE-FEDRAMP-CA-NO-AUTHORIZATION-005

**No Authorization Process**

## Signal Overview

| Field           | Value                                        |
|-----------------|----------------------------------------------|
| Identifier      | `CSE-FEDRAMP-CA-NO-AUTHORIZATION-005`        |
| Domain          | FEDRAMP                                      |
| Category        | CA                                           |
| Status          | Active                                       |
| Introduced In   | 1.0.0                                        |

## Description

The organization lacks a formal security authorization process, or an information system is operating without proper authorization from designated officials.

This signal indicates that systems are not undergoing required security assessments and receiving authorization decisions before being placed into operation, or that authorization packages are incomplete, outdated, or missing critical elements required for FedRAMP authorization.

## Applicability

This signal applies to:

- Cloud Service Providers (CSPs) seeking FedRAMP authorization
- Federal agencies implementing cloud services
- Third Party Assessment Organizations (3PAOs) conducting assessments
- Federal information systems requiring authorization

## FedRAMP Context (Informative)

**Control Family:** Security Assessment and Authorization (CA)

**Control:** CA-6 - Security Authorization

**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "The organization: (a) Assigns a senior-level executive or manager as the authorizing official for the information system; (b) Ensures that the authorizing official authorizes the information system for processing before commencing operations; and (c) Updates the security authorization [FedRAMP Assignment: in accordance with OMB A-130 or when a significant change occurs]."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance:

- Verify that an authorizing official has been formally designated for the system
- Check for the existence of a current and valid Authorization to Operate (ATO)
- Confirm that authorization was granted before the system commenced operations
- Review the authorization package for completeness (System Security Plan, Security Assessment Report, POA&M)
- Validate that authorization is updated when significant changes occur or as required by OMB A-130
- For FedRAMP systems, verify JAB P-ATO or Agency ATO with appropriate documentation
- Check authorization expiration dates and reauthorization schedules
- Examine whether authorization decisions are based on risk assessments and security control evaluations
- Verify that authorization documentation is properly maintained and accessible
- Confirm that conditional authorizations include documented conditions and tracking of their fulfillment
