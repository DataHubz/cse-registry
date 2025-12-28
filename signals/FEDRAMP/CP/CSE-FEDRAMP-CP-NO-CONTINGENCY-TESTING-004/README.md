# CSE-FEDRAMP-CP-NO-CONTINGENCY-TESTING-004

**No Contingency Plan Testing**

## Signal Overview

| Field           | Value                                        |
|-----------------|----------------------------------------------|
| Identifier      | `CSE-FEDRAMP-CP-NO-CONTINGENCY-TESTING-004`  |
| Domain          | FEDRAMP                                      |
| Category        | CP                                           |
| Status          | Active                                       |
| Introduced In   | 1.0.0                                        |

## Description

The organization does not test the contingency plan for the information system at required frequencies using defined tests to determine effectiveness and organizational readiness.

This signal indicates that the organization may not have validated its ability to execute contingency procedures or may not have identified plan deficiencies.

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
CP-4: Contingency Plan Testing

### Baseline
Low, Moderate, High

### NIST SP 800-53 Rev. 5
The organization:
- Tests the contingency plan for the information system [FedRAMP Assignment: at least annually] using [FedRAMP Assignment: functional exercises] to determine the effectiveness of the plan and the organizational readiness to execute the plan
- Reviews the contingency plan test results
- Initiates corrective actions, if needed

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-FEDRAMP-CP-NO-CONTINGENCY-PLAN-002` — No Contingency Plan
- `CSE-FEDRAMP-CP-NO-CONTINGENCY-TRAINING-003` — No Contingency Training

## Notes

Detection of this signal typically involves:

- Review of contingency plan testing documentation
- Analysis of test schedules and execution records
- Verification of test methodologies and scenarios
- Assessment of test results and findings
- Examination of corrective action tracking
- Inspection of plan updates based on test results
- Review of organizational readiness assessments
- Analysis of test frequency compliance

The presence of this signal indicates a condition that warrants review in the context of FedRAMP contingency planning requirements.
