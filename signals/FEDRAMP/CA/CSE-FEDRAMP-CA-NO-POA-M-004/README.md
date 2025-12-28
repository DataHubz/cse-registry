# CSE-FEDRAMP-CA-NO-POA-M-004

**No Plan of Action and Milestones**

## Signal Overview

| Field           | Value                                        |
|-----------------|----------------------------------------------|
| Identifier      | `CSE-FEDRAMP-CA-NO-POA-M-004`                |
| Domain          | FEDRAMP                                      |
| Category        | CA                                           |
| Status          | Active                                       |
| Introduced In   | 1.0.0                                        |

## Description

The organization lacks a Plan of Action and Milestones (POA&M) to document planned remedial actions for addressing weaknesses or deficiencies noted during security control assessments.

This signal indicates the absence of a formal tracking mechanism for security findings, vulnerabilities, and remediation efforts, which is essential for FedRAMP continuous monitoring and maintaining an authorized status.

## Applicability

This signal applies to:

- Cloud Service Providers (CSPs) seeking FedRAMP authorization
- Federal agencies implementing cloud services
- Third Party Assessment Organizations (3PAOs) conducting assessments
- Federal information systems requiring authorization

## FedRAMP Context (Informative)

**Control Family:** Security Assessment and Authorization (CA)

**Control:** CA-5 - Plan of Action and Milestones

**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "The organization: (a) Develops a plan of action and milestones for the information system to document the organization's planned remedial actions to correct weaknesses or deficiencies noted during the assessment of the security controls and to reduce or eliminate known vulnerabilities in the system; and (b) Updates existing plan of action and milestones [FedRAMP Assignment: at least monthly] based on the findings from security controls assessments, security impact analyses, and continuous monitoring activities."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance:

- Check for the existence of a documented POA&M
- Verify that the POA&M includes all identified weaknesses and deficiencies from assessments
- Confirm that POA&M items include planned remedial actions, resources required, and completion milestones
- Validate that the POA&M is updated at least monthly as required by FedRAMP
- Review POA&M for tracking of vulnerabilities, control weaknesses, and compliance gaps
- Examine whether POA&M items have assigned owners and realistic completion dates
- Check that closed POA&M items have documented evidence of remediation
- Verify that the POA&M is submitted to FedRAMP PMO as required for continuous monitoring
- Confirm integration between POA&M and continuous monitoring processes
- Review aging analysis of open POA&M items to identify remediation delays
