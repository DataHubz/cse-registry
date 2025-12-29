# CSE-FEDRAMP-CP-NO-CONTINGENCY-PLAN-002

**No Contingency Plan**

## Signal Overview

| Field           | Value                                     |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-FEDRAMP-CP-NO-CONTINGENCY-PLAN-002`  |
| Domain          | FEDRAMP                                   |
| Category        | CP                                        |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

The information system does not have a documented contingency plan that identifies essential missions, business functions, recovery objectives, restoration priorities, and plan activation criteria.

This signal indicates that the organization may lack a comprehensive plan for maintaining or restoring operations in the event of disruptions, compromises, or failures.

## Applicability

This signal applies to:

- Cloud Service Providers (CSPs) pursuing FedRAMP authorization
- Federal agencies managing information systems
- Third Party Assessment Organizations (3PAOs) conducting assessments
- Federal information systems processing, storing, or transmitting federal data
- Organizations supporting federal cloud services

## FedRAMP Context (Informative)

### Control Family
Contingency Planning (CP)

### Control
CP-2: Contingency Plan

### Baseline
Low, Moderate, High

### NIST SP 800-53 Rev. 5
The organization:
- Develops a contingency plan for the information system that:
  - Identifies essential missions and business functions and associated contingency requirements
  - Provides recovery objectives, restoration priorities, and metrics
  - Addresses contingency roles, responsibilities, assigned individuals with contact information
  - Addresses maintaining essential missions and business functions despite an information system disruption, compromise, or failure
  - Addresses eventual, full information system restoration without deterioration of the security measures originally planned and implemented
- Distributes copies of the contingency plan to key contingency personnel
- Coordinates contingency planning activities with incident handling activities
- Reviews the contingency plan for the information system [FedRAMP Assignment: at least annually]
- Updates the contingency plan to address changes to the organization, information system, or environment

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-FEDRAMP-CP-NO-CONTINGENCY-POLICY-001` — No Contingency Planning Policy
- `CSE-FEDRAMP-CP-NO-CONTINGENCY-TESTING-004` — No Contingency Plan Testing

## Notes

Detection of this signal typically involves:

- Review of contingency plan documentation
- Analysis of essential missions and business functions identification
- Verification of recovery objectives (RTO/RPO) definitions
- Assessment of restoration priorities and procedures
- Examination of plan distribution and maintenance records
- Inspection of coordination with incident response activities
- Review of plan update and review schedules

The presence of this signal indicates a condition that warrants review in the context of FedRAMP contingency planning requirements.
