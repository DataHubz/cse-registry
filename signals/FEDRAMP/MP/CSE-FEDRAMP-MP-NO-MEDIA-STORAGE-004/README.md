# CSE-FEDRAMP-MP-NO-MEDIA-STORAGE-004

**No Media Storage**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-MP-NO-MEDIA-STORAGE-004` |
| Domain          | FEDRAMP                                  |
| Category        | MP                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Media storage controls are not implemented to physically control and securely store information system media.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Media Protection (MP)
**Control:** MP-4
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Physically control and securely store information system media... until the media are destroyed or sanitized using approved equipment, techniques, and procedures."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing physical storage controls for media, lack of secured storage areas for sensitive media, absence of environmental controls (temperature, humidity) for media storage, no inventory management for stored media, missing checkout/check-in procedures, and inadequate protection against unauthorized access to storage facilities.
