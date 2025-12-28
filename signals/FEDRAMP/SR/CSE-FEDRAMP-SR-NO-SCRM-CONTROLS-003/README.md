# CSE-FEDRAMP-SR-NO-SCRM-CONTROLS-003

**No Supply Chain Controls and Processes**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SR-NO-SCRM-CONTROLS-003`   |
| Domain          | FEDRAMP                                  |
| Category        | SR                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Supply chain controls and processes are not established to ensure adequate security and integrity of products and services throughout the supply chain, including verification of security functions and critical components.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Federal information systems processing sensitive data

## FedRAMP Context (Informative)

**Control Family:** Supply Chain Risk Management (SR)
**Control:** SR-3
**Baseline:** Moderate, High

**NIST 800-53 Text:** "a. Establish a process or processes to identify and address weaknesses or deficiencies in the supply chain elements and processes of [Assignment: organization-defined system or system component] in coordination with [Assignment: organization-defined supply chain personnel]; b. Employ the following controls to protect against supply chain risks to the system, system component, or system service and to limit the harm or consequences from supply chain-related events: [Assignment: organization-defined supply chain controls]; and c. Document the selected and implemented supply chain processes and controls in [Selection: security and privacy plans; supply chain risk management plan; [Assignment: organization-defined document]]."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for absence of supply chain security processes, lack of supplier security assessments, missing verification procedures for products and services, absence of supply chain threat monitoring, and lack of documented controls to address supply chain weaknesses. Check for missing processes to identify and mitigate supply chain vulnerabilities, counterfeit components, and malicious insertions during development, manufacturing, or delivery.
