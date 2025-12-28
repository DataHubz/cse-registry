# CSE-FEDRAMP-PS-NO-SCREENING-003

**No Personnel Screening**

## Signal Overview

| Field           | Value                                     |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-FEDRAMP-PS-NO-SCREENING-003`         |
| Domain          | FEDRAMP                                   |
| Category        | PS                                        |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

The organization does not screen individuals prior to authorizing access to the information system and does not rescreen individuals according to organizationally-defined conditions requiring rescreening.

This signal indicates that personnel may be granted access to federal information systems without proper background investigations or security clearances appropriate to their position risk designation.

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
PS-3: Personnel Screening

### Baseline
Low, Moderate, High

### NIST SP 800-53 Rev. 5
The organization:
- Screens individuals prior to authorizing access to the system; and
- Rescreens individuals in accordance with [FedRAMP Assignment: for national security clearances; a reinvestigation is required during the 5th year for top secret security clearance, the 10th year for secret security clearance, and 15th year for confidential security clearance. For moderate risk law enforcement and high impact public trust level, a reinvestigation is required during the 5th year. There is no reinvestigation for other moderate risk positions or any low risk positions].

Personnel screening includes background investigations, biographic checks, fingerprinting, and reference checks. Organizations may determine that rescreening is necessary based on changing security requirements, new threat information, or when individuals undergo significant changes in duties or responsibilities. Personnel screening is commensurate with the risk designation of assigned positions.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-FEDRAMP-PS-NO-PERSONNEL-POLICY-001` — No Personnel Security Policy
- `CSE-FEDRAMP-PS-NO-POSITION-RISK-002` — No Position Risk Designation
- `CSE-FEDRAMP-AC-NO-ACCOUNT-MANAGEMENT-002` — No Account Management
- `CSE-FEDRAMP-IA-NO-USER-IDENTIFICATION-001` — No User Identification

## Notes

Detection of this signal typically involves:

- Review of personnel screening documentation and records
- Analysis of background investigation completion status
- Verification of screening criteria alignment with position risk
- Assessment of screening timelines and access authorization
- Examination of rescreening schedules and compliance
- Inspection of clearance levels and investigation types
- Review of fingerprinting and biographic check records
- Verification of reference check completion
- Analysis of screening gaps or exceptions
- Examination of contractor and third-party screening requirements

The presence of this signal indicates a condition that warrants review in the context of FedRAMP personnel security requirements. Personnel screening should be completed prior to access authorization and maintained through periodic rescreening.
