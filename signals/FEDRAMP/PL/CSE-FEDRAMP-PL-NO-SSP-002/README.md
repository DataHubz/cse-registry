# CSE-FEDRAMP-PL-NO-SSP-002

**No System Security Plan**

## Signal Overview

| Field           | Value                                     |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-FEDRAMP-PL-NO-SSP-002`               |
| Domain          | FEDRAMP                                   |
| Category        | PL                                        |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

The information system does not have a comprehensive System Security Plan (SSP) that describes the security and privacy controls in place or planned for the system.

This signal indicates that the organization may lack the fundamental documentation required for FedRAMP authorization, which describes the system boundary, environment, and implementation of security controls.

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
PL-2: System Security Plan

### Baseline
Low, Moderate, High

### NIST SP 800-53 Rev. 5
The organization:
- Develops a security and privacy plan for the system that:
  - Is consistent with the organization's architecture
  - Explicitly defines the constituent system components
  - Describes the operational context of the system in terms of mission and business processes
  - Identifies the individuals that fulfill system roles and responsibilities
  - Identifies the information types processed, stored, and transmitted by the system
  - Provides the security categorization of the system, including supporting rationale
  - Describes any specific threats to the system that are of concern to the organization
  - Provides the results of a privacy risk assessment for systems processing personally identifiable information
  - Describes the operational environment for the system and any dependencies on or connections to other systems or system components
  - Provides an overview of the security and privacy requirements for the system
  - Identifies any relevant control baselines or overlays, if applicable
  - Describes the controls in place or planned for meeting the security and privacy requirements, including a rationale for any tailoring decisions
  - Includes risk determinations for security and privacy architecture and design decisions
  - Is reviewed and approved by the authorizing official or designated representative prior to plan implementation
- Distributes copies of the plans and communicates subsequent changes to the plans to [Assignment: organization-defined personnel or roles]
- Reviews the plans [FedRAMP Assignment: at least annually]
- Updates the plans to address changes to the system and environment of operation or problems identified during plan implementation or control assessments
- Protects the plans from unauthorized disclosure and modification

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-FEDRAMP-PL-NO-PLANNING-POLICY-001` — No Planning Policy
- `CSE-FEDRAMP-CA-NO-AUTHORIZATION-005` — No System Authorization

## Notes

Detection of this signal typically involves:

- Review of System Security Plan documentation completeness
- Analysis of system boundary and component definitions
- Verification of security categorization and rationale
- Assessment of control implementation descriptions
- Examination of SSP approval and distribution records
- Inspection of SSP review and update schedules
- Review of privacy risk assessment inclusion
- Verification of alignment with FedRAMP SSP template requirements

The presence of this signal indicates a condition that warrants review in the context of FedRAMP authorization requirements. The SSP is a foundational document for FedRAMP and must be completed according to FedRAMP templates and guidance.
