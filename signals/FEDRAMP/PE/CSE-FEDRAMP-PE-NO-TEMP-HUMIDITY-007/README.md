# CSE-FEDRAMP-PE-NO-TEMP-HUMIDITY-007

**No Temperature and Humidity Controls**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-PE-NO-TEMP-HUMIDITY-007` |
| Domain          | FEDRAMP                                  |
| Category        | PE                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Temperature and humidity controls are not maintained at acceptable levels within facilities containing information systems.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Physical and Environmental Protection (PE)
**Control:** PE-14
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Maintain consistent temperature and humidity levels within the facility where the system resides; and monitor temperature and humidity levels."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing HVAC systems, lack of temperature and humidity monitoring systems, absence of defined acceptable ranges for temperature/humidity, inadequate environmental monitoring logs, missing alerts for out-of-range conditions, and insufficient redundancy in environmental controls.
