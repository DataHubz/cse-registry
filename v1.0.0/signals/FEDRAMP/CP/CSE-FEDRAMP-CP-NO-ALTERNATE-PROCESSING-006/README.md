# CSE-FEDRAMP-CP-NO-ALTERNATE-PROCESSING-006

**No Alternate Processing Site**

## Signal Overview

| Field           | Value                                          |
|-----------------|------------------------------------------------|
| Identifier      | `CSE-FEDRAMP-CP-NO-ALTERNATE-PROCESSING-006`   |
| Domain          | FEDRAMP                                        |
| Category        | CP                                             |
| Status          | Active                                         |
| Introduced In   | 1.0.0                                          |

## Description

The organization does not establish an alternate processing site with necessary agreements to permit transfer and resumption of information system operations for essential missions and business functions.

This signal indicates that the organization may not have capabilities to continue operations if the primary processing site becomes unavailable.

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
CP-7: Alternate Processing Site

### Baseline
Moderate, High

### NIST SP 800-53 Rev. 5
The organization:
- Establishes an alternate processing site including necessary agreements to permit the transfer and resumption of [Assignment: organization-defined information system operations] for essential missions/business functions within [FedRAMP Assignment: see additional FedRAMP requirements] when the primary processing capabilities are unavailable
- Ensures that equipment and supplies required to transfer and resume operations are available at the alternate processing site or contracts are in place to support delivery to the site within the organization-defined time period for transfer/resumption
- Ensures that the alternate processing site provides information security measures equivalent to those of the primary site

Enhancement (CP-7(1) - Moderate, High): The alternate processing site is separated from the primary processing site to reduce susceptibility to the same threats.

Enhancement (CP-7(2) - Moderate, High): The alternate processing site is configured to provide the necessary security capabilities to support essential missions and business functions.

Enhancement (CP-7(3) - Moderate, High): The organization identifies potential accessibility problems to the alternate processing site in the event of an area-wide disruption or disaster and outlines explicit mitigation actions.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-FEDRAMP-CP-NO-ALTERNATE-STORAGE-005` — No Alternate Storage Site
- `CSE-FEDRAMP-CP-NO-CONTINGENCY-PLAN-002` — No Contingency Plan

## Notes

Detection of this signal typically involves:

- Review of alternate processing site agreements
- Analysis of geographic separation and threat susceptibility
- Verification of transfer and resumption capabilities
- Assessment of equipment, supplies, and resource availability
- Examination of security measures equivalence
- Inspection of recovery time objectives (RTO) compliance
- Review of accessibility and disaster scenario planning
- Analysis of mitigation strategies for potential disruptions

The presence of this signal indicates a condition that warrants review in the context of FedRAMP contingency planning requirements.
