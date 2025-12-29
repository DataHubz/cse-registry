# CSE-FEDRAMP-CP-NO-CONTINGENCY-TRAINING-003

**No Contingency Training**

## Signal Overview

| Field           | Value                                        |
|-----------------|----------------------------------------------|
| Identifier      | `CSE-FEDRAMP-CP-NO-CONTINGENCY-TRAINING-003` |
| Domain          | FEDRAMP                                      |
| Category        | CP                                           |
| Status          | Active                                       |
| Introduced In   | 1.0.0                                        |

## Description

The organization does not provide contingency plan training to information system users consistent with assigned roles and responsibilities within required timeframes.

This signal indicates that personnel may not be adequately prepared to execute contingency procedures during disruptions or emergencies.

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
CP-3: Contingency Training

### Baseline
Low, Moderate, High

### NIST SP 800-53 Rev. 5
The organization provides contingency training to information system users consistent with assigned roles and responsibilities:
- Within [FedRAMP Assignment: ten (10) days] of assuming a contingency role or responsibility
- When required by information system changes
- [FedRAMP Assignment: at least annually] thereafter

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-FEDRAMP-CP-NO-CONTINGENCY-PLAN-002` — No Contingency Plan
- `CSE-FEDRAMP-CP-NO-CONTINGENCY-TESTING-004` — No Contingency Plan Testing
- `CSE-FEDRAMP-AT-NO-ROLE-TRAINING-003` — No Role-Based Training

## Notes

Detection of this signal typically involves:

- Review of training program documentation
- Analysis of training schedules and completion records
- Verification of role-based training assignments
- Assessment of training frequency and timeliness
- Examination of training content coverage
- Inspection of training effectiveness measurements
- Review of training updates based on system changes

The presence of this signal indicates a condition that warrants review in the context of FedRAMP contingency planning requirements.
