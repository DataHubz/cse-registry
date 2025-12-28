# CSE-FEDRAMP-PL-NO-PLANNING-POLICY-001

**No Planning Policy**

## Signal Overview

| Field           | Value                                     |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-FEDRAMP-PL-NO-PLANNING-POLICY-001`   |
| Domain          | FEDRAMP                                   |
| Category        | PL                                        |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

Security and privacy planning policy and procedures are not developed, documented, and maintained.

This signal indicates that the organization may lack foundational documentation that establishes the approach for planning security and privacy controls for information systems.

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
PL-1: Security Planning Policy and Procedures

### Baseline
Low, Moderate, High

### NIST SP 800-53 Rev. 5
The organization:
- Develops, documents, and disseminates to [Assignment: organization-defined personnel or roles]:
  - [Selection (one or more): Organization-level; Mission/business process-level; System-level] planning policy that:
    - Addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance
    - Is consistent with applicable laws, executive orders, directives, regulations, policies, standards, and guidelines
  - Procedures to facilitate the implementation of the planning policy and the associated planning controls
- Designates an [Assignment: organization-defined official] to manage the development, documentation, and dissemination of the planning policy and procedures
- Reviews and updates the current planning:
  - Policy [FedRAMP Assignment: at least every 3 years] and following [Assignment: organization-defined events]
  - Procedures [FedRAMP Assignment: at least annually] and following [Assignment: organization-defined events]

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-FEDRAMP-PL-NO-SSP-002` — No System Security Plan

## Notes

Detection of this signal typically involves:

- Review of security planning policy documentation
- Analysis of policy scope, roles, and responsibilities
- Verification of policy dissemination to appropriate personnel
- Assessment of procedures for implementing planning controls
- Examination of policy review and update schedules
- Inspection of designated official assignment for policy management
- Review of policy consistency with federal requirements

The presence of this signal indicates a condition that warrants review in the context of FedRAMP planning requirements.
