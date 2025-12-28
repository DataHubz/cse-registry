# CSE-FEDRAMP-SA-NO-ACQUISITION-PROCESS-004

**No Acquisition Process**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SA-NO-ACQUISITION-PROCESS-004` |
| Domain          | FEDRAMP                                  |
| Category        | SA                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Security and privacy functional requirements, strength requirements, assurance requirements, and security-related documentation requirements are not included in system acquisition contracts.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Services Acquisition (SA)
**Control:** SA-4
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Include the following requirements, descriptions, and criteria, explicitly or by reference, using [Assignment: organization-defined standardized contract language] in the acquisition contract for the system, system component, or system service: (1) Security and privacy functional requirements; (2) Strength of mechanism requirements; (3) Security and privacy assurance requirements; (4) Security-related documentation requirements; (5) Requirements for protecting security and privacy documentation; (6) Description of the system development environment and environment in which the system is intended to operate; and (7) Allocation of responsibility or identification of parties responsible for information security, privacy, and supply chain risk management."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for acquisition contracts lacking security requirements, missing privacy functional requirements, absence of security documentation clauses, inadequate security assurance criteria, missing strength of mechanism specifications, lack of supply chain risk management provisions, and incomplete responsibility allocation in contracts.
