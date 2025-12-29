# CSE-FEDRAMP-CP-NO-CONTINGENCY-POLICY-001

**No Contingency Planning Policy**

## Signal Overview

| Field           | Value                                        |
|-----------------|----------------------------------------------|
| Identifier      | `CSE-FEDRAMP-CP-NO-CONTINGENCY-POLICY-001`   |
| Domain          | FEDRAMP                                      |
| Category        | CP                                           |
| Status          | Active                                       |
| Introduced In   | 1.0.0                                        |

## Description

The organization does not have a documented contingency planning policy or procedures that address purpose, scope, roles, responsibilities, management commitment, coordination, and compliance.

This signal indicates that the organization may lack formalized guidance for developing, documenting, and implementing contingency plans to ensure the availability of critical information systems.

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
CP-1: Contingency Planning Policy and Procedures

### Baseline
Low, Moderate, High

### NIST SP 800-53 Rev. 5
The organization develops, documents, and disseminates to [Assignment: organization-defined personnel or roles]:
- A contingency planning policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance
- Procedures to facilitate the implementation of the contingency planning policy and associated contingency planning controls

Reviews and updates the current:
- Contingency planning policy [Assignment: organization-defined frequency]
- Contingency planning procedures [Assignment: organization-defined frequency]

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-FEDRAMP-CP-NO-CONTINGENCY-PLAN-002` — No Contingency Plan
- `CSE-FEDRAMP-CP-NO-CONTINGENCY-TRAINING-003` — No Contingency Training

## Notes

Detection of this signal typically involves:

- Review of organizational policy documentation
- Analysis of contingency planning procedures
- Verification of policy approval and dissemination records
- Assessment of policy review and update schedules
- Examination of roles and responsibilities assignments
- Inspection of compliance and coordination mechanisms

The presence of this signal indicates a condition that warrants review in the context of FedRAMP contingency planning requirements.
