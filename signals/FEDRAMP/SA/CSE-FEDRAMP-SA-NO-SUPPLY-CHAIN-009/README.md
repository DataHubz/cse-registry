# CSE-FEDRAMP-SA-NO-SUPPLY-CHAIN-009

**No Supply Chain Protection**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SA-NO-SUPPLY-CHAIN-009` |
| Domain          | FEDRAMP                                  |
| Category        | SA                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Supply chain risks are not protected against through acquisition processes, including identification and documentation of supply chain threats and implementing appropriate safeguards.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Services Acquisition (SA)
**Control:** SA-12
**Baseline:** Moderate, High

**NIST 800-53 Text:** "Protect against supply chain threats to the system, system component, or system service by employing the following controls [Assignment: organization-defined controls] as part of a comprehensive, defense-in-breadth information security and cybersecurity strategy."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing supply chain risk assessments, absence of supplier security requirements, lack of provenance tracking, inadequate component authenticity verification, missing supply chain threat identification, absence of vendor vetting processes, unmonitored supply chain dependencies, and lack of counterfeit component detection mechanisms.
