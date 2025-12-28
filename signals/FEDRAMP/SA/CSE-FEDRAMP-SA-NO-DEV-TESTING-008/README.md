# CSE-FEDRAMP-SA-NO-DEV-TESTING-008

**No Developer Testing and Evaluation**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SA-NO-DEV-TESTING-008` |
| Domain          | FEDRAMP                                  |
| Category        | SA                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Developer security and privacy testing and evaluation is not required to create evidence of security and privacy control effectiveness.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Services Acquisition (SA)
**Control:** SA-11
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Require the developer of the system, system component, or system service, at all post-design stages of the system development life cycle, to: (1) Develop and implement a plan for ongoing security and privacy control assessments; (2) Perform [Selection (one or more): unit; integration; system; regression] testing/evaluation [Assignment: organization-defined frequency] at [Assignment: organization-defined depth and coverage]; (3) Produce evidence of the execution of the assessment plan and the results of the testing and evaluation; (4) Implement a verifiable flaw remediation process; and (5) Correct flaws identified during testing and evaluation."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing developer testing plans, absence of security assessment evidence, lack of privacy testing procedures, missing unit and integration test results, inadequate regression testing, absence of flaw remediation processes, unverified security control effectiveness, and missing test coverage documentation.
