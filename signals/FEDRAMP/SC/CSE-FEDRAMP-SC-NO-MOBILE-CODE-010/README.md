# CSE-FEDRAMP-SC-NO-MOBILE-CODE-010

**No Mobile Code Controls**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SC-NO-MOBILE-CODE-010`      |
| Domain          | FEDRAMP                                  |
| Category        | SC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information system does not establish usage restrictions and implementation guidance for mobile code.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Communications Protection (SC)
**Control:** SC-18
**Baseline:** Moderate, High

**NIST 800-53 Text:** "Define acceptable and unacceptable mobile code and mobile code technologies; establish usage restrictions and implementation guidance for acceptable mobile code and mobile code technologies; and authorize, monitor, and control the use of mobile code within the system."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for absence of mobile code policies, no defined acceptable mobile code technologies list, missing usage restrictions for JavaScript, ActiveX, Flash, or similar technologies, lack of monitoring and control mechanisms for mobile code execution, no implementation guidance, and insufficient authorization processes for mobile code deployment.
