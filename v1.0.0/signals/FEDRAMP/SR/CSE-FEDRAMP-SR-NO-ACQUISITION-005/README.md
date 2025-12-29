# CSE-FEDRAMP-SR-NO-ACQUISITION-005

**No Acquisition Strategies and Tools**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SR-NO-ACQUISITION-005`     |
| Domain          | FEDRAMP                                  |
| Category        | SR                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

The organization does not employ acquisition strategies, contract tools, and procurement methods to protect against supply chain risks, including requirements for suppliers to implement security controls, testing, and validation procedures.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Federal information systems processing sensitive data

## FedRAMP Context (Informative)

**Control Family:** Supply Chain Risk Management (SR)
**Control:** SR-5
**Baseline:** Moderate, High

**NIST 800-53 Text:** "Employ the following acquisition strategies, contract tools, and procurement methods to protect against supply chain risks: [Assignment: organization-defined acquisition strategies, contract tools, and procurement methods]; and b. Include the following controls and processes in acquisition contracts based on an assessment of supply chain risk: [Assignment: organization-defined controls and processes]."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing security requirements in acquisition contracts and RFPs, absence of supplier security assessment criteria in procurement processes, lack of security testing and validation requirements for acquired products/services, missing contractual clauses for supply chain security, and absence of procurement strategies that address supply chain risks. Check for missing requirements for suppliers to maintain security standards, provide SBOMs, allow security assessments, implement secure development practices, and demonstrate compliance with relevant security frameworks. Verify that contracts include provisions for incident notification, vulnerability disclosure, and ongoing security monitoring.
