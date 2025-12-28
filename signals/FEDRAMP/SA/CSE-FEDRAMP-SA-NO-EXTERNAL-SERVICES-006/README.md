# CSE-FEDRAMP-SA-NO-EXTERNAL-SERVICES-006

**No External System Services**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SA-NO-EXTERNAL-SERVICES-006` |
| Domain          | FEDRAMP                                  |
| Category        | SA                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

External system services are not identified, defined, documented, and controlled in accordance with organizational requirements.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Services Acquisition (SA)
**Control:** SA-9
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Require that providers of external system services comply with organizational security and privacy requirements and employ the following controls: [Assignment: organization-defined controls]; define and document organizational oversight and user roles and responsibilities with regard to external system services; and employ the following processes, methods, and techniques to monitor control compliance by external service providers on an ongoing basis: [Assignment: organization-defined processes, methods, and techniques]."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for undocumented external service dependencies, missing service provider agreements, absence of security requirements for external services, lack of provider oversight mechanisms, missing monitoring processes for third-party services, inadequate control compliance verification, and absence of roles and responsibilities for external service management.
