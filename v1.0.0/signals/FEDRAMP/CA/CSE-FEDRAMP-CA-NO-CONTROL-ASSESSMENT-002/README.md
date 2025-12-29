# CSE-FEDRAMP-CA-NO-CONTROL-ASSESSMENT-002

**No Control Assessments**

## Signal Overview

| Field           | Value                                        |
|-----------------|----------------------------------------------|
| Identifier      | `CSE-FEDRAMP-CA-NO-CONTROL-ASSESSMENT-002`   |
| Domain          | FEDRAMP                                      |
| Category        | CA                                           |
| Status          | Active                                       |
| Introduced In   | 1.0.0                                        |

## Description

Security controls are not being assessed to determine the extent to which they are implemented correctly, operating as intended, and producing the desired outcome.

This signal indicates the absence of regular, systematic control assessments that verify the effectiveness of security controls, which is critical for maintaining FedRAMP authorization and ensuring continuous compliance.

## Applicability

This signal applies to:

- Cloud Service Providers (CSPs) seeking FedRAMP authorization
- Federal agencies implementing cloud services
- Third Party Assessment Organizations (3PAOs) conducting assessments
- Federal information systems requiring authorization

## FedRAMP Context (Informative)

**Control Family:** Security Assessment and Authorization (CA)

**Control:** CA-2 - Security Assessments

**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "The organization: (a) Develops a security assessment plan that describes the scope of the assessment including: (1) Security controls and control enhancements under assessment; (2) Assessment procedures to be used to determine security control effectiveness; and (3) Assessment environment, assessment team, and assessment roles and responsibilities; (b) Assesses the security controls in the information system and its environment of operation [FedRAMP Assignment: at least annually] to determine the extent to which the controls are implemented correctly, operating as intended, and producing the desired outcome with respect to meeting established security requirements; (c) Produces a security assessment report that documents the results of the assessment; and (d) Provides the results of the security control assessment to [FedRAMP Assignment: individuals or roles to include the FedRAMP PMO]."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance:

- Verify the existence of a documented security assessment plan
- Check for evidence of regular control assessments (at least annually for FedRAMP)
- Review security assessment reports for completeness and currency
- Confirm assessment scope includes all required controls and control enhancements
- Validate that assessments are conducted by qualified personnel or 3PAOs
- Examine whether assessment results are properly documented and reported to stakeholders
- Check for assessment procedures that evaluate control implementation, operation, and effectiveness
- Verify that assessment findings are tracked and remediated appropriately
