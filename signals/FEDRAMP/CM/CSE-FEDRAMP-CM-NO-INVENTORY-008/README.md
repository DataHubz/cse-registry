# CSE-FEDRAMP-CM-NO-INVENTORY-008

**No System Component Inventory**

## Signal Overview

| Field           | Value                                   |
|-----------------|-----------------------------------------|
| Identifier      | `CSE-FEDRAMP-CM-NO-INVENTORY-008`      |
| Domain          | FEDRAMP                                 |
| Category        | CM                                      |
| Status          | Active                                  |
| Introduced In   | 1.0.0                                   |

## Description

No inventory of information system components has been developed, documented, or maintained that accurately reflects the current system.

## Applicability

This signal applies to:

- Cloud Service Providers (CSPs) seeking FedRAMP authorization
- Federal agencies operating cloud systems
- Third Party Assessment Organizations (3PAOs) conducting assessments
- Federal information systems processing government data

## FedRAMP Context (Informative)

**Control Family:** Configuration Management (CM)
**Control Number:** CM-8
**FedRAMP Baseline:** Low, Moderate, High

**NIST SP 800-53 Rev. 5 Text:** "The organization develops and documents an inventory of information system components that accurately reflects the current information system; includes all components within the authorization boundary of the information system; is at the level of granularity deemed necessary for tracking and reporting; includes [Assignment: organization-defined information deemed necessary to achieve effective information system component accountability]; and reviews and updates the information system component inventory [Assignment: organization-defined frequency]."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Review configuration management databases (CMDBs), asset management systems, and inventory documentation to verify comprehensive tracking of all system components. Look for missing inventory records, outdated inventory documentation, discrepancies between documented and actual systems, or lack of periodic inventory reviews. Check for untracked hardware devices, shadow IT systems, undocumented software installations, or cloud resources not included in the inventory. Verify that inventory includes sufficient detail for accountability such as owner, location, network addresses, and software versions.
