# CSE-FEDRAMP-CM-NO-BASELINE-002

**No Baseline Configuration**

## Signal Overview

| Field           | Value                                   |
|-----------------|-----------------------------------------|
| Identifier      | `CSE-FEDRAMP-CM-NO-BASELINE-002`       |
| Domain          | FEDRAMP                                 |
| Category        | CM                                      |
| Status          | Active                                  |
| Introduced In   | 1.0.0                                   |

## Description

No baseline configuration has been developed, documented, or maintained for the information system, including hardware, software, firmware, and documentation.

## Applicability

This signal applies to:

- Cloud Service Providers (CSPs) seeking FedRAMP authorization
- Federal agencies operating cloud systems
- Third Party Assessment Organizations (3PAOs) conducting assessments
- Federal information systems processing government data

## FedRAMP Context (Informative)

**Control Family:** Configuration Management (CM)
**Control Number:** CM-2
**FedRAMP Baseline:** Low, Moderate, High

**NIST SP 800-53 Rev. 5 Text:** "The organization develops, documents, and maintains under configuration control, a current baseline configuration of the information system."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Examine system documentation, configuration management databases (CMDBs), and infrastructure-as-code repositories to verify existence of baseline configurations. Look for absence of documented baseline configurations, inconsistent configurations across similar systems, or lack of version-controlled configuration standards. Check for missing baseline documentation for servers, network devices, databases, applications, and cloud resources.
