# CSE-FEDRAMP-AC-NO-WIRELESS-ACCESS-011

**No Wireless Access Controls**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-AC-NO-WIRELESS-ACCESS-011` |
| Domain          | FEDRAMP                                  |
| Category        | AC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Wireless access controls are not established and enforced, including authorization, monitoring, and encryption requirements for wireless connections.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Access Control (AC)
**Control:** AC-18
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Establish usage restrictions, configuration requirements, connection requirements, and implementation guidance for wireless access; authorize wireless access to the system prior to allowing such connections."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing wireless access policies, unauthorized wireless access points, lack of wireless encryption (WPA2/WPA3), absence of wireless network monitoring, no wireless access authorization procedures, and missing wireless intrusion detection systems.
