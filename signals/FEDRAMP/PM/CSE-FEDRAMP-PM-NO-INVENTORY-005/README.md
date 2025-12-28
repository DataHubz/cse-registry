# CSE-FEDRAMP-PM-NO-INVENTORY-005

**No System Inventory**

## Signal Overview

| Field           | Value                                          |
|-----------------|------------------------------------------------|
| Identifier      | `CSE-FEDRAMP-PM-NO-INVENTORY-005`              |
| Domain          | FEDRAMP                                        |
| Category        | PM                                             |
| Status          | Active                                         |
| Introduced In   | 1.0.0                                          |

## Description

Organization-wide inventory of information systems is not developed, documented, or maintained.

This signal indicates that the organization may lack a comprehensive, authoritative inventory of all organizational information systems, which is essential for effective security program management, resource allocation, and risk oversight.

## Applicability

This signal applies to:

- Cloud Service Providers (CSPs) pursuing FedRAMP authorization
- Federal agencies managing information systems
- Third Party Assessment Organizations (3PAOs) conducting assessments
- Federal information systems processing, storing, or transmitting federal data
- Organizations supporting federal cloud services

## FedRAMP Context (Informative)

### Control Family
Program Management (PM)

### Control
PM-5: System Inventory

### Baseline
Low, Moderate, High

### NIST SP 800-53 Rev. 5
The organization:
- Develops and maintains an inventory of its information systems
- Updates the inventory of information systems [FedRAMP Assignment: at least annually or when a significant change occurs]
- Includes in the information system inventory:
  - Information system name
  - Information system owner
  - Authorizing official
  - Date of authorization
  - Other [Assignment: organization-defined information]
- Includes systems that are in development, in production, or that have been retired

These references are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Review of organization-wide system inventory documentation
- Analysis of inventory completeness and accuracy
- Verification of required inventory attributes (name, owner, authorizing official, authorization date)
- Assessment of inventory update frequency and change management integration
- Examination of inventory coverage across all system lifecycle stages (development, production, retired)
- Review of inventory management processes and responsibilities
- Verification of inventory accessibility to appropriate stakeholders
- Assessment of inventory integration with asset management systems
- Evaluation of inventory use in security program planning and oversight
- Review of inventory validation and reconciliation processes
- Verification of additional organization-defined information elements
- Assessment of inventory alignment with FISMA reporting requirements

The presence of this signal indicates a condition that warrants review in the context of FedRAMP program management requirements.
