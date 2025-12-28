# CSE-FEDRAMP-CM-NO-CONFIG-SETTINGS-006

**No Configuration Settings**

## Signal Overview

| Field           | Value                                        |
|-----------------|----------------------------------------------|
| Identifier      | `CSE-FEDRAMP-CM-NO-CONFIG-SETTINGS-006`     |
| Domain          | FEDRAMP                                      |
| Category        | CM                                           |
| Status          | Active                                       |
| Introduced In   | 1.0.0                                        |

## Description

No mandatory configuration settings have been established and implemented for information technology products employed within the information system using security configuration checklists.

## Applicability

This signal applies to:

- Cloud Service Providers (CSPs) seeking FedRAMP authorization
- Federal agencies operating cloud systems
- Third Party Assessment Organizations (3PAOs) conducting assessments
- Federal information systems processing government data

## FedRAMP Context (Informative)

**Control Family:** Configuration Management (CM)
**Control Number:** CM-6
**FedRAMP Baseline:** Low, Moderate, High

**NIST SP 800-53 Rev. 5 Text:** "The organization establishes and documents configuration settings for information technology products employed within the information system using [Assignment: organization-defined security configuration checklists] that reflect the most restrictive mode consistent with operational requirements; implements the configuration settings; identifies, documents, and approves any deviations from established configuration settings for [Assignment: organization-defined information system components] based on [Assignment: organization-defined operational requirements]; and monitors and controls changes to the configuration settings in accordance with organizational policies and procedures."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Review system hardening documentation, security baselines, and configuration management databases to verify that mandatory configuration settings are defined and enforced. Look for systems lacking security configuration checklists (such as CIS Benchmarks, DISA STIGs, or vendor hardening guides), absence of automated configuration compliance scanning, or missing documentation of approved configuration deviations. Check for systems using default configurations or lacking evidence of security hardening implementation.
