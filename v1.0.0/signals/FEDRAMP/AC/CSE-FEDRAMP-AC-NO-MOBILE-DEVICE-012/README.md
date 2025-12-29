# CSE-FEDRAMP-AC-NO-MOBILE-DEVICE-012

**No Mobile Device Access Control**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-AC-NO-MOBILE-DEVICE-012` |
| Domain          | FEDRAMP                                  |
| Category        | AC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Mobile device access controls are not established and enforced, including connection requirements, configuration standards, and usage restrictions.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Access Control (AC)
**Control:** AC-19
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Establish usage restrictions, configuration requirements, connection requirements, and implementation guidance for organization-controlled mobile devices; authorize the connection of mobile devices to organizational systems."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing mobile device management (MDM) policies, lack of mobile device authorization procedures, absence of mobile device encryption requirements, no mobile device configuration standards, missing containerization or separation controls, and lack of remote wipe capabilities.
