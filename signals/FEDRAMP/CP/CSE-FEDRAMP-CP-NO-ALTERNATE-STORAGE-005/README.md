# CSE-FEDRAMP-CP-NO-ALTERNATE-STORAGE-005

**No Alternate Storage Site**

## Signal Overview

| Field           | Value                                        |
|-----------------|----------------------------------------------|
| Identifier      | `CSE-FEDRAMP-CP-NO-ALTERNATE-STORAGE-005`    |
| Domain          | FEDRAMP                                      |
| Category        | CP                                           |
| Status          | Active                                       |
| Introduced In   | 1.0.0                                        |

## Description

The organization does not establish an alternate storage site with necessary agreements to permit the storage and recovery of information system backup information.

This signal indicates that the organization may not have geographically separated storage capabilities to ensure information availability during primary site disruptions.

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
CP-6: Alternate Storage Site

### Baseline
Low, Moderate, High

### NIST SP 800-53 Rev. 5
The organization:
- Establishes an alternate storage site including necessary agreements to permit the storage and recovery of information system backup information
- Ensures that the alternate storage site provides information security measures equivalent to that of the primary site

Enhancement (CP-6(1) - Moderate, High): The alternate storage site is separated from the primary storage site to reduce susceptibility to the same threats.

Enhancement (CP-6(3) - Moderate, High): The organization identifies potential accessibility problems to the alternate storage site in the event of an area-wide disruption or disaster and outlines explicit mitigation actions.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-FEDRAMP-CP-NO-ALTERNATE-PROCESSING-006` — No Alternate Processing Site
- `CSE-FEDRAMP-CP-NO-BACKUP-007` — No System Backup

## Notes

Detection of this signal typically involves:

- Review of alternate storage site agreements
- Analysis of geographic separation and accessibility
- Verification of security measures equivalence
- Assessment of storage capacity and capabilities
- Examination of data transfer and recovery procedures
- Inspection of site availability and redundancy
- Review of disaster scenario planning
- Analysis of mitigation strategies for accessibility issues

The presence of this signal indicates a condition that warrants review in the context of FedRAMP contingency planning requirements.
