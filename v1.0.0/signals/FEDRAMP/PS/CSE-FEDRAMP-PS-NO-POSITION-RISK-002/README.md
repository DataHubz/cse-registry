# CSE-FEDRAMP-PS-NO-POSITION-RISK-002

**No Position Risk Designation**

## Signal Overview

| Field           | Value                                     |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-FEDRAMP-PS-NO-POSITION-RISK-002`     |
| Domain          | FEDRAMP                                   |
| Category        | PS                                        |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

The organization does not assign a risk designation to all organizational positions and establish screening criteria for individuals filling those positions.

This signal indicates that positions may not be categorized according to risk level, which is essential for determining appropriate personnel screening requirements and access levels.

## Applicability

This signal applies to:

- Cloud Service Providers (CSPs) pursuing FedRAMP authorization
- Federal agencies managing information systems
- Third Party Assessment Organizations (3PAOs) conducting assessments
- Federal information systems processing, storing, or transmitting federal data
- Organizations supporting federal cloud services

## FedRAMP Context (Informative)

### Control Family
Personnel Security (PS)

### Control
PS-2: Position Risk Designation

### Baseline
Low, Moderate, High

### NIST SP 800-53 Rev. 5
The organization:
- Assigns a risk designation to all organizational positions;
- Establishes screening criteria for individuals filling those positions; and
- Reviews and updates position risk designations [FedRAMP Assignment: at least every 3 years] and when there are significant changes to duties or access requirements.

Position risk designations reflect Office of Personnel Management (OPM) policy and guidance. Proper position risk designation is essential for determining the extent of background investigations and appropriate screening criteria. Risk designations can include positions categorized as low risk, moderate risk, high risk, or positions designated as national security positions.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-FEDRAMP-PS-NO-PERSONNEL-POLICY-001` — No Personnel Security Policy
- `CSE-FEDRAMP-PS-NO-SCREENING-003` — No Personnel Screening
- `CSE-FEDRAMP-AC-NO-ACCESS-ENFORCEMENT-002` — No Access Enforcement
- `CSE-FEDRAMP-AC-NO-LEAST-PRIVILEGE-006` — No Least Privilege

## Notes

Detection of this signal typically involves:

- Review of position risk designation documentation
- Analysis of risk categorization methodology and criteria
- Verification of screening criteria alignment with risk levels
- Assessment of position inventory completeness
- Examination of risk designation assignment records
- Inspection of periodic review schedules for designations
- Review of criteria for significant position changes
- Verification of OPM policy alignment
- Analysis of national security position identification

The presence of this signal indicates a condition that warrants review in the context of FedRAMP personnel security requirements. Position risk designations should be documented, current, and consistently applied across the organization.
