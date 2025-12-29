# CSE-FEDRAMP-PL-NO-PRIVACY-IMPACT-004

**No Security and Privacy Architectures**

## Signal Overview

| Field           | Value                                     |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-FEDRAMP-PL-NO-PRIVACY-IMPACT-004`    |
| Domain          | FEDRAMP                                   |
| Category        | PL                                        |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

The organization does not develop and maintain security and privacy architectures for the information system that describe the requirements and approach to protecting the confidentiality, integrity, and availability of organizational information.

This signal indicates that the system may lack documented architectural descriptions that integrate security and privacy considerations into the overall enterprise architecture and system development life cycle.

## Applicability

This signal applies to:

- Cloud Service Providers (CSPs) pursuing FedRAMP authorization
- Federal agencies managing information systems
- Third Party Assessment Organizations (3PAOs) conducting assessments
- Federal information systems processing, storing, or transmitting federal data
- Organizations supporting federal cloud services

## FedRAMP Context (Informative)

### Control Family
Planning (PL)

### Control
PL-8: Security and Privacy Architectures

### Baseline
Low, Moderate, High

### NIST SP 800-53 Rev. 5
The organization:
- Develops security and privacy architectures for the system that:
  - Describe the requirements and approach to be taken for protecting the confidentiality, integrity, and availability of organizational information
  - Describe the requirements and approach to be taken for processing personally identifiable information to minimize privacy risk to individuals
  - Describe how the architectures are integrated into and support the enterprise architecture
  - Describe any assumptions about, and dependencies on, external systems and services
- Reviews and updates the architectures [FedRAMP Assignment: at least annually] to reflect changes in the enterprise architecture
- Ensures that planned architecture changes are reflected in security and privacy plans, security and privacy Concepts of Operations (CONOPS), criticality analysis, organizational procedures, and procurements and acquisitions

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-FEDRAMP-PL-NO-SSP-002` — No System Security Plan
- `CSE-FEDRAMP-PL-NO-PLANNING-POLICY-001` — No Planning Policy
- `CSE-FEDRAMP-SA-NO-DEVELOPER-SECURITY-005` — No Developer Security Architecture

## Notes

Detection of this signal typically involves:

- Review of security architecture documentation
- Analysis of privacy architecture documentation
- Verification of confidentiality, integrity, and availability requirements
- Assessment of privacy risk minimization approaches
- Examination of integration with enterprise architecture
- Inspection of external dependencies and assumptions
- Review of architecture update schedules
- Verification of architecture reflection in SSP and CONOPS
- Assessment of alignment with procurement and acquisition activities

The presence of this signal indicates a condition that warrants review in the context of FedRAMP planning requirements. Security and privacy architectures provide the foundation for implementing and integrating controls throughout the system life cycle.
