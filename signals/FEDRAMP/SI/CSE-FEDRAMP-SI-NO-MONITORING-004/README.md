# CSE-FEDRAMP-SI-NO-MONITORING-004

**No System Monitoring**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SI-NO-MONITORING-004`      |
| Domain          | FEDRAMP                                  |
| Category        | SI                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

System monitoring capabilities to detect attacks and indicators of potential attacks are not implemented.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Information Integrity (SI)
**Control:** SI-4
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Monitor the system to detect attacks and indicators of potential attacks; identify unauthorized use of the system; and deploy monitoring devices strategically."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing intrusion detection systems (IDS), absent security information and event management (SIEM) tools, lack of network monitoring capabilities, and no monitoring device deployment strategy.
